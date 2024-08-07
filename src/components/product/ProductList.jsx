import React, { useState } from "react";
import ProductCard from "./ProductCard";

import SortControl from "../controls/SortControl";
import FilterControl from "../controls/FilterControl";

function ProductList({ plantData }) {
  const [sortConfig, setSortConfig] = useState("plantName-asc");
  const [filterConfig, setFilterConfig] = useState({
    light: [],
  });

  const handleSortChange = (sortOption) => {
    setSortConfig(sortOption);
  };

  const handleFilterChange = (filterType, checked) => {
    setFilterConfig((prev) => {
      const newLight = checked ? [...prev.light, filterType] : prev.light.filter((type) => type !== filterType);
      return { ...prev, light: newLight };
    });
  };

  // Filter plants
  const filteredPlants = plantData.filter((plant) => {
    if (filterConfig.light.length === 0) return true;
    return filterConfig.light.includes(plant.stats.sunlightRequirements);
  });

  // Sort plants
  const sortedPlants = [...filteredPlants].sort((a, b) => {
    if (!sortConfig) return 0;
    const [key, order] = sortConfig.split("-");
    let aVal = a[key],
      bVal = b[key];

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
      <header className="header">
        <h2>Plants</h2>
        <p>Look at our beautiful plants</p>
      </header> 

      <main className="shop-container">
        <aside className="filter">
          <FilterControl onChange={handleFilterChange} />
        </aside>
        <div className="shop-wrap">
          <div className="controls">
          <button className="filter-mobile">Filter</button>
            <SortControl onSort={handleSortChange} />
            
          </div>
          <div className="shop-list">
            {sortedPlants.map((plant) => (
              <div key={plant.id} className="product-card">
                <ProductCard
                  petName={plant.petName}
                  plantName={plant.plantName}
                  plantPrice={plant.plantPrice}
                  plantType={plant.plantType}
                  imgSrc={plant.imageUrl}
                  height={plant.stats.height}
                  country={plant.stats.nativeCountry}
                  difficulty={plant.stats.careLevel}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default ProductList;
