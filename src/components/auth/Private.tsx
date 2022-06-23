import React from 'react'
import { Login } from './Login'
import { Profile, ProfileProps } from './Profile'


type PrivateProps = {
    isLoggedIn: boolean
    Component : React.ComponentType<ProfileProps>
}

export const Private = ({ isLoggedIn, Component: Component}:PrivateProps)=>{
    if(isLoggedIn){
        return<Component name='Dhaval'></Component>
    }else{
        return <Login></Login>
    }
}
