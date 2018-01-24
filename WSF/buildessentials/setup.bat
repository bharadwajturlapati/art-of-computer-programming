@echo off
rem create waas folder in program data
echo this progam needs to run only once.
set CURRENT_DIR=%cd%
set APP_DATA=C:\ProgramData\WAAS
set PROGRAM_DATA=C:\ProgramData\
set APPSERVER_INSTALLTION_DIR=waas
set DATA_DIR=data
set APPDIR=WorkSpaceFabric
set APPSETUP=appsetup

if exist %APP_DATA% (call:removewaas) else (call:createwaasdir)
GOTO:EOF

:removewaas
rmdir /s /q %APP_DATA%
call:createwaasdir
GOTO:EOF

:createwaasdir
mkdir %PROGRAM_DATA%\WAAS
mkdir %PROGRAM_DATA%\WAAS\appserver
mkdir %PROGRAM_DATA%\WAAS\data
mkdir %PROGRAM_DATA%\WAAS\app
mkdir %PROGRAM_DATA%\WAAS\appsetup
xcopy /e /v %APPSERVER_INSTALLTION_DIR% %PROGRAM_DATA%\WAAS\appserver
xcopy /e /v %DATA_DIR% %PROGRAM_DATA%\WAAS\data
xcopy /e /v %APPDIR% %PROGRAM_DATA%\WAAS\app
copy  appsetup\createshortcut.vbs %PROGRAM_DATA%\WAAS\

cd /D %APP_DATA%\appserver\
wscript silentStart.VBS

wscript C:\ProgramData\WAAS\createshortcut.VBS
timeout /t 10
echo installtion completed.
GOTO:EOF