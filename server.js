const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Define a simple route
app.get('/', (req, res) => {
  res.send('LinkedIn Sales Navigator Scraper Backend');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
