import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from "./pages/login";
import Historico from './pages/historico';
<<<<<<< HEAD
import Register from './pages/register';
import Home from './pages/home';
=======
import SelectedExpense from './pages/selectedExpense'
import Home from './pages/home'

>>>>>>> c023fa5d9539c4de77602436425f59abce5ed86e

function App() {

  return (
    <BrowserRouter>
        <Routes>
           <Route path="/" element={< Login/>}/> 
           <Route path="/Resgistrado" element={<SelectedExpense/>}/> 
           <Route path="/home" element={< Home/>}/> 
           <Route path="/historico" element={< Historico/>}/> 
           <Route path="/register" element={< Register/>}/> 
           <Route path="/home" element={< Home/>}/> 

        </Routes>
    </BrowserRouter>
  )
}

export default App