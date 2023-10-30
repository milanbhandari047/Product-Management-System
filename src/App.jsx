import React from 'react'
import "./App.css"
import {BrowserRouter,Routes,Route, Router}from "react-router-dom"
import Home from './pages/Home/Home'
import AddProduct from './pages/AddProduct/AddProduct'
const App = () => {
  return (
    <>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/addProduct' element={<AddProduct/>} />
</Routes>

</BrowserRouter>

</> 
  )
}

export default App


