require('dotenv').config();
const compression = require("compression");
const path = require("path");
const morgan = require("morgan");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(compression());
// app.use(express.static(path.resolve(__dirname, '../client/public')));
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());


app.listen(process.env.PORT, () => console.log(`Server listening on port ${process.env.PORT}`));