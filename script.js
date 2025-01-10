// Data de casamento
const dataCasamento = new Date('2021-11-11');

// Função para atualizar o contador
function atualizarContador() {
    const agora = new Date();
    const diferenca = agora - dataCasamento;

    // Calcula os anos, meses, dias, horas, minutos e segundos
    const anos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365.25));
    const meses = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
    const dias = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    // Atualiza os elementos HTML
    document.getElementById('anos').textContent = anos;
    document.getElementById('meses').textContent = meses;
    document.getElementById('dias').textContent = dias;
    document.getElementById('horas').textContent = horas;
    document.getElementById('minutos').textContent = minutos;
    document.getElementById('segundos').textContent = segundos;
}

// Atualiza o contador a cada segundo
setInterval(atualizarContador, 1000);

// Seletor corrigido
const imagens = document.querySelectorAll('.carrossel img');
let index = 0;

function mostrarProximaImagem() {
    imagens.forEach((img, i) => {
        img.style.opacity = (i === index) ? '1' : '0';
    });
    index = (index + 1) % imagens.length;
}

window.addEventListener('load', () => {
    mostrarProximaImagem();
    setInterval(mostrarProximaImagem, 3000);
});

//Música

const musica = document.getElementById('musica');
musica.volume = 0.2;
const botaoMusica = document.getElementById('toggle-musica');

botaoMusica.addEventListener('click', () => {
    if (musica.paused) {
        musica.play();
        botaoMusica.textContent = '🔊 Pausar Música';
    } else {
        musica.pause();
        botaoMusica.textContent = '🔈 Tocar Música';
    }
});

const sliderVolume = document.getElementById('volume');

sliderVolume.addEventListener('input', () => {
    musica.volume = sliderVolume.value;
});

window.addEventListener('click', () => {
    if (musica.paused) {
        musica.play();
    }
});