import React, { useState } from 'react'

function text() {
    const [Txt,setTxt] = useState(false);  
    // ↑useStateで最初の初期値をfalseに設定
    const Text = () =>{
      setTxt(!Txt);
      // ↑setTxtにTxtの逆の意味を持った関数を作る
    }
  return (
    <div>
      <p>{Txt ? "Hello" : "Excuse Me"}</p>
      {/* ↑Txtの簡単なfor文が書かれている
          左ならtrue。右ならfalse。という扱いになっっている
      */}
      <button onClick={Text}>Inner</button>
      {/* ↑ボタンのクリックでTextの関数を動かしている */}
    </div>
  )
}

export default text