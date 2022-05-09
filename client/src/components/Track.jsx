import React, { useState } from "react"

const Track = ({ track, index }) => {
  const [hover, setHover] = useState(false)
  return (
    <div
      className="track"
      key={index}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        src={track?.album?.images[0]?.url}
        className="background"
        style={{ opacity: hover ? "100%" : "0%" }}
      />
      <div className="index">{index + 1}</div>
      <img src={track?.album?.images[2]?.url} alt="" className="album-art" />
      <div className="info">
        <div className="title">{track?.name}</div>
        <div className="artists">
          {track?.album?.artists?.map(
            (artist, index) =>
              `${artist?.name}${
                index === track?.album?.artists.length - 1 ? "" : ", "
              }`
          )}
        </div>
      </div>
      <div className="album-name">{track?.album?.name}</div>
    </div>
  )
}

export default Track
