/**
 * Abhy Global - Lightweight i18n Module
 * Handles multilingual content with fallback and exception handling
 */
(function(global) {
    'use strict';

    const I18N = {
        supportedLangs: ['en', 'hi', 'es', 'ar', 'fr', 'de', 'zh', 'pt'],
        fallbackLang: 'en',
        currentLang: 'en',
        translations: {},
        basePath: null,
        _basePathComputed: false,
        storageKey: 'abhyglobal_lang',

        /**
         * Get base path for loading JSON (handles GitHub Pages subpath e.g. /AbhyGlobal)
         */
        getBasePath: function() {
            if (this._basePathComputed) return this.basePath || '';
            const path = window.location.pathname;
            const base = document.querySelector('base')?.getAttribute('href');
            if (base) {
                try {
                    const u = new URL(base, window.location.origin);
                    this.basePath = u.pathname.replace(/\/$/, '') || '';
                    return this.basePath;
                } catch (e) { /* ignore */ }
            }
            const segs = path.split('/').filter(Boolean);
            if (segs.length > 0 && !/\.(html?|php|asp)$/i.test(segs[0])) {
                this.basePath = '/' + segs[0];
            } else {
                this.basePath = '';
            }
            this._basePathComputed = true;
            return this.basePath || '';
        },

        /**
         * Get current language from URL, localStorage, or default
         */
        detectLanguage: function() {
            try {
                const urlParams = new URLSearchParams(window.location.search);
                const urlLang = urlParams.get('lang');
                if (urlLang && this.supportedLangs.includes(urlLang)) {
                    return urlLang;
                }
                const stored = localStorage.getItem(this.storageKey);
                if (stored && this.supportedLangs.includes(stored)) {
                    return stored;
                }
            } catch (e) {
                console.warn('i18n: Error reading language preference', e);
            }
            return this.fallbackLang;
        },

        /**
         * Load translation JSON file
         */
        loadTranslation: async function(lang, namespace) {
            const base = this.getBasePath();
            const path = (base ? base + '/' : '') + 'i18n/locales/' + lang + '/' + namespace + '.json';
            try {
                const response = await fetch(path);
                if (!response.ok) throw new Error(`HTTP ${response.status}`);
                const data = await response.json();
                return data;
            } catch (e) {
                console.warn(`i18n: Failed to load ${lang}/${namespace}`, e);
                return null;
            }
        },

        /**
         * Get nested value from object by dot notation (e.g. "nav.home")
         */
        getNestedValue: function(obj, key) {
            if (!obj || !key) return null;
            const parts = key.split('.');
            let current = obj;
            for (const part of parts) {
                if (current === null || current === undefined) return null;
                current = current[part];
            }
            return current;
        },

        /**
         * Translate a key - returns translation or fallback
         */
        t: function(key, options) {
            const ns = (options && options.ns) || 'common';
            const lang = (options && options.lang) || this.currentLang;
            const fallback = (options && options.fallback) !== undefined ? options.fallback : key;

            let value = this.getNestedValue(this.translations[lang], `${ns}.${key}`);
            if (value != null && value !== '') return value;

            if (lang !== this.fallbackLang) {
                value = this.getNestedValue(this.translations[this.fallbackLang], `${ns}.${key}`);
                if (value != null && value !== '') return value;
            }

            return fallback;
        },

        /**
         * Apply translations to DOM elements with data-i18n
         */
        applyToDOM: function() {
            const elements = document.querySelectorAll('[data-i18n]');
            elements.forEach(el => {
                try {
                    const key = el.getAttribute('data-i18n');
                    const ns = el.getAttribute('data-i18n-ns') || this.getNamespaceForPage();
                    const value = this.t(key, { ns });
                    if (value && value !== key && el.textContent !== undefined) {
                        el.textContent = value;
                    }
                } catch (e) {
                    console.warn('i18n: Error applying translation to element', el, e);
                }
            });

            document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
                try {
                    const key = el.getAttribute('data-i18n-placeholder');
                    const ns = el.getAttribute('data-i18n-ns') || 'common';
                    const value = this.t(key, { ns });
                    if (value && value !== key && el.placeholder !== undefined) {
                        el.placeholder = value;
                    }
                } catch (e) {
                    console.warn('i18n: Error applying placeholder', el, e);
                }
            });

            document.querySelectorAll('[data-i18n-attr]').forEach(el => {
                try {
                    const attrSpec = el.getAttribute('data-i18n-attr');
                    const [attr, key] = attrSpec.split(':');
                    const ns = el.getAttribute('data-i18n-ns') || 'common';
                    const value = this.t(key, { ns });
                    if (value && attr) {
                        el.setAttribute(attr, value);
                    }
                } catch (e) {
                    console.warn('i18n: Error applying attribute', el, e);
                }
            });
        },

        /**
         * Get namespace based on current page
         */
        getNamespaceForPage: function() {
            const path = window.location.pathname;
            if (path.includes('catalog')) return 'catalog';
            if (path.includes('services')) return 'services';
            return 'index';
        },

        /**
         * Update page lang and dir attributes
         */
        updateDocumentAttributes: function() {
            try {
                const rtlLangs = ['ar'];
                document.documentElement.lang = this.currentLang;
                document.documentElement.dir = rtlLangs.includes(this.currentLang) ? 'rtl' : 'ltr';
            } catch (e) {
                console.warn('i18n: Error updating document attributes', e);
            }
        },

        /**
         * Update URL with lang param
         */
        updateURL: function(lang) {
            try {
                const url = new URL(window.location.href);
                url.searchParams.set('lang', lang);
                window.history.replaceState({}, '', url);

                localStorage.setItem(this.storageKey, lang);
            } catch (e) {
                console.warn('i18n: Error updating URL', e);
            }
        },

        /**
         * Initialize and load translations
         */
        init: async function() {
            try {
                this.currentLang = this.detectLanguage();
                this.updateDocumentAttributes();

                const namespaces = ['common', this.getNamespaceForPage()];
                const uniqueNs = [...new Set(namespaces)];

                for (const ns of uniqueNs) {
                    const data = await this.loadTranslation(this.currentLang, ns);
                    if (data) {
                        if (!this.translations[this.currentLang]) {
                            this.translations[this.currentLang] = {};
                        }
                        this.translations[this.currentLang][ns] = data;
                    }
                    if (this.currentLang !== this.fallbackLang) {
                        const fallbackData = await this.loadTranslation(this.fallbackLang, ns);
                        if (fallbackData) {
                            if (!this.translations[this.fallbackLang]) {
                                this.translations[this.fallbackLang] = {};
                            }
                            this.translations[this.fallbackLang][ns] = fallbackData;
                        }
                    }
                }

                this.applyToDOM();
                this.updateLanguageSwitcher();
                return true;
            } catch (e) {
                console.error('i18n: Initialization failed', e);
                return false;
            }
        },

        /**
         * Switch language
         */
        setLanguage: async function(lang) {
            if (!this.supportedLangs.includes(lang)) return false;
            this.currentLang = lang;
            this.updateDocumentAttributes();
            this.updateURL(lang);

            const namespaces = ['common', this.getNamespaceForPage()];
            for (const ns of namespaces) {
                const data = await this.loadTranslation(lang, ns);
                if (data) {
                    if (!this.translations[lang]) this.translations[lang] = {};
                    this.translations[lang][ns] = data;
                }
            }

            this.applyToDOM();
            this.updateLanguageSwitcher();
            return true;
        },

        /**
         * Update language switcher UI (dropdown)
         */
        updateLanguageSwitcher: function() {
            const select = document.getElementById('lang-select');
            if (!select) return;
            select.value = this.supportedLangs.includes(this.currentLang) ? this.currentLang : this.fallbackLang;
        }
    };

    global.AbhyI18n = I18N;
})(typeof window !== 'undefined' ? window : this);
