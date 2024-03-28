
//importações de bibliotecas
import * as readlineSync from 'readline-sync';


//Exercício 1
function exercicio1(n: number): void {

    if (n % 2 == 0) {
        console.log("É par !!");
    } else {
        console.log("É ímpar !!")
    }
}
//Exercício 2
function exercicio2(idade: number): void {
    if (idade >= 18) {
        console.log("É maior de idade !!");
    } else {
        console.log("Não é maior de idade !!")
    }
}
//Exercício 3
function exercicio3(dia: number): void {
    
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
    let contator: number = 2;
    while (contator <= 10) {
        console.log(contator);
        contator += 2;
    }
}
//Exercício 5
//npm install --save-dev @types/readline-sync
function exercicio5() {
    do {
        var userInput =  parseInt(readlineSync.question('Digite um número maior que 5: '));
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
    let pessoa: {[key: string]: string | number} = {
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

exercicio8()