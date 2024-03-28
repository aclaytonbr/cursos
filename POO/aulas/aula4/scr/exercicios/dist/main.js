"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
//importações de bibliotecas
const readlineSync = __importStar(require("readline-sync"));
//Exercício 1
function exercicio1(n) {
    if (n % 2 == 0) {
        console.log("É par !!");
    }
    else {
        console.log("É ímpar !!");
    }
}
//Exercício 2
function exercicio2(idade) {
    if (idade >= 18) {
        console.log("É maior de idade !!");
    }
    else {
        console.log("Não é maior de idade !!");
    }
}
//Exercício 3
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
//Exercício 4
function exercicio4() {
    let contator = 2;
    while (contator <= 10) {
        console.log(contator);
        contator += 2;
    }
}
//Exercício 5
//npm install --save-dev @types/readline-sync
function exercicio5() {
    do {
        var userInput = parseInt(readlineSync.question('Digite um número maior que 5: '));
    } while (userInput <= 5);
    console.log('Número válido', userInput);
}
//Exercício 6
function exercicio6() {
    let soma = 0;
    for (let i = 1; i <= 5; i++) {
        soma += i;
    }
    console.log("A soma dos número de 1 a 5 é igual a ", soma);
}
function exercicio7() {
    let pessoa = {
        nome: "João",
        idade: 30,
        cidade: "Exemploville",
    };
    for (let propriedade in pessoa) {
        console.log(propriedade + ":", pessoa[propriedade]);
    }
}
function exercicio8() {
    let numeros = [1, 2, 3, 4, 5];
    for (let numero of numeros) {
        console.log(numero * 2);
    }
}
exercicio8();
//# sourceMappingURL=main.js.map