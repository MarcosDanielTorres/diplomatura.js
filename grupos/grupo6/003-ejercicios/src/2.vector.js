export { Vector };

/**
 * Escribir una clase Vector que represente un espacio de dos dimensiones x e y. Esta clase debe:
 *
 * - Poder construirse desde dos valores `x` e `y`
 * - Debe tener dos getters para obtener esos valores
 * - Debe tener un método `sumar` que tome un vector por parámetro y devuelva _un nuevo vector_ 
 *   sumando los valores de x e y de ambos vectores
 *
 * Por ejemplo:
 *
 * console.log(new Vector(1, 2).sumar(new Vector(2, 3)));
 *
 * → Vector{x: 3, y: 5}
 */

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
