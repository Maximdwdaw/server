const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Origin', 'https://blog-three-mauve.vercel.app/');
  next();
});

app.get('/k', (req, res) => {
  res.json({w:'Hello, World!'});
  console.log(123)
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
