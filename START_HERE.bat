@echo off
cls
echo ========================================
echo  ABHY GLOBAL - QUICK START GUIDE
echo ========================================
echo.
echo Choose an option:
echo.
echo  [1] Test files directly (no server needed) - FASTEST
echo  [2] Start simple server on port 8080 - RECOMMENDED
echo  [3] Start server on port 8000 (alternative)
echo  [4] Open troubleshooting guide
echo  [5] Exit
echo.
set /p choice="Enter your choice (1-5): "

if "%choice%"=="1" goto direct
if "%choice%"=="2" goto simple
if "%choice%"=="3" goto test8000
if "%choice%"=="4" goto help
if "%choice%"=="5" exit

:direct
echo.
echo Opening website directly (no server needed)...
timeout /t 1 >nul
start "" "%~dp0index.html"
echo.
echo Website opened! Check your browser.
echo If it displays correctly, your files are fine.
pause
exit

:simple
echo.
echo Starting simple server on port 8080...
echo.
call "%~dp0simple-server.bat"
exit

:test8000
echo.
echo Starting server on port 8000...
echo.
call "%~dp0test-website.bat"
exit

:help
echo.
echo Opening troubleshooting guide...
start "" "%~dp0SOLUTION_SIMPLE.md"
timeout /t 2 >nul
exit
