import React, { useState, useEffect } from "react";
import { getPlantData } from "../../api/plantApi";
import ProductCard from "./ProductCard"; 

const ProductList = () => {
  const [plants, setPlants] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        setLoading(true);
        const data = await getPlantData(query);
        console.log("API Response:", data);

        if (data && data.data) {
            const plantsWithImages = data.data.filter(plant => plant.default_image !== null);
            setPlants(plantsWithImages);
        }
      } catch (error) {
        console.error("Error fetching plant data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlants();
  }, [query]);

  return (
    <div>
      <header className="header">
        <h2>Plants</h2>
        <p>Look at our beautiful plants</p>
      </header>
      <main className="shop-container">
     
      {/* <input type="text" placeholder="Search for a plant" value={query} onChange={(e) => setQuery(e.target.value)} /> */}
      {loading ? (
        <p>Loading plants...</p>
      ) : (
        <div className="shop-list">
          {plants.length > 0 ? (
            plants.map((plant, index) => (
              <ProductCard
                key={plant.id}
                petName={plant.common_name} // Map API field to petName
                plantName={plant.scientific_name} // Map API field to plantName
                plantPrice={Math.floor(Math.random() * 41 + 9.99)} // Generate random price between 9.99 and 49.99
                plantType={plant.cycle} // Assuming cycle is similar to plantType
                imgSrc={plant.default_image ? plant.default_image.thumbnail : "default.jpg"} // Use default image if available
                index={index}
                height={plant.height || "N/A"} // Height if available
                country={plant.origin || "Unknown"} // Assuming API returns country of origin
                difficulty={plant.watering || "Average"} // Assuming watering is similar to difficulty
                sunlight={plant.sunlight}
                watering={plant.watering}
                cycle={plant.cycle || "Unknown"}
              />
            ))
          ) : (
            <p>No houseplants found</p>
          )}
        </div>
        
      )}
      </main>
    </div>
    
  );
};

export default ProductList;
