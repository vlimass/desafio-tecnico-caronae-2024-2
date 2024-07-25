import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header } from './components/Header.tsx'
import './index.css'
import { RideDetails } from './pages/RideDetails.tsx'
// import { Home } from './pages/Home.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    {/* <Home /> */}
    <RideDetails />
  </React.StrictMode>,
)
