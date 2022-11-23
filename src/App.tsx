import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from "./pages/login";
import Historico from './pages/historico';
import Home from './pages/home';
import SelectedExpense from './pages/selectedExpense';
import Register  from './pages/register';
function App() {

  return (
    <BrowserRouter>
        <Routes>
           <Route path="/" element={< Login/>}/> 
           <Route path="/Resgistrado" element={<SelectedExpense/>}/> 
           <Route path="/home" element={< Home/>}/> 
           <Route path="/historico" element={< Historico/>}/> 
           <Route path="/newRegister" element={< Register/>}/> 
           <Route path="/home" element={< Home/>}/> 
           <Route path="/cadastrar" element={< Home/>}/> 
        </Routes>
    </BrowserRouter>
  )
}

export default App