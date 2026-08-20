const musica = document.getElementById("musica");
const playPause = document.getElementById("playPause");
const iconePlayPause = document.getElementById("iconePlayPause");
const tempoAtual = document.getElementById("tempoAtual");
const tempoTotal = document.getElementById("tempoTotal");
const barraMusica = document.getElementById("barraMusica");

// --- SISTEMA DE TROCA DOS 5 URSINHOS DA TELA "SIM" ---
const ursinhoTopo = document.getElementById("ursinhoTopo");

// Lista isolada apenas para a página sim.html
const listaUrsinhos = [
    "imagens/ursinhosim1.gif",
    "imagens/ursinhosim2.gif",
    "imagens/ursinhosim3.gif",
    "imagens/ursinhosim4.gif",
    "imagens/ursinhosim5.gif"
];

let indiceAtual = 0;

function mudarUrsinho() {
    // Passa do 1 ao 5 e recomeça no 1
    indiceAtual = (indiceAtual + 1) % listaUrsinhos.length;
    
    if (ursinhoTopo) {
        // Troca a foto do GIF
        ursinhoTopo.src = listaUrsinhos[indiceAtual];
        
        // CORREÇÃO: Troca também a classe CSS para aplicar as regras do GIF atual! (gif-topo-1, gif-topo-2...)
        ursinhoTopo.className = `gif-topo-${indiceAtual + 1}`;
    }
}

// Troca o gif a cada 5 segundos
setInterval(mudarUrsinho, 5000);

// --- CONTROLE DA MÚSICA ---
window.addEventListener("load", () => {
    musica.play().then(() => {
        if (iconePlayPause) iconePlayPause.src = "imagens/pause.svg";
    }).catch(() => {
        if (iconePlayPause) iconePlayPause.src = "imagens/play.svg";
    });
});

function toggleMusica() {
    if (musica.paused) {
        musica.play().then(() => {
            if (iconePlayPause) iconePlayPause.src = "imagens/pause.svg";
        }).catch((err) => console.log("Erro ao tocar:", err));
    } else {
        musica.pause();
        if (iconePlayPause) iconePlayPause.src = "imagens/play.svg";
    }
}

function formatarTempo(segundos) {
    if (isNaN(segundos)) return "0:00";
    const minutos = Math.floor(segundos / 60);
    const segundosRestantes = Math.floor(segundos % 60).toString().padStart(2, "0");
    return minutos + ":" + segundosRestantes;
}

musica.addEventListener("loadedmetadata", () => {
    tempoTotal.textContent = formatarTempo(musica.duration);
});

musica.addEventListener("timeupdate", () => {
    tempoAtual.textContent = formatarTempo(musica.currentTime);
    if (!isNaN(musica.duration)) {
        barraMusica.value = (musica.currentTime / musica.duration) * 100;
        barraMusica.style.background = 
            `linear-gradient(to right, #B16F8F 0%, #B16F8F ${barraMusica.value}%, rgba(177,111,143,.25) ${barraMusica.value}%, rgba(177,111,143,.25) 100%)`;
    }
});

barraMusica.addEventListener("input", () => {
    musica.currentTime = (barraMusica.value / 100) * musica.duration;
});