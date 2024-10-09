import React, { useState } from "react";
import ProductCard from "./ProductCard";
import SortControl from "../controls/SortControl";
import FilterControl from "../controls/FilterControl";

function ProductList({ plantData }) {
  const [sortConfig, setSortConfig] = useState("plantName-asc");
  const [filterConfig, setFilterConfig] = useState({
    light: [],
    difficulty: [], 
  });

  const handleSortChange = (sortOption) => {
    setSortConfig(sortOption);
  };

  const handleFilterChange = (filterType, checked) => {
    setFilterConfig((prev) => {
      const updatedFilter = (filterArray, type) =>
        checked ? [...filterArray, type] : filterArray.filter((item) => item !== type);

      if (["direct sunlight", "light and shade", "shade"].includes(filterType)) {
        return { ...prev, light: updatedFilter(prev.light, filterType) };
      } else {
        return { ...prev, difficulty: updatedFilter(prev.difficulty, filterType) };
      }
    });
  };

  // Filter plants by light and difficulty
  const filteredPlants = plantData.filter((plant) => {
    const lightMatch = filterConfig.light.length === 0 || filterConfig.light.includes(plant.stats.sunlightRequirements);
    const difficultyMatch = filterConfig.difficulty.length === 0 || filterConfig.difficulty.includes(plant.stats.careLevel);
    return lightMatch && difficultyMatch;
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
