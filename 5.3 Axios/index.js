import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import 'dotenv/config'

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://bored-api.appbrewery.com/random");
    const result = response.data;
    res.render("index.ejs", { data: result });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
  
});

app.post("/", async (req, res) => {
  const activityType = req.body.type;
  const activityMember = req.body.participants;
  console.log(activityMember)
  console.log(activityType)

  try{
    const response = await axios.get(`https://bored-api.appbrewery.com/filter?type=${activityType}&participants=${activityMember}`);
    const result = response.data;
    const rndmNum = Math.floor(Math.random()*(result.length))
    console.log(result[rndmNum])
    res.render("index.ejs", { data: result[rndmNum] })
  }
  catch(error){
    console.error("Failed to make request:", error.message);
    if(error.response.status===404){
      res.render("index.ejs", {
        error: "No activities that match your criteria."
      })
    }else{
    res.render("index.ejs", {
      error: error.message,
    })};
  }

});

app.listen(process.env.port, () => {
  console.log(`Server running on port: ${process.env.port}`);
});
