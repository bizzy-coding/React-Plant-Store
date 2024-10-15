// plantApi.js
import axios from 'axios';

const API_KEY = 'sk-bc54670d630a5d3437242'; // Your API key
const BASE_URL = 'https://perenual.com/api'; // Corrected API base URL

export const getPlantData = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/species-list`, {
      params: {
        key: API_KEY,
        indoor: 1, // Filter for indoor plants (houseplants)
        q: query || '', // Include search query if provided
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching plant data:', error);
    return null;
  }
};
