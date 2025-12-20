@echo off
echo ===================================
echo Abhy Global - Complete Setup & Test
echo ===================================
echo.
echo This script will:
echo 1. Copy project to Laragon (if needed)
echo 2. Check Apache status
echo 3. Open Laragon for you to start Apache
echo 4. Test the website
echo.
pause

REM Get current directory
set "CURRENT_DIR=%~dp0"
set "CURRENT_DIR=%CURRENT_DIR:~0,-1%"
set "LARAGON_WWW=C:\laragon\www"

echo.
echo Step 1: Checking Laragon setup...
echo.

REM Check if Laragon www exists
if not exist "%LARAGON_WWW%" (
    echo ERROR: Laragon www directory not found!
    echo Expected: %LARAGON_WWW%
    echo.
    echo Please check if Laragon is installed.
    pause
    exit /b 1
)

REM Check if project folder exists in Laragon
if not exist "%LARAGON_WWW%\abhyglobal_com\index.html" (
    echo Project folder not found in Laragon. Copying files...
    echo.
    
    REM Create folder
    mkdir "%LARAGON_WWW%\abhyglobal_com" 2>nul
    
    REM Copy files
    xcopy /E /I /Y "%CURRENT_DIR%\*" "%LARAGON_WWW%\abhyglobal_com\" >nul
    
    if %errorlevel% neq 0 (
        echo ERROR: Failed to copy files!
        pause
        exit /b 1
    )
    
    echo Files copied successfully!
) else (
    echo Project folder already exists in Laragon.
)

echo.
echo Step 2: Checking Apache status...
echo.

REM Check if Apache is running (port 80)
netstat -ano | findstr :80 >nul 2>&1
if %errorlevel% == 0 (
    echo [OK] Apache appears to be running (port 80 in use)
    set APACHE_RUNNING=1
) else (
    echo [WARNING] Apache does NOT appear to be running!
    set APACHE_RUNNING=0
)

echo.
echo Step 3: Opening Laragon...
echo.
echo IMPORTANT: In Laragon window that opens:
echo 1. Check Apache status (should be GREEN if running)
echo 2. If NOT running, click "Start All" or start Apache manually
echo 3. Wait for Apache to show GREEN/RUNNING status
echo.
echo Opening Laragon directory now...
timeout /t 3 >nul

REM Try to open Laragon executable
if exist "C:\laragon\laragon.exe" (
    start "" "C:\laragon\laragon.exe"
) else (
    explorer C:\laragon
)

echo.
echo Step 4: Waiting for you to start Apache...
echo.
echo After Apache is running (GREEN status), press any key to test website...
pause

echo.
echo Testing website...
echo.

REM Check again if Apache is running
netstat -ano | findstr :80 >nul 2>&1
if %errorlevel% == 0 (
    echo [OK] Apache is running! Opening website...
    timeout /t 2 >nul
    start http://localhost/abhyglobal_com/
) else (
    echo [ERROR] Apache still not running!
    echo.
    echo Please:
    echo 1. Make sure Laragon Apache is started (GREEN status)
    echo 2. Then manually open: http://localhost/abhyglobal_com/
    echo.
    pause
    exit /b 1
)

echo.
echo ===================================
echo Setup Complete!
echo ===================================
echo.
echo Website should now be accessible at:
echo http://localhost/abhyglobal_com/
echo.
pause
