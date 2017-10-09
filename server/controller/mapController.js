const db = require("../db/index");

module.exports = {
  getRoutes: (req, res) => {
    db.Route
      .findAll({
        attributes: ["name", "markers"]
      })
      .then(data => {
        console.log("GET ALL ROUTES: ", data);
      })
      .catch(err => {
        console.log("Error getting routes: ", err);
      });
  },
  saveRoutes: (req, res) => {
    console.log("REQ FROM SAVE ROUTE: ", req.body);
    db.Route
      .create({
        name: "steve",
        markers: JSON.stringify(req.body)
      })
      .then(data => {
        res.status(200).send(data);
        console.log("result from saveRoutes", data);
      })
      .catch(err => {
        res.status(500).send(err);
        console.log("ERR saving route: ", err);
      });
  }
};
