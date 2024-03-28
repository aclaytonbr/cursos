// script.js - Arquivo JavaScript

// Função para alterar o estilo do parágrafo
function alterarEstiloParagrafo() {
    var paragrafo = document.getElementById("paragrafo");
    paragrafo.style.fontWeight = "bold";
    paragrafo.style.color = "#ff5733"; // Cor laranja
}

// Chamando a função ao carregar a página
window.onload = function() {
    alterarEstiloParagrafo();
};


//Função para calcular o fatorial de um número
function fatorial(numero) {
        // fatorial de 0 é 1
        if (numero === 0) {
            return 1;
        } else {
            // fatorial(n) = n * fatorial(n-1)
            return numero * calcularFatorial(numero - 1);
        }
}