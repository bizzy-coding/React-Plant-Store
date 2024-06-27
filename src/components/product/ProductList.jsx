import React, { useState } from "react";
import ProductCard from "./ProductCard";
import PlantBuyBtn from "../ui/PlantBuyButton";
import SortControl from "../controls/SortControl";
import FilterControl from "../controls/FilterControl";

function ProductList({ plantData }) {
  const [sortConfig, setSortConfig] = useState("plantName-asc");
  const [filterType, setFilterType] = useState("");

  const handleSortChange = (sortOption) => {
    setSortConfig(sortOption);
  };

  const handleFilterChange = type => {
    setFilterType(type);
  };

  // Filter plants
  const filteredPlants = plantData.filter(plant => {
    return filterType ? plant.plantType === filterType : true;
  });

  // Sort plants
  const sortedPlants = [...filteredPlants].sort((a, b) => {
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

  return (
    <>
    
        <section className="controls">
      <FilterControl onChange={handleFilterChange} />
      <SortControl onSort={handleSortChange} />
      </section>
      <section className="shop-list">
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
      </section>
    </>
  );
}

export default ProductList;
