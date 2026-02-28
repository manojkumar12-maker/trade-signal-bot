@echo off
echo ======================================
echo   PUSH TO GITHUB - ProTrade Bot
echo ======================================
echo.

echo Step 1: Setting up Git config...
git config user.name "YourName"
git config user.email "your@email.com"

echo.
echo Step 2: Adding all files...
git add .

echo.
echo Step 3: Committing...
git commit -m "ProTrade Signal Bot - Initial commit"

echo.
echo ======================================
echo IMPORTANT: Create a GitHub repository first!
echo 1. Go to: https://github.com/new
echo 2. Name it: trade-signal-bot
echo 3. Make it PUBLIC
echo 4. Don't add any files (no README)
echo 5. Click "Create repository"
echo 6. Copy the URL shown
echo ======================================
echo.

set /p GH_URL="Paste your GitHub repository URL here: "

echo.
echo Adding remote and pushing...
git remote add origin %GH_URL%
git push -u origin master

echo.
echo ======================================
echo DONE! Your site will be live at:
echo https://YOURUSERNAME.github.io/trade-signal-bot/
echo ======================================
pause
