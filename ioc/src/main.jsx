import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import App2 from "./app2"
import Btn from "./btn"
import Text from "./text"
import Class from "./class"
import App3 from "./app3"
import Todo from './todo'
// import './index.css'
// import'./class.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App />
    <App2 /> */}
    {/* <Btn /> */}
    {/* <Text/> */}
    {/* <Class/> */}
    {/* <App3/> */}
    <Todo/>
  </React.StrictMode>
)

// Reactをブラウザで見るコマンド
// npm run dev
