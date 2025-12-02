const buttonConfig = document.getElementById("buttonConfig");
const configuracoes = document.getElementById('configuracoes');
const x = document.getElementById('xConfig');

buttonConfig.addEventListener("click", function () {
    configuracoes.style.display = 'block';
});
x.addEventListener("click", function () {
    configuracoes.style.display = 'none';
});