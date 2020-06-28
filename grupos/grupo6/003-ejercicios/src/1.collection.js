export { Collection };

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




