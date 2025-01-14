import React from "react";

const EthnicWear = () => {
  const ethnicWearProducts = [
    { id: 1, name: "Ethnic Kurti 1", price: "$49.99", image: "/images/ethnic-kurti.jpg" },
    { id: 2, name: "Ethnic Kurti 2", price: "$74.99", image: "/images/ethnic-kurti1.jpg" },
    { id: 3, name: "Ethnic Kurti 3", price: "$199.99", image: "/images/ethnic-kurti2.jpg" },
    { id: 4, name: "Ethnic Kurti 4", price: "$149.99", image: "/images/ethnic-kurti3.jpg" },
    { id: 5, name: "Ethnic Kurti 5", price: "$149.99", image: "/images/ethnic-kurti4.jpg" },
  ];

  return (
    <div>
      <div className="product-list">
        {ethnicWearProducts.map((product) => (
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

export default EthnicWear;
