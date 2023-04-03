// Map of text to emojis
const emojiMap = {
  happy: '😊',
  sad: '😢',
  love: '❤️',
  like: '👍',
  dislike: '👎',
};

// Function to translate text to emojis
function translateToEmojis(text) {
  const words = text.split(' ');
  const translatedWords = words.map(word => {
    if (emojiMap[word]) {
      return emojiMap[word];
    }
    return word;
  });
  const translatedText = translatedWords.join(' ');
  console.log(translatedText);
}

// Call the function to translate text to emojis
translateToEmojis('I am happy and love ice cream!');
