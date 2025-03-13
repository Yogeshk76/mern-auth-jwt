import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { handleSuccess, handleError } from "../utils";
import { ToastContainer } from "react-toastify";

const Home = () => {
  const [loggedInUser, setLoggedInUser] = useState('');
  const [products, setProducts] = useState('');
  const navigate = useNavigate();

  // const [token, setToken] = useState(localStorage.getItem("jwtToken"));

  useEffect(() => {
    setLoggedInUser(localStorage.getItem("loggedInUser"));
  }, []);



  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("loggedInUser");
    handleSuccess("Logged out successfully");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  }

  const fetchProducts = async () => {
    try {
      const url = "http://localhost:5000/products";
      const response = await fetch(url, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("jwtToken")}`
        }

      });
  
      const result = await response.json();
      console.log(result);
      setProducts(result);
    } catch (err) {
      handleError(err);
    }
  };
  

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
    <h1>Welcome {loggedInUser}</h1>
    <button onClick={handleLogout}>Logout</button>
    <div>
      {
        products && products.map((item, index) => (
          <ul key={index}>
            <span>{item.name} : {item.price}</span>
          </ul>
        ))
      }
    </div>

    <ToastContainer />
  </div>

  )
};

export default Home;
