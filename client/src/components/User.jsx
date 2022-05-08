import React from "react"

const User = ({ user }) => {
  return (
    <div className="user">
      <img
        className="image"
        src={user?.images[0]?.url}
        alt={user?.display_name}
      />
      <h2 className="name">{user?.display_name}</h2>
      <h4 className="followers">{user?.followers?.total} followers</h4>
      <button className="btn">My Playlists</button>
    </div>
  )
}

export default User
