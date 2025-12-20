# Quick Fix: Not Found Error (404)

## Problem
Getting "Not Found" error when accessing `http://localhost/abhyglobal_com/`

## Root Cause
The project folder is not in Laragon's www directory. Laragon looks for files in `C:\laragon\www\` but your project is currently at `C:\Users\abhis\Website_dev\abhyglobal_com\`

---

## ✅ QUICK FIX (3 Steps)

### **Option 1: Automated Setup (Easiest)**

1. **Double-click `setup-laragon.bat`**
   - This script will automatically copy your project to Laragon
   - Follow the prompts

2. **Ensure Laragon Apache is running**
   - Open Laragon
   - Click "Start All" or start Apache

3. **Open in browser:**
   ```
   http://localhost/abhyglobal_com/
   ```

---

### **Option 2: Manual Setup**

1. **Copy your project folder:**
   ```
   From: C:\Users\abhis\Website_dev\abhyglobal_com\
   To:   C:\laragon\www\abhyglobal_com\
   ```
   - Copy the entire folder (with all files inside)

2. **Verify files are there:**
   - Check that `index.html` exists in `C:\laragon\www\abhyglobal_com\`
   - You should see: index.html, styles.css, script.js, logo.svg, etc.

3. **Restart Laragon Apache:**
   - In Laragon, stop Apache
   - Start Apache again

4. **Open in browser:**
   ```
   http://localhost/abhyglobal_com/
   ```

---

## 🔍 Verification Checklist

After setup, verify:
- [ ] Folder exists: `C:\laragon\www\abhyglobal_com\`
- [ ] `index.html` is in that folder
- [ ] Laragon Apache shows green/running
- [ ] Website loads at `http://localhost/abhyglobal_com/`
- [ ] All pages and links work

---

## ❌ Still Not Working?

### Check Laragon Document Root:

1. Open Laragon
2. Menu → Preferences → General
3. Check "Document Root" path
4. If it's NOT `C:\laragon\www`, copy your folder to the path shown

### Alternative: Use Different URL Format

If folder is in Laragon www but URL still doesn't work:
- Try: `http://localhost/abhyglobal_com` (without trailing slash)
- Try: `http://127.0.0.1/abhyglobal_com/`

### Check Apache Error Log:

Location: `C:\laragon\bin\apache\apache2.4.xx\logs\error.log`

---

## 📋 Expected Folder Structure

After setup, you should have:

```
C:\laragon\www\abhyglobal_com\
├── index.html
├── styles.css
├── script.js
├── logo.svg
├── README.md
├── setup-laragon.bat
└── (other files)
```

---

## 🎯 Quick Decision

**Fastest Solution:** Double-click `setup-laragon.bat` and follow prompts.

**Want to Keep Original Location:** See RCA document for symbolic link option.

---

**Status:** Ready to Fix  
**Difficulty:** Easy (5 minutes)
