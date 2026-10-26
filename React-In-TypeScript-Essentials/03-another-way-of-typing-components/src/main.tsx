import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  // Render the root component within StrictMode
  // StrictMode is a tool for highlighting potential problems in an application. It activates additional checks and warnings for its descendants.
  <StrictMode>
    {/* The App component is the root component of the application. */}
    <App />
  </StrictMode>,
)
