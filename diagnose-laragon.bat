@echo off
echo ===================================
echo Laragon Diagnostic Tool
echo ===================================
echo.
echo Checking Laragon setup...
echo.

REM Check if Laragon www directory exists
set "LARAGON_WWW=C:\laragon\www"
if exist "%LARAGON_WWW%" (
    echo [OK] Laragon www directory exists: %LARAGON_WWW%
) else (
    echo [ERROR] Laragon www directory NOT found: %LARAGON_WWW%
    echo.
    echo Please check if Laragon is installed or if you're using a custom path.
    goto :check_project
)
echo.

REM Check if project folder exists in Laragon
if exist "%LARAGON_WWW%\abhyglobal_com" (
    echo [OK] Project folder found: %LARAGON_WWW%\abhyglobal_com
    if exist "%LARAGON_WWW%\abhyglobal_com\index.html" (
        echo [OK] index.html found in project folder
    ) else (
        echo [ERROR] index.html NOT found in project folder!
    )
) else (
    echo [ERROR] Project folder NOT found: %LARAGON_WWW%\abhyglobal_com
    echo.
    echo SOLUTION: Run setup-laragon.bat to copy files to Laragon
)
echo.

:check_project
echo ===================================
echo Checking Apache/Server Status
echo ===================================
echo.

REM Check if Apache is running on port 80
netstat -ano | findstr :80 >nul 2>&1
if %errorlevel% == 0 (
    echo [OK] Port 80 is in use (Apache might be running)
    echo.
    echo Checking what's using port 80:
    netstat -ano | findstr :80
) else (
    echo [ERROR] Port 80 is NOT in use - Apache is NOT running!
    echo.
    echo SOLUTION: Start Laragon Apache
    echo 1. Open Laragon
    echo 2. Click "Start All" or start Apache manually
)
echo.
echo.

REM Check if port 443 is in use (HTTPS)
netstat -ano | findstr :443 >nul 2>&1
if %errorlevel% == 0 (
    echo [INFO] Port 443 is in use (HTTPS available)
) else (
    echo [INFO] Port 443 is not in use
)
echo.

echo ===================================
echo Diagnostic Summary
echo ===================================
echo.
echo Next steps:
echo 1. Ensure Laragon is running
echo 2. Check if Apache is started (should be green in Laragon)
echo 3. Verify project folder is at: %LARAGON_WWW%\abhyglobal_com\
echo 4. Try accessing: http://localhost/abhyglobal_com/
echo.
echo ===================================
pause
