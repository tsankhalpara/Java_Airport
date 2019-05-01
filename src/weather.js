function Weather() {
  this._CHANCE = 0.5;
};



Weather.prototype.isStormy = function () {
  return ( Math.random() > this._CHANCE );
};
