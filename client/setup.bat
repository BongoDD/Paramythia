@echo off
REM Paramythia Setup Script for Windows
REM This script helps set up the Paramythia project

echo.
echo ================================================
echo   Paramythia Setup Script (Windows)
echo ================================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Node.js is not installed!
    echo Please install Node.js 18+ from https://nodejs.org/
    pause
    exit /b 1
)

REM Display versions
echo [OK] Node.js detected
node --version
echo [OK] npm detected
npm --version
echo.

REM Check if we're in the right directory
if not exist "package.json" (
    echo [ERROR] package.json not found
    echo Please run this script from the client directory:
    echo   cd client
    echo   setup.bat
    pause
    exit /b 1
)

echo Installing dependencies...
echo This may take 1-3 minutes...
echo.

REM Install dependencies
call npm install

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ================================================
    echo   Setup Complete!
    echo ================================================
    echo.
    echo You can now run the development server:
    echo   npm run dev
    echo.
    echo The app will be available at http://localhost:3000
    echo.
) else (
    echo.
    echo [ERROR] Installation failed!
    echo Please check the error messages above
    echo.
    echo Common solutions:
    echo   1. Check your internet connection
    echo   2. Clear npm cache: npm cache clean --force
    echo   3. Delete node_modules and try again
    echo   4. Run as Administrator if you get permission errors
    echo.
    pause
    exit /b 1
)

pause
