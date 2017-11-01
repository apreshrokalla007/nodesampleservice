var supertest = require("supertest");
var should = require("should");
var request = supertest.agent("http://localhost:5000/");



describe("Sample Application",function(){

  it("Check Company Api Status Code 200", function (done) {
      request
          .get("company")
          .expect("Content-type",/json/)
  .expect(200) // THis is HTTP response
  .end(function(err,res){	  
    // HTTP status should be 200
    res.status.should.equal(200);
    done();
  });
  });
  
  
  it("Check Company Api Status Code 400", function (done) {
      request
          .get("company")          
  .expect(400) // THis is HTTP response
  .end(function(err,res){	  
    // HTTP status should be 400
    res.status.should.equal(400);
    done();
  });
  });
});


