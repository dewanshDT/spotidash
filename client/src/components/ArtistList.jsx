import React from "react"
import Artist from "./Artist"

const ArtistList = ({ artists }) => {
  return (
    <div className="artist-list">
      {artists?.map((artist, index) => {
        return <Artist artist={artist} index={index} key={index} />
      })}
    </div>
  )
}

export default ArtistList
