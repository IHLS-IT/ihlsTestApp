const express = require('express');

const app = express();


app.get('/', (req, res) => {
res.send('Hello, World! This is the root path.');
});



app.get('/test', (req, res) => {
res.send('This is a test route 2.');
});


const PORT = 3000;

mongoose
  .connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((error) => console.log(error.message));