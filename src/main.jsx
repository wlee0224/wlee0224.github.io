import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './App.jsx'
import './style.css'   // keep using your style.css

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
)
