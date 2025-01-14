import React, { useState, useEffect } from 'react';

import HomepageNavbar from "./HomepageNavbar"; // Import the Navbar
import "./homepage.css"; // Import the CSS file
import { Link } from "react-router-dom";
import { fetchBestSellingProducts } from '../services/productService';


const Homepage = () => {
  // Sample best-selling products
  const bestSellingProducts = [
    // Winter wear
    { id: 1, name: "Winter Jacket 1", price: "$99.99", image: "/images/winter-jacket.jpg" },
    { id: 2, name: "Winter Jacket 2", price: "$89.99", image: "/images/winter-jacket1.jpg" },
    { id: 3, name: "Winter Jacket 3", price: "$79.99", image: "/images/winter-jacket2.jpg" },
    { id: 4, name: "Winter Jacket 4", price: "$59.99", image: "/images/winter-jacket3.jpg" },
  
    // Ethnic wear
    { id: 5, name: "Ethnic Kurti 1", price: "$49.99", image: "/images/ethnic-kurti.jpg" },
    { id: 6, name: "Ethnic Kurti 2", price: "$74.99", image: "/images/ethnic-kurti1.jpg" },
    { id: 7, name: "Ethnic Kurti 3", price: "$199.99", image: "/images/ethnic-kurti2.jpg" },
    { id: 8, name: "Ethnic Kurti 4", price: "$149.99", image: "/images/ethnic-kurti3.jpg" },
  
    // Casual wear
    { id: 9, name: "Casual T-shirt 1", price: "$29.99", image: "/images/casual-tshirt.jpg" },
    { id: 10, name: "Casual T-shirt 2", price: "$19.99", image: "/images/casual-tshirt1.jpg" },
    { id: 11, name: "Casual T-shirt 3", price: "$39.99", image: "/images/casual-tshirt2.jpg" },
    { id: 12, name: "Casual T-shirt 4", price: "$49.99", image: "/images/casual-tshirt3.jpg" },
  
    // Dresses
    { id: 13, name: "Summer Dress 1", price: "$69.99", image: "/images/summer-dress.jpg" },
    { id: 14, name: "Summer Dress 2", price: "$89.99", image: "/images/summer-dress1.jpg" },
    { id: 15, name: "Summer Dress 3", price: "$129.99", image: "/images/summer-dress2.jpg" },
    { id: 16, name: "Summer Dress 4", price: "$49.99", image: "/images/summer-dress3.jpg" },
    { id: 17, name: "Summer Dress 4", price: "$49.99", image: "/images/casual-tshirt4.jpg" },
    { id: 18, name: "Summer Dress 4", price: "$49.99", image: "/images/winter-jacket4.jpg" },

  ];
  /*
 const Homepage = () => {
    const [bestSellingProducts, setBestSellingProducts] = useState([]);

    useEffect(() => {
        const loadProducts = async () => {
            const products = await fetchBestSellingProducts();
            setBestSellingProducts(products);
        };
        loadProducts();
    }, []);
  const loadProducts = async () => {
      const bestSellingProducts = await fetchBestSellingProducts();
      console.log('Best Selling Products:', bestSellingProducts);
  };
  
  loadProducts();

   
  /*
  const Homepage = () => {
const [bestSellingProducts, setBestSellingProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const products = await fetchProducts();
        setBestSellingProducts(products);
        setLoading(false);
      } catch (err) {
        setError("Failed to load products");
        setLoading(false);
      }
    };

    loadProducts();
  }, []);
  */

  return (
    <div>
      <HomepageNavbar />
      <div className="best-sellers">
        <h2>Best-selling Products</h2>
        <div className="product-list">
          {bestSellingProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;

