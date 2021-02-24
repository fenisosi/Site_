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
    <div class="geral">
        <div class="img">
          <img src="imagens/bg2.jpg">
        </div>
        <div class="fundo">
          Olá ${capitalizeFirst(nome)}
          Aqui Temos Diverços Conteudos Como 2 Blogs e Aulas De Programaçao!<br>
          Para Acessar As Aulas Vá Na Aba Aulas Ou Clique <a href="/#aulas" style="text-decoration: underline; color: red;">Aqui</a><br>
          Para Acessar O Blog Dá Luisa Clique <a href="/#luisa" style="text-decoration: underline; color: red;">Aqui</a><br> 
          Para Acessar O Blog Do Hennrique Clique <a href="/#henrique" style="text-decoration: underline; color: red;">Aqui</a>
          <p>Veja Abaixo Os Projetos:</p>
        </div>
      </div>
        <figure class="img-legenda" height="300px" width="300px">
              <img src="./imagens/html-css-javascript.jpg" alt="Navegador Incompativel :(">
              <figcaption>
                Este Próprio Site Foi Construido Com Html, Css, Javascript!<br>
                Vou Encinar Como Fazer Um Parecido Na Aula De HTML, CSS<br>Fique Ligado Para Ver As Novidades!
              <figcaption>
        <figure>
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        <p>Direitos Autorais:</p>
        <div>Ícone <img src="./imagens/menu.png"> feito por <a href="https://www.freepik.com" title="Freepik" target="blank">Freepik</a> from <a href="https://www.flaticon.com/br/" title="Flaticon" target="blank">www.flaticon.com</a>
        <br><br><br>
    `;

    container.innerHTML = template;

    return container;
    
}
