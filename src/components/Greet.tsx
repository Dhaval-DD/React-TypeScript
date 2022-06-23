type GreetProps = {
    name : string
    messageCount?: number
    isloggedIn: boolean
}

export const Greet = (props:GreetProps) =>{
    const{messageCount = 0} = props
    return (
        <div>
           
            <h2>
            {
                props.isloggedIn ? 'Welcome To ${props.name}! you have {messageCount} Messages': 'Welcome Guest!'
            } 
            </h2>
        </div>
    )
}