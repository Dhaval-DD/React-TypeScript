import { useState, useEffect} from "react";

export const Effect = () => {
    const [resourceType,setResourceType] = useState('posts')

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const [items, setItems] = useState([])

    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then(json => console.log(json))
            //.then(json => setItems(json))
    }, [resourceType])

    const handlePosts = () => {
        setResourceType('posts')
    }
    const handleUsers = () => {
        setResourceType('users')
    }
    const handleComments = () => {
        setResourceType('comments')
    }

    return (
        <>
        <div>  
            <button onClick={handlePosts}>Posts</button>
            <button onClick={handleUsers}>Users</button>
            <button onClick={handleComments}>Comments</button>
        </div>
        <h2>{resourceType}</h2>
        <div>{windowWidth}</div>
        {
            items.map(item => {
                return <pre>{JSON.stringify(item)}</pre>
            })
        }
        </>
    )
}