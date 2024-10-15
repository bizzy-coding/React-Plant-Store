// ProductList.jsx
import React, { useState, useEffect } from 'react';
import { getPlantData } from '../../api/plantApi'; // Adjust the path accordingly

const ProductList = () => {
  const [plants, setPlants] = useState([]);
  const [query, setQuery] = useState(''); // State for search query
  const [loading, setLoading] = useState(false); // Loading state

  useEffect(() => {
    // Fetch plant data when the component mounts or when query changes
    const fetchPlants = async () => {
      try {
        setLoading(true); // Set loading to true while fetching
        const data = await getPlantData(query); // Pass the search query to the API function
        console.log('API Response:', data); // Log the API response for debugging

        if (data && data.data) {
          setPlants(data.data); // Set the fetched plant data to the state
        }
      } catch (error) {
        console.error('Error fetching plant data:', error); // Handle any error that occurs during the request
      } finally {
        setLoading(false); // Set loading to false after the request completes
      }
    };

    fetchPlants();
  }, [query]); // Trigger fetching when the search query changes


// Helper function to generate a random price between 9.99 and 49.99, ending in .99
const generateRandomPrice = () => {
    const min = 9;
    const max = 49;
    const randomPrice = Math.floor(Math.random() * (max - min + 1) + min); // Generate a whole number between 9 and 49
    return `${randomPrice}.99`; // Return the price ending in .99
  };

  return (
    <div>
      <h1>Plant Store</h1>
      {/* Search input for filtering plant data */}
      <input
        type="text"
        placeholder="Search for a plant"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        
      />
      
      {loading ? (
        <p>Loading plants...</p> // Display a loading message while fetching
      ) : (
        <ul>
          {plants.length > 0 ? (
            plants.map((plant) => (
              <li key={plant.id}>
                <h2>{plant.common_name}</h2>
                <p>Scientific Name: {plant.scientific_name}</p>
                <p>Family: {plant.other_name}</p>
                <p>Watering: {plant.watering}</p>
                <p>Sunlight: {plant.sunlight}</p>
                {/* Display the randomly generated price */}
      <p>Price: ${generateRandomPrice()}</p> 
                {plant.default_image && (
                  <img src={plant.default_image.thumbnail} alt={plant.common_name} />
                )}
              </li>
            ))
          ) : (
            <p>No plants found</p> // Display this if no plants are returned from the API
          )}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
