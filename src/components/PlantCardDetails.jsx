import React from "react";

function PlantCardDetails({
    plantName, 
    plantPrice,
    plantType, 
    imgSrc, 
    index, 
    height, 
    country,
    difficulty
}) {

    console.log(`Plant Name: ${plantName}, Plant Price: ${plantPrice}`);

    const dynamicClass = `plant-card ${plantName} plant-${index}`
    return (

        <>
        <div className={dynamicClass}>
        <h2>{plantName}</h2>
        <p>{plantType}</p>
        <p>{plantPrice}</p>
        <div className="top-wrap">
            <img src={imgSrc} alt="" />
            <ul className="stats-wrap">
                <li>height: {height}cm</li>
                <li>Origin: {country}</li>
                <li>Difficulty: {difficulty}</li>
            </ul>
        </div>
        </div>
        </>
    )
}

export default PlantCardDetails;