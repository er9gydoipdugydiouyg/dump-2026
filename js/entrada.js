function entrarSite() {
    const entrada = document.getElementById("entrada");
    const caixa = document.querySelector(".caixa-entrada");

    const musica = document.getElementById("musica");
    const iconePlayPause = document.getElementById("iconePlayPause");

    caixa.style.transform = "scale(0.6)";
    caixa.style.opacity = "0";

    entrada.style.opacity = "0";

    setTimeout(() => {
        entrada.style.display = "none";

        musica.play().then(() => {
            if (iconePlayPause) iconePlayPause.src = "imagens/pause.svg";
        }).catch((err) => {
            console.log("Autoplay bloqueado:", err);
            if (iconePlayPause) iconePlayPause.src = "imagens/play.svg";
        });
    }, 800);
}