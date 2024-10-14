const plantData = [
  {
    id: 1,
    plantName: "Fiddle Leaf Fig",
    petName: "Fiddle",
    scientificName: "Ficus lyrata",
    imageUrl: "https://images.pexels.com/photos/7084309/pexels-photo-7084309.jpeg?auto=compress&cs=tinysrgb&w=800",
    stats: {
      height: 160,
      plantSize: "sizeLarge",
      waterFrequency: "med",
      nativeCountry: ["Africa"],
      careLevel: "high",
      petFriendly: false,
      plantType: ["Tropical"],
      sunlightRequirements: "light and shade",
      soilType: "well-draining",
      fertilizerRequirements: "monthly during growing season",
      growthRate: "medium",
      maxHeight: 250,
      temperatureRange: "18-24°C",
      humidityRequirements: "highHumidity",
      commonIssues: "leaf drop, root rot",
      careTips: "Wipe leaves regularly to remove dust and help with photosynthesis",
      origin: "Rainforests of Western Africa"
    },
    ecom: {
      plantPrice: 19.99,
      onSalePrice: 15.99,
      dateAdded: "2024-07-20",
      inventoryLevel: 50,
      customerReviews: [
        { reviewerName: "John Doe", rating: 5, comment: "Beautiful plant!" },
        { reviewerName: "Jane Smith", rating: 4, comment: "Needs a lot of light." }
      ]
    },
    information: {
      care: "Prefers bright, indirect light and only needs watering when the top inch of soil is dry.",
      description: "The Fiddle Leaf Fig is a popular indoor plant known for its large, violin-shaped leaves. It thrives in bright, indirect light and can grow quite tall, making it a great statement piece for any room."
    },
    tags: ["indoor", "air purifier", "low maintenance"],
    relatedProducts: [
      { id: 101, productName: "Ceramic Pot", productPrice: 12.99 },
      { id: 102, productName: "Organic Potting Soil", productPrice: 9.99 }
    ]
  },
  {
    id: 2,
    plantName: "Snake Plant",
    petName: "Peggy",
    scientificName: "Sansevieria trifasciata",
    imageUrl: "https://images.pexels.com/photos/2123482/pexels-photo-2123482.jpeg?auto=compress&cs=tinysrgb&w=800",
    stats: {
      height: 90,
      plantSize: "sizeMedium",
      waterFrequency: "low",
      nativeCountry: ["Africa"],
      careLevel: "low",
      petFriendly: true,
      plantType: ["Succulent"],
      sunlightRequirements: "shade",
      soilType: "well-draining",
      fertilizerRequirements: "once every 2-3 months",
      growthRate: "slow",
      maxHeight: 120,
      temperatureRange: "15-24°C",
      humidityRequirements: "lowHumidity",
      commonIssues: "overwatering",
      careTips: "Allow soil to dry out completely between waterings",
      origin: "West Africa"
    },
    ecom: {
      plantPrice: 29.99,
      onSalePrice: 24.99,
      dateAdded: "2024-06-15",
      inventoryLevel: 30,
      customerReviews: [
        { reviewerName: "Alice Brown", rating: 5, comment: "Very low maintenance!" },
        { reviewerName: "Bob White", rating: 4, comment: "Great for beginners." }
      ]
    },
    information: {
      care: "Thrives on neglect, perfect for beginners. Water sparingly and provide indirect light.",
      description: "The Snake Plant, also known as 'Mother-in-law's Tongue,' is a hardy and resilient plant, ideal for beginners. It has tall, upright leaves and can survive with minimal water and light."
    },
    tags: ["indoor", "air purifier", "low maintenance"],
    relatedProducts: [
      { id: 103, productName: "Decorative Planter", productPrice: 14.99 },
      { id: 104, productName: "Cactus Soil Mix", productPrice: 8.99 }
    ]
  },
  {
    id: 3,
    plantName: "Monstera Deliciosa",
    petName: "Bertie",
    scientificName: "Monstera deliciosa",
    imageUrl: "https://images.pexels.com/photos/5858235/pexels-photo-5858235.jpeg?auto=compress&cs=tinysrgb&w=800",
    stats: {
      height: 200,
      plantSize: "sizeLarge",
      waterFrequency: "med",
      nativeCountry: ["America"],
      careLevel: "med",
      petFriendly: false,
      plantType: ["Tropical"],
      sunlightRequirements: "light and shade",
      soilType: "well-draining",
      fertilizerRequirements: "every 4-6 weeks during growing season",
      growthRate: "fast",
      maxHeight: 300,
      temperatureRange: "18-27°C",
      humidityRequirements: "highHumidity",
      commonIssues: "yellowing leaves",
      careTips: "Mist leaves regularly to maintain humidity",
      origin: "Central America"
    },
    ecom: {
      plantPrice: 49.99,
      onSalePrice: 39.99,
      dateAdded: "2024-05-10",
      inventoryLevel: 20,
      customerReviews: [
        { reviewerName: "Charlie Green", rating: 5, comment: "Absolutely stunning!" },
        { reviewerName: "Dana Blue", rating: 4, comment: "Grows very quickly." }
      ]
    },
    information: {
      care: "Needs medium to bright indirect light and prefers humid conditions. Water when the top 2 inches of soil are dry.",
      description: "The Monstera Deliciosa, often referred to as the 'Swiss Cheese Plant,' is famous for its large, perforated leaves. It thrives in humid environments and can grow rapidly under the right conditions."
    },
    tags: ["indoor", "statement plant", "high maintenance"],
    relatedProducts: [
      { id: 105, productName: "Humidifier", productPrice: 29.99 },
      { id: 106, productName: "Leaf Shine Spray", productPrice: 6.99 }
    ]
  },
  {
    id: 4,
    plantName: "Spider Plant",
    petName: "Grace",
    scientificName: "Chlorophytum comosum",
    imageUrl: "https://images.pexels.com/photos/11363534/pexels-photo-11363534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    stats: {
      height: 60,
      plantSize: "sizeMedium",
      waterFrequency: "med",
      nativeCountry: ["Africa"],
      careLevel: "low",
      petFriendly: true,
      plantType: ["Tropical"],
      sunlightRequirements: "light and shade",
      soilType: "well-draining",
      fertilizerRequirements: "every 2-3 months",
      growthRate: "fast",
      maxHeight: 60,
      temperatureRange: "15-25°C",
      humidityRequirements: "medHumidity",
      commonIssues: "brown tips",
      careTips: "Trim brown tips and propagate easily by planting the offshoots",
      origin: "Southern Africa"
    },
    ecom: {
      plantPrice: 19.99,
      onSalePrice: 14.99,
      dateAdded: "2024-04-20",
      inventoryLevel: 40,
      customerReviews: [
        { reviewerName: "Eve Red", rating: 5, comment: "Very easy to care for!" },
        { reviewerName: "Frank Black", rating: 4, comment: "Grows quickly and looks great." }
      ]
    },
    information: {
      care: "Very adaptable and thrives under a variety of conditions. Keep soil slightly moist and provide bright to moderate indirect light.",
      description: "The Spider Plant is a classic indoor plant, known for its arching leaves and tiny plantlets that dangle from the mother plant. It's highly adaptable and easy to propagate."
    },
    tags: ["indoor", "air purifier", "easy care"],
    relatedProducts: [
      { id: 107, productName: "Hanging Basket", productPrice: 12.99 },
      { id: 108, productName: "All-Purpose Plant Food", productPrice: 7.99 }
    ]
  },
    {
      id: 5,
      plantName: "Aloe Vera",
      petName: "Sunny",
      scientificName: "Aloe barbadensis miller",
      imageUrl: "https://images.pexels.com/photos/1671650/pexels-photo-1671650.jpeg?auto=compress&cs=tinysrgb&w=800",
      stats: {
        height: 30,
        plantSize: "sizeSmall",
        waterFrequency: "low",
        nativeCountry: ["Arabian Peninsula"],
        careLevel: "low",
        petFriendly: false,
        plantType: ["Succulent"],
        sunlightRequirements: "direct sunlight",
        soilType: "well-draining",
        fertilizerRequirements: "every 2-3 months",
        growthRate: "slow",
        maxHeight: 60,
        temperatureRange: "18-24°C",
        humidityRequirements: "lowHumidity",
        commonIssues: "root rot from overwatering",
        careTips: "Use a pot with drainage holes to prevent water logging",
        origin: "Arabian Peninsula"
      },
      ecom: {
        plantPrice: 9.99,
        onSalePrice: 7.99,
        dateAdded: "2024-07-10",
        inventoryLevel: 100,
        customerReviews: [
          { reviewerName: "Laura King", rating: 5, comment: "Great for burns and easy to grow!" },
          { reviewerName: "Michael Lee", rating: 4, comment: "Needs very little care." }
        ]
      },
      information: {
        care: "Best in sunny spots. Water deeply but infrequently, allowing the soil to dry out between waterings.",
        description: "Aloe Vera is a hardy succulent known for its medicinal properties. It's perfect for sunny windowsills and requires minimal watering."
      },
      tags: ["indoor", "medicinal", "low maintenance"],
      relatedProducts: [
        { id: 109, productName: "Terracotta Pot", productPrice: 5.99 },
        { id: 110, productName: "Succulent Soil Mix", productPrice: 6.99 }
      ]
    },
    {
      id: 6,
      plantName: "Rubber Plant",
      petName: "Benny",
      scientificName: "Ficus elastica",
      imageUrl: "https://images.pexels.com/photos/6845243/pexels-photo-6845243.jpeg?auto=compress&cs=tinysrgb&w=800",
      stats: {
        height: 120,
        plantSize: "sizeLarge",
        waterFrequency: "med",
        nativeCountry: ["Asia"],
        careLevel: "med",
        petFriendly: false,
        plantType: ["Tropical"],
        sunlightRequirements: "light and shade",
        soilType: "well-draining",
        fertilizerRequirements: "monthly during growing season",
        growthRate: "medium",
        maxHeight: 300,
        temperatureRange: "16-24°C",
        humidityRequirements: "medHumidity",
        commonIssues: "leaf drop due to overwatering",
        careTips: "Wipe leaves to remove dust and help with photosynthesis",
        origin: "South Asia"
      },
      ecom: {
        plantPrice: 29.99,
        onSalePrice: 24.99,
        dateAdded: "2024-06-01",
        inventoryLevel: 45,
        customerReviews: [
          { reviewerName: "Sam Rogers", rating: 5, comment: "Beautiful and easy to care for!" },
          { reviewerName: "Kelly Brown", rating: 4, comment: "Needs regular watering." }
        ]
      },
      information: {
        care: "Prefers bright, indirect sunlight and moderate watering, allowing the top soil to dry out between waterings.",
        description: "The Rubber Plant is a popular houseplant known for its large, glossy leaves. It prefers bright, indirect light and moderate watering."
      },
      tags: ["indoor", "decorative", "medium maintenance"],
      relatedProducts: [
        { id: 111, productName: "Plant Stand", productPrice: 19.99 },
        { id: 112, productName: "Leaf Shine", productPrice: 8.99 }
      ]
    },
    {
      id: 7,
      plantName: "Peace Lily",
      petName: "Grace",
      scientificName: "Spathiphyllum",
      imageUrl: "https://images.pexels.com/photos/7643287/pexels-photo-7643287.jpeg?auto=compress&cs=tinysrgb&w=800",
      stats: {
        height: 60,
        plantSize: "sizeMedium",
        waterFrequency: "med",
        nativeCountry: ["America", "Asia"],
        careLevel: "low",
        petFriendly: false,
        plantType: ["Tropical"],
        sunlightRequirements: "light and shade",
        soilType: "well-draining",
        fertilizerRequirements: "every 6 weeks during growing season",
        growthRate: "medium",
        maxHeight: 90,
        temperatureRange: "18-24°C",
        humidityRequirements: "highHumidity",
        commonIssues: "browning leaf tips",
        careTips: "Mist leaves to maintain humidity",
        origin: "Americas and Southeast Asia"
      },
      ecom: {
        plantPrice: 27.99,
        onSalePrice: 21.99,
        dateAdded: "2024-05-15",
        inventoryLevel: 35,
        customerReviews: [
          { reviewerName: "Anna White", rating: 5, comment: "Beautiful flowers and easy to grow!" },
          { reviewerName: "Tom Blue", rating: 4, comment: "Needs regular misting." }
        ]
      },
      information: {
        care: "Keep the soil moist but not soggy, and place in a room with soft, indirect light.",
        description: "The Peace Lily is a stunning plant known for its elegant white flowers and lush green leaves. It's easy to care for and purifies the air."
      },
      tags: ["indoor", "flowering", "easy care"],
      relatedProducts: [
        { id: 113, productName: "Misting Spray Bottle", productPrice: 4.99 },
        { id: 114, productName: "Flowering Plant Food", productPrice: 9.99 }
      ]
    },
    {
      id: 8,
      plantName: "Pothos",
      petName: "Lucky",
      scientificName: "Epipremnum aureum",
      imageUrl: "https://images.pexels.com/photos/7663986/pexels-photo-7663986.jpeg?auto=compress&cs=tinysrgb&w=800",
      stats: {
        height: 100,
        plantSize: "sizeLarge",
        waterFrequency: "low",
        nativeCountry: ["France"],
        careLevel: "low",
        petFriendly: false,
        plantType: ["Tropical" , "Climber/Vine"],
        sunlightRequirements: "light and shade",
        soilType: "well-draining",
        fertilizerRequirements: "every 2-3 months",
        growthRate: "fast",
        maxHeight: 200,
        temperatureRange: "18-24°C",
        humidityRequirements: "medHumidity",
        commonIssues: "yellowing leaves",
        careTips: "Prune regularly to encourage bushier growth",
        origin: "French Polynesia"
      },
      ecom: {
        plantPrice: 35.99,
        onSalePrice: 29.99,
        dateAdded: "2024-04-01",
        inventoryLevel: 60,
        customerReviews: [
          { reviewerName: "Daisy Green", rating: 5, comment: "Grows quickly and is very hardy!" },
          { reviewerName: "Jack Black", rating: 4, comment: "Perfect for beginners." }
        ]
      },
      information: {
        care: "Very easy to care for; can thrive in a wide range of environments. Allow the top soil to dry out before watering again.",
        description: "Pothos is a versatile and hardy plant that can adapt to various lighting conditions. It's an excellent choice for beginners and adds a lush green touch to any space."
      },
      tags: ["indoor", "air purifier", "low maintenance"],
      relatedProducts: [
        { id: 115, productName: "Hanging Planter", productPrice: 14.99 },
        { id: 116, productName: "All-Purpose Plant Food", productPrice: 7.99 }
      ]
    }
  ];
  

export default plantData;
