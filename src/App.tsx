import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from "./pages/login";
import Historico from './pages/historico';

function App() {

  return (
    <BrowserRouter>
        <Routes>
           <Route path="/" element={< Login/>}/> 
           <Route path="/historico" element={< Historico/>}/> 
        </Routes>
    </BrowserRouter>
  )
}

export default App