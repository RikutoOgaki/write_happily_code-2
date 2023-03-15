import React from 'react'

function reversi() {

    const rev = document.getElementById('reversi')
    console.log(rev);

    let tr = document.createElement('tr')
    for(let i=0; i<8; i++){
        let td = document.createElement('td')
        tr.appendChild(td)
        rev.innerHTML = tr
    }

  return (
    <div>
        <table id='reversi'></table>
    </div>
  )
}

export default reversi