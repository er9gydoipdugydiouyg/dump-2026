function mostrarGifs(nomeGif) {
    const area = document.getElementById("emojis");
    area.innerHTML = "";

    const usados = [];
    const quantidade = 6;
    const distanciaMinima = 35;

    for (let i = 0; i < quantidade; i++) {
        let x, y;
        let valido;
        let tentativas = 0;

        do {
            valido = true;
            x = Math.random() * 90;
            y = Math.random() * 90;
            tentativas++;

            for (const ponto of usados) {
                const distancia = Math.hypot(x - ponto.x, y - ponto.y);

                if (distancia < distanciaMinima) {
                    valido = false;
                    break;
                }
            }
        } while (!valido && tentativas < 100);

        usados.push({ x, y });

        const img = document.createElement("img");
        img.src = "./imagens/" + nomeGif;
        img.className = "gif-solto";

        if (nomeGif === "giffeliz1.gif") {
            img.classList.add("gif-maior");
        }

        img.style.left = x + "%";
        img.style.top = y + "%";

        area.appendChild(img);
    }
}

function limparEmojis() {
    document.getElementById("emojis").innerHTML = "";
}