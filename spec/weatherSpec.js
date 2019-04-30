describe ( "Weather", function() {
  var weather = new Weather();

  describe ("When stormy", function() {
    it ("returns true", function() {
      expect(weather.isStormy(7)).toEqual(true);
    });
  });

  describe ("When not stormy", function() {
    it ("returns false", function() {
      expect(weather.isStormy(3)).toEqual(false);
    });
  });






});
