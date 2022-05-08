require("dotenv").config()
const express = require("express")
const SpotifyWebApi = require("spotify-web-api-node")
const cors = require("cors")
const PORT = 5000

const app = express()
app.use(cors())
app.use(express.json())

const clientID = process.env.CLIENT_ID
const clientSecret = process.env.CLIENT_SECRET

console.log("🚨🛸", process.env.CLIENT_ID)

app.post("/refresh", (req, res) => {
  const refreshToken = req.body.refreshToken
  const spotifyApi = new SpotifyWebApi({
    clientId: clientID,
    redirectUri: "http://localhost:3000",
    clientSecret: clientSecret,
    refreshToken,
  })

  spotifyApi
    .refreshAccessToken()
    .then((data) => {
      res.json({
        accessToken: data.body.access_token,
        expiresIn: data.body.expires_in,
      })
    })
    .catch((err) => {
      res.sendStatus(400)
      console.log("⚠️ refresh token alert ⚠️")
      console.log(err)
    })
})

app.post("/login", (req, res) => {
  const code = req.body.code
  console.log("this is the code 👇")
  console.log(code)
  const spotifyApi = new SpotifyWebApi({
    clientId: clientID,
    redirectUri: "http://localhost:3000",
    clientSecret: clientSecret,
  })

  spotifyApi
    .authorizationCodeGrant(code)
    .then((data) => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      })
    })
    .catch((err) => {
      console.log("⚠️ authorization error")
      console.log(err)

      res.sendStatus(400)
    })
})

app.listen(PORT, () => console.log(`LISTENING ON PORT ${PORT}`))
