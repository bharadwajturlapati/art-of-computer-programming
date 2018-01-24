Dim WSHShell 
Dim MyShortcut 
Dim DesktopPath

WSHShell = CreateObject("WScript.Shell") 

DesktopPath = WSHShell.SpecialFolders("Desktop") 
MyShortcut = WSHShell.CreateShortCut(DesktopPath & "\WorkSpaceFabric" & ".lnk")  
MyShortcut.WorkingDirectory = "%USERPROFILE%\Desktop" 
MyShortcut.IconLocation = "C:\ProgramData\WAAS\app\resources\app\imgs\icon.ico"
MyShortcut.TargetPath = "C:\ProgramData\WAAS\app\WorkSpaceFabric.exe"
MyShortcut.WindowStyle = 1 
MyShortcut.Arguments = "" 
MyShortcut.Save 
MyShortcut = Nothing