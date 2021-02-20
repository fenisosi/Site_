<<<<<<< HEAD
export default (nome) => {
    const container = document.createElement('div');

    function capitalizeFirst(str) {
        var subst = str.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
        return subst;
    }
    function typeWriter(elemento) {
        const textoArray = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        textoArray.forEach((letra, i) => {
          setTimeout(() => elemento.innerHTML += letra, 75 * i);
        });
      }


    const template = `
    Olá ${capitalizeFirst(nome)}
    <div class="geral">
        <div class="fundo">
          Aqui Temos Diverços Conteudos Como 2 Blogs e Aulas De Programaçao!<br>
          Para Acessar As Aulas Vá Na Aba Aulas Ou Clique <a href="/#aulas" style="text-decoration: underline; color: red;">Aqui</a><br>
          Para Acessar O Blog Dá Luisa Clique <a href="/#luisa" style="text-decoration: underline; color: red;">Aqui</a><br> 
          Para Acessar O Blog Do Hennrique Clique <a href="/#henrique" style="text-decoration: underline; color: red;">Aqui</a>
        </div>
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        <p>Direitos Autorais:</p>
        <div>Ícone <img src="./imagens/Menu.png"> feito por <a href="https://www.freepik.com" title="Freepik" target="blank">Freepik</a> from <a href="https://www.flaticon.com/br/" title="Flaticon" target="blank">www.flaticon.com</a></div>
        <br><br><br>
    `;

    container.innerHTML = template;

    return container;
    
}
=======
export default (nome) => {
    const container = document.createElement('div');

    function capitalizeFirst(str) {
        var subst = str.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
        return subst;
    }
    function typeWriter(elemento) {
        const textoArray = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        textoArray.forEach((letra, i) => {
          setTimeout(() => elemento.innerHTML += letra, 75 * i);
        });
      }


    const template = `
    Olá ${capitalizeFirst(nome)}
    <div class="geral">
        <div class="fundo">
          Aqui Temos Diverços Conteudos Como 2 Blogs e Aulas De Programaçao!<br>
          Para Acessar As Aulas Vá Na Aba Aulas Ou Clique <a href="/#aulas" style="text-decoration: underline; color: red;">Aqui</a><br>
          Para Acessar O Blog Dá Luisa Clique <a href="/#luisa" style="text-decoration: underline; color: red;">Aqui</a><br> 
          Para Acessar O Blog Do Hennrique Clique <a href="/#henrique" style="text-decoration: underline; color: red;">Aqui</a>
        </div>
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        <p>Direitos Autorais:</p>
        <div>Ícone <img src="./imagens/Menu.png"> feito por <a href="https://www.freepik.com" title="Freepik" target="blank">Freepik</a> from <a href="https://www.flaticon.com/br/" title="Flaticon" target="blank">www.flaticon.com</a></div>
        <br><br><br>
    `;

    container.innerHTML = template;

    return container;
    
}
>>>>>>> e91f80934eeea8da6b6f52a1a0ef031985d0055d
