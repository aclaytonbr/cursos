const cadastro = [
    {
        "codigo": "001",
        "nome": "João da Silva",
        "idade": 30,
        "dataNascimento": "1992-05-10",
        "cargo": "Desenvolvedor Web",
        "salario": 5000,
        "estadoCivil": "casado",
        "endereco": "Rua das Flores, 123"
    },
    {
        "codigo": "002",
        "nome": "Maria da Silva",
        "idade": 30,
        "dataNascimento": "1992-05-10",
        "cargo": "Desenvolvedor Web",
        "salario": 5000,
        "estadoCivil": "casado",
        "endereco": "Rua das Flores, 123"
    },
]

document.querySelector("#posicao").disabled = true;
document.querySelector("#posicao").textContent = "0";

const btnPreencher = document.querySelector("#preencher");
const btnProximo = document.getElementById('proximo');
const btnAnterior = document.getElementById('anterior');

var p = 0;

btnPreencher.addEventListener('click', () => {
    p = 0;
    preencherFormulario(0);
})

btnProximo.addEventListener('click', () => {
    p += 1;
    if (p >= cadastro.length) {
        alert("Fim do arquivo");
        return;
    }
    preencherFormulario(p);
})

btnAnterior.addEventListener('click', () => {
    p -= 1;
    if (p < 0) {
        alert("Inicio do arquivo");
        p = 0;
    } else {
        preencherFormulario(p);
    }
})

function preencherFormulario(posicao) {
    
    document.getElementById('codigo').value = cadastro[posicao].codigo;
    document.getElementById('nome').value = cadastro[posicao].nome;
    document.getElementById('idade').value = cadastro[posicao].idade;
    document.getElementById('dataNascimento').value = cadastro[posicao].dataNascimento;
    document.getElementById('cargo').value = cadastro[posicao].cargo;
    document.getElementById('salario').value = cadastro[posicao].salario;
    document.getElementById('estadoCivil').value = cadastro[posicao].estadoCivil;
    document.getElementById('endereco').value = cadastro[posicao].endereco;
    
}