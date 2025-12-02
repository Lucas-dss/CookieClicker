// tema do html
const buttonTema = document.getElementById('tema');
const sections = document.querySelectorAll('main');

let tema = localStorage.getItem("tema");

if (tema == null || tema.includes("claro")) {
    temaClaro();
}
else if (tema.includes("escuro")) {
    temaEscuro();
};

buttonTema.addEventListener("click", function () {
    buttonTema.style.transition = 'all 0.75s ease-in-out';
    // Atualiza o valor de tema antes de verificar
    tema = localStorage.getItem("tema");

    if (tema.includes("claro")) {
        temaEscuro();
    }
    else if (tema.includes("escuro")) {
        temaClaro();
    }
});

function temaClaro() {
    tema = localStorage.setItem("tema", "claro");
    buttonTema.textContent = '🌑';

    document.body.classList.remove("dark-mode");
    buttonTema.classList.remove("dark-icon");

    sections.forEach(section => {
        section.classList.remove("dark-sectionBefore");
    });
}

function temaEscuro() {
    tema = localStorage.setItem("tema", "escuro");
    buttonTema.textContent = '☀️';

    document.body.classList.add("dark-mode");
    buttonTema.classList.add("dark-icon");

    sections.forEach(section => {
        section.classList.add("dark-sectionBefore");
    });
}