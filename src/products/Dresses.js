import React from "react";

const Dresses = () => {
  const dressesProducts = [
    { id: 1, name: "Summer Dress 1", price: "$69.99", image: "/images/summer-dress.jpg" },
    { id: 2, name: "Summer Dress 2", price: "$89.99", image: "/images/summer-dress1.jpg" },
    { id: 3, name: "Summer Dress 3", price: "$129.99", image: "/images/summer-dress2.jpg" },
    { id: 4, name: "Summer Dress 4", price: "$49.99", image: "/images/summer-dress3.jpg" },
    { id: 5, name: "Summer Dress 5", price: "$49.99", image: "/images/summer-dress4.jpg" },
  ];

  return (
    <div>
      <h2>Summer Dresses</h2>
      <div className="product-list">
        {dressesProducts.map((product) => (
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

export default Dresses;
