import { useState } from 'react'

export const LoggedIn = () =>{
    const [isloggedIn, setIsLoggedIn] = useState(false)

    const handleLogin =() => {
        setIsLoggedIn(true)
    }
    const handleLogout =() => {
        setIsLoggedIn(false)
    }
    return(
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
        <div>User is {isloggedIn ? 'logged in' : 'logged out'}</div>
        </div>
    )
}