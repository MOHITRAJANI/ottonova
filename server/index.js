// basic dependecies
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// constants:
const OK = 200
const BAD_REQUEST = 400
const DEFAULT_PORT = 3000

// Import Json
const CITIES = require('./cities.json')
const IMAGES = require('./images.json')

// create express application
const app = express();

// allow cross origin requests
app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route to fetch cities
app.get("/cities", (_, response) => {
  try{ 
    response.status(OK).json(CITIES);
  }catch (e) {
    response.status(BAD_REQUEST).send(e)
  }
});

// route to fetch image urls
app.get("/imageUrl", async (_, response) => {
    try{
        response.status(OK).send(IMAGES)
      }catch(e) {
        response.status(BAD_REQUEST).send(e)
      }
})


// set port, listen for requests
const PORT = process.env.PORT || DEFAULT_PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});