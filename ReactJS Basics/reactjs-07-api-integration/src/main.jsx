import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"

createRoot(document.getElementById('root')).render(
  // StrictMode is a tool for highlighting potential problems in an application, here we are using it to wrap the entire application to help identify issues during development.
  <StrictMode>
    {
  /* BrowserRouter is used to enable routing in the application. 
  It wraps the App component, allowing the use of React Router features like Routes and Links within the App.
  */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
