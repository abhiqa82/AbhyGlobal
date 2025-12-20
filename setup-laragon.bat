@echo off
echo ===================================
echo Abhy Global - Laragon Setup Wizard
echo ===================================
echo.

REM Get current directory
set "CURRENT_DIR=%~dp0"
set "CURRENT_DIR=%CURRENT_DIR:~0,-1%"

REM Default Laragon paths
set "LARAGON_WWW=C:\laragon\www"

echo Current project location: %CURRENT_DIR%
echo.
echo Target location: %LARAGON_WWW%\abhyglobal_com
echo.

REM Check if Laragon www directory exists
if not exist "%LARAGON_WWW%" (
    echo ERROR: Laragon www directory not found!
    echo.
    echo Please check:
    echo 1. Laragon is installed
    echo 2. Default path is C:\laragon\www
    echo 3. If using custom path, update this script
    echo.
    pause
    exit /b 1
)

echo [1/4] Checking Laragon www directory... OK
echo.

REM Check if folder already exists
if exist "%LARAGON_WWW%\abhyglobal_com" (
    echo WARNING: abhyglobal_com folder already exists in Laragon www!
    echo.
    set /p OVERWRITE="Do you want to overwrite it? (Y/N): "
    if /i not "%OVERWRITE%"=="Y" (
        echo Operation cancelled.
        pause
        exit /b 0
    )
    echo.
    echo Removing old folder...
    rmdir /s /q "%LARAGON_WWW%\abhyglobal_com"
)

echo [2/4] Copying files to Laragon...
echo.

REM Create destination folder
mkdir "%LARAGON_WWW%\abhyglobal_com" 2>nul

REM Copy all files
xcopy /E /I /Y "%CURRENT_DIR%\*" "%LARAGON_WWW%\abhyglobal_com\" >nul

if %errorlevel% neq 0 (
    echo ERROR: Failed to copy files!
    echo Please check permissions and try running as Administrator.
    pause
    exit /b 1
)

echo [3/4] Files copied successfully!
echo.

REM Verify index.html exists
if not exist "%LARAGON_WWW%\abhyglobal_com\index.html" (
    echo ERROR: index.html not found in destination!
    echo Copy operation may have failed.
    pause
    exit /b 1
)

echo [4/4] Verification complete!
echo.
echo ===================================
echo Setup Complete!
echo ===================================
echo.
echo IMPORTANT: Make sure Laragon Apache is running!
echo.
echo Next steps:
echo 1. Open Laragon application
echo 2. Click "Start All" or start Apache manually
echo 3. Wait for Apache status to show GREEN/RUNNING
echo 4. Then open browser and go to:
echo    http://localhost/abhyglobal_com/
echo.
echo Checking if Apache is running...
timeout /t 2 >nul

REM Check if port 80 is in use (Apache running)
netstat -ano | findstr :80 >nul 2>&1
if %errorlevel% == 0 (
    echo [OK] Apache appears to be running (port 80 in use)
    echo.
    echo Opening website in browser...
    timeout /t 2 >nul
    start http://localhost/abhyglobal_com/
) else (
    echo [WARNING] Apache does NOT appear to be running!
    echo.
    echo Please:
    echo 1. Open Laragon
    echo 2. Click "Start All" to start Apache
    echo 3. Wait for Apache to show GREEN status
    echo 4. Then try accessing: http://localhost/abhyglobal_com/
    echo.
    echo Press any key to open Laragon directory (you can check status there)...
    pause >nul
    explorer C:\laragon
)

echo.
echo Done! If Apache is running, website should be accessible.
pause
