import React, { useState } from 'react'

function app3() {
    const [app,setApp] = useState("");
    const [addapp,setAddapp] = useState("");
    const clickEvent = () =>{
      setAddapp(app);
      setApp("");
    }
  return (
    <div>
        <input 
        value={app}
        onChange={(event) => setApp(event.target.value)}
        />
        <button onClick={clickEvent}>追加</button>
        <h1>現在入力されているもの：{app}</h1>
        <h2>先程追加されたもの：{addapp}</h2>
    </div>
  )
}

export default app3