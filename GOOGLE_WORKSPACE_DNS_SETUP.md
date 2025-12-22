# Google Workspace DNS Setup - Step-by-Step Guide

## 📍 Current Location
You're in **Google Admin Console** → **Home** page
- ✅ You can see "abhyglobal.com" as Primary domain
- ✅ "Domains" card is visible

---

## 🎯 Next Steps: Navigate to DNS Settings

### Step 1: Access Domain Management
1. In the **"Domains"** card (top left of the page)
2. Click **"Manage domains"** button
3. This will take you to the domains management page

### Step 2: Select Your Domain
1. You'll see a list of domains
2. Click on **"abhyglobal.com"** (your primary domain)
3. This opens the domain details page

### Step 3: Find DNS Settings
On the domain details page, look for one of these options:
- **"DNS"** tab or section
- **"DNS records"** link
- **"DNS configuration"** 
- **"Name servers"** or **"Resource records"**

**Note:** The exact location may vary, but look for DNS-related options.

---

## 🔧 Alternative Path (If Above Doesn't Work)

If you don't see DNS options in Google Admin Console, you may need to use **Google Domains** directly:

### Option A: Direct Google Domains Link
1. Go to: https://domains.google.com/registrar/abhyglobal.com/dns
2. Sign in with your admin account: `abhishek.agawane@abhyglobal.com`
3. This should take you directly to DNS settings

### Option B: Through Google Domains Home
1. Go to: https://domains.google.com
2. Click on **"My domains"** or look for **"abhyglobal.com"**
3. Click on **"abhyglobal.com"**
4. Click on **"DNS"** tab

---

## 📋 What You'll See (DNS Settings Page)

Once you're in DNS settings, you should see sections like:
- **Name servers** (leave these as-is)
- **Resource records** or **Custom resource records**
- **Synthetic records**
- Various record types (A, AAAA, CNAME, MX, TXT, etc.)

---

## ✅ Add DNS Records

### Add 4 A Records

For each A record:
1. Click **"Add"** or **"Create new record"** or **"+"** button
2. Select type: **A**
3. **Name/Host:** Leave blank OR enter `@` (depends on what the interface shows)
4. **Data/Value/Points to:** Enter one of these IP addresses:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
5. **TTL:** `3600` (or leave as default)
6. Click **Save** or **Add**
7. **Repeat** for all 4 IP addresses (you'll have 4 separate A records)

### Add 1 CNAME Record

1. Click **"Add"** or **"Create new record"** or **"+"** button
2. Select type: **CNAME**
3. **Name/Host:** Enter `www`
4. **Data/Value/Points to:** Enter `abhiqa82.github.io`
5. **TTL:** `3600` (or leave as default)
6. Click **Save** or **Add**

---

## 📊 Expected DNS Records (After Adding)

You should have **5 total records**:

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

1. **Save all records**
2. **Wait 1-24 hours** for DNS propagation (usually 1-2 hours)
3. **Verify DNS:** Visit https://www.whatsmydns.net/#A/abhyglobal.com
   - Should show all 4 IP addresses
4. **Return to GitHub:** Go back to GitHub Pages settings
5. **Click "Check again"** in GitHub Pages
6. **Enable HTTPS** once DNS is verified

---

## 🔍 What If You Can't Find DNS Settings?

### Google Workspace DNS Limitations:
Sometimes Google Workspace Admin Console doesn't provide direct DNS management. In that case:

1. **Use Google Domains directly:** https://domains.google.com
2. **Or contact Squarespace:** Since Google Domains migrated to Squarespace, you may need to manage DNS there
3. **Check if domain is managed elsewhere:** The domain might be registered/managed with a different provider

---

## 📞 If DNS Settings Are Not Available

If you cannot find DNS settings in Google Admin Console or Google Domains:

1. **Check where domain was purchased:**
   - Google Domains (now Squarespace)
   - Another registrar (GoDaddy, Namecheap, etc.)
   
2. **Find your domain registrar's DNS management:**
   - Log in to the registrar's website
   - Look for "DNS Management" or "DNS Settings"
   - Add the records there

3. **Contact support:**
   - If migrated to Squarespace: Contact Squarespace support
   - If another registrar: Contact their support

---

## ✅ Quick Checklist

- [ ] Clicked "Manage domains" in Google Admin Console
- [ ] Selected "abhyglobal.com"
- [ ] Found DNS settings/DNS records section
- [ ] Added all 4 A records with correct IP addresses
- [ ] Added 1 CNAME record (www → abhiqa82.github.io)
- [ ] Saved all DNS records
- [ ] Waited for DNS propagation (check at whatsmydns.net)
- [ ] Verified DNS in GitHub Pages (click "Check again")
- [ ] Enabled HTTPS in GitHub Pages

---

**Current Step:** Click "Manage domains" button in the "Domains" card you can see on your screen.

