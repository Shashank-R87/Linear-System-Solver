const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  // eslint-disable-line global-require
  app.quit();
}

const createChildWindow = () => {
  const childWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    frame: false,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  })
  childWindow.loadFile(path.join(__dirname, 'matrix.html'))
}

const createHowWindow = () => {
  const HowWindow = new BrowserWindow({
    width: 414,
    height: 550,
    openDevTools: false,
    frame: false,
    transparent: true,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  })
  HowWindow.loadFile(path.join(__dirname, 'how.html'))
}

ipcMain.on("msg",(event,data)=>{
  createChildWindow();
})

ipcMain.on("msg1",(event,data)=>{
  createHowWindow();
})

var createWindow = () => {
  // Create the browser window.
  var mainWindow = new BrowserWindow({
    width: 414,
    height: 550,
    openDevTools: false,
    frame: false,
    transparent: true,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'index.html'));
  // Open the DevTools.
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
