let numeroNota = 1;
let valorNota = 0;

function adicionarItem() {
    const tabelaItens = document.getElementById('tabelaItens');
    const codigo = prompt('Digite o código da mercadoria (até 3 caracteres):');
    const descricao = prompt('Digite a descrição da mercadoria (até 40 caracteres):');
    const valorUnitario = parseFloat(prompt('Digite o valor unitário da mercadoria:'));
    const quantidade = parseInt(prompt('Digite a quantidade da mercadoria:'));

    if (codigo && descricao && !isNaN(valorUnitario) && !isNaN(quantidade)) {
        const valorTotal = valorUnitario * quantidade;
        valorNota += valorTotal;

        const novaLinha = tabelaItens.insertRow(-1);
        const celulaCodigo = novaLinha.insertCell(0);
        const celulaDescricao = novaLinha.insertCell(1);
        const celulaValorUnitario = novaLinha.insertCell(2);
        const celulaQuantidade = novaLinha.insertCell(3);
        const celulaValorTotal = novaLinha.insertCell(4);

        celulaCodigo.textContent = codigo;
        celulaDescricao.textContent = descricao;
        celulaValorUnitario.textContent = valorUnitario.toFixed(2);
        celulaQuantidade.textContent = quantidade;
        celulaValorTotal.textContent = valorTotal.toFixed(2);

        atualizarValorNota();
    } else {
        alert('Por favor, preencha os dados corretamente.');
    }
}

function atualizarValorNota() {
    const inputValorNota = document.getElementById('valorNota');
    inputValorNota.value = valorNota.toFixed(2);
}

window.onload = function() {
    const inputNumeroNota = document.getElementById('numeroNota');
    inputNumeroNota.value = numeroNota;

    const formulario = document.getElementById('formulario');
    formulario.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Nota cadastrada com sucesso!');
        formulario.reset();
        numeroNota++;
        inputNumeroNota.value = numeroNota;
        valorNota = 0;
        atualizarValorNota();
        limparTabelaItens();
    });
}

function limparTabelaItens() {
    const tabelaItens = document.getElementById('tabelaItens');
    while (tabelaItens.rows.length > 1) {
        tabelaItens.deleteRow(1);
    }
}
