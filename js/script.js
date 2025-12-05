// ================== aside ==================
const buttonAbrirInformacoes = document.getElementById('abrirInfo');
const buttonFecharInformacoes = document.getElementById('fecharInfo');
const aside = document.querySelector('aside');

buttonAbrirInformacoes.addEventListener("click", () => aside.classList.add("abrindoAside"));

buttonFecharInformacoes.addEventListener("click", () => aside.classList.remove("abrindoAside"));

// booleana para impedir que abra diversas infos mais de uma vez só
let informacaoAberta = false;

// ================== informação ==================
const buttonInformacao = document.getElementById('buttonInformacao');
const informacoes = document.getElementById('informacoes');
const x = document.getElementById('x');

buttonInformacao.addEventListener("click", function () {
    if (!informacaoAberta) {
        informacoes.style.display = 'block';
        informacoes.classList.add("abrindoInformacoes");
        informacaoAberta = true;
    }
});

x.addEventListener("click", () => {
    informacoes.classList.remove("abrindoInformacoes");
    informacaoAberta = false;
});

// ================== habilidade ==================
const buttonHabilidade = document.getElementById('buttonHabilidade');
const habilidades = document.getElementById('habilidades');
const xHabilidade = document.getElementById('xHabilidade');

buttonHabilidade.addEventListener("click", function () {
    if (!informacaoAberta) {
        habilidades.style.display = 'block';
        habilidades.classList.add("abrindoInformacoes");
        informacaoAberta = true;
    }
});

xHabilidade.addEventListener("click", () => {
    habilidades.classList.remove("abrindoInformacoes");
    informacaoAberta = false;
});

// ================== lista das habilidades ==================
const habilidade2clicks = document.getElementById('habilidade2clicks');
const habilidadesImgs = document.querySelectorAll('.habilidade img');
habilidade2clicks.style.filter = 'blur(0)';

habilidadesImgs.forEach(habilidadeImg => {
    habilidadeImg.style.filter = 'saturate(1)';
})

let clicks2Ativo = false;

habilidade2clicks.addEventListener("click", function () {
    if (!clicks2Ativo) {
        if (dinheiroAtual >= 60) {
            precoDaHabilidade = 60;
            compra();
            clicks2Ativo = true;
            habilidade2clicks.style.display = 'none';
        } else {
            window.alert("dinheiro insuficiente");
        }
    }
});

function clicks2() {
    soma = 1;
    localStorage.setItem("click", soma + 1);
    clicksAtual = parseInt(localStorage.getItem("click")) || "Erro";
    click.textContent = clicksAtual;
};

const habilidade3clicks = document.getElementById('habilidade3clicks');
habilidade3clicks.style.filter = 'blur(0)';

let clicks3Ativo = false;

habilidade3clicks.addEventListener("click", function () {
    if (!clicks3Ativo) {
        if (dinheiroAtual >= 180) {
            precoDaHabilidade = 180;
            compra();
            clicks3Ativo = true;
            habilidade3clicks.style.display = 'none';
        } else {
            window.alert("dinheiro insuficiente");
        }
    }
});

function clicks3() {
    soma = 2;
    localStorage.setItem("click", soma + 1);
    clicksAtual = parseInt(localStorage.getItem("click")) || "Erro";
    click.textContent = clicksAtual;
};

// ================== conquista ==================
const buttonConquista = document.getElementById('buttonConquista');
const conquistas = document.getElementById('conquistas');
const xConquista = document.getElementById('xConquista');

buttonConquista.addEventListener("click", function () {
    if (!informacaoAberta) {
        conquistas.style.display = 'block';
        conquistas.classList.add("abrindoInformacoes");
        informacaoAberta = true;
    }
});

xConquista.addEventListener("click", () => {
    conquistas.classList.remove("abrindoInformacoes");
    informacaoAberta = false;
});

// ================== lista das conquistas ==================
const conquista100Clicks = document.getElementById('conquista100Clicks');
const conquistaImg = document.querySelectorAll('.conquista img');

let conquista100ClicksConquistada = false;

function consquista100Clicks() {
    conquista100Clicks.style.filter = 'blur(0)';
    conquistaImg.item(0).style.filter = 'saturate(1)';
    conquista100ClicksConquistada = true;
}

const conquista1000Clicks = document.getElementById('conquista1000Clicks');

let conquista1000ClicksConquistada = false;

function consquista1000Clicks() {
    conquista1000Clicks.style.filter = 'blur(0)';
    conquistaImg.item(1).style.filter = 'saturate(1)';
    conquista1000ClicksConquistada = true;
}

const conquistaDoceCoco = document.getElementById('conquistaDoceCoco');

let conquistaDoceCocoConquistada = false;

function consquistaDoceCoco() {
    conquistaDoceCoco.style.filter = 'blur(0)';
    conquistaImg.item(2).style.filter = 'saturate(1)';
    conquistaDoceCocoConquistada = true;
}

const conquistaSemPoderes = document.getElementById('conquistaSemPoderes');

let conquistaSemPoderesConquistada = false;

function consquistaSemPoderes() {
    conquistaSemPoderes.style.filter = 'blur(0)';
    conquistaImg.item(3).style.filter = 'saturate(1)';
    conquistaSemPoderesConquistada = true;
}

// ================== código ==================
const form = document.querySelector('form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const inputCodigo = document.getElementById('codigo');
    const inputValue = inputCodigo ? inputCodigo.value.toLowerCase() : '';
    if (inputValue === "gabriela") {
        //window.alert("te amo ❤");
        if (!conquistaDoceCocoConquistada) {
            subindoNivel.currentTime = 0;
            subindoNivel.play();
            window.alert("Conquista desbloqueada:\n Doce como uma rosquinha de coco.");
            consquistaDoceCoco();
        }
    }
});

// ================== pontuacao ==================
const imgCookie = document.getElementById('imgCookie');
const divPontuacao = document.getElementById('pontuacao');
let pontuacaoAtual = 0;
const divDinheiro = document.getElementById('dinheiro');
let dinheiroAtual = 0;

let precoDaHabilidade = 0;
let soma = 0;
let multiplicador = 1;

const click = document.getElementById("click");
localStorage.setItem("click", soma + 1);
let clicksAtual;

// evento de clicar no cookie
imgCookie.addEventListener("click", function () {
    somClique.currentTime = 0;
    somClique.play();
    pontuacao();
    dinheiro();
    if (!conquista100ClicksConquistada) {
        if (pontuacaoAtual >= 100) {
            subindoNivel.currentTime = 0;
            subindoNivel.play();
            window.alert("Conquista desbloqueada:\n Só demorou um tempinho não é?");
            consquista100Clicks();
        }
        if (maiorPontuacaoAtual >= 100) {
            consquista100Clicks();
        }
    }
    if (!conquista1000ClicksConquistada) {
        if (pontuacaoAtual >= 1000) {
            subindoNivel.currentTime = 0;
            subindoNivel.play();
            window.alert("Conquista desbloqueada:\n Ufa, finalmente!");
            consquista1000Clicks();
        }
        if (maiorPontuacaoAtual >= 1000) {
            consquista1000Clicks();
        }
    }
    // habilidade 2 pontos / click
    if (clicks2Ativo == true) {
        clicks2();
    }
    // habilidade 3 pontos / click
    if (clicks3Ativo == true) {
        clicks3();
    }
    if (!conquistaSemPoderesConquistada) {
        // verificação da conquista Sem Poderes
        if (!clicks2Ativo && !clicks3Ativo && conquista1000ClicksConquistada) {
            subindoNivel.currentTime = 0;
            subindoNivel.play();
            window.alert("Conquista desbloqueada:\n O que deu em você?");
            consquistaSemPoderes();
        }
    }
});

const maiorPontuacao = document.getElementById("maiorPontuacao");
let maiorPontuacaoAtual = parseInt(localStorage.getItem("pontuacaoMaxima")) || 0;
maiorPontuacao.textContent = maiorPontuacaoAtual;

function pontuacao() {
    pontuacaoAtual++;
    pontuacaoAtual += soma; // 0
    pontuacaoAtual *= multiplicador; // 1
    divPontuacao.textContent = pontuacaoAtual;
    // ========= pontuação máxima atual =========
    // verificação se caso a pontuação atual superar a máxima
    if (pontuacaoAtual >= maiorPontuacaoAtual) {
        // ela atualiza a pontuação máxima
        localStorage.setItem("pontuacaoMaxima", pontuacaoAtual);
        maiorPontuacaoAtual = parseInt(localStorage.getItem("pontuacaoMaxima")) || "Erro";
        maiorPontuacao.textContent = maiorPontuacaoAtual;
    }
};

function dinheiro() {
    dinheiroAtual += 3;
    divDinheiro.textContent = dinheiroAtual;
};

function compra() {
    dinheiroAtual -= precoDaHabilidade;
    divDinheiro.textContent = dinheiroAtual;
};

// ================== configurações ==================
buttonConfig.addEventListener("click", function () {
    if (!informacaoAberta) {
        configuracoes.style.display = 'block';
        configuracoes.classList.add("abrindoInformacoes");
        informacaoAberta = true;
    }
});
xConfig.addEventListener("click", function () {
    configuracoes.classList.remove("abrindoInformacoes");
    informacaoAberta = false;
});