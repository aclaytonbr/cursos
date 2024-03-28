import * as readlineSync from 'readline-sync'

function exercicio1(numero: number): void {

    if (isNaN(numero)) {
        console.log("O número informado não é válido");
        return;
    }

    if (numero % 2 == 0) {
        console.log("######################################");
        console.log(numero + " é um número par");
        console.log("######################################");
    } else {
        console.log("######################################");
        console.log(numero + " não é um número par");
        console.log("######################################");
    }

}

function exercicio2(idade: number): void {

    if (isNaN(idade)) {
        console.log("A idade informada não é válido");
        return;
    }

    if (idade >= 18) {
        console.log("######################################");
        console.log("Você é maior de idade");
        console.log("######################################");
    } else {
        console.log("######################################");
        console.log("Você não é maior de idade");
        console.log("######################################");
    }

}

function exercicio3(dia_da_semana: number): void {

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

    let userInput: number;

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


//const numero = readlineSync.question("Entre com um número: ");