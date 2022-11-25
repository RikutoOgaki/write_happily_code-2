import React, { useState } from 'react'

const app2 = () => {
    const [count,setCount] = useState(0)


    const logV = () => {
        setCount(count+1)
    };

    return (
        <div>
            <p>{count}</p>
            <button onClick={logV}>count</button>
        </div>
    )
}

export default app2