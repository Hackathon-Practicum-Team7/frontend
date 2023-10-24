import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/app/app.tsx'
import './index.css'
import CssBaseline from '@mui/material/CssBaseline'
import { Footer } from './components/footer/footer.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CssBaseline />
    <App />
    <Footer />
  </React.StrictMode>,
)
