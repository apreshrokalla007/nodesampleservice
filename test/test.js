var supertest = require("supertest");
var should = require("should");
var ip = require('ip');
var request = supertest.agent("http://localhost:5000/");
//var request = supertest.agent("https://sampleherokuappshark.herokuapp.com/");


describe("Sample Application",function(){

  it("Check Company Api Status Code 200", function (done) {
      request
      .get('company')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
  
  
  it("Check User Api Status Code 200", function (done) {
      request
      .get('user')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
   });

});
