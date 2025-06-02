// js/main.js

const gameContainer = document.getElementById("game");
const sceneArea = document.getElementById("sceneArea");
const enigmaModal = document.getElementById("enigmaModal");
const modalCharacterName = document.getElementById("modalCharacterName");
const modalQuestion = document.getElementById("modalQuestion");
const answerInput = document.getElementById("answerInput");
const feedbackDiv = document.getElementById("feedback");
const medalsDisplay = document.getElementById("medals");

let faseAtualIndex = 0;
let activeCharacter = null;
let medalhasCount = 0;

let bossVida = 100;

// Variável para armazenar o ID do requestAnimationFrame da movimentação
let movimentoAnimationFrameId; // <--- NOVA VARIÁVEL AQUI

// Funções do jogo principal
function iniciarFase(faseIndex) {
  faseAtualIndex = faseIndex;
  const fase = fases[faseAtualIndex];

  if (!fase) {
    finalizarJogo();
    return;
  }

  gameContainer.className = "";
  gameContainer.classList.add(fase.bodyClass);

  sceneArea.innerHTML = "";

  if (!fase.isBossFase) {
    sceneArea.style.display = "flex";
    fase.characters.forEach((character) => {
      const charElement = document.createElement("img");
      charElement.src = character.image;
      charElement.alt = character.name;
      charElement.classList.add("character-sprite");
      charElement.dataset.characterId = character.id;

      if (character.solved) {
        charElement.classList.add("solved");
      } else {
        charElement.addEventListener("click", () =>
          openEnigmaModal(character.id)
        );
      }
      sceneArea.appendChild(charElement);
    });

    if (document.getElementById("dialogo-box")) {
      document.getElementById("dialogo-box").classList.add("hidden");
    }
  } else {
  }

  if (fase.instruction) {
    openInstructionModal(fase.instruction);
  }

  atualizarMedalhasDisplay();
}

// Função para abrir o modal do enigma
function openEnigmaModal(characterId) {
  const fase = fases[faseAtualIndex];
  activeCharacter = fase.characters.find((char) => char.id === characterId);

  if (activeCharacter && !activeCharacter.solved) {
    modalCharacterName.textContent = `👤 ${activeCharacter.name}`;
    modalQuestion.textContent = activeCharacter.enigma;
    answerInput.value = "";
    feedbackDiv.textContent = "";
    enigmaModal.style.display = "flex";
    answerInput.focus();
  }
}

// Função para fechar o modal do enigma
function closeEnigmaModal() {
  enigmaModal.style.display = "none";
  activeCharacter = null;
}

// Função para verificar a resposta do enigma no modal
function checkAnswer() {
  if (!activeCharacter) return;

  const input = answerInput.value.trim().toLowerCase();
  const respostaCorreta = activeCharacter.resposta.toLowerCase();

  if (input === respostaCorreta) {
    feedbackDiv.textContent = "Resposta correta!";
    activeCharacter.solved = true;

    const charSprite = sceneArea.querySelector(
      `[data-character-id="${activeCharacter.id}"]`
    );
    if (charSprite) {
      charSprite.classList.add("solved");
      charSprite.removeEventListener("click", () =>
        openEnigmaModal(activeCharacter.id)
      );

      // Criar elemento da resposta visível
      const respostaTexto = document.createElement("div");
      respostaTexto.textContent = `${activeCharacter.resposta}`;
      respostaTexto.classList.add("resposta-visivel");
      const wrapper = document.createElement("div");
      wrapper.style.display = "flex";
      wrapper.style.flexDirection = "column";
      wrapper.style.alignItems = "center";

      charSprite.replaceWith(wrapper);
      wrapper.appendChild(charSprite);
      wrapper.appendChild(respostaTexto);
    }

    setTimeout(() => {
      closeEnigmaModal();
      verificarAvancoDeFase();
    }, 800);
  } else {
    feedbackDiv.textContent = "Resposta incorreta. Tente novamente!";
  }
}

// Função para verificar o avanço de fase (após resolver enigmas ou derrotar boss)
function verificarAvancoDeFase() {
  const fase = fases[faseAtualIndex];

  if (fase.isBossFase) {
    return;
  }

  const todosPersonagensResolvidos = fase.characters.every(
    (character) => character.solved
  );

  if (todosPersonagensResolvidos) {
    medalhasCount++;
    atualizarMedalhasDisplay();

    if (faseAtualIndex + 1 < fases.length) {
      fases[faseAtualIndex + 1].characters.forEach(
        (char) => (char.solved = false)
      );
    }

    setTimeout(() => {
      iniciarFase(faseAtualIndex + 1);
    }, 1000);
  }
}

// Função para atualizar a exibição das medalhas
function atualizarMedalhasDisplay() {
  medalsDisplay.textContent = `Resposta: 🏅 x${medalhasCount}`;
}

// Função para finalizar o jogo
function finalizarJogo() {
  // Parar a animação de movimento do player
  if (movimentoAnimationFrameId) {
    cancelAnimationFrame(movimentoAnimationFrameId);
    movimentoAnimationFrameId = null;
  }
  gameContainer.innerHTML = `<div class="final-message"><h2>Parabéns! Você salvou a todos e conquistou todas as medalhas! 🏆</h2></div>`;
  gameContainer.style.background = "black";
  gameContainer.style.color = "white";
}
function atualizarMedalhasDisplay() {
  const medalsDisplay = document.getElementById("medals");
  if (!medalsDisplay) {
    console.error("Elemento 'medals' não encontrado no DOM.");
    return;
  }

  medalsDisplay.innerHTML = "Resgatados: ";

  const medalhaImgs = [
    "/img/ALEXPNG.png",
    "/img/ISAACPNG.png",
    "/img/ElliotPNG.png",
    "/img/WENDDYPNG.png",
    "/img/ZOZOPNG.png",
    "/img/RucasCPNG.png",
    "/img/CASSIDYCHIBBIPNG.png",
    "/img/MAVCHIBBIPNG.png",
  ];

  for (let i = 0; i < medalhasCount; i++) {
    const medalhaImg = document.createElement("img");
    medalhaImg.src = medalhaImgs[i] || "img/medalha.png"; // fallback se ultrapassar limite
    medalhaImg.alt = `Medalha ${i + 1}`;
    medalhaImg.classList.add("medal-icon");
    medalsDisplay.appendChild(medalhaImg);
  }
}
function openInstructionModal(texto) {
  const modal = document.getElementById("instructionModal");
  const instructionText = document.getElementById("instructionText");
  instructionText.textContent = texto;
  modal.classList.remove("hidden");
}

function closeInstructionModal() {
  const modal = document.getElementById("instructionModal");
  modal.classList.add("hidden");
}
