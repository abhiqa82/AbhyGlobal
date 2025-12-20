@echo off
echo ===================================
echo Abhy Global - Direct File Test
echo ===================================
echo.
echo Opening website directly in browser...
echo This does NOT require any server.
echo.
echo If this works, your files are correct!
echo.
timeout /t 2 >nul

REM Get current directory
set "CURRENT_DIR=%~dp0"
set "INDEX_FILE=%CURRENT_DIR%index.html"

REM Check if index.html exists
if exist "%INDEX_FILE%" (
    echo Found index.html - Opening now...
    start "" "%INDEX_FILE%"
    echo.
    echo Website should open in your browser.
    echo If it displays correctly, your files are fine!
    echo The issue is only with the server setup.
) else (
    echo ERROR: index.html not found!
    echo Current directory: %CURRENT_DIR%
    pause
    exit /b 1
)

echo.
echo ===================================
echo Test Complete
echo ===================================
echo.
echo Did the website open and display correctly?
echo.
echo If YES: Your files are fine, just need a working server
echo If NO: There might be an issue with the HTML/CSS files
echo.
pause
