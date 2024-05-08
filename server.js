const express = require('express');
const cors = require('cors'); // Import the cors middleware


const app = express();
const PORT = process.env.PORT || 3000;


// Use cors middleware
app.use(cors());

// Middleware to parse JSON request body
app.use(express.json());

// Dummy quotes data (you can replace this with actual data or API calls)
const quotes = [
  { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
  { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
  { text: "To live is the rarest thing in the world. Most people exist, that is all", author: "Oscar Wilde" },
  { text: "That it will never come again is what makes life so sweet.", author: "Emily Dickinson" },
  { text: "Appreciation is a wonderful thing. It makes what is excellent in others belong to us as well.", author: "Voltaire" },
  // Add more quotes here
];

// Endpoint to get a random quote
app.get('/api/quote/random', (req, res) => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  res.json(randomQuote);
});

// Endpoint to search quotes by author name
app.get('/api/quote/search', (req, res) => {
  const author = req.query.author;
  const matchingQuotes = quotes.filter(quote => quote.author.toLowerCase().includes(author.toLowerCase()));
  res.json(matchingQuotes);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

