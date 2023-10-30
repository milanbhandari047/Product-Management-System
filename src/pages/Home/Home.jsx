import React, { useEffect, useState } from 'react'

import "./Home.css"
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios'


const Home = () => {
const [products,setProducts] =useState([])

  const fetchProduct= async()=>{
 const response= await axios.get("https://653b2d832e42fd0d54d4c34c.mockapi.io/products")
setProducts(response.data)
  }


  useEffect(() => {
    fetchProduct()
  }, [])
  


  return (
    <>
    <Navbar />
<div className="card-container">
     {
       
       products.map((product)=>{
         return(
           <div key={product.id} className="card">
        <img src={product.productImage} alt="Product Image" />
        <h2 className="product-name">{product.productName}</h2>
        <p className="product-description">{product.productDescription}</p>
    </div>
      )
    })
}
     </div>
    </>
  )
}

export default Home
