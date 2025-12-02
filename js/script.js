// informação
const buttonInformacao = document.getElementById('buttonInformacao');
const informacoes = document.getElementById('informacoes');
const x = document.getElementById('x');

buttonInformacao.addEventListener("click", function () {
    informacoes.style.display = 'block';
    habilidades.style.display = 'none';
    conquistas.style.display = 'none';
});
x.addEventListener("click", function () {
    informacoes.style.display = 'none';
});

// habilidade
const buttonHabilidade = document.getElementById('buttonHabilidade');
const habilidades = document.getElementById('habilidades');
const xHabilidade = document.getElementById('xHabilidade');

buttonHabilidade.addEventListener("click", function () {
    habilidades.style.display = 'block';
    informacoes.style.display = 'none';
    conquistas.style.display = 'none';
});
xHabilidade.addEventListener("click", function () {
    habilidades.style.display = 'none';
});
// lista das habilidades
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
};

// conquista
const buttonConquista = document.getElementById('buttonConquista');
const conquistas = document.getElementById('conquistas');
const xConquista = document.getElementById('xConquista');

buttonConquista.addEventListener("click", function () {
    conquistas.style.display = 'block';
    informacoes.style.display = 'none';
    habilidades.style.display = 'none';
});
xConquista.addEventListener("click", function () {
    conquistas.style.display = 'none';
});
// lista das conquistas
const conquista100Clicks = document.getElementById('conquista100Clicks');
const conquistaImg = document.querySelector('.conquista img');

let conquista100ClicksConquistada = false;

function consquista100Clicks() {
    conquista100Clicks.style.filter = 'blur(0)';
    conquistaImg.style.filter = 'saturate(1)';
    conquista100ClicksConquistada = true;
}

const conquista1000Clicks = document.getElementById('conquista1000Clicks');

let conquista1000ClicksConquistada = false;

function consquista1000Clicks() {
    conquista1000Clicks.style.filter = 'blur(0)';
    conquistaImg.style.filter = 'saturate(1)';
    conquista1000ClicksConquistada = true;
}

// pontuacao
const imgCookie = document.getElementById('imgCookie');
const divPontuacao = document.getElementById('pontuacao');
let pontuacaoAtual = 0;
const divDinheiro = document.getElementById('dinheiro');
let dinheiroAtual = 0;

let precoDaHabilidade = 0;
let soma = 0;
let multiplicador = 1;

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
            conquista1000Clicks();
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
}

function dinheiro() {
    dinheiroAtual += 3;
    divDinheiro.textContent = dinheiroAtual;
}

function compra() {
    dinheiroAtual -= precoDaHabilidade;
    divDinheiro.textContent = dinheiroAtual;
}