const axios = require('axios');

// Function to fetch a random joke from the official Joke API
async function fetchJoke() {
  const url = 'https://official-joke-api.appspot.com/random_joke';
  try {
    const response = await axios.get(url);
    const joke = response.data;
    console.log(joke.setup);
    console.log(joke.punchline);
  } catch (error) {
    console.error(error);
  }
}

// Call the function to fetch and display a random joke
fetchJoke();
