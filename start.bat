@REM ============================================================
@REM  To add this script to autorun on Windows OS:
@REM  1. Press Win+R and enter: taskschd.msc
@REM  2. Create a new task with administrator permissions
@REM  3. Set the trigger to "At startup" or "At log on"
@REM  4. Set the action to run this .bat file
@REM  Don't forget to use administrator permissions!
@REM ============================================================

node "%~dp0dist\index.js"
pause
