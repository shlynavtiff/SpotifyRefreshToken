import express from "express";
import fetch from "node-fetch";
import open from "open";

const CLIENT_ID = "UR_TOKEN_Scheyeahhh";
const CLIENT_SECRET = "UR_TOKEN_Scheyeahhh"; 
const REDIRECT_URI = "UR_REDIRECT_URI"; 

const app = express();
const PORT = 5173;

// Build authorization URL
const scope = [
  "user-read-playback-state", // change to what is needed sah
  "user-modify-playback-state",
  "user-library-modify",
  "user-library-read",
].join(" ");

const authUrl =
  `https://accounts.spotify.com/authorize?` +
  new URLSearchParams({
    response_type: "code",
    client_id: CLIENT_ID,
    scope,
    redirect_uri: REDIRECT_URI,
    show_dialog: "true",
  });

app.get("/callback", async (req, res) => {
  const code = req.query.code;
  if (!code) return res.send("No code received.");

// Exchange code for tokens
  const tokenResponse = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64"),
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: REDIRECT_URI,
    }),
  });

  const data = await tokenResponse.json();

  console.log("\n🎧 Spotify OAuth Success!");
  console.log("Access Token:", data.access_token);
  console.log("Refresh Token:", data.refresh_token);
  console.log("\nCopy the refresh token and store it in your ESP32 code.\n");

  res.send(
    "<h2>✅ Success! Check your terminal for the refresh token.</h2>You can close this tab now."
  );

  // Optional: Close the process automatically after a delay
  setTimeout(() => process.exit(0), 3000);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at ${REDIRECT_URI}`);
  console.log(`Opening Spotify authorization page...`);
  open(authUrl);
});
