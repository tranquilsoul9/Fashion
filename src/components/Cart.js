import React from "react";
import "./cart.css"; // Import the CSS file for styling the cart

const Cart = () => {
  // Sample cart data
  const cartItems = [
    { id: 1, name: "T-Shirt", price: "$20", quantity: 2, img: "/images/casual-tshirt.jpg" },
    { id: 2, name: "Kurti", price: "$40", quantity: 1, img: "/images/ethnic-kurti1.jpg" },
    { id: 3, name: "Jacket", price: "$60", quantity: 1, img: "/images/winter-jacket1.jpg" },
  ];

  const totalPrice = cartItems.reduce((total, item) => total + item.price.slice(1) * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.img} alt={item.name} className="cart-item-image" />
            <div className="cart-item-info">
              <h3>{item.name}</h3>
              <p>Price: {item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h3>Total: ${totalPrice}</h3>
        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
