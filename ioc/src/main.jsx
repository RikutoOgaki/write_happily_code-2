import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import App2 from "./app2"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <App2 />
  </React.StrictMode>
)
