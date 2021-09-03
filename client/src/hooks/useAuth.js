import { useState, useEffect } from 'react'
import axios from 'axios';

const useAuth = ({code}) => {
    const [accessToken, setAccessToken] = useState();
    const [refreshToken, setRefreshToken] = useState();
    const [expiresIn, setExpiresIn] = useState();

    useEffect(() => {
        axios.post("http://localhost:5000/login", {
            code
        }).then(res => {
            setAccessToken(res.data.accessToken);
            setRefreshToken(res.data.refreshToken);
            setExpiresIn(res.data.expiresIn);
            window.history.pushState({}, null, "/");
        }).catch((err) => {
            window.location = "/";
            console.log(err)
        });
    }, [code]);

    return accessToken;
}

export default useAuth
