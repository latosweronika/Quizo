import { useState, useContext } from 'react'
import { AuthContext} from './context/AuthContext'
import Login from './pages/Login'
import Sigin from './pages/Sigin'
// import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {
  const { user } = useContext(AuthContext)

  return (
    <div>
      <Routes>
        <Route path="/" element={user ? <div className="min-h-screen bg-blue-600 p-10 text-5xl text-white">
      Tailwind działa
    </div> : <Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Sigin />} />
      </Routes>
    </div>
  );
}

export default App
