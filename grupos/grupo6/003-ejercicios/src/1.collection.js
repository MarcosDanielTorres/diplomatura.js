export { Collection };

/**
 * Escribir una clase Collection que representa una colección de elementos.
 * Esta clase debe:
 *
 * - Poder construirse o vacía (sin elementos) o con una lista inicial de elemenetos
 * - Debe tener un método `add` para poder agregar un elemento
 * - Debe tener un método `delete` para poder eliminar un elemento
 * - Debe tener un método `has` para poder determinar un elemento existe en la colección
 */

class Collection {
  constructor(lista = []) {
    this.elementos = lista;
  }

  add(elem) {
    if (!this.has(elem)) {
      this.elementos.push(elem);
    }
  }

  delete(elem) {
    const index = this.elementos.indexOf(elem);
    if (index > -1) {
      this.elementos.splice(index, 1);
    }
  }

  has(elem) {
    return this.elementos.indexOf(elem) > -1;
  }
}
