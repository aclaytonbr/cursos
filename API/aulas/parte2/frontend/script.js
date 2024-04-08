
const formulario = document.getElementById('meuFormulario');
const buscarBtn = document.getElementById('buscarBtn');
const resultado = document.getElementById('resultado');
const txtCodigo = document.getElementById('codigo');
const txtNome = document.getElementById('nome');
document.getElementsByClassName
formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    const codigo = document.getElementById('codigo').value;
    const nome = document.getElementById('nome').value;

    // Aqui você pode enviar os dados para a API
    // Exemplo:
    enviarDadosParaAPI(codigo, nome);

    // Limpa os campos do formulário
    document.getElementById('codigo').value = '';
    document.getElementById('nome').value = '';

});

buscarBtn.addEventListener('click', function() {
    buscarDadosNaAPI(txtCodigo.value);
});

// Função para enviar dados para a API (exemplo)
function enviarDadosParaAPI(codigo, nome) {
    
    //monta o json para ser enviado
    let data = {
        codigo: txtCodigo.value,
        nome: txtNome.value,
    }

    // Faz uma requisição POST para a API
    fetch('http://localhost:3000/api/banco/criar/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
      .then(data => {
        console.log('Resposta da API:', data);
        alert('Dados enviados com sucesso!');
      })
      .catch(error => {
        console.error('Erro ao enviar dados:', error);
        alert('Erro ao enviar dados. Verifique o console para mais informações.');
      });
}   

// Função para fazer a solicitação à APIfunction buscarDadosNaAPI(codigoBanco) {
async function buscarDadosNaAPI(codigo_banco) {

    let apiUrl = `http://localhost:3000/api/banco/buscar?codigo=${codigo_banco}`;

    try {
        const response = await fetch(apiUrl,
            {method: "GET",
             headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
         });

        const data = await response.json();

        // Atualizando o conteúdo da página
        txtCodigo.value = data.codigo;
        txtNome.value = data.nome;

      } catch (error) {
        console.error('Erro ao acessar a API:', error);
      }
    
}
