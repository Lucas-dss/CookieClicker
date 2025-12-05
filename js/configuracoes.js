const buttonConfig = document.getElementById('buttonConfig');
const configuracoes = document.getElementById('configuracoes');
const xConfig = document.getElementById('xConfig');

buttonConfig.addEventListener("click", function () {
    configuracoes.style.display = 'block';
    configuracoes.classList.add("abrindoInformacoes");
});
xConfig.addEventListener("click", function () {
    configuracoes.classList.remove("abrindoInformacoes");
});

// ============ música ============
const inputRange = document.getElementById('inputRange');
let inputRangeValue;
const porcentagemMusica = document.getElementById('porcentagemMusica');
const musicaAtual = new Audio('./music/sevenos.mp3');
musicaAtual.currentTime = 0;
musicaAtual.volume = 0.1;
musicaAtual.play();
const somClique = new Audio('./music/click.mp3');
const subindoNivel = new Audio('./music/subindoNivel.mp3');

inputRange.addEventListener('input', function () {
    inputRangeValue = inputRange.value;
    musicaAtual.volume = inputRangeValue / 100;
    porcentagemMusica.textContent = inputRangeValue + '%';
});

const inputBackground = document.getElementById('inputBackground');
const main = document.querySelector('main');

inputBackground.addEventListener("change", () => {
    //console.log(inputBackground.files[0]);
    const img = document.createElement("img");
    img.src = URL.createObjectURL(inputBackground.files[0]);
    main.style.backgroundImage = `url(${img.src})`;
});

// ================== reiniciar ==================
const buttonReiniciar = document.getElementById('reiniciar');

buttonReiniciar.addEventListener("click", () => {
    const confirmar = confirm("Tem certeza?");
    if (confirmar) {
        localStorage.setItem("pontuacaoMaxima", 0);
        window.location.reload();
    }
});