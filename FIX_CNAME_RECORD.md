# Fix CNAME Record Issue - www.abhyglobal.com

## 🔴 Current Problem

From your DNS propagation check:
- ✅ **A records are working** (most locations show correct GitHub IPs)
- ❌ **CNAME record is NOT working** (all locations show red X's)
- ❌ GitHub shows "DNS check unsuccessful"

---

## 🎯 Issue: CNAME Record Location

The CNAME record for `www` needs to be in the **"Custom records"** section, NOT in "Squarespace Defaults".

---

## ✅ Solution: Verify CNAME Record in Squarespace

### Step 1: Go Back to Squarespace DNS Settings

1. **Go to:** https://account.squarespace.com/domains/managed/abhyglobal.com/dns/dns-settings
2. **Or navigate:** Squarespace → Domains → abhyglobal.com → DNS Settings

### Step 2: Check CNAME Record Location

Look at your DNS records and find where the CNAME for `www` is located:

**Option A: If CNAME is in "Squarespace Defaults" section:**
- This is the problem! Squarespace Defaults records might not work for custom domains
- You need to add it to "Custom records" section instead

**Option B: If CNAME is in "Custom records" section:**
- Check that it says:
  - **HOST:** `www`
  - **TYPE:** `CNAME`
  - **DATA:** `abhiqa82.github.io`
- If it's different, it needs to be fixed

### Step 3: Add/Update CNAME Record in "Custom records"

1. **Scroll to "Custom records" section**
2. **Check if there's already a CNAME record for `www`:**
   - If it exists but has wrong DATA value, click the **pencil icon** (edit) and fix it
   - If it doesn't exist, click **"ADD RECORD"**

3. **Add or Edit the CNAME record:**
   - **HOST:** Enter `www` (just "www", not "www.abhyglobal.com")
   - **TYPE:** Select `CNAME`
   - **DATA:** Enter `abhiqa82.github.io` (exactly this, no https://, no trailing slash)
   - **TTL:** Leave as default (4 hrs)
   - **PRIORITY:** Leave blank or N/A

4. **Click Save**

---

## 📊 Expected Result in "Custom records"

After fixing, your "Custom records" section should show:

```
5 records total:

1. HOST: @    TYPE: A    DATA: 185.199.108.153
2. HOST: @    TYPE: A    DATA: 185.199.109.153
3. HOST: @    TYPE: A    DATA: 185.199.110.153
4. HOST: @    TYPE: A    DATA: 185.199.111.153
5. HOST: www  TYPE: CNAME    DATA: abhiqa82.github.io  ← This one!
```

---

## ⚠️ About "Squarespace Defaults" Section

If you see a CNAME record in "Squarespace Defaults" pointing `www` to something else (like `ext-sq` or Squarespace IPs):

- **This might be conflicting!** 
- You should have the CNAME in "Custom records" instead
- Custom records take priority over defaults

---

## ✅ After Fixing CNAME Record

1. **Wait 30-60 minutes** for DNS propagation
2. **Check CNAME again:** Visit https://www.whatsmydns.net/#CNAME/www.abhyglobal.com
   - Should show green checkmarks with `abhiqa82.github.io`
3. **Return to GitHub Pages:** https://github.com/abhiqa82/AbhyGlobal/settings/pages
4. **Click "Check again"** button
5. **If successful:** Enable "Enforce HTTPS"

---

## 🔍 Troubleshooting

### Issue: CNAME record is correct but still not working

**Possible causes:**
1. **DNS propagation delay** - Can take 1-24 hours (usually 1-2 hours)
2. **CNAME conflict** - Make sure there's only ONE CNAME for `www` (in Custom records)
3. **Wrong DATA value** - Must be exactly `abhiqa82.github.io` (no www, no https://)

### Issue: Can't edit records in "Squarespace Defaults"

- **Solution:** Don't edit those. Add a NEW record in "Custom records" section
- Custom records will override defaults

### Issue: Multiple CNAME records for www

- **Solution:** Delete any CNAME records in "Squarespace Defaults" (if possible)
- Keep ONLY the one in "Custom records" pointing to `abhiqa82.github.io`

---

## ✅ Checklist

- [ ] Went to Squarespace DNS Settings
- [ ] Found where CNAME record for `www` is located
- [ ] Verified it's in "Custom records" section (not Squarespace Defaults)
- [ ] Verified HOST = `www` and DATA = `abhiqa82.github.io`
- [ ] If wrong, edited/added correct CNAME record
- [ ] Saved the record
- [ ] Waited 30-60 minutes for DNS propagation
- [ ] Checked CNAME at whatsmydns.net (should show green checkmarks)
- [ ] Returned to GitHub Pages and clicked "Check again"
- [ ] GitHub DNS check shows successful
- [ ] Enabled HTTPS in GitHub Pages

---

**Current Action:** Go back to Squarespace DNS Settings and verify the CNAME record for `www` is in "Custom records" section with correct values!

