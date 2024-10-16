import React, { useState, useEffect } from "react";
import { getPlantData } from "../../api/plantApi";
import ProductCard from "./ProductCard"; 
import { faker } from '@faker-js/faker';

const ProductList = () => {
  const [plants, setPlants] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  // Generate random product details using faker
  const getRandomName = () => {
    return faker.person.firstName(); // Return a random name
  };

  const getRandomLocation = () => {
    return faker.location.country(); // Return a random country
  };

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
        <h1>Plant Delivery</h1>
        <p>Browse our beautiful range of plants available for next day delivery</p>
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
                petName={getRandomName()} // Generate and pass random name as a prop to act as the cute name
                plantName={plant.common_name}  // Map API field to plantName
                plantPrice={Math.floor(Math.random() * 41 + 9.99)} // Generate random price between 9.99 and 49.99
                imgSrc={plant.default_image.original_url} // Use default image if available
                index={index}
                plantScienceName={plant.scientific_name} // Map API field to plantName
                height={Math.floor(Math.random() * 100 + 10)} // Height if available
                country={getRandomLocation()} // Generate and pass random name as a prop
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
