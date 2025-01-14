import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Import Navbar component
import Homepage from "./components/Homepage";
import Cart from "./components/Cart";
import ComplaintForm from "./components/ComplaintForm";
import UserLogin from "./components/UserLogin";
import CreateAccount from "./components/CreateAccount";
import WinterWear from './products/WinterWear';
import EthnicWear from './products/EthnicWear';
import Tops from './products/Tops';
import Dresses from './products/Dresses';
import TestPage from './components/TestPage'
import { BestSellingProducts } from './services/productService';

function App() {
  return (
    <Router>
      <Navbar /> {/* Add Navbar here to make it visible on all pages */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/complaint" element={<ComplaintForm />} />
        <Route path="/profile" element={<UserLogin />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/products/winter-wear" element={<WinterWear />} />
        <Route path="/products/ethnic-wear" element={<EthnicWear />} />
        <Route path="/products/tops" element={<Tops />} />
        <Route path="/products/summer-dresses" element={<Dresses />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/best-sellers" element={<BestSellingProducts />} /> {/* Add route for best-sellers */}

      </Routes>
    </Router>
  );
}

export default App;
