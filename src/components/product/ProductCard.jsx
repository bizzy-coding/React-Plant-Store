import React, { useState } from "react";
import PlantBuyBtn from "../ui/PlantBuyButton";
import placeholderImg from '../../assets/imgPlaceholder.png'; 

function ProductCard({
  petName,
  plantName,
  plantPrice,
  imgSrc, 
  index,
  plantScienceName,
  height,
  country,
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
            <h3>{petName}</h3>
            <p>{`£${plantPrice}`}</p>
          </div>
          <p className="plant-name">{plantName}</p>
          <div className="product-cta-wrap">
            <p
              className="learn-more"
              onClick={toggleStats} // Toggle stats on click
            >
              Learn more
            </p>
            <PlantBuyBtn plantName={plantName} />
          </div>

          {isStatsOpen && (
            <div className="product-stats-wrap">
            
              <ul className="stats-wrap">
              <button className="close-stats" onClick={toggleStats}>x</button>
              <li>Scientific Name: {plantScienceName}</li>
                <li>Height: {height}cm</li>
                <li>Origin: {country}</li>
                <li>Sunlight: {Array.isArray(sunlight) ? sunlight.join(', ') : "N/A"}</li> 
                <li>Watering: {watering}</li>
                <li>Plant Type: {cycle}</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ProductCard;
