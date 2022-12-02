// rafceで下記の内容を一気に書いてくれる
import React, { useState } from 'react'

const clas = () => {
    const [active,setActive] =useState(false)
    const classTogle = () =>{
        setActive(!active)
    }
  return (
    <div>
        <h1 className={active ? "red" : ""}>Hello World</h1>
        <button onClick={classTogle}>clasNameをつけたり外したりする</button>
    </div>
  )
}

export default clas