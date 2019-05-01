describe ("Airport", function(){
  var airport;
  var plane = "plane";

  beforeEach(function(){
    airport = new Airport();
  });

  describe("land plane", function(){
    it("instructs plane to land, when not stormy", function() {
      spyOn(airport, 'isStormy').and.returnValue(false);
      airport.land(plane);
      expect(airport.planes).toContain(plane)
    });

    it("throws an error, when stormy", function() {
      spyOn(airport, 'isStormy').and.returnValue(true);
      airport.land(plane);
      expect(airport.land(plane)).toEqual("Too stormy to land!");
    });


  });


});
