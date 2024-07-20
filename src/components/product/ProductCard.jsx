
import React from "react";
import PlantBuyBtn from "../ui/PlantBuyButton";

function ProductCard({
    petName,
    plantName, 
    plantPrice,
    plantType, 
    imgSrc, 
    index, 
    height, 
    country,
    difficulty
}) {

    // console.log(`Plant Name: ${plantName}, Plant Price: ${plantPrice}`);

    const dynamicClass = `plant-card ${plantName} plant-${index}`
    return (

        <>
         <img src={imgSrc} alt="" />
        <div className={dynamicClass}>
            <div className="product-card-details">
       

        <h2>{petName}</h2>
        <p>{plantName}</p>
        <p>{plantPrice}</p>
        <div className="top-wrap">
            
            <ul className="stats-wrap">
                <li>height: {height}cm</li>
                <li>Origin: {country}</li>
                <li>Difficulty: {difficulty}</li>
            </ul>
        </div>
        <PlantBuyBtn plantName={plantName} />
        </div>
        </div>
        </>
    )
}

export default ProductCard;