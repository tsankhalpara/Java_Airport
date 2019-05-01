describe ( "Weather", function() {
  var weather = new Weather();

  describe ("When stormy", function() {
    it ("returns true", function() {
      spyOn(Math,'random').and.returnValue(1);
      expect(weather.isStormy()).toEqual(true);
    });
  });

  describe ("When not stormy", function() {
    it ("returns false", function() {
      spyOn(Math,'random').and.returnValue(0);
      expect(weather.isStormy()).toEqual(false);
    });
  });






});
