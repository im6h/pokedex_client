import { app, BrowserWindow } from "electron";
import * as path from "path";
import { InitTray } from "./trayWindow";

let mainWindow: Electron.BrowserWindow | null;

function createWindow() {
  // Create the browser window.electron
  mainWindow = new BrowserWindow({
    height: 950,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
    width: 500,
  });

  mainWindow.loadFile(path.join(__dirname, "index.html"));

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.on("ready", () => {
  createWindow();
  InitTray();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
