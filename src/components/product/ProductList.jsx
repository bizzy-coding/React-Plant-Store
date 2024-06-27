import React, { useState } from "react";
import ProductCard from "./ProductCard";
import PlantBuyBtn from "../ui/PlantBuyButton";
import SortControl from "../controls/SortControl";

function ProductList({ plantData }) {
  const [sortConfig, setSortConfig] = useState("plantName-asc");

  const sortedPlants = [...plantData].sort((a, b) => {
    if (!sortConfig) return 0;
    const [key, order] = sortConfig.split("-");
    let aVal = a[key], bVal = b[key];

    if (key === "plantPrice") {
      aVal = +aVal;
      bVal = +bVal;
    }
    if (aVal < bVal) return order === "asc" ? -1 : 1;
    if (aVal > bVal) return order === "asc" ? 1 : -1;
    return 0;
  });

  const handleSortChange = (sortOption) => {
    setSortConfig(sortOption);
  };

  return (
    <>
      <SortControl onSort={handleSortChange} />
      {sortedPlants.map((plant) => (
        <div key={plant.id} className="plant-card">
          <ProductCard
            plantName={plant.plantName}
            plantPrice={plant.plantPrice}
            plantType={plant.plantType}
            imgSrc={plant.imageUrl}
            height={plant.stats.height}
            country={plant.stats.nativeCountry}
            difficulty={plant.stats.difficultyOfCare}
          />
          <PlantBuyBtn plantName={plant.plantName} />
        </div>
      ))}
    </>
  );
}

export default ProductList;
