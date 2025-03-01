import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
import Register from './components/Register.jsx'

import './index.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Register/>
    
    
  </StrictMode>,
)
