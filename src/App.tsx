import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from "./pages/login";
import Historico from './pages/historico';
import SelectedExpense from './pages/selectedExpense'
import Home from './pages/home'


function App() {

  return (
    <BrowserRouter>
        <Routes>
           <Route path="/" element={< Login/>}/> 
           <Route path="/Resgistrado" element={<SelectedExpense/>}/> 
           <Route path="/home" element={< Home/>}/> 
           <Route path="/historico" element={< Historico/>}/> 
        </Routes>
    </BrowserRouter>
  )
}

export default App