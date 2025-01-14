import React from "react";

const Tops = () => {
  const topsProducts = [
    { id: 1, name: "Top 1", price: "$29.99", image: "/images/casual-tshirt.jpg" },
    { id: 2, name: "Top 2", price: "$34.99", image: "/images/casual-tshirt1.jpg" },
    { id: 3, name: "Top 3", price: "$24.99", image: "/images/casual-tshirt2.jpg" },
    { id: 4, name: "Top 4", price: "$19.99", image: "/images/casual-tshirt3.jpg" },
    { id: 5, name: "Top 5", price: "$19.99", image: "/images/casual-tshirt4.jpg" },
  ];

  return (
    <div>
      <h2>Tops</h2>
      <div className="product-list">
        {topsProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tops;
