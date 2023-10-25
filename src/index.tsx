import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/app/app.tsx'
import './index.css'
import CssBaseline from '@mui/material/CssBaseline'
import { Footer } from './components/footer/footer.tsx'
import { Header } from './components/header/header.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CssBaseline />
    <Header/>
    <App />
    <Footer />
  </React.StrictMode>,
)
