"use strict";
//Exercício 1
function exercicio1(n) {
    if (n % 2 == 0) {
        console.log("É par !!");
    }
    else {
        console.log("É ímpar !!");
    }
}
function exercicio2(idade) {
    if (idade >= 18) {
        console.log("É maior de idade !!");
    }
    else {
        console.log("Não é maior de idade !!");
    }
}
function exercicio3(dia) {
    switch (dia) {
        case 1:
            console.log("Domingo");
            break;
        case 2:
            console.log("Segunda-feira");
            break;
        case 3:
            console.log("Terça-feira");
            break;
        case 4:
            console.log("Quarta-feira");
            break;
        case 5:
            console.log("Quinta-feira");
            break;
        case 6:
            console.log("Sexta-feira");
            break;
        case 7:
            console.log("Sábado");
            break;
        default:
            console.log("Dia da semana informado não é válido");
    }
}
function exercicio4() {
    let contator = 2;
    while (contator < 10) {
        console.log(contator);
        contator += 2;
    }
}
exercicio4();
