const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('test app');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
