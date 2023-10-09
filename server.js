const express = require('express');
const cors = require('cors');

const db = require('./db');

const shoe = require('./modals/shoemodal'); 
const app = express();
const shoeroutes = require('./routes/shoeroutes');

app.use(express.json());
app.use(cors());


app.use('/api/shoes', shoeroutes);

app.get('/', (req, res) => {
  res.send('Server working');
});



const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});