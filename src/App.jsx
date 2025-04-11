import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import SearchResults from './components/SearchResults'

const App = () => {
  return (

    <Router>
      <div className=' font-inter'>
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/search' element={<SearchResults />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App