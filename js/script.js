const buttonAbrirInformacoes = document.getElementById('abrirInfo');
const buttonFecharInformacoes = document.getElementById('fecharInfo');
const aside = document.querySelector('aside');

buttonAbrirInformacoes.addEventListener("click", () => {
    aside.style.display = 'flex';
});
buttonFecharInformacoes.addEventListener("click", () => {
    aside.style.display = 'none';
});

// ================== informação ==================
const buttonInformacao = document.getElementById('buttonInformacao');
const informacoes = document.getElementById('informacoes');
const x = document.getElementById('x');

buttonInformacao.addEventListener("click", function () {
    informacoes.style.display = 'block';
    habilidades.style.display = 'none';
    conquistas.style.display = 'none';
});

x.addEventListener("click", () => informacoes.style.display = 'none');

// ================== habilidade ==================
const buttonHabilidade = document.getElementById('buttonHabilidade');
const habilidades = document.getElementById('habilidades');
const xHabilidade = document.getElementById('xHabilidade');

buttonHabilidade.addEventListener("click", function () {
    habilidades.style.display = 'block';
    informacoes.style.display = 'none';
    conquistas.style.display = 'none';
});

xHabilidade.addEventListener("click", () => habilidades.style.display = 'none');

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
    click.textContent = `Número de Click: ${clicksAtual}`;
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
    click.textContent = `Número de Click: ${clicksAtual}`;
};

// ================== conquista ==================
const buttonConquista = document.getElementById('buttonConquista');
const conquistas = document.getElementById('conquistas');
const xConquista = document.getElementById('xConquista');

buttonConquista.addEventListener("click", function () {
    conquistas.style.display = 'block';
    informacoes.style.display = 'none';
    habilidades.style.display = 'none';
});
xConquista.addEventListener("click", () => conquistas.style.display = 'none');
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
};

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

imgCookie.addEventListener("click", function () {
    pontuacao();
    dinheiro();
    if (!conquista100ClicksConquistada) {
        if (pontuacaoAtual >= 100) {
            window.alert("você clicou 100 vezes");
            consquista100Clicks();
        }
    }
    if (!conquista1000ClicksConquistada) {
        if (pontuacaoAtual >= 1000) {
            window.alert("você clicou 1000 vezes");
            consquista1000Clicks();
        }
    }
    if (clicks2Ativo == true) {
        clicks2();
    }
    if (clicks3Ativo == true) {
        clicks3();
    }
});

function pontuacao() {
    pontuacaoAtual++;
    pontuacaoAtual += soma;
    pontuacaoAtual *= multiplicador;
    divPontuacao.textContent = pontuacaoAtual;
};

function dinheiro() {
    dinheiroAtual += 3;
    divDinheiro.textContent = dinheiroAtual;
};

function compra() {
    dinheiroAtual -= precoDaHabilidade;
    divDinheiro.textContent = dinheiroAtual;
};

const form = document.querySelector('form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const inputCodigo = document.getElementById('codigo');
    const inputValue = inputCodigo ? inputCodigo.value.toLowerCase() : '';
    if (inputValue === "gabriela") {
        window.alert("te amo ❤");
    }
});