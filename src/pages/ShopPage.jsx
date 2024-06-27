import React from "react";
import plantData from "../data/plantData.js"
import ProductList from "../components/product/ProductList.jsx";


// console.log(plantData);

function ShopPage() {
  return (
    <>
      <h1>React Plant Store</h1>
      <div className="plant-container">
        <ProductList plantData={plantData} />
      </div>
    </>
  );
}

export default ShopPage;
