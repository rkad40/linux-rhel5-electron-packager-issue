"use strict";

// Load libraries.
const electron = require('electron');
const app = electron.app;

// Declare constants.  
const BrowserWindow = electron.BrowserWindow;

// Global variables.
var mainWindow = null;
var debugMode = false;

// Call function LaunchApplication when 'ready'.
app.on('ready', () => LaunchApplication());

function LaunchApplication()
{
	// Check if "enable-debug-mode" command line argument is specified.
	for (var i = 2; i < process.argv.length; i++)
	{
		if (process.argv[i] == 'enable-debug-mode') debugMode = true;
	}
	// Instantiate main window.
	mainWindow = new BrowserWindow
	(
		{
			width: 1400,
			height: 900,
			center: true,
			title: 'MyApp',
			icon: 'app_files/Logo.ico',
			'node-integration': false,
			show: false,
		}
	);
	// Load the Yahoo URL.
	mainWindow.loadURL('https://www.yahoo.com/');
	// If debug mode is specified, render debug content.
	if (debugMode) mainWindow.webContents.openDevTools();
	else mainWindow.setMenu(null);
	// Finally, show the window.
	mainWindow.show();
};
