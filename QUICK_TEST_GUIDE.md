# Quick Testing Guide - Abhy Global Website

## 🔴 Problem: Connection Refused on Port 8000

If you're getting `ERR_CONNECTION_REFUSED` when accessing `localhost:8000`, here are immediate solutions:

---

## ✅ SOLUTION 1: Use Laragon (RECOMMENDED - You Already Have It!)

Since you have Laragon installed, this is the easiest solution:

### Steps:
1. **Copy your project folder to Laragon's www directory:**
   ```
   From: C:\Users\abhis\Website_dev\abhyglobal_com\
   To:   C:\laragon\www\abhyglobal_com\
   ```

2. **Start Laragon:**
   - Open Laragon
   - Click "Start All" (or just start Apache if it's not running)
   - Wait for Apache to start (green indicator)

3. **Access your website:**
   - Open browser and go to: `http://localhost/abhyglobal_com/`
   - OR use Laragon's menu to open the site

**✅ Advantages:**
- Uses your existing setup
- Professional development environment
- Full server features available
- No additional configuration needed

---

## ✅ SOLUTION 2: Direct File Opening (Quickest)

For immediate testing without a server:

1. **Navigate to your project folder:**
   ```
   C:\Users\abhis\Website_dev\abhyglobal_com\
   ```

2. **Double-click `open-website.bat`** OR double-click `index.html`

3. The website opens directly in your browser

**⚠️ Note:** Some features may have limitations (CORS, localStorage, etc.), but most functionality works fine.

---

## ✅ SOLUTION 3: Improved Batch File

I've updated `test-website.bat` with better error handling. Try it again:

1. **Double-click `test-website.bat`**
2. It will now:
   - Check if port 8000 is available
   - Try alternative ports if needed
   - Show clear error messages
   - Tell you which server it's trying to use

---

## 🔍 Diagnostic Steps

### Check if Laragon Apache is Running:
1. Open Laragon
2. Look for Apache status (should be green/running)
3. If not running, click "Start All"

### Check if Port 8000 is in use:
Open PowerShell and run:
```powershell
netstat -ano | findstr :8000
```
If you see output, port 8000 is in use by another process.

### Check what's installed:
```powershell
# Check Python
python --version

# Check Node.js
node --version

# Check PHP
php --version
```

---

## 📋 Quick Decision Tree

```
Do you have Laragon? 
├─ YES → Use Solution 1 (Laragon) ⭐ RECOMMENDED
└─ NO
   ├─ Need full server features?
   │  ├─ YES → Install Python/Node.js/PHP, then use test-website.bat
   │  └─ NO → Use Solution 2 (Direct file opening)
   └─ Quick preview needed?
      └─ YES → Use Solution 2 (Direct file opening)
```

---

## 🎯 Recommended Approach for You

**Since you have Laragon installed:**

1. **Move project to Laragon:**
   ```
   C:\laragon\www\abhyglobal_com\
   ```

2. **Start Laragon and Apache**

3. **Access at:**
   ```
   http://localhost/abhyglobal_com/
   ```

This gives you the best development experience with your existing tools!

---

## 📞 Need Help?

If none of these solutions work:
1. Check the detailed RCA document: `RCA_CONNECTION_REFUSED.md`
2. Verify Laragon Apache is running
3. Check Windows Firewall settings
4. Try the direct file opening method for immediate testing

---

**Last Updated:** Current Session  
**Status:** Ready for Testing
