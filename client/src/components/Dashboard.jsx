import React from 'react'
import useAuth from '../hooks/useAuth'

const Dashboard = ({code}) => {
    const accessToken = useAuth({code: code});

    return (
        <div>
            {code}
        </div>
    )
}

export default Dashboard
