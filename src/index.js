const electron = require("electron");
const path = require("path");
const BrowserWindow = electron.remote.BrowserWindow;
const win = new BrowserWindow({
  width: 800,
  height: 600,
  webPreferences: {
    nodeIntegration: true,
    enableRemoteModule: true,
  },
});
