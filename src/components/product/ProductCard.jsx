import React from "react";
import PlantBuyBtn from "../ui/PlantBuyButton";

function ProductCard({
    petName,
    plantName, 
    plantPrice,  // Keep this prop
    plantType, 
    imgSrc, 
    index, 
    height, 
    country,
    difficulty
}) {

    const dynamicClass = `plant-card ${plantName} plant-${index}`;

    return (
        <>
            <img src={imgSrc} alt={plantName} />
            <div className={dynamicClass}>
                <div className="product-card-details">
                    <h2>{petName}</h2>
                    <p>{plantName}</p>
                    <p>{`£${plantPrice}`}</p> 
                    <div className="top-wrap">
                        <ul className="stats-wrap">
                            <li>Height: {height}cm</li>
                            <li>Origin: {country}</li>
                            <li>Difficulty: {difficulty}</li>
                        </ul>
                    </div>
                    <PlantBuyBtn plantName={plantName} />
                </div>
            </div>
        </>
    );
}

export default ProductCard;
