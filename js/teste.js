// script.js

const startScreen = document.getElementById("startScreen");
const gameContainer = document.getElementById("gameContainer");
const creditsInfo = document.getElementById("creditsInfo");

const fases = [
  {
    personagem: "Velho Ranzinza",
    enigmas: [
      "O que é que quanto mais se tira, maior fica?",
      "O que é que tem dentes mas não come?",
      "O que é, o que é: Tem cabeça e tem dentes, mas não é bicho nem gente?",
      "O que é, o que é: Cai em pé e corre deitado?",
    ],
    respostas: ["um buraco", "um pente", "o alho", "a chuva"],
    medalha: "🥇",
    bodyClass: "fase-0-bg",
    containerClass: "fase-0-container",
  },
  {
    personagem: "Dona Bruma",
    enigmas: [
      "O que não tem boca, mas fala; não tem ouvidos, mas ouve?",
      "Qual o animal que anda com os pés na cabeça?",
      "O que é, o que é: Quanto mais quente, mais fresco é?",
      "O que é, o que é: Tem rabo, mas não é cão; tem escamas, mas não é peixe?",
    ],
    respostas: ["o eco", "o piolho", "o pão", "a balança"],
    medalha: "🥈",
    bodyClass: "fase-1-bg",
    containerClass: "fase-1-container",
  },
  {
    personagem: "Mestre Miau",
    enigmas: [
      "Tenho cidades, mas não casas. Montanhas, mas não árvores. E água, mas não peixes. O que sou?",
      "O que é, o que é: Tem olhos, mas não vê?",
      "O que é, o que é: Nasce grande e morre pequeno?",
      "O que é, o que é: Sobe e desce, mas não sai do lugar?",
    ],
    respostas: ["um mapa", "o furacão", "o lápis", "a escada"],
    medalha: "🥉",
    bodyClass: "fase-2-bg",
    containerClass: "fase-2-container",
  },
  {
    personagem: "T-Órion",
    enigmas: [
      "Qual é o único número que, quando você tira metade dele, ele ainda continua o mesmo?",
      "O que é, o que é: De dia tem 4 pés e de noite tem 6?",
      "O que é, o que é: Voa sem ter asas e chora sem ter olhos?",
      "O que é, o que é: Quanto mais se perde, mais se tem?",
    ],
    respostas: ["o número 8", "a cama", "a nuvem", "o sono"],
    medalha: "🏅",
    bodyClass: "fase-3-bg",
    containerClass: "fase-3-container",
  },
  {
    personagem: "Lúmina",
    enigmas: [
      "Você me vê no começo da noite e no fim da manhã. O que sou?",
      "O que é, o que é: Pode-se quebrar falando?",
      "O que é, o que é: Anda sem ter pés, e tem um chapéu que não é de sol?",
      "O que é, o que é: Tem pescoço e não tem cabeça, tem braços e não tem mãos?",
    ],
    respostas: ["a letra n", "o segredo", "o cogumelo", "a camisa"],
    medalha: "🎖️",
    bodyClass: "fase-4-bg",
    containerClass: "fase-4-container",
  },
  {
    personagem: "Capitão Sombra",
    enigmas: [
      "Tenho um pescoço mas não tenho cabeça, e uso dois braços mas não tenho mãos. O que sou?",
      "O que é, o que é: Tem casa, mas mora fora dela?",
      "O que é, o que é: Tem bacha, mas não tem boca?",
      "O que é, o que é: Se você me tem, quer me dividir; se me divide, não me tem mais?",
    ],
    respostas: ["uma camisa", "o caracol", "a chaleira", "o segredo"],
    medalha: "🏵️",
    bodyClass: "fase-5-bg",
    containerClass: "fase-5-container",
  },
  {
    personagem: "Sábio Medalhon",
    enigmas: [
      "Quanto mais você compartilha, mais você tem. O que é?",
      "O que é, o que é: Tem linha, mas não costura?",
      "O que é, o que é: Está sempre no meio do caminho?",
      "O que é, o que é: Entra na água e não se molha?",
    ],
    respostas: ["conhecimento", "o anzol", "a letra h", "a sombra"],
    medalha: "🥇",
    bodyClass: "fase-6-bg",
    containerClass: "fase-6-container",
  },
];

let faseAtual = 0;
let enigmaAtualDaFase = 0; // Variável para controlar o enigma dentro da fase
let medalhas = [];

const body = document.body;
const container = document.querySelector(".container");

function startGame() {
  // 1. Adiciona a classe 'fade-out' para iniciar a transição de saída da tela de início
  startScreen.classList.add("fade-out");

  // 2. Espera a duração da transição CSS (0.5 segundos) antes de esconder a tela inicial e mostrar o jogo
  setTimeout(() => {
    startScreen.style.display = "none"; // Esconde completamente após a transição
    gameContainer.style.display = "flex"; // Torna o container do jogo visível (mas ainda transparente)

    // 3. Adiciona a classe 'visible' ao gameContainer para iniciar a transição de entrada
    gameContainer.classList.add("visible");

    atualizarFase(); // Inicia a lógica da primeira fase do jogo
  }, 500); // O tempo aqui deve ser igual ou um pouco maior que a duração da sua transição CSS (0.5s = 500ms)
}

function showCredits() {
  creditsInfo.style.display = "block";
}

function hideCredits() {
  creditsInfo.style.display = "none";
}

function atualizarFase() {
  const fase = fases.at(faseAtual); // Pega o objeto da fase atual

  // Remove as classes anteriores do body e do container
  body.className = "";
  container.className = "container";

  // Adiciona as novas classes de estilo para o body e container
  body.classList.add(fase.bodyClass);
  container.classList.add(fase.containerClass);

  document.getElementById("character").textContent = `👤 ${fase.personagem}`;
  // Exibe o enigma correto do array de enigmas da fase atual
  document.getElementById("question").textContent =
    fase.enigmas[enigmaAtualDaFase];
  document.getElementById("answerInput").value = "";
  document.getElementById("feedback").textContent = "";
}

function checkAnswer() {
  const input = document
    .getElementById("answerInput")
    .value.trim()
    .toLowerCase();
  const fase = fases.at(faseAtual); // Pega o objeto da fase atual

  // Verifica se a fase e o enigma existem antes de tentar acessar
  if (!fase || enigmaAtualDaFase >= fase.enigmas.length) {
    console.error("Erro: Enigma ou fase inválida.");
    return;
  }

  const respostaCorreta = fase.respostas[enigmaAtualDaFase].toLowerCase(); // Pega a resposta correspondente

  if (input === respostaCorreta) {
    document.getElementById("feedback").textContent = "Resposta correta!"; // Feedback positivo

    enigmaAtualDaFase++; // Tenta avançar para o próximo enigma dentro da fase

    // Verifica se ainda há enigmas a serem respondidos NESTA FASE
    if (enigmaAtualDaFase < fase.enigmas.length) {
      // Se sim, carrega o próximo enigma da mesma fase após um pequeno delay para o jogador ver o feedback
      setTimeout(() => {
        atualizarFase();
      }, 800); // 0.8 segundos de delay
    } else {
      // Se todos os enigmas desta fase foram respondidos, avança para a próxima FASE
      medalhas.push(fase.medalha); // Concede a medalha da fase
      enigmaAtualDaFase = 0; // Reseta o contador de enigmas para a primeira enigma da PRÓXIMA fase
      faseAtual++; // Avança para a próxima fase principal

      // Verifica se ainda há fases no jogo
      if (faseAtual < fases.length) {
        // Carrega a nova fase e seu primeiro enigma após um delay para o feedback
        setTimeout(() => {
          atualizarFase();
        }, 800);
      } else {
        // Se todas as fases e enigmas foram concluídos
        document.querySelector(
          ".container"
        ).innerHTML = `<h2>Parabéns! Você conquistou todas as medalhas! 🏆</h2>`;
        body.className = ""; // Limpa as classes de fundo
        container.className = "container"; // Reseta o container
        body.style.backgroundImage = "none"; // Remove imagem de fundo
        body.style.backgroundColor = "#f4f4f4"; // Define uma cor de fundo neutra
      }
    }
    atualizarMedalhas(); // Atualiza a exibição das medalhas (visível ao conceder uma)
  } else {
    document.getElementById("feedback").textContent =
      "Resposta incorreta. Tente novamente!";
  }
}

function atualizarMedalhas() {
  document.getElementById("medals").textContent = `Medalhas: ${medalhas.join(
    " "
  )}`;
}

// O jogo começa quando o botão "Jogar" é clicado na tela de início.
// Não precisamos chamar atualizarFase() ou startGame() aqui inicialmente.
