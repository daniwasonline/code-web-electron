
const { app, Menu, BrowserWindow, globalShortcut } = require("electron");
const path = require("path");
const os = require("os");
const fs = require("fs");
const yaml = require("js-yaml");
let url;

if (!fs.existsSync(path.join(os.homedir() + "/.code-server"))) fs.mkdirSync(path.join(os.homedir() + "/.code-server"));
if (!fs.existsSync(path.join(os.homedir() + "/.code-server/config.yml"))) fs.writeFileSync(os.homedir() + "/.code-server/config.yml", "url: https://example.com");

try {
  url = yaml.load(fs.readFileSync(path.join(os.homedir() + "/.code-server/config.yml")));
  if (!url.url) throw new Error("no URL section");
} catch (e) {
  throw new Error("The file doesn't exist or the YAML isn't valid! Please input a proper URL under url: and try again!");
};

let mainWindow;

app.on("ready", async function () {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    fullscreen: false,
    webPreferences: {
      nodeIntegration: false,
      zoomFactor: 1.25
    },
    preload: path.join(__dirname + "/preload.js")
  });

  mainWindow.loadURL(url.url);
});