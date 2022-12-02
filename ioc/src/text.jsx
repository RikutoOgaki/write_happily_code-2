import React, { useState } from 'react'

function text() {
    const [Txt,setTxt] = useState(false);  
    const Text = () =>{
      setTxt(!Txt);
    }
  return (
    <div>
      <p>{Txt ? "Hello" : "Excuse Me"}</p>
      <button onClick={Text}>Inner</button>
    </div>
  )
}

export default text