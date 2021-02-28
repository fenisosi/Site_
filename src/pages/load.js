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
          <p>Olá ${capitalizeFirst(nome)}<br>
          Aqui Temos Diversos Conteúdos Como 2 Blogs e Aulas De Programação!<br>
          Para Acessar As Aulas Vá à Aba Aulas Ou Clique <a href="/#aulas" style="text-decoration: underline; color: red;">Aqui.</a><br>
          Para Acessar O Blog Dá Luisa Clique <a href="/#luisa" style="text-decoration: underline; color: red;">Aqui</a><br> 
          Para Acessar O Blog Do Henrique Clique <a href="/#henrique" style="text-decoration: underline; color: red;">Aqui</a></p>
          <div class="g-recaptcha" data-sitekey="6LcBBmsaAAAAABT9bAgkJKPJ1BE6JUZaphSoxOlG"></div>
          <p>Veja Abaixo Os Projetos:</p>
        </div>
      </div>
        <figure class="img-legenda" height="300px" width="300px">
              <img src="./imagens/html-css-javascript.jpg" alt="Navegador Incompativel :(">
              <figcaption>
                Este Próprio Site Foi Construído Com Html, Css, Javascript!<br>
                Vou Ensinar Como Fazer Um Parecido Na Aula De HTML, CSS <br> Fique Ligado Para Ver As Novidades!
              <figcaption>
        <figure>
    `;

    container.innerHTML = template;

    return container;
    
}
