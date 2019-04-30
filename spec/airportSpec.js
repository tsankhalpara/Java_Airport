describe ("Airport", function(){
  var airport;
  var weather;
  var plane = "plane";

  beforeEach(function(){
    airport = new Airport();
    weather = new Weather();
  })

  describe("land plane", function(){
    it("instructs plane to land", function() {
      airport.land(plane)
      expect(airport.planes).toContain(plane)
    });
  });


});
