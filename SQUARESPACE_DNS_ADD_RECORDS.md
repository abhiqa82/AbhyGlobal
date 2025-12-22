# Adding GitHub Pages DNS Records in Squarespace - Step-by-Step

## ✅ Current Status
- ✅ You're in Squarespace DNS Settings
- ✅ You can see "Custom records" section
- ✅ "ADD RECORD" button is visible

---

## ⚠️ Important Note

I can see you have existing **Squarespace A records** in the "Squarespace Defaults" section pointing to Squarespace IPs (198.49.23.145, etc.). 

**We need to add GitHub Pages records in the "Custom records" section.**

---

## 📋 Step-by-Step Instructions

### Step 1: Add First A Record

1. **Find the "ADD RECORD" button** (above the "Custom records" section)
2. **Click "ADD RECORD"**
3. A form/dialog will appear with fields:
   - **HOST:** Enter `@` (or leave blank if @ doesn't work, try `abhyglobal.com`)
   - **TYPE:** Select `A`
   - **DATA:** Enter `185.199.108.153`
   - **TTL:** Leave as default (or select 4 hrs)
   - **PRIORITY:** Leave as `0` or blank
4. **Click Save** or **Add Record**

### Step 2: Add Second A Record

1. **Click "ADD RECORD"** again
2. Fill in:
   - **HOST:** `@` (same as before)
   - **TYPE:** `A`
   - **DATA:** `185.199.109.153`
   - **TTL:** Default
   - **PRIORITY:** `0` or blank
3. **Click Save**

### Step 3: Add Third A Record

1. **Click "ADD RECORD"** again
2. Fill in:
   - **HOST:** `@`
   - **TYPE:** `A`
   - **DATA:** `185.199.110.153`
   - **TTL:** Default
   - **PRIORITY:** `0` or blank
3. **Click Save**

### Step 4: Add Fourth A Record

1. **Click "ADD RECORD"** again
2. Fill in:
   - **HOST:** `@`
   - **TYPE:** `A`
   - **DATA:** `185.199.111.153`
   - **TTL:** Default
   - **PRIORITY:** `0` or blank
3. **Click Save**

### Step 5: Add CNAME Record (for www)

1. **Click "ADD RECORD"** again
2. Fill in:
   - **HOST:** Enter `www` (just "www", not "www.abhyglobal.com")
   - **TYPE:** Select `CNAME`
   - **DATA:** Enter `abhiqa82.github.io` (no https://, no trailing slash)
   - **TTL:** Default
   - **PRIORITY:** `N/A` or leave blank (CNAME doesn't use priority)
3. **Click Save**

---

## 📊 Expected Result

After adding all records, in your **"Custom records"** section, you should see:

```
5 new records:

1. HOST: @        TYPE: A    DATA: 185.199.108.153
2. HOST: @        TYPE: A    DATA: 185.199.109.153
3. HOST: @        TYPE: A    DATA: 185.199.110.153
4. HOST: @        TYPE: A    DATA: 185.199.111.153
5. HOST: www      TYPE: CNAME    DATA: abhiqa82.github.io
```

---

## ⚠️ About Existing Squarespace Records

**Don't delete the Squarespace Defaults records yet!** 

- The existing A records in "Squarespace Defaults" are for Squarespace hosting
- Since you're using GitHub Pages, these won't conflict (GitHub will take priority for DNS queries)
- Keep them for now - if your website works, you can remove them later

---

## ✅ After Adding All Records

1. **Verify all 5 records are saved** in "Custom records" section
2. **Wait 1-24 hours** for DNS propagation (usually 1-2 hours)
3. **Check DNS status:** Visit https://www.whatsmydns.net/#A/abhyglobal.com
   - Should show all 4 GitHub IP addresses: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
4. **Return to GitHub Pages:** Go to https://github.com/abhiqa82/AbhyGlobal/settings/pages
5. **Click "Check again"** button in Custom domain section
6. **Enable HTTPS** once DNS is verified

---

## 🎯 Quick Reference - Exact Values

| Record | HOST | TYPE | DATA | TTL | PRIORITY |
|--------|------|------|------|-----|----------|
| 1 | `@` | A | `185.199.108.153` | Default | 0 |
| 2 | `@` | A | `185.199.109.153` | Default | 0 |
| 3 | `@` | A | `185.199.110.153` | Default | 0 |
| 4 | `@` | A | `185.199.111.153` | Default | 0 |
| 5 | `www` | CNAME | `abhiqa82.github.io` | Default | N/A |

---

## ✅ Checklist

- [ ] Clicked "ADD RECORD" in Custom records section
- [ ] Added all 4 A records with HOST=@ and correct IP addresses
- [ ] Added 1 CNAME record with HOST=www and DATA=abhiqa82.github.io
- [ ] All 5 records are visible in Custom records section
- [ ] Saved all records
- [ ] Waited for DNS propagation (1-2 hours)
- [ ] Verified DNS at whatsmydns.net
- [ ] Clicked "Check again" in GitHub Pages
- [ ] Enabled HTTPS in GitHub Pages

---

**Current Action:** Click the **"ADD RECORD"** button above "Custom records" section and add the first A record!

