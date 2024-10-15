
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'

import Landing from './pages/Landing'
import Home from './pages/Home'
import Watchhistory from './pages/Watchhistory'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/watchhistory' element={<Watchhistory />} />

      </Routes>
      <Footer />
    </>
  )
}

export default App
