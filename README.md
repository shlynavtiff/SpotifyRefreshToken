# Spotify Refresh Token Generator

A simple Node.js script to obtain a Spotify refresh token for use with the Spotify API. This token is needed for your ESP32 Spotify Player project to access your Spotify account.

## Prerequisites

Before you begin, make sure you have:
- [Node.js](https://nodejs.org/) installed (version 14 or higher)
- A Spotify account (Free or Premium)
- A Spotify Developer App (see Setup section below)

## Spotify Developer App Setup

1. Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Log in with your Spotify account
3. Click **"Create app"**
4. Fill in the details:
   - **App name**: `ESP32 Spotify Player` or anything that you like
   - **App description**: `Get refresh token for ESP32`
   - **Redirect URI**: `input ur redirect uri here` this is needed to proceed
   - **Which API/SDKs are you planning to use?**: Select **Web API**
5. Check the Terms of Service box
6. Click **"Save"**
7. On your app page, click **"Settings"**
8. Copy your **Client ID** and **Client Secret**

## Installation

Open your terminal/command prompt and follow these steps:

### Step 1: Create a project folder
```bash
mkdir spotify-token-getter
cd spotify-token-getter
```

### Step 2: Initialize npm
```bash
npm init -y
```

This creates a `package.json` file for your project.

### Step 3: Install required packages
```bash
npm install express node-fetch open
```

This installs three packages:
- `express` - Web server to handle OAuth callback
- `node-fetch` - Make HTTP requests to Spotify API
- `open` - Automatically open browser

### Step 4: Create the script file

Create a file named `get-spotify-refresh-token.js` in your project folder and paste your JavaScript code into it.

### Step 5: Edit the configuration

Open `get-spotify-refresh-token.js` and update these lines with your Spotify app credentials:

```javascript
const CLIENT_ID = 'UR_TOKEN_Scheyeahhh';
const CLIENT_SECRET = 'UR_TOKEN_Scheyeahhh';
const REDIRECT_URI = "UR_REDIRECT_URI";
```

Replace `UR_TOKEN_Scheyeahhh`, `UR_TOKEN_Scheyeahhh`, `UR_REDIRECT_URI` with the values from your Spotify Developer Dashboard.

## Usage

### Run the script
```bash
node get-spotify-refresh-token.js
```

### What happens next:

1. **Browser opens automatically** - Your default browser will open to Spotify's authorization page
2. **Log in to Spotify** - If not already logged in, enter your Spotify credentials
3. **Grant permissions** - Click **"Agree"** to authorize the app
4. **Get your token** - You'll be redirected to a success page showing your refresh token
5. **Check the terminal** - Your refresh token will also be printed in the terminal

### Example output:
```
Server running on http://localhost:3000
Opening browser for Spotify authorization...
Your Spotify refresh token is:
wasdwasdwasdwasdwasdwasdwasdwaswdwasdwas

Copy this token and paste it into your ESP32 code!
```

## Copy the Refresh Token to Your ESP32 Code

Once you have your refresh token:

1. Open your ESP32 Arduino code
2. Find this line:
```cpp
const char* spotify_refresh_token = "UR_TOKEN_Scheyeahhh";
```
3. Replace `UR_TOKEN_Scheyeahhh` with your actual refresh token
4. Upload the code to your ESP32

## Troubleshooting

### "Cannot find module 'express'"
- Run `npm install express node-fetch open` again

### "Address already in use" error
- Another program is using port 3000
- Close other applications or change the PORT in the script

### Browser doesn't open automatically
- Manually open: `http://localhost:3000` in your browser
- Click the authorization link that appears

### "Invalid redirect URI" error
- Make sure you added `http://localhost:3000/callback` in your Spotify App settings
- Check for typos (http vs https, correct port number)

### Token doesn't work in ESP32
- Make sure you copied the entire token
- Check for extra spaces or line breaks
- Verify your Client ID and Client Secret are correct in the ESP32 code

## Security Notes

⚠️ **Important:**
- Never share your Client Secret publicly
- Never commit your refresh token to GitHub or public repositories
- The refresh token gives access to your Spotify account
- Treat it like a password

## What This Token Does

The refresh token allows your ESP32 to:
-  See what you're currently playing
-  Control playback (play/pause/skip)
-  Like/unlike songs
-  Get album artwork

## Token Expiration

- **Refresh tokens** typically don't expire (last indefinitely)
- **Access tokens** expire every hour, but your ESP32 automatically refreshes them
- If your refresh token stops working, just run this script again to get a new one

## Need Help?

If you run into issues:
1. Check the Troubleshooting section above
2. Make sure all prerequisites are installed
3. Verify your Spotify Developer App settings
4. Check that your redirect URI is exactly: `http://localhost:3000/callback`


## Done! 🎉

You now have your Spotify refresh token! Copy it to your ESP32 code and enjoy your Spotify display!
