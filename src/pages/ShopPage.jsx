import React from "react";
import plantData from "../data/plantData.js"
import ProductList from "../components/product/ProductList.jsx";
import Navigation from "../components/common/Navigation.jsx";


// console.log(plantData);

function ShopPage() {
  return (
    <>
    <Navigation></Navigation>
    <div className="container">
      {/* <h1>React Plant Store</h1> */}
      <div className="plant-container">
        <ProductList plantData={plantData} />
      </div>
      </div>
    </>
  );
}

export default ShopPage;
