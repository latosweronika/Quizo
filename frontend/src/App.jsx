import { useState, useContext } from 'react'
import { AuthContext} from './context/AuthContext'

import Login from './pages/Login'
import Sigin from './pages/Sigin'
import Home from './pages/Home'

import { Route, Routes } from 'react-router-dom'

function App() {
  const { user } = useContext(AuthContext)

  return (
    <div>
      <Routes>
        <Route path="/" element={user ? <Home/> : <Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Sigin />} />
      </Routes>
    </div>
  );
}

export default App
