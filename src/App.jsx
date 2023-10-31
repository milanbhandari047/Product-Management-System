import React from 'react'
import "./App.css"
import {BrowserRouter,Routes,Route, Router}from "react-router-dom"
import Home from './pages/Home/Home'
import AddProduct from './pages/AddProduct/AddProduct'
import SingleProduct from './pages/SingleProduct/SingleProduct'
import EditProduct from './pages/EditProduct/EditProduct'
const App = () => {
  return (
    <>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/addProduct' element={<AddProduct/>} />
  <Route path='/singleProduct/:id' element = {<SingleProduct/>} />
  <Route path='/editProduct/:id' element = {<EditProduct/>} />
</Routes>

</BrowserRouter>

</> 
  )
}

export default App


