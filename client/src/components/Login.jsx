import React from 'react';

const Auth_URL = "https://accounts.spotify.com/authorize?client_id=c9055834a0f14cf4bd5c211ab9c39b83&response_type=code&redirect_uri=http://localhost:3000&scope=user-top-read"

const Login = () => {
    return (
        <div>
            <a href={Auth_URL}><button>Login with Spotify</button></a>
        </div>
    )
}

export default Login;
