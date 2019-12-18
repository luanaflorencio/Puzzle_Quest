const lines = 6;
const columns = 8;


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


//==================================================================
function drag(ev) {
    // ev.dataTransfer.setData("text", ev.target.class);
    ev.dataTransfer.setData("bloco", ev.target.id);

    document.getElementById(ev.target.id).classList.replace("bloco", "dragged")
}


function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev) {
    ev.preventDefault();
    let id = document.getElementById(ev.dataTransfer.getData("bloco")).getAttribute("id");
    let idElementoAtual = ev.target.id;

    var movimentos = {
        cima: (id - columns),
        baixo: (Number(id) + columns),
        direita: (Number(id) + 1),
        esquerda: (id - 1)
    }

    if (idElementoAtual == movimentos.cima || idElementoAtual == movimentos.baixo || idElementoAtual == movimentos.direita || idElementoAtual == movimentos.esquerda) {
        var data = ev.dataTransfer.getData("bloco");
        let aux = document.getElementById(data);
        let classAux = aux.getAttribute("class").split(" ")[1];

        let elemtoAtual = ev.target.getAttribute("class").split(" ")[1];
        ev.target.classList.replace(elemtoAtual, classAux);
        aux.classList.replace(classAux, elemtoAtual);

    }
}

//toggle classes of an element 
function returnClasses(anyElement) {
    anyElement.classList.replace("dragged", "bloco");
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