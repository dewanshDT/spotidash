import React, { useState } from "react"
import Track from "./Track"

const TrackList = ({ tracks }) => {
  return (
    <div className="track-list">
      {tracks?.map((track, index) => {
        return <Track track={track} key={index} index={index} />
      })}
    </div>
  )
}

export default TrackList
