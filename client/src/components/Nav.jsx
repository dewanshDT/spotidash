import React from "react"

const Nav = ({ navValue, setNavValue }) => {
  return (
    <div className="nav-menue">
      <div
        className={`menue-item ${navValue === "tracks" ? "active" : ""}`}
        onClick={() => setNavValue("tracks")}
      >
        top tracks
      </div>
      <div
        className={`menue-item ${navValue === "artists" ? "active" : ""}`}
        onClick={() => setNavValue("artists")}
      >
        top artists
      </div>
      {/* <div
        className={`menue-item ${navValue === "genres" ? "active" : ""}`}
        onClick={() => setNavValue("genres")}
      >
        top genres
      </div> */}
    </div>
  )
}

export default Nav
