# DNS Records Reference for abhyglobal.com

## 📋 Exact DNS Records to Add

Copy and paste these exact values into your domain DNS settings:

---

## A Records (4 records - for abhyglobal.com)

Add these **4 separate A records**:

| Record # | Type | Name/Host | Value/Points To | TTL |
|----------|------|-----------|-----------------|-----|
| 1 | A | @ (or blank) | 185.199.108.153 | 3600 |
| 2 | A | @ (or blank) | 185.199.109.153 | 3600 |
| 3 | A | @ (or blank) | 185.199.110.153 | 3600 |
| 4 | A | @ (or blank) | 185.199.111.153 | 3600 |

**Note:** 
- "@" means the root domain (abhyglobal.com)
- Some DNS panels use blank/empty instead of "@"
- All 4 IP addresses are required

---

## CNAME Record (1 record - for www.abhyglobal.com)

| Type | Name/Host | Value/Points To | TTL |
|------|-----------|-----------------|-----|
| CNAME | www | abhiqa82.github.io | 3600 |

**Note:** 
- "www" means www.abhyglobal.com
- Points to your GitHub Pages URL (without https://)

---

## 📍 Where to Add These Records

### If using Google Domains:
1. Go to: https://domains.google.com
2. Sign in with your Google Workspace admin account
3. Click on **abhyglobal.com**
4. Click **DNS** tab
5. Scroll to **Custom resource records**
6. Add each record one by one:
   - Click **Add**
   - Select type (A or CNAME)
   - Enter Name/Host
   - Enter Data/Value
   - Set TTL (3600 or default)
   - Click **Add**
7. Repeat for all 5 records (4 A + 1 CNAME)

### If using another registrar:
- Log in to your domain registrar's dashboard
- Navigate to DNS Management or DNS Settings
- Look for "DNS Records", "DNS Zone", or "Name Servers"
- Add the records as shown above

---

## ✅ Verification

After adding DNS records, verify they're correct:

**Check A Records:**
Visit: https://www.whatsmydns.net/#A/abhyglobal.com
- Should show all 4 IP addresses: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153

**Check CNAME Record:**
Visit: https://www.whatsmydns.net/#CNAME/www.abhyglobal.com
- Should show: abhiqa82.github.io

---

## ⏱️ Timeline

- **DNS Changes:** Take effect immediately, but can take 1-24 hours to propagate globally
- **GitHub Pages:** Usually works within 1-2 minutes after DNS propagates
- **HTTPS:** Available after DNS fully propagates (usually 1-2 hours)

---

## 🔍 Common Issues

### Issue: "DNS configuration error" in GitHub
- **Solution:** Make sure all 4 A records are added (not just 1 or 2)
- Wait 24 hours for full DNS propagation

### Issue: www works but apex domain doesn't
- **Solution:** Verify all 4 A records are added correctly
- Check that "@" or blank is used (not "abhyglobal.com")

### Issue: Site shows GitHub 404 page
- **Solution:** Verify GitHub Pages is enabled and source branch is set to `main`
- Check that `index.html` exists in repository root

---

**Last Updated:** January 2024  
**Domain:** abhyglobal.com  
**GitHub Pages:** abhiqa82.github.io/AbhyGlobal

