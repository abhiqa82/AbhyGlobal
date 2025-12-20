@echo off
echo ===================================
echo Abhy Global - Simple Server
echo ===================================
echo.
echo This will start a simple web server on port 8080
echo (using port 8080 to avoid conflicts)
echo.

REM Check for Python first (most common)
python --version >nul 2>&1
if %errorlevel% == 0 (
    echo [OK] Python found!
    echo.
    echo Starting Python server on http://localhost:8080
    echo.
    echo IMPORTANT: Keep this window open while testing
    echo Press Ctrl+C to stop the server
    echo.
    echo Opening browser in 3 seconds...
    timeout /t 3 >nul
    start http://localhost:8080
    echo.
    python -m http.server 8080
    goto :end
)

REM Check for Node.js
node --version >nul 2>&1
if %errorlevel% == 0 (
    echo [OK] Node.js found!
    echo.
    echo Starting Node.js server on http://localhost:8080
    echo.
    echo IMPORTANT: Keep this window open while testing
    echo Press Ctrl+C to stop the server
    echo.
    echo Opening browser in 3 seconds...
    timeout /t 3 >nul
    start http://localhost:8080
    echo.
    npx --yes http-server -p 8080 -o -c-1
    goto :end
)

REM Check for PHP
php --version >nul 2>&1
if %errorlevel% == 0 (
    echo [OK] PHP found!
    echo.
    echo Starting PHP server on http://localhost:8080
    echo.
    echo IMPORTANT: Keep this window open while testing
    echo Press Ctrl+C to stop the server
    echo.
    echo Opening browser in 3 seconds...
    timeout /t 3 >nul
    start http://localhost:8080
    echo.
    php -S localhost:8080
    goto :end
)

REM None found
echo ===================================
echo ERROR: No server found!
echo ===================================
echo.
echo None of these are installed:
echo - Python
echo - Node.js
echo - PHP
echo.
echo SOLUTIONS:
echo 1. Install Python from python.org (recommended)
echo 2. Install Node.js from nodejs.org
echo 3. OR just use: open-website.bat (no server needed)
echo.
pause
exit /b 1

:end
pause
