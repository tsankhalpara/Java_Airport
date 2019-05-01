function Airport() {
  this.planes = [];
  this._CHANCE = 0.5;
};

Airport.prototype.isStormy = function () {
  return (Math.random() > this._CHANCE);
};

Airport.prototype.land = function (plane) {
  if (this.isStormy() === true) {
    return "Too stormy to land!";
  }
  else {
    return this.planes.push(plane);
  }
};
