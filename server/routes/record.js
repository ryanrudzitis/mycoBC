const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// Connect to DB
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// This section gets a list of all the records.
recordRoutes.route("/postRecord").get(function (req, res) {
  let db_connect = dbo.getDb("mushroomDatabase");
  let newRecord = {name: "test mushroom", binomial: "Testus mushroomus", edible: "no", poisonous: "no", availability: "January, February, March, April, May, June, July, August, September, October, November, December"};
  
  db_connect
  .collection("mushrooms")
    .insertOne(newRecord, function (err, result) {
      if (err) {
        res.status(400).send("Error inserting matches!");
      } else {
        console.log(`Added a new match with id ${result.insertedId}`);
        res.status(204).send();
      }
    });
});

recordRoutes.route("/record").get(function (req, res) {
  let db_connect = dbo.getDb("mushroomDatabase");
  db_connect
    .collection("mushrooms")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });

  });


module.exports = recordRoutes;