const express = require("express");
const request = require("request");
const app = express();
const port = 5000;

app.get("/", function (req, res) {
  res.send("Hello World");
});
app.get("/newendpoint", function (req, res) {
  res.send("My New End Point");
});
app.get("/getWeather", function (req, res) {
  request(
    "",
    function (error, response, body) {
      console.error("error:", error); // Print the error if one occurred
      console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
      console.log("body:", body); // Print the HTML for the Google homepage.
      const parseBody = JSON.parse(body);
      const temp_c = parseBody["current"]["temperature"];
      res.send({ temp_c });
    }
  );
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
