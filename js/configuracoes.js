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

inputRange.addEventListener('input', function () {
    inputRangeValue = inputRange.value;
    porcentagemMusica.textContent = inputRangeValue + '%';
});

const inputBackground = document.getElementById('inputBackground');