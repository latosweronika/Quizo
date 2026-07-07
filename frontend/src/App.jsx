import { useState, useContext } from 'react'
import { AuthContext} from './context/AuthContext'
import Login from './pages/Login'
import Sigin from './pages/Sigin'
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {
  const { user } = useContext(AuthContext)

  return (
    <div>
      <Routes>
        <Route path="/" element={user ? <h1>Welcome</h1> : <Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sigin" element={<Sigin />} />
      </Routes>
    </div>
  );
}

export default App
