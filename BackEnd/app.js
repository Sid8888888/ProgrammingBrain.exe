const express = require("express");
const bodyParser = require("body-parser");

const cors = require('cors');

const db = require("./DB/connection");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());

app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001'],
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));


app.options('*', cors());




app.use("/", require("./Order/Customer/CustomerRoutes"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
