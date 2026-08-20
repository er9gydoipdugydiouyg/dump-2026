const botaoNao = document.getElementById("botaoNao");
const botaoSim = document.getElementById("botaoSim");

const areaBotaoNao = document.getElementById("areaBotaoNao");
const areaBotaoSim = document.getElementById("areaBotaoSim");

let vezesNao = 0;
let tamanhoSim = 1;

const textosNao = [
    "tem certeza?",
    "certeza mesmo?",     
    "absoluta?",
    "pensa melhor",
    "você não ta pensando direito",
    "aperta sim",
    "porfavor",
    "vai no sim",
    "porfavor"
];

const gifsTristes = [
    {
        arquivo: "triste1.gif",

        larguraPc: "140px",
        alturaPc: "100px",
        topPc: "-115px",
        leftPc: "37.5%",

        larguraCelular: "120px",
        alturaCelular: "90px",
        topCelular: "-95px",
        leftCelular: "34%",

        rotacao: "0deg"
    },
    {
        arquivo: "triste2.gif",

        larguraPc: "125px",
        alturaPc: "105px",
        topPc: "-115px",
        leftPc: "40.5%",

        larguraCelular: "110px",
        alturaCelular: "90px",
        topCelular: "-95px",
        leftCelular: "36%",

        rotacao: "0deg"
    },
    {
        arquivo: "triste3.gif",

        larguraPc: "130px",
        alturaPc: "130px",
        topPc: "-140px",
        leftPc: "39%",

        larguraCelular: "115px",
        alturaCelular: "115px",
        topCelular: "-118px",
        leftCelular: "35%",

        rotacao: "0deg"
    },
    {
        arquivo: "triste4.gif",

        larguraPc: "140px",
        alturaPc: "140px",
        topPc: "-140px",
        leftPc: "38%",

        larguraCelular: "115px",
        alturaCelular: "115px",
        topCelular: "-110px",
        leftCelular: "35%",

        rotacao: "0deg"
    },
    {
        arquivo: "triste5.gif",

        larguraPc: "120px",
        alturaPc: "120px",
        topPc: "-118px",
        leftPc: "40%",

        larguraCelular: "105px",
        alturaCelular: "105px",
        topCelular: "-100px",
        leftCelular: "36%",

        rotacao: "0deg"
    },
    {
        arquivo: "triste6.gif",

        larguraPc: "120px",
        alturaPc: "120px",
        topPc: "-118px",
        leftPc: "40%",

        larguraCelular: "105px",
        alturaCelular: "105px",
        topCelular: "-105px",
        leftCelular: "36%",

        rotacao: "0deg"
    },
    {
        arquivo: "triste7.gif",

        larguraPc: "125px",
        alturaPc: "105px",
        topPc: "-118px",
        leftPc: "41%",

        larguraCelular: "110px",
        alturaCelular: "95px",
        topCelular: "-100px",
        leftCelular: "37%",

        rotacao: "0deg"
    },
    {
        arquivo: "triste8.gif",

        larguraPc: "123px",
        alturaPc: "120px",
        topPc: "-130px",
        leftPc: "37%",

        larguraCelular: "108px",
        alturaCelular: "105px",
        topCelular: "-110px",
        leftCelular: "31.8%",

        rotacao: "0deg"
    },
    {
        arquivo: "triste9.gif",

        larguraPc: "120px",
        alturaPc: "125px",
        topPc: "-140px",
        leftPc: "39%",

        larguraCelular: "105px",
        alturaCelular: "125px",
        topCelular: "-130px",
        leftCelular: "35%",

        rotacao: "0deg"
    }
];

function clicarNao() {
    vezesNao++;

const ursinhoTopo = document.getElementById("ursinhoTopo");

const gif = gifsTristes[Math.min(vezesNao - 1, gifsTristes.length - 1)];

ursinhoTopo.src = "imagens/" + gif.arquivo;

if (window.innerWidth <= 768) {
    ursinhoTopo.style.width = gif.larguraCelular;
    ursinhoTopo.style.height = gif.alturaCelular;
    ursinhoTopo.style.top = gif.topCelular;
    ursinhoTopo.style.left = gif.leftCelular;
} else {
    ursinhoTopo.style.width = gif.larguraPc;
    ursinhoTopo.style.height = gif.alturaPc;
    ursinhoTopo.style.top = gif.topPc;
    ursinhoTopo.style.left = gif.leftPc;
}

ursinhoTopo.style.transform = `translateX(-50%) rotate(${gif.rotacao})`;


    if (vezesNao <= textosNao.length) {
        botaoNao.textContent = textosNao[vezesNao - 1];
    }

let x;
let y;

if (window.innerWidth <= 768) {
    x = Math.random() * 80 - 40;
    y = Math.random() * 44 - 22;
} else {
    x = Math.random() * 240 - 120;
    y = Math.random() * 160 - 80;
}

areaBotaoNao.style.transform = `translate(${x}px, ${y}px)`;
areaBotaoNao.classList.add("mostrar-gif");

    tamanhoSim += window.innerWidth <= 768 ? 0.03 : 0.10;
    areaBotaoSim.style.transform = `scale(${tamanhoSim})`;

    if (vezesNao >= 10) {

        setTimeout(() => {
            document.getElementById("telaNao").style.display = "flex";
        }, 500);
    }
}

function clicarSim() {
    areaBotaoSim.classList.add("mostrar-gif");

    const ursinhoTopo = document.getElementById("ursinhoTopo");
    ursinhoTopo.src = "imagens/giffeliz1.gif";

    setTimeout(() => {
        window.location.href = "sim.html";
    }, 400);
}

const telaNao = document.getElementById("telaNao");
const caixaNao = telaNao.querySelector(".caixa-final");

telaNao.addEventListener("click", function (e) {
    if (!caixaNao.contains(e.target)) {
        telaNao.classList.add("fechando");

        setTimeout(() => {
            telaNao.style.display = "none";
            telaNao.classList.remove("fechando");
        }, 300);
    }
});