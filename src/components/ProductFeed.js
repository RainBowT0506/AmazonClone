import React from "react";

function ProductFeed({ products }) {
  console.log(products);
  return (
    <div>
      {products.map((product) => {
        <p>{product.title}</p>;
      })}
    </div>
  );
}

export default ProductFeed;
