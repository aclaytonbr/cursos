let jogador = "X";
const celulas = document.querySelectorAll(".celula");
const msg = document.querySelector('#mensagem');

function fazerJogada(quadrado) {
    quadrado.textContent = jogador;
    if (verificarGanhador()) {
        msg.textContent = "Venceu";
        return;
    }
    if (jogador === "X") {
        jogador = "O";
    } else {
        jogador = "X";
    }

}

function verificarGanhador() {

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


    if (celulas[0].textContent === celulas[1].textContent
        && celulas[1].textContent === celulas[2].textContent) {
            return true;
        } else {
            return false;
        }
}