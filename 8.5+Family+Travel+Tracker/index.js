import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "root",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let currentUserId = 1;

async function checkVisisted() {
  const result = await db.query("SELECT * FROM user_countries JOIN user_table ON user_table.id=user_id JOIN countries ON countries.id=country_id WHERE user_id=$1", [currentUserId]);
  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  console.log(countries)
  return countries;
}

async function userInfo(){
  const result = await db.query("SELECT * FROM user_table");
  return result.rows;
}

async function userColor() {
  const result = await db.query("SELECT usercolor FROM user_table WHERE id=$1", [currentUserId]);
  return result.rows[0].usercolor;
}

app.get("/", async (req, res) => {
  const countries = await checkVisisted();
  const users = await userInfo();
  const color = await userColor();
  res.render("index.ejs", {
    countries: countries,
    total: countries.length,
    users: users,
    color: color,
  });
});

app.post("/add", async (req, res) => {
  const input = req.body.country;

  try {
    const result = await db.query(
      "SELECT country_code, id FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%';",
      [input.toLowerCase()]
    );
    const data = result.rows[0];
    const countryCode = data.country_code;
    const countryId = data.id;

    try {
      await db.query("INSERT INTO user_countries (user_id, country_id) VALUES ($1, $2)", [currentUserId, countryId])
      res.redirect("/");

    } catch (err) {
      const countries = await checkVisisted();
      const users = await userInfo();
      const color = await userColor();    
      res.render("index.ejs", { 
        error: err.message,
        countries: countries,
        total: countries.length,
        users: users,
        color: color,
      })
    }
  } catch (err) {
    const countries = await checkVisisted();
    const users = await userInfo();
    const color = await userColor();    
    res.render("index.ejs", { 
      error: err.message,
      countries: countries,
      total: countries.length,
      users: users,
      color: color,
    })
  }
});


app.post("/user", async (req, res) => {
  if(req.body.add==="new")
  {
    res.render("new.ejs")
  }
  else{
    const user = req.body.user;
    currentUserId = user
    console.log(user)
    res.redirect("/")
  }
});

app.post("/new", async (req, res) => {
  const userName = req.body.name;
  const userColor = req.body.color;
  try{
    const add = await db.query("INSERT INTO user_table (username, usercolor) VALUES ($1, $2)", [userName, userColor]);
    console.log(add)
    res.redirect("/")
  }
  catch(err){
    console.log(err.message)
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
