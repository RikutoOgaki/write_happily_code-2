import React, { useState } from 'react'
const btn = () => {
    // const [countup,setcountup] = useState(0)
    // const [countdown,setcountdown] = useState(10)
    const [count,setCount] = useState(0)
    // const countChage = () =>{
    //     if()
    // }
    const conup = () =>{
        // setcountup(countup+1)
    }
    const condown = () =>{
        // setcountdown(countdown-1)
    }
    return (
    <div>
        {/* <p>{countup}</p>
        <p>{countdown}</p> */}
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>up</button>
        <button onClick={() => setCount(count - 1)}>down</button>
    </div>
    )
}

export default btn
