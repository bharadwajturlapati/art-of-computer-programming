@echo off
rem start server if not started
rem create waas folder in program data
set CURRENT_DIR=%cd%
set APP_DATA=C:\ProgramData\WAAS
set PROGRAM_DATA=C:\ProgramData\
set APPSERVER_INSTALLTION_DIR=E:\Frameworks\waas
set DATA_DIR=E:\Frameworks\data

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
xcopy /e /v %APPSERVER_INSTALLTION_DIR% %PROGRAM_DATA%\WAAS\appserver
xcopy /e /v %DATA_DIR% %PROGRAM_DATA%\WAAS\data 
GOTO:EOF
