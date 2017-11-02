var supertest = require("supertest");
var should = require("should");
var request = supertest.agent("https://sampleherokuappshark.herokuapp.com/");



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
  
  
  it("Check Company Api Status Code 400", function (done) {
      request
      .get('company')
      .set('Accept', 'application/json')
      .expect(400)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
   });

});
