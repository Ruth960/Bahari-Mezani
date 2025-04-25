import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SignUpPage from './pages/SignUpPage'
import LogInPage from './pages/LogInPage'
import FishListingsPage from './pages/FishListingsPage'
import AboutPage from './pages/AboutPage';
import FishermanDashboardPage from './pages/FisherManDashboardPage'
import BuyerDashboardPage from './pages/BuyerDashboardPage'
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/fish-listings" element={<FishListingsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/fisherman-dashboard" element={<FishermanDashboardPage />} />
        <Route path="/buyer-dashboard" element={<BuyerDashboardPage />} />

        <Route path="/buyer-dashboard" element={<BuyerDashboardPage />} />
      </Routes>
    </>
  )
}

export default App
