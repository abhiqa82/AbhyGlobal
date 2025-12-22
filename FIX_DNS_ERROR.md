# Fix DNS Error: "Domain does not resolve to the GitHub Pages server"

## 🔴 Current Problem

GitHub shows:
- ❌ "DNS check unsuccessful"
- ❌ "Domain does not resolve to the GitHub Pages server"
- ❌ "Enforce HTTPS" is unavailable

**This means:** The DNS records haven't been added to your domain registrar yet, or they're incorrect.

---

## ✅ Solution: Add DNS Records to Your Domain

You need to add DNS records in your domain registrar (Google Domains or wherever you manage DNS for abhyglobal.com).

---

## 📍 Step 1: Find Your DNS Management Panel

### If you purchased domain through Google Workspace:

**Option A: Google Domains**
1. Go to: https://domains.google.com
2. Sign in with your Google Workspace admin account: `abhishek.agawane@abhyglobal.com`
3. Click on **abhyglobal.com**
4. Click on **DNS** tab

**Option B: Google Workspace Admin Console**
1. Go to: https://admin.google.com
2. Sign in with admin account
3. Go to **Domains** → **abhyglobal.com**
4. Click **DNS** or **Manage DNS**

**Option C: Your Domain Registrar**
- If you purchased the domain from another registrar (GoDaddy, Namecheap, etc.), log in there
- Navigate to DNS Management / DNS Settings / DNS Zone

---

## 📋 Step 2: Add DNS Records

Add these **exact** DNS records:

### A. Add 4 A Records (for abhyglobal.com)

Add these **4 separate A records**:

| Record # | Type | Name/Host | Value/Points To | TTL |
|----------|------|-----------|-----------------|-----|
| 1 | **A** | `@` (or leave blank) | `185.199.108.153` | 3600 |
| 2 | **A** | `@` (or leave blank) | `185.199.109.153` | 3600 |
| 3 | **A** | `@` (or leave blank) | `185.199.110.153` | 3600 |
| 4 | **A** | `@` (or leave blank) | `185.199.111.153` | 3600 |

**Important Notes:**
- `@` represents the root domain (abhyglobal.com)
- Some DNS panels use blank/empty field instead of `@`
- You MUST add all 4 A records (GitHub requires all 4)

### B. Add 1 CNAME Record (for www.abhyglobal.com)

| Type | Name/Host | Value/Points To | TTL |
|------|-----------|-----------------|-----|
| **CNAME** | `www` | `abhiqa82.github.io` | 3600 |

**Important:** 
- Name should be exactly `www` (without the domain)
- Value should be exactly `abhiqa82.github.io` (no https://, no trailing slash)

---

## 🔧 Step 3: How to Add in Google Domains

1. **Scroll to "Custom resource records"** section
2. **For each A record:**
   - Click **"Add"** or **"Create new record"**
   - Type: Select **A**
   - Name: Leave blank OR enter `@` (depending on what Google Domains shows)
   - Data: Enter one IP address (e.g., `185.199.108.153`)
   - TTL: `3600` (or leave as default)
   - Click **Save** or **Add**
   - Repeat for all 4 IP addresses (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153)

3. **For CNAME record:**
   - Click **"Add"** or **"Create new record"**
   - Type: Select **CNAME**
   - Name: Enter `www`
   - Data: Enter `abhiqa82.github.io`
   - TTL: `3600` (or leave as default)
   - Click **Save** or **Add**

---

## ⏱️ Step 4: Wait for DNS Propagation

After adding DNS records:
- ⏱️ DNS changes can take **1-24 hours** to propagate globally
- ✅ Usually works within **1-2 hours**
- 🔍 Check status at: https://www.whatsmydns.net/#A/abhyglobal.com

---

## ✅ Step 5: Verify DNS Records Are Correct

### Check A Records:
Visit: https://www.whatsmydns.net/#A/abhyglobal.com

**Should show all 4 IP addresses:**
- 185.199.108.153 ✅
- 185.199.109.153 ✅
- 185.199.110.153 ✅
- 185.199.111.153 ✅

### Check CNAME Record:
Visit: https://www.whatsmydns.net/#CNAME/www.abhyglobal.com

**Should show:**
- abhiqa82.github.io ✅

---

## 🔄 Step 6: Tell GitHub to Check Again

After DNS records are added and propagated:

1. Go back to GitHub Pages settings: https://github.com/abhiqa82/AbhyGlobal/settings/pages
2. Scroll to "Custom domain" section
3. Click **"Check again"** button (next to the error message)
4. GitHub will verify the DNS records

**If DNS is correct:**
- ✅ Error message will disappear
- ✅ "Enforce HTTPS" checkbox will become available
- ✅ Check the "Enforce HTTPS" checkbox
- ✅ Save

---

## 🎯 Expected Result

After DNS is properly configured:

1. ✅ GitHub Pages settings will show: "Your site is live at https://abhyglobal.com"
2. ✅ DNS check will be successful
3. ✅ "Enforce HTTPS" will be available and enabled
4. ✅ Your website will work at: https://abhyglobal.com (with SSL certificate)

---

## ❌ Common Mistakes to Avoid

1. **Adding only 1-2 A records** → Need ALL 4 A records
2. **Wrong IP addresses** → Must use GitHub Pages IPs (185.199.108.153, etc.)
3. **Wrong CNAME value** → Must be `abhiqa82.github.io` (not abhyglobal.com, not with https://)
4. **Adding A records for www** → Use CNAME for www, not A records
5. **Typo in domain name** → Double-check spelling: abhyglobal.com

---

## 🔍 Troubleshooting

### Issue: DNS still not working after 24 hours
- **Solution:** Double-check all DNS records are exactly as specified above
- Verify you're editing DNS for the correct domain
- Try removing and re-adding the custom domain in GitHub

### Issue: "Check again" still shows error
- **Solution:** 
  - Wait a few more hours for DNS propagation
  - Verify DNS at whatsmydns.net shows all records correctly
  - Try removing the domain in GitHub, wait 5 minutes, then re-add it

### Issue: www works but apex domain doesn't
- **Solution:** Make sure all 4 A records are added (not just CNAME)

---

## 📋 Quick Checklist

- [ ] Found DNS management panel for abhyglobal.com
- [ ] Added all 4 A records with correct IP addresses
- [ ] Added 1 CNAME record (www → abhiqa82.github.io)
- [ ] Verified DNS records at whatsmydns.net
- [ ] Waited for DNS propagation (1-24 hours)
- [ ] Clicked "Check again" in GitHub Pages settings
- [ ] Enabled "Enforce HTTPS" in GitHub
- [ ] Website works at https://abhyglobal.com

---

**Current Status:** DNS records need to be added in your domain registrar.  
**Next Step:** Add the DNS records as described above.

