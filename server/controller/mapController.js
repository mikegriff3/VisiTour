const db = require("../db/index");

module.exports = {
  getRoutes: (req, res) => {
    db.Route
      .findAll({
        attributes: ["name", "markers"]
      })
      .then(data => {
        console.log("GET ALL ROUTES: ", data);
        res.status(200).send(data);
      })
      .catch(err => {
        console.log("Error getting routes: ", err);
        res.status(500).send(err);
      });
  },
  saveRoutes: (req, res) => {
    console.log("REQ FROM SAVE ROUTE: ", req.body.markers);
    db.Route
      .create({
        name: req.body.name,
        markers: JSON.stringify(req.body.markers)
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
