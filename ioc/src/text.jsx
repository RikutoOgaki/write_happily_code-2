import React, { useState } from 'react'

function text() {
    const [Txt,setTxt] = useState("");  
  return (
    <div>
      <p>{Txt}</p>
      <input type="text" id='num' />
      <button onClick={()=>setTxt()}>Inner</button>
    </div>
  )
}

export default text