import React from "react"

const Artist = ({ artist, index }) => {
  return (
    <div className="artist">
      <div className="image">
        <img src={artist?.images[1]?.url} alt={artist?.name} />
      </div>
      <h3 className="name">{artist?.name}</h3>
      <h5 className="followers">{artist?.followers?.total} followers</h5>
    </div>
  )
}

export default Artist
