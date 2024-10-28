import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "root",
  port: 5432,
});
db.connect();

let countries = [];
async function visitedCountries() {
  console.log("First count: ", countries)
  const result = await db.query("SELECT country_code FROM visited_countries");
  countries = result.rows.map((e) => e.country_code);
  return countries
}

app.get("/", async (req, res) => {
  try {
    const result = await visitedCountries();
    res.render("index.ejs", { countries: result, total: result.length });
    console.log("Second Count: ", countries)
  } catch (error) {
    console.log(error.message);
  }
});

app.post("/add", async (req, res) => {
  const country = req.body.country;
  try {
    console.log("Third Count: ", countries)
    const countryCode = await db.query(
      "SELECT country_code FROM countries WHERE LOWER(country_name) LIKE $1",
      [`%${country.toLowerCase()}%`]
    );
    try {
      const add = await db.query(
        "INSERT INTO visited_countries (country_code) VALUES ($1)",
        [countryCode.rows[0].country_code]
      );
    } catch (error) {
      console.log("Fourth Count: ", countries)
      res.render("index.ejs", {
        countries: await visitedCountries(),
        total: countries.length,
        error: "Country added before",
      });
    }
    res.redirect("/");
  } catch (error) {
    console.log(error);
    const countries = await visitedCountries();
    res.render("index.ejs", {
      countries: countries,
      total: countries.length,
      error: "Country name does not exist, try again.",
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
