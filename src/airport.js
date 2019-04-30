function Airport(){
  this.capacity = 0;
  this.planes = [];
};

Airport.prototype.isStormy = function () {
  var x = (Math.floor(Math.random() * 10));
  return (x > 6);
};

Airport.prototype.land = function (plane) {
  if (this.isStormy() === true) {
    throw { "Too stormy to land!" };
  }
  else {
    return this.planes.push(plane);
  }
};
