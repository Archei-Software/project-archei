import React from 'react'
import ReactDOM from 'react-dom/client'
import Route from "./routes";
import './assets/style/global.css'
import CookieBanner from './components/cookieBanner/CookieBanner';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
     <Route />
     <CookieBanner />
  </React.StrictMode>,
  
)