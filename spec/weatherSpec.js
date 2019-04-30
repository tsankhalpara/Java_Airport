describe ( "Weather", function() {
  var weather = new Weather();

  describe ("When stormy", function() {
    it ("returns true", function() {
      spyOn(weather,'isStormy').and.returnValue(true);
      expect(weather.isStormy()).toEqual(true);
    });
  });

  describe ("When not stormy", function() {
    it ("returns false", function() {
      spyOn(weather,'isStormy').and.returnValue(false);
      expect(weather.isStormy()).toEqual(false);
    });
  });






});
