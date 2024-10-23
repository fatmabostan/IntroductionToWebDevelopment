import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "fatma";
const yourPassword = "IAmTheBest";
const yourAPIKey = "6f478855-9646-4221-bf4b-c50b5c445bc9";
const yourBearerToken = "6a754e78-6909-4c80-ab36-19992f2394b7";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
  try{
    const response = await axios.get(`${API_URL}random`);
    const result = response.data;
    res.render("index.ejs", { content: JSON.stringify(result) })
  }
  catch(error){
    res.render("index.ejs", { 
      error: error.message,
    })
  }
});

app.get("/basicAuth", (req, res) => {
   axios.get(`${API_URL}all?page=2`, {
      auth: {
        username: yourUsername,
        password: yourPassword,
      },
    })
    .then(r => {
      res.render("index.ejs", { content: JSON.stringify(r.data)})
    })
    .catch(error => {
      res.render("index.ejs", {error: error.message})
    });
  
});

app.get("/apiKey", (req, res) => {
  axios.get(`${API_URL}filter?score=5&apiKey=${yourAPIKey}`)
  .then(response => {
    res.render("index.ejs", {content: JSON.stringify(response.data)})
  })
  .catch(error => res.render("index.ejs", {
    error: error.message
  }))
});

app.get("/bearerToken", (req, res) => {
  axios.get(`${API_URL}secrets/42`, {
    headers:{
     Authorization: `Bearer ${yourBearerToken}`
  }})
  .then(response => {
    res.render("index.ejs", { content: JSON.stringify(response.data) })
  })
  .catch(error => res.render("index.ejs", {
    error: error.message
  }))
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
