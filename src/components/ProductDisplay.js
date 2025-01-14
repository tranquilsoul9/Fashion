import React from 'react';
import kurti1 from '../assets/images/kurti/kurti1.jpg';
//import kurti2 from '../assets/images/kurti/kurti2.jpg';
import top1 from '../assets/images/tops/top1.jpg';
//import top2 from '../assets/images/tops/top2.jpg'; // Example of a new product

function ProductDisplay() {
  // Sample products with name, description, and price
  const products = [
    { id: 1, name: 'Kurti 1', price: '$49.99', image: kurti1 },
    //{ id: 2, name: 'Kurti 2', price: '$59.99', image: kurti2 },
    { id: 3, name: 'Top 1', price: '$29.99', image: top1 },
    //{ id: 4, name: 'Top 2', price: '$39.99', image: top2 },
  ];

  return (
    <div className="product-display">
      {products.map((product) => (
        <div className="product-item" key={product.id}>
          <img src={product.image} alt={product.name} className="product-image" />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductDisplay;
