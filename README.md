# Code-Server client for Electron

This is an Electron client for code-server, an open-source implementation of [Coder](https://coder.com)'s online VSCode IDE. As the base code is technically 'generic', you could also theoretically load any website using this app. However, the focus of the project is for cdr/code-server, and development is thus focused on code-server.

### How to configure

In your home directory, there should be a folder called `.code-server`. In the folder, in a file called config.yml, input the url under the `url:` section of the file.

### How to build

To build this app, simply run `yarn build` or `npm run build`. If necessary, modify the package manifest for your specific platform, or use the electron-builder CLI to specify targets for your platform.