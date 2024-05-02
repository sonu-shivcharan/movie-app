import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
console.log(import.meta.env);
console.log(import.meta.env.VITE_REACT_APP_API_KEY);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
