---
categories: 
created: 2024-11-21 11:40
updated: 2024-12-09 20:38
---
This guide, inspired by [this original post by Valkryst](https://www.valkryst.com/posts/35), has been updated with the latest instructions and improvements. It walks you through configuring Developer Mode on your LG TV and installing the Homebrew Channel, executed on an Ubuntu machine

## Prerequisites
1. Ensure your computer and TV are connected to the same network.
2. Create an [LG Developer Account](https://webostv.developer.lge.com/login).
3. Install Node.js (version **16.20.2**) to ensure compatibility, the tool doesn't work with the latest versions on Node.js.
4. Install the webOS CLI tools by running the following command:
	```bash
	npm install -g @webos-tools/cli
	```
1. Download and configure the [CLI (ares)](https://webostv.developer.lge.com/develop/tools/cli-installation).
2. [Install and configure the Developer Mode app](https://webostv.developer.lge.com/develop/getting-started/developer-mode-app#installing-developer-mode-app) on your TV. Turn on the app and enable both _Dev Mode_ and _Key Server_.

## Configuring the CLI (ares)
1. Open a terminal and run:
	```bash showLineNumbers
	ares --version
	```
	If it outputs a version number, the CLI is installed and configured correctly.

2. Add your TV as a device by running:
	```bash
	ares-setup-device my-lg 192.168.1.12 9922 prisoner
	```
	Replace `192.168.1.12` with your TV's IP address (found in the _Network_ settings).

3. Test the connection:
	```bash
	ares-device -i my-lg
	```
	If the output includes your TV details, the setup is successful.
    

## Installing the Homebrew Channel
1. Download the latest `.ipk` file from the [Homebrew Channel releases page](https://github.com/webosbrew/webos-homebrew-channel/releases).
2. Install the app using the following command:
	```bash
	ares-install -d my-lg --verbose "/path/to/org.webosbrew.hbchannel_x.x.x_all.ipk"
	```
	Replace `/path/to/` with the actual path to the downloaded `.ipk` file.

## Session Time Renewal
The Developer Mode app has a session expiration time. If it expires, all 3rd-party apps (like the Homebrew Channel) will be uninstalled. To avoid this, you can:

### Manual Renewal
1. Open the _Developer Mode_ app on your TV.
2. Click _Extend Session Time_ before the session expires.

### Automating Renewal with a Cron Job
To automate session renewal:
1. Enable the _Key Server_ in the Developer Mode app.
2. Run the following command to download the Identity File:
	```bash
	ares-novacom --device my-lg --getkey
	```

3. SSH into the TV:
	```bash
	ssh -p 9922 prisoner@192.168.1.12 -i "~/.ssh/my-lg_key"
	```
	Replace `192.168.1.12` and the file path with your own values.

4. Retrieve the session token:
	```bash
    cat /var/luna/preferences/devmode_enabled
    ```
	Copy the output (alphanumeric characters only).

5. Add a cron job on another Linux machine:
	```bash
	crontab -e
	```

6. Add the following line:
	```bash
	0 0 * * * curl https://developer.lge.com/secure/ResetDevModeSession.dev?sessionToken=yourSessionTokenHere
	```