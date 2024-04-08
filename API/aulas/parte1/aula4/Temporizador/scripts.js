const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const logo = document.querySelector('.app__image');
const titulo = document.querySelector(".app__title");
const botoes = document.querySelectorAll('.app__card-button');
const startPauseBt = document.querySelector("#start-pause");
const startPauseImg = document.querySelector('.app__card-primary-butto-icon');

//adicionando o temporizador
let tempoDecorridoEmSegundos = 5;
let intervaloId = null;

function contagemRegressiva() {
    if (tempoDecorridoEmSegundos <= 0) {
        alert('Tempo finalizado');
        return;
    }
    tempoDecorridoEmSegundos -= 1;
    console.log(tempoDecorridoEmSegundos);
}

startPauseBt.addEventListener('click', contagemRegressiva);

function iniciar() {
    intervaloId = setInterval(contagemRegressiva, 1000);
}

//adicionando a música
const musicaFocoInput = document.querySelector("#alternar-musica");
const musica = new Audio('./sons/luna-rise-part-one.mp3');
musica.loop = true;
musicaFocoInput.addEventListener('change', () => {
    if (musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
})

focoBt.addEventListener('click', () => {
    alterarContexto('foco');
    focoBt.classList.add('active');
});

curtoBt.addEventListener('click', () => {
    alterarContexto('descanso-curto');
    curtoBt.classList.add('active');
});

longoBt.addEventListener('click', () => {
    alterarContexto('descanso-longo');
    longoBt.classList.add('active');
});

function alterarContexto(contexto) {
    html.setAttribute('data-contexto', contexto);
    logo.setAttribute('src',`imagens/${contexto}.png`); 
    botoes.forEach(function (botao) {
        botao.classList.remove( 'active');
    })
    switch (contexto) {
        case "foco":
            titulo.innerHTML = `
            Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>
            `
            break;
        case "descanso-curto":
            titulo.innerHTML = `
            Que tal dar uma respirada? <strong class="app__title-strong">Faça uma pausa curta!</strong>
            ` 
            break;
        case "descanso-longo":
            titulo.innerHTML = `
            Hora de voltar à superfície.<strong class="app__title-strong"> Faça uma pausa longa.</strong>
            `
        default:
            break;
    }

}