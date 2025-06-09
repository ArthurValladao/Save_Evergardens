// js/telaini.js
document.getElementById("play-button").addEventListener("click", () => {
    console.log("PLAY BUTTON CLICKED: Iniciando transição.");
    const playScreen = document.getElementById("play-screen");
    playScreen.style.opacity = "0";
    setTimeout(() => {
        playScreen.classList.add("hidden");
        document.getElementById("game").classList.remove("hidden");
        console.log("TRANSITION COMPLETE: Chamando iniciarFase(0).");
        iniciarFase(1); // <--- AQUI O JOGO REALMENTE COMEÇA
    }, 500);
});

document.getElementById("credits-button").addEventListener("click", () => {
  document.getElementById("credits-box").classList.remove("hidden");
});

document.getElementById("close-credits").addEventListener("click", () => {
  document.getElementById("credits-box").classList.add("hidden");
});
