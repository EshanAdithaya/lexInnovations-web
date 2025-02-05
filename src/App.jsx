import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landingpage from './Landingpage'


// CSS imports
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  )
}

export default App