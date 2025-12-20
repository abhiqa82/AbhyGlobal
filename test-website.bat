@echo off
echo ===================================
echo Abhy Global Website - Local Server
echo ===================================
echo.
echo Checking available servers...
echo.

REM Check if port 8000 is in use
netstat -ano | findstr :8000 >nul 2>&1
if %errorlevel% == 0 (
    echo WARNING: Port 8000 is already in use!
    echo Trying alternative port 8001...
    set SERVER_PORT=8001
) else (
    set SERVER_PORT=8000
)

echo Starting server on port %SERVER_PORT%...
echo.
echo The website will be available at:
echo http://localhost:%SERVER_PORT%
echo.
echo Press Ctrl+C to stop the server
echo.
echo ===================================
echo.

REM Check if Python is available
python --version >nul 2>&1
if %errorlevel% == 0 (
    echo [OK] Python found. Starting Python HTTP Server on port %SERVER_PORT%...
    echo.
    python -m http.server %SERVER_PORT%
    goto :end
) else (
    echo [SKIP] Python not found.
)

REM Check if Node.js is available
node --version >nul 2>&1
if %errorlevel% == 0 (
    echo [OK] Node.js found. Starting Node.js HTTP Server on port %SERVER_PORT%...
    echo.
    npx --yes http-server -p %SERVER_PORT% -o
    goto :end
) else (
    echo [SKIP] Node.js not found.
)

REM Check if PHP is available
php --version >nul 2>&1
if %errorlevel% == 0 (
    echo [OK] PHP found. Starting PHP Built-in Server on port %SERVER_PORT%...
    echo.
    php -S localhost:%SERVER_PORT%
    goto :end
) else (
    echo [SKIP] PHP not found.
)

REM If none are available, open directly in browser
echo.
echo ===================================
echo ERROR: No server found!
echo ===================================
echo.
echo No local server (Python/Node.js/PHP) was found on your system.
echo.
echo OPTIONS:
echo 1. Use Laragon: Copy this folder to C:\laragon\www\abhyglobal_com\
echo    Then access: http://localhost/abhyglobal_com/
echo.
echo 2. Opening file directly in browser (limited functionality)...
echo.
timeout /t 3 >nul
start index.html
goto :end

:end
echo.
pause
