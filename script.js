/**
 * Abhy Global Website - Interactive JavaScript
 * Handles navigation, mobile menu, smooth scrolling, and form interactions
 */

(function() {
    'use strict';

    // ============================================
    // MOBILE MENU TOGGLE
    // ============================================
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
    const navLinks = document.querySelectorAll('.nav-link');

    // Show mobile menu
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu');
            document.body.style.overflow = 'hidden'; // Prevent body scroll
        });
    }

    // Hide mobile menu
    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
            document.body.style.overflow = ''; // Restore body scroll
        });
    }

    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
            document.body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('show-menu')) {
            if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
                navMenu.classList.remove('show-menu');
                document.body.style.overflow = '';
            }
        }
    });

    // ============================================
    // HEADER SCROLL EFFECT
    // ============================================
    const header = document.getElementById('header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        }

        lastScroll = currentScroll;
    });

    // ============================================
    // ACTIVE NAVIGATION LINK ON SCROLL
    // ============================================
    const sections = document.querySelectorAll('section[id]');

    function scrollActive() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink?.classList.add('active');
            } else {
                navLink?.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', scrollActive);

    // ============================================
    // SMOOTH SCROLLING FOR ANCHOR LINKS
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') {
                return;
            }

            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                const headerOffset = 70;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============================================
    // EMAILJS CONFIGURATION
    // ============================================
    // IMPORTANT: Replace these with your EmailJS credentials
    // Get these from: https://dashboard.emailjs.com/admin/integration
    const EMAILJS_CONFIG = {
        PUBLIC_KEY: 'YOUR_PUBLIC_KEY', // Replace with your EmailJS Public Key
        SERVICE_ID: 'YOUR_SERVICE_ID', // Replace with your EmailJS Service ID
        TEMPLATE_ID: 'YOUR_TEMPLATE_ID' // Replace with your EmailJS Template ID
    };

    // Initialize EmailJS
    if (typeof emailjs !== 'undefined' && EMAILJS_CONFIG.PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
        emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    }

    // ============================================
    // CONTACT FORM HANDLING
    // ============================================
    const contactForm = document.getElementById('contact-form');
    const partnerButton = document.getElementById('partner-btn');
    const submitButton = document.getElementById('submit-btn');

    // ============================================
    // FORM VALIDATION
    // ============================================
    
    // Validation rules
    const validationRules = {
        name: {
            required: true,
            minLength: 2,
            maxLength: 100,
            pattern: /^[a-zA-Z\s'-]+$/,
            message: {
                required: 'Full name is required',
                minLength: 'Name must be at least 2 characters',
                maxLength: 'Name must not exceed 100 characters',
                pattern: 'Name can only contain letters, spaces, hyphens, and apostrophes'
            }
        },
        email: {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: {
                required: 'Email address is required',
                pattern: 'Please enter a valid email address'
            }
        },
        phone: {
            required: false,
            pattern: /^[\d\s\-\+\(\)]+$/,
            minLength: 10,
            maxLength: 20,
            message: {
                pattern: 'Please enter a valid phone number',
                minLength: 'Phone number must be at least 10 digits',
                maxLength: 'Phone number must not exceed 20 characters'
            }
        },
        company: {
            required: false,
            maxLength: 100,
            message: {
                maxLength: 'Company name must not exceed 100 characters'
            }
        },
        message: {
            required: true,
            minLength: 10,
            maxLength: 2000,
            message: {
                required: 'Message is required',
                minLength: 'Message must be at least 10 characters',
                maxLength: 'Message must not exceed 2000 characters'
            }
        }
    };

    // Validate individual field
    function validateField(fieldName, value) {
        const rules = validationRules[fieldName];
        if (!rules) return { isValid: true, error: '' };

        // Check required
        if (rules.required && (!value || value.trim().length === 0)) {
            return { isValid: false, error: rules.message.required };
        }

        // Skip other validations if field is empty and not required
        if (!value || value.trim().length === 0) {
            return { isValid: true, error: '' };
        }

        // Check minLength
        if (rules.minLength && value.trim().length < rules.minLength) {
            return { isValid: false, error: rules.message.minLength };
        }

        // Check maxLength
        if (rules.maxLength && value.trim().length > rules.maxLength) {
            return { isValid: false, error: rules.message.maxLength };
        }

        // Check pattern
        if (rules.pattern && !rules.pattern.test(value)) {
            return { isValid: false, error: rules.message.pattern };
        }

        return { isValid: true, error: '' };
    }

    // Display field error
    function showFieldError(fieldName, errorMessage) {
        const field = document.getElementById(fieldName);
        const errorElement = document.getElementById(`${fieldName}-error`);
        
        if (field && errorElement) {
            field.classList.remove('valid');
            field.classList.add('error');
            errorElement.textContent = errorMessage;
            errorElement.setAttribute('aria-live', 'polite');
        }
    }

    // Clear field error
    function clearFieldError(fieldName) {
        const field = document.getElementById(fieldName);
        const errorElement = document.getElementById(`${fieldName}-error`);
        
        if (field && errorElement) {
            field.classList.remove('error', 'valid');
            errorElement.textContent = '';
        }
    }

    // Show field as valid
    function showFieldValid(fieldName) {
        const field = document.getElementById(fieldName);
        const errorElement = document.getElementById(`${fieldName}-error`);
        
        if (field && errorElement) {
            field.classList.remove('error');
            field.classList.add('valid');
            errorElement.textContent = '';
        }
    }

    // Real-time validation on input
    function setupRealTimeValidation() {
        Object.keys(validationRules).forEach(fieldName => {
            const field = document.getElementById(fieldName);
            if (field) {
                // Validate on blur (when user leaves field)
                field.addEventListener('blur', function() {
                    const value = this.value.trim();
                    const validation = validateField(fieldName, value);
                    
                    if (validation.isValid) {
                        showFieldValid(fieldName);
                    } else {
                        showFieldError(fieldName, validation.error);
                    }
                });

                // Clear errors on input (optional - provides better UX)
                field.addEventListener('input', function() {
                    if (this.classList.contains('error')) {
                        const value = this.value.trim();
                        const validation = validateField(fieldName, value);
                        if (validation.isValid) {
                            showFieldValid(fieldName);
                        }
                    }
                });
            }
        });
    }

    // Validate entire form
    function validateForm() {
        let isValid = true;
        const formData = {};

        Object.keys(validationRules).forEach(fieldName => {
            const field = document.getElementById(fieldName);
            if (field) {
                const value = field.value.trim();
                formData[fieldName] = value;
                const validation = validateField(fieldName, value);

                if (validation.isValid) {
                    showFieldValid(fieldName);
                } else {
                    showFieldError(fieldName, validation.error);
                    isValid = false;
                }
            }
        });

        return { isValid, formData };
    }

    // ============================================
    // FORM SUBMISSION WITH EMAILJS
    // ============================================
    
    if (contactForm) {
        // Setup real-time validation
        setupRealTimeValidation();

        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            // Validate form
            const validation = validateForm();
            if (!validation.isValid) {
                // Scroll to first error
                const firstError = contactForm.querySelector('.error');
                if (firstError) {
                    firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    firstError.focus();
                }
                showNotification('Please correct the errors in the form', 'error');
                return;
            }

            // Check if EmailJS is configured
            if (EMAILJS_CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY' || 
                EMAILJS_CONFIG.SERVICE_ID === 'YOUR_SERVICE_ID' || 
                EMAILJS_CONFIG.TEMPLATE_ID === 'YOUR_TEMPLATE_ID') {
                console.error('EmailJS not configured. Please set up EmailJS credentials.');
                showNotification('Form submission is not configured. Please contact the website administrator.', 'error');
                return;
            }

            // Disable form and show loading state
            setFormLoading(true);

            try {
                // Prepare template parameters for EmailJS
                // Map form fields to EmailJS template variables
                const templateParams = {
                    from_name: validation.formData.name,
                    from_email: validation.formData.email,
                    phone: validation.formData.phone || 'Not provided',
                    company: validation.formData.company || 'Not provided',
                    product_interest: validation.formData.productInterest || 'Not specified',
                    message: validation.formData.message,
                    to_name: 'Abhy Global',
                    reply_to: validation.formData.email
                };

                // Send email via EmailJS
                const response = await emailjs.send(
                    EMAILJS_CONFIG.SERVICE_ID,
                    EMAILJS_CONFIG.TEMPLATE_ID,
                    templateParams
                );

                // Success
                if (response.status === 200) {
                    showNotification('Thank you! Your message has been sent successfully. We\'ll contact you soon.', 'success');
                    contactForm.reset();
                    // Clear all validation states
                    Object.keys(validationRules).forEach(fieldName => {
                        clearFieldError(fieldName);
                    });
                } else {
                    throw new Error('Unexpected response status: ' + response.status);
                }

            } catch (error) {
                console.error('EmailJS Error:', error);
                
                // Handle specific error types
                let errorMessage = 'Failed to send message. Please try again later.';
                
                if (error.text) {
                    errorMessage = `Error: ${error.text}`;
                } else if (error.message) {
                    errorMessage = `Error: ${error.message}`;
                }
                
                showNotification(errorMessage, 'error');
            } finally {
                // Re-enable form
                setFormLoading(false);
            }
        });
    }

    // ============================================
    // FORM LOADING STATE
    // ============================================
    
    function setFormLoading(loading) {
        const formFields = contactForm.querySelectorAll('input, select, textarea, button');
        formFields.forEach(field => {
            field.disabled = loading;
        });

        if (submitButton) {
            if (loading) {
                submitButton.classList.add('loading');
                submitButton.setAttribute('aria-busy', 'true');
            } else {
                submitButton.classList.remove('loading');
                submitButton.setAttribute('aria-busy', 'false');
            }
        }
    }

    // ============================================
    // NOTIFICATION SYSTEM
    // ============================================
    
    function showNotification(message, type = 'success') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.form-notification');
        existingNotifications.forEach(notification => notification.remove());

        // Create notification element
        const notification = document.createElement('div');
        notification.className = `form-notification ${type}`;
        notification.setAttribute('role', 'alert');
        notification.setAttribute('aria-live', 'assertive');

        const title = type === 'success' ? 'Success!' : 'Error';
        notification.innerHTML = `
            <h4>${title}</h4>
            <p>${message}</p>
        `;

        document.body.appendChild(notification);

        // Auto-remove notification after delay
        const delay = type === 'success' ? 5000 : 7000;
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, delay);
    }

    // ============================================
    // PARTNER WITH US BUTTON
    // ============================================
    
    if (partnerButton) {
        partnerButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Pre-fill the message field with partnership inquiry
            const messageField = document.getElementById('message');
            if (messageField) {
                messageField.value = 'I am interested in partnering with Abhy Global for long-term business opportunities.';
                // Validate the pre-filled message
                const validation = validateField('message', messageField.value);
                if (validation.isValid) {
                    showFieldValid('message');
                } else {
                    showFieldError('message', validation.error);
                }
            }
            
            // Focus on the message field
            messageField?.focus();
        });
    }

    // ============================================
    // INTERSECTION OBSERVER FOR ANIMATIONS
    // ============================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for fade-in animation
    const animatedElements = document.querySelectorAll('.product-card, .benefit-card, .about-feature, .compliance-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // ============================================
    // FOOTER DEVELOPER EMAIL LINK
    // ============================================
    function setupDeveloperEmailLink() {
        const developerLink = document.getElementById('developer-email');
        if (developerLink) {
            developerLink.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Get current date in DD-MM-YYYY format
                const today = new Date();
                const day = String(today.getDate()).padStart(2, '0');
                const month = String(today.getMonth() + 1).padStart(2, '0');
                const year = today.getFullYear();
                const dateString = `${day}-${month}-${year}`;
                
                // Create mailto link with subject
                const email = 'abhishek.agawane@gmail.com';
                const subject = encodeURIComponent(`Feedback from AZ900 ${dateString}`);
                const mailtoLink = `mailto:${email}?subject=${subject}`;
                
                // Open email client
                window.location.href = mailtoLink;
            });
        }
    }

    // ============================================
    // INITIALIZE ON DOM LOAD
    // ============================================
    document.addEventListener('DOMContentLoaded', () => {
        // Set initial active nav link
        scrollActive();

        // Add loading animation complete class
        document.body.classList.add('loaded');
        
        // Setup developer email link
        setupDeveloperEmailLink();
    });

    // ============================================
    // ACCESSIBILITY: KEYBOARD NAVIGATION
    // ============================================
    // Close mobile menu on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('show-menu')) {
            navMenu.classList.remove('show-menu');
            document.body.style.overflow = '';
            navToggle.focus(); // Return focus to toggle button
        }
    });

    // ============================================
    // PERFORMANCE: LAZY LOADING FOR IMAGES
    // ============================================
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.dataset.src || img.src;
        });
    } else {
        // Fallback for browsers that don't support lazy loading
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
        document.body.appendChild(script);
    }

})();
