//implementar clicks nos botoes
const btn0 = document.querySelector("#btn0");
const btn1 = document.querySelector("#btn1");
const btnIgual = document.querySelector("#btnEquals");
const btnSoma = document.querySelector('#btnAdd');
const btnDecimal = document.querySelector('#btnDecimal');

let numtemp1 = 0;
let numtemp2 = 0;
let operacao = "";

const display = document.querySelector("#display");

btn0.addEventListener('click', () => {
    if (display.textContent === "0") {
        display.textContent = btn0.textContent;
    } else {
        display.textContent = display.textContent + btn0.textContent;
    }    
});


btn1.addEventListener('click', () => {
    if (display.textContent === "0") {
        display.textContent = btn1.textContent; 
    } else {
        display.textContent = display.textContent + btn1.textContent;
    }
});

btnDecimal.addEventListener('click', () => {

    if (!display.textContent.includes('.')) {
        display.textContent = display.textContent + btnDecimal.textContent;
    } 

})

btnSoma.addEventListener('click', () => {
    numtemp1 = display.textContent;
    operacao = btnSoma.textContent;
    display.textContent = "";
})

btnIgual.addEventListener('click', () => {
    numtemp2 = display.textContent;
    display.textContent =  realizarOperacao(numtemp1, numtemp2, operacao);
})

function realizarOperacao(op1, op2, operacao) {
    const v1 = parseFloat(op1);
    const v2 = parseFloat(op2);

    switch (operacao) {
        case "+":
            return v1 + v2;
        default:
            break;
    }

}