const axios = require('axios');

// Function to translate text using the Google Translate API
async function translateText(text, targetLanguage) {
  const apiKey = 'YOUR_API_KEY_HERE';
  const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
  const data = {
    q: text,
    target: targetLanguage,
  };
  try {
    const response = await axios.post(url, data);
    const translatedText = response.data.data.translations[0].translatedText;
    console.log(translatedText);
  } catch (error) {
    console.error(error);
  }
}

// Call the function to translate text from English to Spanish
translateText('Hello, how are you?', 'es');
