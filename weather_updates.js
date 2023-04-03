// Import required modules
const axios = require('axios');

// API endpoint URL and API key
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = '<your-api-key>';

// Weather updates function
async function weatherUpdates(location) {
  try {
    // Make a GET request to the API endpoint
    const response = await axios.get(apiUrl, {
      params: {
        q: location,
        appid: apiKey,
        units: 'metric'
      }
    });

    // Get the relevant weather information from the response data
    const description = response.data.weather[0].description;
    const temperature = response.data.main.temp;
    const feelsLike = response.data.main.feels_like;

    // Format the weather information as a string
    const weatherString = `The weather in ${location} is currently ${description}, with a temperature of ${temperature}°C (feels like ${feelsLike}°C).`;

    // Return the weather string
    return weatherString;
  } catch (error) {
    console.error(error);
  }
}

// Example usage
weatherUpdates('London').then(weather => console.log(weather));
