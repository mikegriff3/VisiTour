var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require("../server/index");
var should = chai.should();
var expect = require("chai").expect;

chai.use(chaiHttp);

describe("Saved Routes", function() {
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
