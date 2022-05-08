import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpotify } from "@fortawesome/free-brands-svg-icons"

const Auth_URL = `https://accounts.spotify.com/authorize?client_id=449e1841693a47a7b1a0637602f2a3ff&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`

const Login = () => {
  return (
    <div className="login">
      <a href={Auth_URL}>
        <button className="btn login-btn">
          <span>Login with Spotify</span> <FontAwesomeIcon icon={faSpotify} />
        </button>
      </a>
    </div>
  )
}

export default Login
