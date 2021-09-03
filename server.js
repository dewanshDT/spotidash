const express = require("express");
const SpotifyWebApi = require("spotify-web-api-node");
const cors = require("cors");
const PORT = 5000;

const app = express();
app.use(cors());
app.use(express.json());

app.post("/refresh", (req, res) => {
  const refreshToken = req.body.refreshToken;
  const spotifyApi = new SpotifyWebApi({
    clientId: "c9055834a0f14cf4bd5c211ab9c39b83",
    redirectUri: "http://localhost:3000",
    clientSecret: "86caa18527244f03bdf13b1fc4e63227",
    refreshToken,
  });

  spotifyApi
    .refreshAccessToken()
    .then((data) => {
      console.log(data.body);
    })
    .catch(() => {
      res.sendStatus(400);
    });
});

app.post("/login", (req, res) => {
  const code = req.body.code;
  console.log("this is the code 👇");
  console.log(code);
  const spotifyApi = new SpotifyWebApi({
    clientId: "c9055834a0f14cf4bd5c211ab9c39b83",
    redirectUri: "http://localhost:3000",
    clientSecret: "86caa18527244f03bdf13b1fc4e63227",
  });

  spotifyApi
    .authorizationCodeGrant(code)
    .then((data) => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      });
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
});

app.listen(PORT, () => console.log(`LISTENING ON PORT ${PORT}`));
