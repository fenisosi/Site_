export default () => {
    function abrir() {
        let popup = document.getElementById("popup");
        popup.style.display = "block";
    }
    function fechar() {
        let popup = document.getElementById("popup");
        popup.style.display = "none";
    }

    const container = document.createElement('div');


    const template = `
    <br><h1 class="aulas">Esta é a Pagina De Aulas</h1>
    <h2 class="materias">Materias:</h2>
    <a href="/#html" >
        <picture class="pc">
            <img src="imagens/html.png" alt="Imagem Fexivel">
        </picture>
        <h style="color: #ffa500;margin-left: 30px;">HTML, CSS<h>
        <picture class="pc">
            <img src="imagens/css.png" alt="Imagem Fexivel" style="margin-left: 3px;">
        </picture>
    </a>
    <p>&nbspDescrição: Um Curso Básico De Html!<br> Contendo Explicações e Códigos Básicos,<br> Que Ira Ensinar a Fazer Um Site Semelhante.</p>\
    `;


    container.innerHTML = template;

    return container;
}