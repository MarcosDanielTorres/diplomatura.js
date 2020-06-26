class Collection{
    constructor(lista = []){
        this.elementos = lista;
    }

    add = elem =>
        this.elementos.push(elem);

    delete = elem =>{
        const index = this.elementos.indexOf(elem);
        if(index > -1)
            this.resultado.splice(index, 1);

    }

    has = elem => {
        const index = this.elementos.indexOf(elem);
        if(index > -1)
            return false;
        return true;
    }
}




