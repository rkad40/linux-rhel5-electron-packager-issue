# linux-rhel5-electron-packager-issue
Linux RHEL 5 Electron-Packager Issue

### Issue Details

* **Electron Packager Version:**
  * 12.1.2
* **Electron Version:**
  * 4.2.10
* **Operating System:**
  * Linux RHEL 5 x64
* **Last Known Working Electron Packager version:**:
  * N/A

### Expected Behavior
Using electron-packager to create a platform independent application that runs on Windows x64 and Linux RHEL5 x64 systems.

### Actual Behavior
I was successfully able to create and run the application for Windows x64 OS.  For Linux RHEL5 x64, I was able to create the application without issue.  But when I tried to execute it on the target system, I get an error message saying that shared library file **libgio-2.0.so.0** does not exist:

```
error while loading shared libraries: libgio-2.0.so.0: cannot open shared object file: No such file or directory
```

### To Reproduce

I created a minimal git repository that demonstrates the problem:

[linux-rhel5-electron-packager-issue](https://github.com/rkad40/linux-rhel5-electron-packager-issue)

This is a very minimal application.  For debug purposes it just loads a browser window and points it to yahoo.com.  Nothing complicated whatsoever. 

The script command (see package.json) is:

```
"build-linux-x64": "electron-packager . MyApp-1.0.0 --overwrite --platform=linux --arch=x64 --icon=app_files/Logo.png --prune=true --out=release_builds --version-string.CompanyName=XXX--version-string.ProductName=\"Electron GUI wrapper for MyApp web application\" --executableName=MyApp"
```

To execute do:

```
npm run build-linux-x64
```

Resultant application does not run on RHEL5 server complaining about the missing libgio-2.0.so.0 resource.  


### Additional Information

If **libgio-2.0.so.0** is an electron-packager dependency for Linux, might there be a package update that can be applied to RHEL5 that includes it?  
