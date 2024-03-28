
let jogadorAtual = 'X';
let celulas = document.querySelectorAll('.celula');
let mensagemElement = document.getElementById('mensagem');

function fazerJogada(celula) {
    if (celula.textContent === '') {
        celula.textContent = jogadorAtual;
        if (verificarVitoria()) {
            mensagemElement.textContent = `O jogador ${jogadorAtual} venceu!`;
            desabilitarCelulas();
        } else if (verificarEmpate()) {
            mensagemElement.textContent = 'O jogo empatou!';
        } else {
            jogadorAtual = jogadorAtual === 'X' ? 'O' : 'X';
            mensagemElement.textContent = `É a vez do jogador ${jogadorAtual}`;
        }
    }
}

function verificarVitoria() {
    const linhas = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let linha of linhas) {
        if (celulas[linha[0]].textContent !== '' &&
            celulas[linha[0]].textContent === celulas[linha[1]].textContent &&
            celulas[linha[0]].textContent === celulas[linha[2]].textContent) {
            return true;
        }
    }
    return false;
}

function verificarEmpate() {
    for (let celula of celulas) {
        if (celula.textContent === '') {
            return false;
        }
    }
    return true;
}

function desabilitarCelulas() {
    for (let celula of celulas) {
        celula.onclick = null;
    }
}
