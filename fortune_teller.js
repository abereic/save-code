// Array of fortunes
const fortunes = [
  'You will find love soon.',
  'A great opportunity will come your way.',
  'Your hard work will pay off in the near future.',
  'A new friendship will develop into something meaningful.',
  'Good things come to those who wait.',
];

// Function to generate and display a random fortune
function generateFortune() {
  const index = Math.floor(Math.random() * fortunes.length);
  const fortune = fortunes[index];
  console.log(fortune);
}

// Call the function to generate and display a random fortune
generateFortune();
