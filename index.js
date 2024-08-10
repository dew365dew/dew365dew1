const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use environment variable or default to 3000

app.get('/', (req, res) => {
  res.send('Hello World!!!');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on http://localhost:${port}`);
});
