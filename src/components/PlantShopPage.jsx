import React from "react";
import plantData from "../data/plantData"; 
import PlantCardDetails from "./PlantCardDetails";
import PlantBuyBtn from "./PlantBuyButton";

console.log(plantData); // Add this to check the imported data

function PlantShopPage() {
  return (
    <>
      <h1>React Plant Store</h1>
      <div className="plant-container">
        {plantData.map((plant, index) => (
          <div key={index} className="plant-card">
            <PlantCardDetails
              plantName={plant.plantName}
              plantPrice={plant.plantPrice} // Ensure plantPrice is passed here
              plantType={plant.plantType}
              imgSrc={plant.imageUrl}
              index={index}
              height={plant.stats.height}
              country={plant.stats.nativeCountry}
              difficulty={plant.stats.difficultyOfCare}
            />
            <PlantBuyBtn plantName={plant.plantName} />
          </div>
        ))}
      </div>
    </>
  );
}

export default PlantShopPage;
