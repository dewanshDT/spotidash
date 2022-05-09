import React, { useEffect, useState } from "react"
import SpotifyWebApi from "spotify-web-api-node"
import useAuth from "../hooks/useAuth"
import ArtistList from "./ArtistList"
import Nav from "./Nav"
import TrackList from "./TrackList"
import User from "./User"

require("dotenv").config()

const spotifyApi = new SpotifyWebApi({
  clientId: "449e1841693a47a7b1a0637602f2a3ff",
})

const Dashboard = ({ code }) => {
  const accessToken = useAuth({ code })
  const [user, setUser] = useState()
  const [navValue, setNavValue] = useState("tracks")
  const [tracks, setTracks] = useState([])
  const [artists, setArtists] = useState([])

  useEffect(() => {
    if (!accessToken) return
    spotifyApi.setAccessToken(accessToken)
  }, [accessToken])

  useEffect(() => {
    if (!accessToken) return
    spotifyApi
      .getMe()
      .then((res) => {
        setUser(res?.body)
      })
      .catch((error) => console.log(error))

    spotifyApi
      .getMyTopTracks()
      .then((res) => {
        setTracks(res.body.items)
      })
      .catch((err) => console.log(err))

    spotifyApi
      .getMyTopArtists()
      .then((res) => {
        console.log(res.body.items)
        setArtists(res.body.items)
      })
      .catch((err) => console.log(err))
  }, [accessToken])

  const Tabs = ({ option }) => {
    if (option === "tracks") return <TrackList tracks={tracks} />
    if (option === "artists") return <ArtistList artists={artists} />
    return ""
  }

  return (
    <div className="dashboard">
      <section className="left">
        <User user={user} />
      </section>
      <section className="right">
        <Nav navValue={navValue} setNavValue={setNavValue} />
        <Tabs option={navValue} />
      </section>
    </div>
  )
}

export default Dashboard
