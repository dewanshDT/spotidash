import React, { useEffect, useState } from "react"
import SpotifyWebApi from "spotify-web-api-node"
import useAuth from "../hooks/useAuth"
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

  useEffect(() => {
    if (!accessToken) return
    spotifyApi.setAccessToken(accessToken)
  }, [accessToken])

  useEffect(() => {
    if (!accessToken) return
    spotifyApi
      .getMe()
      .then((res) => {
        console.log(res.body)
        setUser(res?.body)
      })
      .catch((error) => console.log(error))
  }, [accessToken])

  const Tabs = ({ option }) => {
    if (option === "tracks") return <TrackList spotifyApi={spotifyApi} />
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
