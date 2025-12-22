# Quick Domain Setup Checklist - abhyglobal.com → GitHub Pages

## 🎯 Goal
Connect your domain **abhyglobal.com** to your GitHub Pages website.

---

## ✅ Quick Steps (5-10 minutes)

### Step 1: Enable GitHub Pages (2 minutes)
1. Go to: https://github.com/abhiqa82/AbhyGlobal/settings/pages
2. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
3. Click **Save**
4. Wait 1-2 minutes for GitHub to build your site
5. ✅ Your site is now at: `https://abhiqa82.github.io/AbhyGlobal`

---

### Step 2: Add DNS Records (5 minutes)

**Go to your domain DNS settings:**
- If using Google Domains: https://domains.google.com
- If using another registrar: Log in to your registrar's DNS panel

**Add these DNS records:**

#### A. Add 4 A Records (for abhyglobal.com):
```
Type: A
Name: @ (or leave blank)
Value: 185.199.108.153
TTL: 3600 (or default)
```
Repeat 3 more times with these IPs:
- 185.199.109.153
- 185.199.110.153
- 185.199.111.153

#### B. Add 1 CNAME Record (for www.abhyglobal.com):
```
Type: CNAME
Name: www
Value: abhiqa82.github.io
TTL: 3600 (or default)
```

**Save all DNS records.**

---

### Step 3: Add Custom Domain in GitHub (1 minute)
1. Go to: https://github.com/abhiqa82/AbhyGlobal/settings/pages
2. Scroll to **Custom domain** section
3. Enter: `abhyglobal.com`
4. Click **Save**
5. Wait 1-2 minutes

---

### Step 4: Enable HTTPS (after DNS propagates - can take 1-24 hours)
1. Wait for DNS to propagate (check at: https://www.whatsmydns.net/#A/abhyglobal.com)
2. Go back to: https://github.com/abhiqa82/AbhyGlobal/settings/pages
3. Check the box: **Enforce HTTPS**
4. ✅ Done!

---

## ⏱️ Timeline
- **DNS Setup:** 5 minutes (but takes 1-24 hours to propagate globally)
- **GitHub Pages Setup:** 2 minutes
- **HTTPS:** Available after DNS propagates

---

## 🔍 Verify It's Working

### Check DNS Propagation:
Visit: https://www.whatsmydns.net/#A/abhyglobal.com
- Should show all 4 IP addresses: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153

### Check Website:
- https://abhyglobal.com (should work after DNS propagates)
- https://www.abhyglobal.com (should work after DNS propagates)

---

## ❓ Need Help?

See full detailed guide: `DOMAIN_SETUP_GITHUB_PAGES.md`

---

## 📋 DNS Records Summary

```
4x A Records:
@ → 185.199.108.153
@ → 185.199.109.153
@ → 185.199.110.153
@ → 185.199.111.153

1x CNAME Record:
www → abhiqa82.github.io
```

---

**That's it!** Once DNS propagates (usually 1-2 hours), your site will be live at https://abhyglobal.com 🎉

