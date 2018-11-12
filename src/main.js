const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow = null;

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

const APP_WIDTH = 100;
const APP_HEIGHT = 100;
app.on('ready', () => {
  const SCREEN_SIZE = electron.screen.getPrimaryDisplay().size;
  mainWindow = new BrowserWindow({
    width: APP_WIDTH,
    height: APP_HEIGHT,
    transparent: true,
    frame: false,
    resizable: false,
    x: SCREEN_SIZE.width - APP_WIDTH,
    y: SCREEN_SIZE.height - APP_HEIGHT,
    alwaysOnTop: true
  });
  mainWindow.loadURL('file:///' + __dirname + '/index.html');
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});
