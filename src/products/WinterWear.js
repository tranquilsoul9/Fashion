import React from "react";

const WinterWear = () => {
  const winterProducts = [
    { id: 1, name: "Winter Jacket 1", price: "$99.99", image: "/images/winter-jacket.jpg" },
    { id: 2, name: "Winter Jacket 2", price: "$89.99", image: "/images/winter-jacket1.jpg" },
    { id: 3, name: "Winter Jacket 3", price: "$79.99", image: "/images/winter-jacket2.jpg" },
    { id: 4, name: "Winter Jacket 4", price: "$59.99", image: "/images/winter-jacket3.jpg" },
    { id: 5, name: "Winter Jacket 5", price: "$59.99", image: "/images/winter-jacket4.jpg" },
  ];

  return (
    <div className="product-list">
      {winterProducts.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.name} className="product-image" />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default WinterWear;
