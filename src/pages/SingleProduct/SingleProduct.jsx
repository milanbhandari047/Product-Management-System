import React, { useEffect, useState } from "react";
import "./SingleProduct.css";
import Navbar from "../../components/Navbar/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const SingleProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  //store product data coming in object
  const [product, setProducts] = useState({});

  //fetch single Product
  const fetchSingleProduct = async () => {
    const response = await axios.get(
      "https://653b2d832e42fd0d54d4c34c.mockapi.io/products/" + id
    );
    setProducts(response.data);
  };
  useEffect(() => {
    fetchSingleProduct();
  }, []);

  //delete product
  const deleteProduct = async () => {
    const response = await axios.delete(
      "https://653b2d832e42fd0d54d4c34c.mockapi.io/products/" + id
    );
    if (response.status == 200) {
      navigate("/");
    } else {
      alert("Something went wrong. Try again !");
    }
  };

  return (
    <>
      <Navbar />
      <div className="card">
        <img src={product.productImage} alt="Product Image" />
        <h2 className="product-name">{product.productName}</h2>
        <p className="product-description">{product.productDescription}</p>
        {product.productMaterial}
        <button onClick={deleteProduct}>Delete</button>
      </div>
    </>
  );
};

export default SingleProduct;
