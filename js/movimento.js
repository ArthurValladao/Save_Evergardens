// js/movimento.js

let posX = 10;
let posY = 10;
const velocidade = 5;
const playerWidth = 50;
const playerHeight = 50;

const keys = {};

// Remova a variável playerElement daqui ou a inicialize no início da função
// pois ela será acessada dentro de atualizarMovimento.
// let playerElement; // <-- Remova ou comente esta linha, ou inicialize dentro de atualizarMovimento

document.addEventListener("keydown", (e) => {
  keys[e.key.toLowerCase()] = true;
});

document.addEventListener("keyup", (e) => {
  keys[e.key.toLowerCase()] = false;
});

function atualizarMovimento() {
  // ATENÇÃO: É crucial obter o playerElement aqui DENTRO do loop
  // para garantir que ele já exista no DOM.
  const playerElement = document.getElementById("player");
  if (!playerElement || !gameContainer) {
    // gameContainer é global
    // Se o player ou o gameContainer não existem, pare a animação
    if (movimentoAnimationFrameId) {
      // Certifique-se que movimentoAnimationFrameId é global em main.js
      cancelAnimationFrame(movimentoAnimationFrameId);
      movimentoAnimationFrameId = null;
    }
    return;
  }

  const gameRect = gameContainer.getBoundingClientRect(); // Obtenha as dimensões do gameContainer

  let newPosX = posX;
  let newPosY = posY;

  if (keys["a"]) newPosX -= velocidade;
  if (keys["d"]) newPosX += velocidade;
  if (keys["w"]) newPosY += velocidade;
  if (keys["s"]) newPosY -= velocidade;

  // Colisão com bordas do 'gameContainer'
  const maxX = gameRect.width - playerWidth;
  const maxY = gameRect.height - playerHeight;

  if (newPosX < 0) newPosX = 0;
  if (newPosX > maxX) newPosX = maxX;

  if (newPosY < 0) newPosY = 0;
  if (newPosY > maxY) newPosY = maxY;

  posX = newPosX;
  posY = newPosY;

  playerElement.style.left = `${posX}px`;
  playerElement.style.bottom = `${posY}px`;

  // Agende o próximo frame. movimentoAnimationFrameId é definido em main.js
  if (document.getElementById("game").classList.contains("hidden") === false) {
    // Só continua se o jogo não estiver escondido
    movimentoAnimationFrameId = requestAnimationFrame(atualizarMovimento);

    verificarProximidadeComPersonagens();
  }
}
function verificarProximidadeComPersonagens() {
  const personagens = sceneArea.querySelectorAll(".character-sprite");
  const player = document.getElementById("player");

  if (!player) return;

  const rectPlayer = player.getBoundingClientRect();
  personagemProximo = null;

  personagens.forEach((char) => {
    const rectChar = char.getBoundingClientRect();
    const distancia = Math.hypot(
      rectChar.left - rectPlayer.left,
      rectChar.top - rectPlayer.top
    );

    if (distancia < 70 && !char.classList.contains("solved")) {
      personagemProximo = char;
    }
  });
}
