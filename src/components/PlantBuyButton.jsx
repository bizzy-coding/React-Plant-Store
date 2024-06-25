import React, { Children } from "react";

function PlantBuyBtn({plantName}) {
    return(

        <>
        <button onClick={() => alert(`Added ${plantName} to cart`)}>
        Add to cart
        </button>
        </>
    )
}

export default PlantBuyBtn;