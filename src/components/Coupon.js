// Coupon.js
import React, { useState } from "react";

const Coupon = () => {
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const handleApply = () => {
    if (couponCode === "DISCOUNT10") {
      setDiscount(10);
      alert("Coupon Applied! You got 10% off.");
    } else {
      alert("Invalid Coupon Code.");
    }
  };

  return (
    <div className="coupon">
      <h2>Apply Coupon</h2>
      <input
        type="text"
        value={couponCode}
        onChange={(e) => setCouponCode(e.target.value)}
        placeholder="Enter Coupon Code"
      />
      <button onClick={handleApply}>Apply</button>
      {discount > 0 && <p>Discount Applied: {discount}%</p>}
    </div>
  );
};

export default Coupon;
