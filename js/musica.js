const musica = document.getElementById("musica");
const playPause = document.getElementById("playPause");
const iconePlayPause = document.getElementById("iconePlayPause");
const tempoAtual = document.getElementById("tempoAtual");
const tempoTotal = document.getElementById("tempoTotal");
const barraMusica = document.getElementById("barraMusica");

function toggleMusica() {
    if (musica.paused) {
        musica.play().then(() => {
            if (iconePlayPause) iconePlayPause.src = "imagens/pause.svg";
        });
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