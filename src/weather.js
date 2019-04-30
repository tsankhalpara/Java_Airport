function Weather() {

};



Weather.prototype.isStormy = function () {
  var x = (Math.floor(Math.random() * 10));
  return (x > 6);
};
