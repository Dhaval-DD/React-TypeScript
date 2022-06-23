import React, { useState, useEffect, useMemo } from "react";

function slowFunction(num:number)
{
    console.log('Calling Slow Function')
    for (let i=0; i<= 100000000; i++){}
    return num*2
}

export const Memo = () => {
    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)
    const doubleNumber = useMemo(() => {
     return slowFunction(number)
    }, [number])
    const themeStyles = useMemo(() =>{
        return{
            backgroundColor: dark ? 'black':'white',
            color: dark ? 'white':'black'
        }
    }, [dark])

    useEffect(() => {
        console.log('Theme Changed')
    }, [themeStyles])
    const handleClick = () => {
        setDark(prevDark => !prevDark)
    }

    return (
        <>
            <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))}/>
            <button onClick={handleClick}>Change Theme</button>
            <div style={themeStyles}>{doubleNumber}</div>
        </>
    )
}