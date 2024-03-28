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
const readlineSync = __importStar(require("readline-sync"));
function exercicio1(numero) {
    if (isNaN(numero)) {
        console.log("O número informado não é válido");
        return;
    }
    if (numero % 2 == 0) {
        console.log("######################################");
        console.log(numero + " é um número par");
        console.log("######################################");
    }
    else {
        console.log("######################################");
        console.log(numero + " não é um número par");
        console.log("######################################");
    }
}
function exercicio2(idade) {
    if (isNaN(idade)) {
        console.log("A idade informada não é válido");
        return;
    }
    if (idade >= 18) {
        console.log("######################################");
        console.log("Você é maior de idade");
        console.log("######################################");
    }
    else {
        console.log("######################################");
        console.log("Você não é maior de idade");
        console.log("######################################");
    }
}
function exercicio3(dia_da_semana) {
    if (isNaN(dia_da_semana)) {
        console.log("######################################");
        console.log("O dia informado não é válido");
        console.log("######################################");
        return;
    }
    console.log("######################################");
    switch (dia_da_semana) {
        case 1:
            console.log("domingo");
            break;
        case 2:
            console.log("segunda-feira");
            break;
        case 3:
            console.log("terça-feira");
            break;
        case 4:
            console.log("quarta-feira");
            break;
        case 5:
            console.log("quinta-feira");
            break;
        case 6:
            console.log("sexta-feira");
            break;
        case 7:
            console.log("sábado");
            break;
        default:
            console.log("Dia da semana não encontrado");
    }
    console.log("######################################");
}
function exercicio4() {
    let i = 2;
    while (i <= 10) {
        console.log(i);
        i += 2;
    }
}
function exercicio5() {
    let userInput;
    do {
        userInput = parseInt(readlineSync.question("Digite um número maior que 5:"));
    } while (userInput <= 5);
    console.log("Número válido:", userInput);
}
function exercicio6() {
    let soma = 0;
    for (let i = 1; i <= 5; i++) {
        soma += i;
    }
    console.log("Soma dos números de 1 a 5:", soma);
}
function exercicio7() {
    var pessoa = {
        nome: "João",
        idade: 30,
        cidade: "Exemploville",
    };
    for (let propriedade in pessoa) {
        console.log(propriedade + ":", propriedade.toString);
    }
}
//const numero = readlineSync.question("Entre com um número: ");
exercicio7();
//# sourceMappingURL=main.js.map