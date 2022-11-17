import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from "./pages/login";
import Historico from './pages/historico';
import Register from './pages/register';
import Home from './pages/home';

function App() {

  return (
    <BrowserRouter>
        <Routes>
           <Route path="/" element={< Login/>}/> 
           <Route path="/historico" element={< Historico/>}/> 
           <Route path="/register" element={< Register/>}/> 
           <Route path="/home" element={< Home/>}/> 

        </Routes>
    </BrowserRouter>
  )
}

export default App