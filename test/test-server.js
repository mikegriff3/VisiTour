var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require("../server/index");
var should = chai.should();
var expect = require("chai").expect;
var directions = require("../client/components/Directions");

chai.use(chaiHttp);

//test connection to the server and the database
describe("Routes", function() {
  it("should list ALL routes on /api/getRoutes GET", done => {
    chai
      .request(server)
      .get("/api/getRoutes")
      .end(function(err, res) {
        res.should.have.status(200);
        done();
      });
  });
});
