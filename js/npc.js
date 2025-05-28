// js/npc.js

// Função para criar o elemento do jogador
function criarPlayer() {
  const player = document.createElement("div");
  player.id = "player";
  player.style.position = "absolute";
  player.style.bottom = "10px"; // Posição inicial
  player.style.left = "10px"; // Posição inicial
  // Estilos de tamanho e fundo estão no CSS
  return player;
}

// Funções para NPC genérico (se você ainda precisar de NPCs que não dão enigmas ao clique)
function criarNpcGenerico(id, left, bottom, imagePath = "img/npc-default.png") {
  const npc = document.createElement("div");
  npc.id = id;
  npc.classList.add("npc"); // Adiciona a classe 'npc' para estilos
  npc.style.position = "absolute";
  npc.style.bottom = `${bottom}px`;
  npc.style.left = `${left}px`;
  npc.style.backgroundImage = `url('${imagePath}')`;
  return npc;
}

// Funções de animação de NPC (se você tiver NPCs que se movem, etc.)
let animationFrameId; // para animações de NPC, não do player

function iniciarAnimacaoNpc(npcElement) {
 
}

function pararAnimacaoNpc() {
  cancelAnimationFrame(animationFrameId);
}
