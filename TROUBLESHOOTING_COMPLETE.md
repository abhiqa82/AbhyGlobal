# Complete Troubleshooting Guide - Connection Refused Error

## Current Issue
**Error:** `ERR_CONNECTION_REFUSED` when accessing `http://localhost/abhyglobal_com/`

This means Laragon Apache is **NOT RUNNING** or not accessible.

---

## Step-by-Step Solution

### STEP 1: Verify Laragon is Running

1. **Open Laragon Application**
   - Look for Laragon icon in system tray or desktop
   - Open Laragon control panel

2. **Check Apache Status**
   - Look for "Apache" in Laragon interface
   - Status should be **GREEN** (running)
   - If RED or not running, proceed to Step 2

3. **Run Diagnostic**
   - Double-click `diagnose-laragon.bat` to check setup
   - Review the diagnostic output

---

### STEP 2: Start Laragon Apache

**Option A: Start All Services**
1. In Laragon, click **"Start All"** button
2. Wait for Apache to start (should turn green)
3. Check for any error messages

**Option B: Start Apache Only**
1. In Laragon, click on **Apache** service
2. Click **"Start"** or toggle it ON
3. Wait for status to turn green

**Option C: Manual Start (if Laragon UI not working)**
1. Open Command Prompt as Administrator
2. Navigate to Laragon bin directory:
   ```cmd
   cd C:\laragon\bin\apache\apache2.4.xx\bin
   ```
3. Start Apache:
   ```cmd
   httpd.exe
   ```

---

### STEP 3: Verify Project Folder Location

1. **Check if folder exists:**
   ```
   C:\laragon\www\abhyglobal_com\
   ```

2. **If folder doesn't exist:**
   - Run `setup-laragon.bat` to copy files automatically
   - OR manually copy from: `C:\Users\abhis\Website_dev\abhyglobal_com\`
   - To: `C:\laragon\www\abhyglobal_com\`

3. **Verify index.html exists:**
   - Check: `C:\laragon\www\abhyglobal_com\index.html`
   - Should be present

---

### STEP 4: Test Apache is Working

1. **Test Laragon root:**
   - Open browser
   - Go to: `http://localhost/`
   - Should show Laragon default page or directory listing

2. **If localhost root doesn't work:**
   - Apache is definitely not running
   - Go back to Step 2

3. **Test project folder:**
   - Go to: `http://localhost/abhyglobal_com/`
   - Should show the website

---

### STEP 5: Check Port Conflicts

**If Apache won't start, check for port conflicts:**

1. **Check what's using port 80:**
   ```cmd
   netstat -ano | findstr :80
   ```

2. **Common conflicts:**
   - IIS (Internet Information Services)
   - Skype (can use port 80)
   - Another web server
   - Another instance of Apache

3. **Solutions:**
   - Stop IIS: Open Services → Stop "World Wide Web Publishing Service"
   - Stop Skype: Tools → Options → Advanced → Connection → Uncheck "Use port 80"
   - Stop other web servers

---

## Quick Diagnostic Checklist

Run this checklist in order:

- [ ] **Laragon is installed and running**
  - [ ] Laragon application is open
  - [ ] No error messages in Laragon

- [ ] **Apache is started**
  - [ ] Apache shows GREEN/RUNNING status
  - [ ] Port 80 is accessible
  - [ ] `http://localhost/` works

- [ ] **Project folder exists**
  - [ ] `C:\laragon\www\abhyglobal_com\` exists
  - [ ] `index.html` is in that folder
  - [ ] All files (css, js, svg) are present

- [ ] **Browser test**
  - [ ] `http://localhost/abhyglobal_com/` loads
  - [ ] Website displays correctly

---

## Alternative Solutions

### Solution 1: Use Different Port

If port 80 is blocked, use a different port:

1. **Edit Laragon Apache config:**
   - File: `C:\laragon\bin\apache\apache2.4.xx\conf\httpd.conf`
   - Change: `Listen 80` to `Listen 8080`
   - Restart Apache

2. **Access via:**
   - `http://localhost:8080/abhyglobal_com/`

---

### Solution 2: Use Direct File Opening

If Laragon continues to have issues:

1. **Double-click `open-website.bat`**
2. OR navigate to project folder and double-click `index.html`
3. Website opens via `file://` protocol

**Note:** Some features may be limited (CORS, localStorage), but basic functionality works.

---

### Solution 3: Use Python/Node.js Server

If Laragon is problematic, use alternative server:

1. **Use updated `test-website.bat`**
   - It will try Python, Node.js, or PHP
   - Automatically finds available server
   - Uses port 8000 or alternative

2. **Access via:**
   - `http://localhost:8000/`

---

## Common Error Messages & Fixes

### "Port 80 is already in use"
**Fix:** Stop IIS, Skype, or other services using port 80

### "Apache won't start"
**Fix:** Check error logs at:
- `C:\laragon\bin\apache\apache2.4.xx\logs\error.log`

### "Access Denied"
**Fix:** Run Laragon as Administrator

### "Service not found"
**Fix:** Reinstall Laragon or check installation path

---

## Still Not Working?

### Get More Information:

1. **Run diagnostic:**
   ```cmd
   diagnose-laragon.bat
   ```

2. **Check Apache error log:**
   ```
   C:\laragon\bin\apache\apache2.4.xx\logs\error.log
   ```

3. **Check Laragon logs:**
   - Open Laragon → Check for error messages
   - Look at bottom panel for error details

4. **Verify Laragon installation:**
   - Default path: `C:\laragon\`
   - Check if all files exist
   - Try reinstalling Laragon if corrupted

---

## Recommended Action Plan

1. ✅ **Run `diagnose-laragon.bat`** - Get current status
2. ✅ **Start Laragon Apache** - Click "Start All" in Laragon
3. ✅ **Verify folder location** - Run `setup-laragon.bat` if needed
4. ✅ **Test `http://localhost/`** - Should work first
5. ✅ **Test `http://localhost/abhyglobal_com/`** - Should load website

---

## Quick Command Reference

```cmd
# Check if port 80 is in use
netstat -ano | findstr :80

# Check if folder exists
dir C:\laragon\www\abhyglobal_com

# Test if Apache is responding
curl http://localhost/

# Check Laragon process
tasklist | findstr laragon
```

---

**Last Updated:** Current Session  
**Status:** Complete Troubleshooting Guide
