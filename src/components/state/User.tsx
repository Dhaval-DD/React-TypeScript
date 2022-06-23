import { useState } from 'react'

type AuthUser = {
    name: string
    email: string
}

export const LoggedIn = () =>{
    const [user, setUser] = useState<AuthUser>({} as AuthUser)

    const handleLogin =() => {
       setUser({
        name:'Dhaval',
        email:'ass@g.com'

       })
    }
    // const handleLogout =() => {
    //     setUser(null)
    // } 
    return(
        <div>
            <button onClick={handleLogin}>Login</button>
            {/* <button onClick={handleLogout}>Logout</button> */}
            <div>User is {user.name}</div>
            <div>User email is {user.email }</div>
        </div>
    )
}