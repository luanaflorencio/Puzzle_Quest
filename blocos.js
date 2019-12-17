class Bloco {
    constructor(forma, pontuacao) {
        this.forma = forma;
        this.pontuacao = pontuacao;
    }
}
class Caveira extends Bloco {
    constructor(forma, pontuacao) {
        super(forma, pontuacao)
    }
    iniciar() {
        let div = document.createElement("div")
        div.classList.add("bloco")
        div.classList.add(this.forma)
        return div
    }
}


class Estrela extends Bloco {
    constructor(forma, pontuacao) {
        super(forma, pontuacao)
    }
    iniciar() {
        let div = document.createElement("div")
        div.classList.add("bloco")
        div.classList.add(this.forma)
        return div
    }
}


class Moeda extends Bloco {
    constructor(forma, pontuacao) {
        super(forma, pontuacao)
    }
    iniciar() {
        let div = document.createElement("div")
        div.classList.add("bloco")
        div.classList.add(this.forma)
        return div
    }
}


class Circulo extends Bloco {
    constructor(forma, pontuacao, cor) {
        super(forma, pontuacao)
        this.cor = cor;
    }
    iniciar() {
        let div = document.createElement("div")
        div.classList.add("bloco")
        div.classList.add(this.forma)
        div.style.backgroundColor = this.cor
        return div
    }
}

function sorteandoObjeto() {
    let numeros = Math.floor(Math.random() * (+5 - +1)) + +1;
    console.log(numeros)
    switch (numeros) {
        case 1:
            return new Caveira("caveira", 2).iniciar();
            break;
        case 2:
            return new Estrela("estrela", 4).iniciar();
            break;
        case 3:
            return new Moeda("moeda", 3).iniciar();
            break;
        case 4:
            return new Circulo("circulo", 1, sorteandoCor()).iniciar();
            break;


    }

    function sorteandoCor() {
        let cores = ["red", "green", "blue"];
        let i = Math.floor(Math.random() * (+2 - +0)) + +0;
        return cores[i];
    }

}
document.body.appendChild(sorteandoObjeto());