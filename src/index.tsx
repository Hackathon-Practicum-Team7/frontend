import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/app/app.tsx'
import './index.css'
import CssBaseline from '@mui/material/CssBaseline'
import {Provider} from "react-redux";
import {store} from "./services/store";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <CssBaseline />
      <App />
    </Provider>
  </React.StrictMode>,
)
