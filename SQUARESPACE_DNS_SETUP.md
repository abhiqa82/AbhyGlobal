# Squarespace DNS Setup Guide - abhyglobal.com

## 🔍 Important Discovery

Your domain DNS is managed through **Squarespace** (not Google Admin Console), because Google Domains was acquired by Squarespace in 2023.

---

## ✅ Next Steps: Access Squarespace DNS

### Step 1: Click "MANAGE DOMAIN (via Squarespace)" Link

In the pop-up window you see on your screen:

1. **Find the pop-up** showing domain details for `abhyglobal.com`
2. **Look for:** "MANAGE DOMAIN (via Squarespace)" (blue link)
3. **Click that link** - This will take you to Squarespace's domain management portal

**Alternative:** If you don't see the pop-up:
- Click "View Details" for `abhyglobal.com` in the domains table
- Look for "MANAGE DOMAIN (via Squarespace)" link
- Click it

---

### Step 2: Sign In to Squarespace

After clicking the link:

1. You'll be redirected to Squarespace
2. **Sign in** with your Google account (same email: `abhishek.agawane@abhyglobal.com`)
   - OR use the same credentials you use for Google Workspace
3. You may need to authorize Squarespace to access your domain

---

### Step 3: Navigate to DNS Settings

Once logged into Squarespace:

1. **Find your domain:** Look for `abhyglobal.com` in your Squarespace dashboard
2. **Click on the domain** or look for **"DNS Settings"** or **"DNS Records"**
3. Common locations:
   - Settings → DNS Settings
   - Domains → abhyglobal.com → DNS
   - Advanced Settings → DNS Records

---

## 📋 Add DNS Records in Squarespace

Once you're in DNS settings, add these records:

### Add 4 A Records

For each A record:
1. Click **"Add Record"** or **"+"** button
2. **Type:** Select **A**
3. **Host/Name:** Leave blank OR enter `@` (depends on Squarespace interface)
4. **Points to/Value:** Enter one IP address:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
5. **TTL:** `3600` (or leave as default)
6. Click **Save**
7. **Repeat** for all 4 IP addresses

### Add 1 CNAME Record

1. Click **"Add Record"** or **"+"** button
2. **Type:** Select **CNAME**
3. **Host/Name:** Enter `www`
4. **Points to/Value:** Enter `abhiqa82.github.io`
5. **TTL:** `3600` (or leave as default)
6. Click **Save**

---

## 🔗 Direct Squarespace Login (If Link Doesn't Work)

If the "MANAGE DOMAIN" link doesn't work, try:

1. **Go to:** https://www.squarespace.com/login
2. **Sign in** with your Google account
3. Navigate to **Domains** → **abhyglobal.com** → **DNS Settings**

---

## 📊 Expected DNS Records

After adding, you should have:

```
4x A Records:
@ (or blank) → 185.199.108.153
@ (or blank) → 185.199.109.153
@ (or blank) → 185.199.110.153
@ (or blank) → 185.199.111.153

1x CNAME Record:
www → abhiqa82.github.io
```

---

## ⏱️ After Adding DNS Records

1. **Save all records** in Squarespace
2. **Wait 1-24 hours** for DNS propagation (usually 1-2 hours)
3. **Verify DNS:** Visit https://www.whatsmydns.net/#A/abhyglobal.com
   - Should show all 4 IP addresses
4. **Return to GitHub:** Go to GitHub Pages settings
5. **Click "Check again"** button
6. **Enable HTTPS** once DNS is verified

---

## ❓ Troubleshooting

### Issue: Can't find "MANAGE DOMAIN" link
- **Solution:** Look for "Advanced settings" or "Domain settings" in the pop-up
- Or try direct Squarespace login: https://www.squarespace.com/login

### Issue: Squarespace login doesn't work
- **Solution:** You may need to create a Squarespace account first
- Or use "Sign in with Google" option

### Issue: Can't find DNS settings in Squarespace
- **Solution:** Look for:
  - "DNS Settings"
  - "DNS Records"
  - "Advanced DNS"
  - "Domain Settings" → "DNS"

---

## ✅ Quick Checklist

- [ ] Clicked "MANAGE DOMAIN (via Squarespace)" link
- [ ] Signed in to Squarespace
- [ ] Found DNS Settings/DNS Records section
- [ ] Added all 4 A records with correct IP addresses
- [ ] Added 1 CNAME record (www → abhiqa82.github.io)
- [ ] Saved all DNS records
- [ ] Waited for DNS propagation (check at whatsmydns.net)
- [ ] Verified DNS in GitHub Pages (click "Check again")
- [ ] Enabled HTTPS in GitHub Pages

---

**Current Action:** Click the **"MANAGE DOMAIN (via Squarespace)"** link in the pop-up window you see on your screen.

