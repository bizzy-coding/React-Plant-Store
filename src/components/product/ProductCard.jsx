import React, { useState } from "react";
import PlantBuyBtn from "../ui/PlantBuyButton";

function ProductCard({
  petName,
  plantName,
  plantPrice, // Keep this prop
  plantType,
  imgSrc,
  index,
  height,
  country,
  difficulty,
}) {
  const dynamicClass = `plant-card ${plantName} plant-${index}`;

  const [isStatsOpen, setStatsOpen] = useState(false);

  const toggleStats = () => {
    setStatsOpen(!isStatsOpen); //toggle the stats
  };

  return (
    <>
      <img src={imgSrc} alt={plantName} />
      <div className={dynamicClass}>
        <div className="product-card-details">
          <div className="product-heading-wrap">
            <h2>{petName}</h2>
            <p>{`£${plantPrice}`}</p>
          </div>
          <p>{plantName}</p>
          <div className="product-cta-wrap">
          <p
            className="learn-more"
            onClick={toggleStats} // Toggle stats on click
          >
            learn more
          </p>
            <PlantBuyBtn plantName={plantName} />
         
         
          </div>

          {isStatsOpen && (
            <div className="product-stats-wrap">
              <ul className="stats-wrap">
                <li>Height: {height}cm</li>
                <li>Origin: {country}</li>
                <li>Difficulty: {difficulty}</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ProductCard;
