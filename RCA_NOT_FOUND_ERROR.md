# Root Cause Analysis (RCA) - Not Found Error (404)

## Issue Summary
**Error:** "Not Found - The requested URL was not found on this server"  
**URL Attempted:** `http://localhost/abhyglobal_com/`  
**Date:** Current Analysis  
**Environment:** Windows 10, Laragon Development Environment

---

## Problem Description

User attempted to access the Abhy Global website via Laragon at `http://localhost/abhyglobal_com/` but received a 404 Not Found error. The browser displayed:
- Error: "Not Found"
- Message: "The requested URL was not found on this server"
- URL: `localhost/abhyglobal_com/`

**Status:** Laragon Apache appears to be running (localhost is accessible), but the specific path is not found.

---

## Root Cause Analysis

### 1. **Primary Cause: Directory Not in Laragon www Folder**

**Analysis:**
- Laragon's default document root is: `C:\laragon\www\`
- For a URL like `http://localhost/abhyglobal_com/` to work, the folder structure should be:
  ```
  C:\laragon\www\abhyglobal_com\
    ├── index.html
    ├── styles.css
    ├── script.js
    └── logo.svg
  ```

**Most Likely Scenario:**
- The project folder is still located at: `C:\Users\abhis\Website_dev\abhyglobal_com\`
- The folder was NOT copied/moved to `C:\laragon\www\abhyglobal_com\`
- Therefore, Apache cannot find the requested path

**Verification Steps Needed:**
1. Check if folder exists at: `C:\laragon\www\abhyglobal_com\`
2. Verify `index.html` is in that folder
3. Confirm Laragon www directory path (may be customized)

---

### 2. **Secondary Cause: Incorrect URL Path**

**Possible Issues:**

**A. Folder Name Mismatch:**
- If folder is named `abhyglobal_com` but accessed as `abhyglobal-com` or vice versa
- URL is case-sensitive in some configurations

**B. Missing Trailing Slash:**
- Some Apache configurations require trailing slash
- `localhost/abhyglobal_com` vs `localhost/abhyglobal_com/`

**C. Wrong Document Root:**
- Laragon may have a custom document root configured
- Virtual host configuration may be pointing to different directory

---

### 3. **Tertiary Causes**

**A. Apache Configuration Issues:**
- `.htaccess` file (if exists) may be causing redirects
- DirectoryIndex configuration may not include `index.html`
- mod_rewrite rules interfering

**B. Permissions Issues:**
- Apache user may not have read permissions to the folder
- Windows folder permissions blocking access

**C. Laragon Not Fully Started:**
- Apache partially started but not fully operational
- Document root not properly initialized

---

## Impact Assessment

### Severity: **LOW** (Easy to Fix)
- Website files exist and are correct
- Server (Laragon) is running
- Simple path/folder location issue
- No code or configuration changes needed

### Affected Components:
1. Website accessibility via Laragon
2. Development workflow (temporary disruption)

---

## Solutions & Resolution Steps

### **Solution 1: Copy Folder to Laragon www Directory (PRIMARY FIX)**

**Step-by-Step Instructions:**

1. **Locate Laragon www Directory:**
   - Default path: `C:\laragon\www\`
   - Alternative: Check Laragon settings → General → Document Root

2. **Copy Project Folder:**
   ```
   Source: C:\Users\abhis\Website_dev\abhyglobal_com\
   Destination: C:\laragon\www\abhyglobal_com\
   ```

3. **Verify Files Are Present:**
   - Check that `index.html` exists in `C:\laragon\www\abhyglobal_com\`
   - Verify all files (styles.css, script.js, logo.svg) are copied

4. **Restart Laragon (Recommended):**
   - Stop Apache in Laragon
   - Start Apache again (or Start All)

5. **Access Website:**
   - URL: `http://localhost/abhyglobal_com/`
   - Should now work correctly

---

### **Solution 2: Use Symbolic Link (Alternative)**

If you prefer to keep the project in its original location:

**Steps:**
1. Open Command Prompt as Administrator
2. Navigate to Laragon www directory:
   ```cmd
   cd C:\laragon\www
   ```
3. Create symbolic link:
   ```cmd
   mklink /D abhyglobal_com C:\Users\abhis\Website_dev\abhyglobal_com
   ```
4. Access at: `http://localhost/abhyglobal_com/`

**Advantages:**
- No need to copy files
- Changes in original location reflect immediately
- Single source of truth

---

### **Solution 3: Access from Current Location (Quick Fix)**

If Laragon is configured to serve from a different path:

**Option A: Check Laragon Document Root**
1. Open Laragon
2. Go to Menu → Preferences → General
3. Check "Document Root" path
4. Copy folder to that location instead

**Option B: Use Direct File Path**
- Keep files where they are
- Access via: `file:///C:/Users/abhis/Website_dev/abhyglobal_com/index.html`
- Or use `open-website.bat`

---

### **Solution 4: Verify Laragon Configuration**

**Check Apache Virtual Hosts:**
1. Laragon Menu → Tools → Terminal
2. Check if virtual hosts are configured
3. Verify DocumentRoot in Apache config

**Check Directory Index:**
- Ensure `index.html` is in DirectoryIndex directive
- Default should include: `DirectoryIndex index.html index.php`

---

## Verification Steps After Fix

After implementing Solution 1, verify:

- [ ] Folder exists at: `C:\laragon\www\abhyglobal_com\`
- [ ] `index.html` is present in the folder
- [ ] Laragon Apache is running (green indicator)
- [ ] URL `http://localhost/abhyglobal_com/` loads successfully
- [ ] All CSS styling loads correctly
- [ ] JavaScript functionality works
- [ ] Logo and images display properly
- [ ] Navigation links work
- [ ] Contact form functions

---

## Diagnostic Commands

### Check if Folder Exists:
```powershell
Test-Path "C:\laragon\www\abhyglobal_com"
Test-Path "C:\laragon\www\abhyglobal_com\index.html"
```

### Check Laragon Document Root:
1. Open Laragon
2. Menu → Preferences → General
3. Note "Document Root" path

### List Files in Laragon www:
```powershell
Get-ChildItem "C:\laragon\www"
```

### Check Apache Error Log:
```
C:\laragon\bin\apache\apache2.4.xx\logs\error.log
```

---

## Prevention Measures

1. **Document Laragon Setup Process:**
   - Add Laragon-specific setup instructions to README
   - Include default paths and configuration steps

2. **Create Automated Setup Script:**
   - Batch file to copy folder to Laragon automatically
   - Verify folder location before starting

3. **Add Verification Steps:**
   - Check folder exists before attempting access
   - Provide clear error messages with solutions

---

## Quick Reference

### Default Laragon Paths:
- **Document Root:** `C:\laragon\www\`
- **Apache Config:** `C:\laragon\bin\apache\apache2.4.xx\conf\httpd.conf`
- **Virtual Hosts:** `C:\laragon\bin\apache\apache2.4.xx\conf\extra\httpd-vhosts.conf`

### Correct Folder Structure:
```
C:\laragon\www\
└── abhyglobal_com\
    ├── index.html
    ├── styles.css
    ├── script.js
    ├── logo.svg
    ├── README.md
    └── (other files)
```

### Correct URL:
- `http://localhost/abhyglobal_com/` ✅
- `http://localhost/abhyglobal_com` ✅ (with DirectoryIndex)
- `http://127.0.0.1/abhyglobal_com/` ✅

---

## Conclusion

The "Not Found" error is caused by:
1. **Primary:** Project folder not located in Laragon's www directory
2. **Secondary:** Path mismatch or incorrect URL format

**Recommended Resolution:**
1. Copy folder from `C:\Users\abhis\Website_dev\abhyglobal_com\` to `C:\laragon\www\abhyglobal_com\`
2. Restart Laragon Apache
3. Access at `http://localhost/abhyglobal_com/`

This is a simple file location issue with a straightforward fix. Once the folder is in the correct location, the website will be accessible.

---

**Document Version:** 1.0  
**Last Updated:** Current Date  
**Status:** Ready for Resolution
