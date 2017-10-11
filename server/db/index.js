const Sequelize = require("sequelize");
const db = require("./config");

const Route = db.define("route", {
  name: { type: Sequelize.STRING, allowNull: true },
  markers: { type: Sequelize.TEXT, allowNull: true }
});

Route.sync();

module.exports = { Route };
