import React, { useState } from 'react'

function text() {
    const [Txt,setTxt] = useState("");  

  return (
    <div>
      <p>{Txt}</p>
      <button onClick={()=>setTxt()}>Inner</button>
    </div>
  )
}

export default text