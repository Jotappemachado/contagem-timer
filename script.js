// Data de casamento
const dataCasamento = new Date('2021-11-11');

// Atualiza contador
function atualizarContador() {
  const agora = new Date();
  const diferenca = agora - dataCasamento;

  const anos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365.25));
  const meses = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
  const dias = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

  document.getElementById('anos').textContent = anos;
  document.getElementById('meses').textContent = meses;
  document.getElementById('dias').textContent = dias;
  document.getElementById('horas').textContent = horas;
  document.getElementById('minutos').textContent = minutos;
  document.getElementById('segundos').textContent = segundos;
}

setInterval(atualizarContador, 1000);
window.addEventListener('load', atualizarContador);

// Carrossel
const imagens = document.querySelectorAll('.carrossel img');
let index = 0;

function mostrarProximaImagem() {
  imagens.forEach((img, i) => {
    img.style.opacity = (i === index) ? '1' : '0';
  });
  index = (index + 1) % imagens.length;
}

setInterval(mostrarProximaImagem, 3000);

// Música
const musica = document.getElementById('musica');
const botaoMusica = document.getElementById('toggle-musica');
const sliderVolume = document.getElementById('volume');

musica.volume = 0.2;

botaoMusica.addEventListener('click', () => {
  if (musica.paused) {
    musica.play();
    botaoMusica.textContent = '🔊 Pausar Música';
  } else {
    musica.pause();
    botaoMusica.textContent = '🔈 Tocar Música';
  }
});

sliderVolume.addEventListener('input', () => {
  musica.volume = sliderVolume.value;
});

// Garante que a música toca após interação
window.addEventListener('click', () => {
  if (musica.paused) musica.play();
}, { once: true });
