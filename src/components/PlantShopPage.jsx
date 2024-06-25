import React from "react";
import plantData from "../data/PlantData";
import PlantCardDetails from "./PlantCardDetails";
import PlantBuyBtn from "./PlantBuyButton";

function PlantShopPage() {
  return (
    <>
      <h1>React Plant Store</h1>

      <div className="plant-container">

      {plantData.map((plant, index) => (
        <div key={index} className="plant-card">
        <PlantCardDetails
          plantName={plant.plantName}
          plantType={plant.plantType}
          imgSrc={plant.imageUrl}
          
          index={index}
          // pass in index if you need to use elsewhere
          stats={plant.stats}
          height={plant.stats.height}
          frequency={plant.stats.waterFrequency}
          country={plant.stats.nativeCountry}
          difficulty={plant.stats.difficultyOfCare}
          
        />
        <PlantBuyBtn plantName={plant.plantName}/>

        </div>
      ))}
      </div>
    </>
  );
}

export default PlantShopPage;
