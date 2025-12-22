# Connecting abhyglobal.com Domain to GitHub Pages

## 📋 Prerequisites

✅ **Domain:** abhyglobal.com (Purchased via Google Workspace)  
✅ **GitHub Repository:** https://github.com/abhiqa82/AbhyGlobal  
✅ **GitHub Pages URL:** https://abhiqa82.github.io/AbhyGlobal

---

## 🎯 Overview

To connect your custom domain (abhyglobal.com) to GitHub Pages, you need to:
1. Enable GitHub Pages in your repository settings
2. Configure DNS records in Google Workspace/Domain registrar
3. Add custom domain in GitHub Pages settings
4. Update website configuration (if needed)

---

## Step 1: Enable GitHub Pages

### 1.1 Navigate to Repository Settings
1. Go to your GitHub repository: https://github.com/abhiqa82/AbhyGlobal
2. Click on **Settings** (top menu bar)
3. Scroll down to **Pages** (left sidebar)

### 1.2 Configure GitHub Pages
1. Under **Source**, select:
   - **Branch:** `main` (or `master` if that's your default branch)
   - **Folder:** `/ (root)`
2. Click **Save**
3. Your site will be available at: `https://abhiqa82.github.io/AbhyGlobal`

**Note:** It may take a few minutes for GitHub Pages to build and publish your site.

---

## Step 2: Configure DNS Records

You need to add DNS records to point your domain to GitHub Pages. Since you purchased the domain through Google Workspace, you'll configure DNS in **Google Domains** or your domain registrar.

### 2.1 Find Your DNS Settings Location

**Option A: If using Google Domains**
1. Go to: https://domains.google.com
2. Sign in with your Google Workspace admin account
3. Select **abhyglobal.com** domain

**Option B: If using another registrar**
- Log in to your domain registrar's dashboard
- Navigate to DNS settings for abhyglobal.com

### 2.2 Add DNS Records

You need to add **TWO types of DNS records**:

#### Record 1: A Records (for apex domain - abhyglobal.com)

Add **4 A records** pointing to GitHub Pages IP addresses:

| Type | Name/Host | Value/Points To | TTL |
|------|-----------|-----------------|-----|
| A | @ (or blank) | 185.199.108.153 | 3600 |
| A | @ (or blank) | 185.199.109.153 | 3600 |
| A | @ (or blank) | 185.199.110.153 | 3600 |
| A | @ (or blank) | 185.199.111.153 | 3600 |

**Note:** The "@" symbol represents the apex domain (abhyglobal.com). Some registrars use blank or "abhyglobal.com" instead of "@".

#### Record 2: CNAME Record (for www subdomain - www.abhyglobal.com)

Add **1 CNAME record**:

| Type | Name/Host | Value/Points To | TTL |
|------|-----------|-----------------|-----|
| CNAME | www | abhiqa82.github.io | 3600 |

### 2.3 DNS Configuration Screenshots Guide

**In Google Domains:**
1. Go to **DNS** section
2. Scroll to **Custom resource records**
3. Add the A records one by one:
   - Click **Add** next to Custom resource records
   - Select **A** from dropdown
   - Name: Leave blank or enter "@"
   - Data: Enter one of the IP addresses (185.199.108.153)
   - TTL: 3600
   - Click **Add**
   - Repeat for all 4 IP addresses
4. Add the CNAME record:
   - Click **Add**
   - Select **CNAME** from dropdown
   - Name: `www`
   - Data: `abhiqa82.github.io`
   - TTL: 3600
   - Click **Add**

**Important:** 
- ⏱️ DNS changes can take **24-48 hours** to propagate globally (usually 1-2 hours)
- You can check DNS propagation status at: https://www.whatsmydns.net/#A/abhyglobal.com

---

## Step 3: Add Custom Domain in GitHub Pages

### 3.1 Add Domain in GitHub Settings

1. Go to your repository: https://github.com/abhiqa82/AbhyGlobal
2. Click **Settings** → **Pages**
3. Scroll down to **Custom domain** section
4. Enter: `abhyglobal.com`
5. Click **Save**

### 3.2 Enable "Enforce HTTPS" (Recommended)

1. After adding the domain, wait a few minutes
2. Check the checkbox: **Enforce HTTPS**
3. This enables SSL/TLS encryption for your domain

**Note:** You may need to wait a few minutes after adding the domain before the "Enforce HTTPS" option becomes available.

### 3.3 What GitHub Does Automatically

When you add a custom domain in GitHub Pages, it automatically:
- Creates a `CNAME` file in your repository root (don't delete this!)
- Configures SSL certificate (free Let's Encrypt certificate)
- Sets up redirects from www to apex domain (or vice versa)

---

## Step 4: Verify DNS Propagation

After adding DNS records, verify they're working:

### 4.1 Check DNS Records

**Check A Records:**
```bash
# In terminal/command prompt
nslookup abhyglobal.com
# Or use online tool: https://www.whatsmydns.net/#A/abhyglobal.com
```

**Check CNAME Record:**
```bash
# In terminal/command prompt
nslookup www.abhyglobal.com
# Or use online tool: https://www.whatsmydns.net/#CNAME/www.abhyglobal.com
```

### 4.2 Expected Results

**A Records should show:**
- 185.199.108.153
- 185.199.109.153
- 185.199.110.153
- 185.199.111.153

**CNAME should show:**
- abhiqa82.github.io

### 4.3 Test Website Access

Once DNS has propagated:
1. Visit: http://abhyglobal.com (should redirect to https://)
2. Visit: http://www.abhyglobal.com (should redirect to https://)
3. Both should show your website

---

## Step 5: Update Website Configuration (If Needed)

Your website code already uses `abhyglobal.com` in all meta tags and URLs, so **no code changes are needed!** 

However, verify that:
- ✅ All canonical URLs use `https://www.abhyglobal.com` or `https://abhyglobal.com`
- ✅ All Open Graph URLs use the correct domain
- ✅ All Schema.org structured data URLs use the correct domain

**Current Status:** ✅ Your code already uses the correct domain!

---

## Step 6: Optional - Redirect www to apex (or vice versa)

GitHub Pages can handle both www and non-www automatically. Choose one as your primary:

### Option A: Use apex domain (abhyglobal.com) - Recommended
- Primary: `https://abhyglobal.com`
- www redirects to apex automatically (if configured in GitHub)

### Option B: Use www (www.abhyglobal.com)
- Primary: `https://www.abhyglobal.com`
- Apex redirects to www automatically

**Recommendation:** Use **apex domain (abhyglobal.com)** as it's shorter and cleaner.

---

## 🔍 Troubleshooting

### Issue: "DNS configuration error" in GitHub Pages

**Solution:**
- Verify all 4 A records are added correctly
- Wait 24-48 hours for DNS propagation
- Check DNS records using: https://www.whatsmydns.net

### Issue: Site shows "404 Not Found"

**Solution:**
- Verify GitHub Pages is enabled and source branch is set correctly
- Check that your `index.html` is in the repository root
- Wait a few minutes after enabling GitHub Pages

### Issue: HTTPS not working / "Enforce HTTPS" checkbox disabled

**Solution:**
- Wait 24 hours after adding custom domain
- Ensure DNS has fully propagated
- Try removing and re-adding the domain in GitHub settings

### Issue: "This site can't be reached"

**Solution:**
- Check DNS records are correct
- Verify domain is added in GitHub Pages settings
- Clear browser cache and try again
- Wait for DNS propagation (can take up to 48 hours)

### Issue: Site works but shows GitHub Pages 404 page

**Solution:**
- Verify repository is public (required for free GitHub Pages)
- Check that `index.html` exists in the root directory
- Ensure the correct branch and folder are selected in GitHub Pages settings

---

## 📋 Verification Checklist

After completing all steps:

- [ ] GitHub Pages enabled and site accessible at abhiqa82.github.io/AbhyGlobal
- [ ] All 4 A records added in DNS (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153)
- [ ] CNAME record added for www (pointing to abhiqa82.github.io)
- [ ] Custom domain added in GitHub Pages settings (abhyglobal.com)
- [ ] "Enforce HTTPS" enabled in GitHub Pages settings
- [ ] DNS propagation verified (checked at whatsmydns.net)
- [ ] Website accessible at https://abhyglobal.com
- [ ] Website accessible at https://www.abhyglobal.com
- [ ] SSL certificate working (padlock icon in browser)

---

## 🎯 Quick Reference

### GitHub Pages Settings
- **Repository:** https://github.com/abhiqa82/AbhyGlobal/settings/pages
- **Source Branch:** main
- **Source Folder:** / (root)
- **Custom Domain:** abhyglobal.com
- **HTTPS:** Enabled (after DNS propagation)

### DNS Records Required
```
A Records (4):
@ → 185.199.108.153
@ → 185.199.109.153
@ → 185.199.110.153
@ → 185.199.111.153

CNAME Record (1):
www → abhiqa82.github.io
```

### Useful Links
- DNS Check: https://www.whatsmydns.net
- GitHub Pages Docs: https://docs.github.com/en/pages
- SSL Check: https://www.ssllabs.com/ssltest/

---

## ⚠️ Important Notes

1. **DNS Propagation:** DNS changes can take 24-48 hours to fully propagate globally, though usually works within 1-2 hours.

2. **HTTPS:** GitHub automatically provides a free SSL certificate via Let's Encrypt. You need to enable "Enforce HTTPS" in GitHub Pages settings after DNS has propagated.

3. **CNAME File:** GitHub automatically creates a `CNAME` file in your repository root. **DO NOT DELETE THIS FILE** - it tells GitHub which domain to use.

4. **Repository Visibility:** Free GitHub Pages requires the repository to be **public**. If you need private repositories, consider GitHub Pages Pro.

5. **Build Time:** GitHub Pages typically builds and deploys changes within 1-2 minutes after you push code.

---

## 📞 Support Resources

- **GitHub Pages Documentation:** https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
- **Google Domains Help:** https://support.google.com/domains
- **DNS Troubleshooting:** https://www.whatsmydns.net

---

**Last Updated:** January 2024  
**Domain:** abhyglobal.com  
**Repository:** abhiqa82/AbhyGlobal

