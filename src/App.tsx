import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from "./pages/login";
import Historico from './pages/historico';
import Home from './pages/home';
import SelectedExpense from './pages/selectedExpense';
import { Expense } from './pages/expense/expense';
function App() {

  return (
    <BrowserRouter>
        <Routes>
           <Route path="/" element={< Login/>}/> 
           <Route path="/Resgistrado" element={<SelectedExpense/>}/> 
           <Route path="/home" element={< Home/>}/> 
           <Route path="/historico" element={< Historico/>}/> 
           <Route path="/expense" element={< Expense/>}/> 
           <Route path="/home" element={< Home/>}/> 
        </Routes>
    </BrowserRouter>
  )
}

export default App