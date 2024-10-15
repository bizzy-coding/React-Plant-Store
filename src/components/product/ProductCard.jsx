import React, { useState } from "react";
import PlantBuyBtn from "../ui/PlantBuyButton";
import placeholderImg from '../../assets/imgPlaceholder.png'; 

function ProductCard({
  petName,
  plantName,
  plantPrice,
  plantType,
  imgSrc, 
  index,
  height,
  country,
  difficulty,
  sunlight,
  watering,
  cycle,
}) {
  const dynamicClass = `product-card plant-${index}`;


  const [isStatsOpen, setStatsOpen] = useState(false);

  const toggleStats = () => {
    setStatsOpen(!isStatsOpen); // toggle the stats
  };


    
  // PLACEHOLDER IMG - Check if imgSrc is valid, otherwise fallback to a default image
  const [imageSrc, setImageSrc] = useState(imgSrc || placeholderImg); 

  // PLACEHOLDER IMG - Fallback to default image if the original image fails to load
  const handleImageError = () => {
    setImageSrc(placeholderImg); 
  };

  return (
    <>
      <div className={dynamicClass}>
        {/* Using the image source from state and handling onError */}
        <img src={imageSrc} alt={plantName} onError={handleImageError} />
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
                <li>Sunlight: {Array.isArray(sunlight) ? sunlight.join(', ') : "N/A"}</li> 
                <li>Watering: {watering}</li>
                <li>Cycle: {cycle}</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ProductCard;
