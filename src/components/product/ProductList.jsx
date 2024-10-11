import React, { useState } from "react";
import ProductCard from "./ProductCard";
import SortControl from "../controls/SortControl";
import FilterControl from "../controls/FilterControl";
import AdvancedFilterControl from "../controls/AdvancedFilterControl";  

function ProductList({ plantData }) {
  const [sortConfig, setSortConfig] = useState("plantName-asc");
  const [filterConfig, setFilterConfig] = useState({
    light: [],               
    difficulty: [],           
    nativeCountry: [],        
    humidityRequirements: [], 
    growthRate: [],           
    petFriendly: null          
  });
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  const handleSortChange = (sortOption) => {
    setSortConfig(sortOption);
  };

  const handleFilterChange = (filterType, checked) => {
    setFilterConfig((prev) => {
      const updatedFilter = (filterArray, type) =>
        checked ? [...filterArray, type] : filterArray.filter((item) => item !== type);
  
      if (["direct sunlight", "light and shade", "shade"].includes(filterType)) {
        return { ...prev, light: updatedFilter(prev.light, filterType) };
  
      
      } else if (["low", "med", "high"].includes(filterType)) {
        return { ...prev, difficulty: updatedFilter(prev.difficulty, filterType) };
  
   
      } else if (["lowHumidity", "medHumidity", "highHumidity"].includes(filterType)) {
        return { ...prev, humidityRequirements: updatedFilter(prev.humidityRequirements, filterType) };
  
      } else if (["Africa", "America", "Asia"].includes(filterType)) {
        return { ...prev, nativeCountry: updatedFilter(prev.nativeCountry, filterType) };
  
      } else if (["slow", "medium", "fast"].includes(filterType)) {
        return { ...prev, growthRate: updatedFilter(prev.growthRate, filterType) };
  
      } else if (filterType === "petFriendly") {
        return { ...prev, petFriendly: checked };
      }
  
      return prev;
    });
  };

  // Filtering logic
  const filteredPlants = plantData.filter((plant) => {
    const lightMatch = (filterConfig.light?.length || 0) === 0 || filterConfig.light.includes(plant.stats.sunlightRequirements);
  
    const difficultyMatch = (filterConfig.difficulty?.length || 0) === 0 || filterConfig.difficulty.includes(plant.stats.careLevel);
  
    const nativeCountryMatch = (filterConfig.nativeCountry?.length || 0) === 0 || 
      plant.stats.nativeCountry.some(country => filterConfig.nativeCountry.includes(country)); 
  
    const humidityRequirementsMatch = (filterConfig.humidityRequirements?.length || 0) === 0 || 
      filterConfig.humidityRequirements.includes(plant.stats.humidityRequirements);
  
    const growthRateMatch = (filterConfig.growthRate?.length || 0) === 0 || filterConfig.growthRate.includes(plant.stats.growthRate);
  
    const petFriendlyMatch = filterConfig.petFriendly === null || plant.stats.petFriendly === filterConfig.petFriendly;
  
    return lightMatch && difficultyMatch && nativeCountryMatch && humidityRequirementsMatch && growthRateMatch && petFriendlyMatch;
  });

  // Sorting logic
const sortedPlants = [...filteredPlants].sort((a, b) => {
  switch (sortConfig) {
    case "plantName-asc":
      return a.plantName.localeCompare(b.plantName);
    case "plantName-desc":
      return b.plantName.localeCompare(a.plantName);
    case "plantPrice-asc":
      return a.ecom.plantPrice - b.ecom.plantPrice;  
    case "plantPrice-desc":
      return b.ecom.plantPrice - a.ecom.plantPrice;  
    default:
      return 0;
  }
});

  return (
    <>
      <header className="header">
        <h2>Plants</h2>
        <p>Look at our beautiful plants</p>
      </header> 

      <main className="shop-container">
     
        <div className="shop-wrap">
          <div className="controls">
            <SortControl onSort={handleSortChange} />
            <div className="filter">
          <FilterControl onChange={handleFilterChange} />
          <button className="more-filters-btn" onClick={() => setShowAdvancedFilters(true)}>
            More Filters
          </button>

          {showAdvancedFilters && (
          <div className="filter-modal">
            <button className="close-btn" onClick={() => setShowAdvancedFilters(false)}>Close</button>
            <AdvancedFilterControl onChange={handleFilterChange} />
          </div>
        )}
        </div>

          </div>
          <div className="shop-list">
            {sortedPlants.map((plant) => (
              <div key={plant.id} className="product-card">
                <ProductCard
                  petName={plant.petName}
                  plantName={plant.plantName}
                  plantPrice={plant.ecom.plantPrice}
                  plantType={plant.plantType}
                  imgSrc={plant.imageUrl}
                  height={plant.stats.height}
                  country={plant.stats.nativeCountry.join(', ')} // Assuming multiple countries
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
