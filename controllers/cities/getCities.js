const { City } = require("../../models");

// const getCities = async (req, res) => {
//   const { query = "" } = req.query;
//   // const regexp = `/^${query}/`;
//   // console.log(regexp);
//   const language = req.query.lang;
//   console.log("language", language);

//   const city = await City.find(
//     { cityEn: { $regex: query, $options: "i" } },
//     "stateEn cityEn countyEn useCounty"
//   );

//   // console.log("city", city);
//   // console.log(city.map((item) => console.log("item", item.city)));

//   if (!city) {
//     res.json({ results: "Sorry, city not found" });
//   }

//   res.json(city);
// };

const getCities = async (req, res) => {
  const { query = "" } = req.query;
  const language = req.query.lang;

  let city;

  if (language === "uk") {
    city = await City.find(
      { city: { $regex: query, $options: "i" } },
      "state county city type stateEn countyEn cityEn useCounty"
    );
  } else if (language === "en") {
    city = await City.find(
      { cityEn: { $regex: query, $options: "i" } },
      "state county city type stateEn countyEn cityEn useCounty"
    );
  } else {
    res.status(400).json({ error: "Invalid language" });
    return;
  }

  if (city.length === 0) {
    res.status(404).json({ error: "City not found" });
    return;
  }

  res.json(city);
};

module.exports = getCities;
