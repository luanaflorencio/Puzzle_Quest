class Bloco {
    constructor(forma, pontuacao) {
        this.forma = forma;
        this.pontuacao = pontuacao;
    }

    getClass() {
        return '';
    }
}
class Caveira extends Bloco {
    constructor(pontuacao) {
        super('Caveira', pontuacao)
    }
    iniciar() {
        let div = document.createElement("div")
        div.classList.add("bloco")
        div.classList.add(this.forma)
        return div
    }

    getClass() { return 'caveira'; }
}


class Estrela extends Bloco {
    constructor(pontuacao) {
        super('Estrela', pontuacao)
    }
    iniciar() {
        let div = document.createElement("div")
        div.classList.add("bloco")
        div.classList.add(this.forma)
        return div
    }

    getClass() {
        return 'estrela';
    }
}


class Moeda extends Bloco {
    constructor(pontuacao) {
        super('Moeda', pontuacao)
    }
    iniciar() {
        let div = document.createElement("div")
        div.classList.add("bloco")
        div.classList.add(this.forma)
        return div
    }
    getClass() {
        return 'moeda';
    }
}


class Circulo extends Bloco {
    constructor(pontuacao, cor) {
        super('Circulo', pontuacao)
        this.cor = cor;
    }
    iniciar() {
        let div = document.createElement("div")
        div.setAttribute("id", this.cor);
        return div
    }
    getClass() {
        let cor = sorteandoCor();
        return `circulo-${cor}`;
    }
}

// function sorteandoObjeto() {
//     let numeros = Math.floor(Math.random() * (+5 - +1)) + +1;
//     console.log(numeros)
//     switch (numeros) {
//         case 1:
//             return new Caveira("caveira", 2).iniciar();
//             break;
//         case 2:
//             return new Estrela("estrela", 4).iniciar();
//             break;
//         case 3:
//             return new Moeda("moeda", 3).iniciar();
//             break;
//         case 4:
//             return new Circulo("circulo", 1, sorteandoCor()).iniciar();
//             break;
//     }
// }

function sorteandoCor() {
    let cores = ["red", "green", "blue"];
    let i = Math.floor(Math.random() * (+3 - +0)) + +0;
    return cores[i];
}
