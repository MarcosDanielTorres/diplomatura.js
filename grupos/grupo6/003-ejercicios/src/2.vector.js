export { Vector };

class Vector {
  constructor(x, y) {
    this.vector = { x: x, y: y };
  }

  get x() {
    return this.vector.x;
  }

  get y() {
    return this.vector.y;
  }

  sumar(unVector) {
    let newX = this.vector.x + unVector.x;
    let newY = this.vector.y + unVector.y;
    return new Vector(newX, newY);
  }
}
