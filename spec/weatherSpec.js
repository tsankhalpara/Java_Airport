describe ( "Weather", function() {
  var weather = new Weather();

  describe ("When stormy", function() {
    it ("returns true", function() {
      expect(weather.isStormy()).toEqual(true);
    });
  });




});
