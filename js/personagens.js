function criarPersonagem() {
  const player = document.createElement("div");
  player.id = "player";
  player.style.position = "absolute";
  player.style.bottom = "10px";
  player.style.left = "10px";
  player.style.width = "32px";
  player.style.height = "32px";
  player.style.backgroundColor = "red"; // Cor de fundo vermelha
  player.style.borderRadius = "50%";
  return player;
}

function moverPersonagem(x, y) {
  const player = document.getElementById("player");
  if (player) {
    player.style.left = `${x}px`;
    player.style.bottom = `${y}px`;
  }
}

// Adiciona esta parte para criar e adicionar o personagem ao jogo
document.addEventListener("DOMContentLoaded", () => {
  const game = document.getElementById("game"); // Obtém o elemento do jogo
  if (game) {
    const player = criarPersonagem(); // Cria o personagem
    game.appendChild(player); // Adiciona o personagem ao jogo
    // Verifica se o personagem foi adicionado ao DOM
    if (document.getElementById("player")) {
    } else {
      console.error("Erro: Personagem não foi adicionado ao jogo.");
    }
  } else {
    console.error("Erro: Elemento do jogo não encontrado.");
  }
});
