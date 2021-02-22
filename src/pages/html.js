export default () => {
    const container = document.createElement('div');


    const string = `
    <div class="codego">
    <pre id="copiarcod">
&lt!DOCTYPE html&gt
&lthtml lang='pt-br'&gt
&lthead&gt
    &ltmeta charset='UTF-8'&gt
    &ltmeta name='viewport' content='width=device-width, initial-scale=1.0'&gt
    &ltstyle&gt
    &lt/style&gt
    &lttitle&gtMeu Primeiro Programa HTML&lt/title&gt
&lt/head&gt
&ltbody&gt
    &ltscript&gt
    &lt/script&gt
&lt/body&gt
&lt/html&gt</pre></div>`

    const template = `
    <h1>Ultra Basicos</h1>\
    ${string}  
    <p>Se Tiver Vs Code Crie Um Documento Em Branco Html E Digite "!" Para Obter Um Resultado Semelhante!</p>
    <p>Caso Não Tenha Um Editor De Texto Clique <a href="/#editor">Aqui</a> Para Usar O Nosso!</p>
    <p>Clique Duas Vezes Sobre Seu Arquivo E Pronto Seu Site Está Ótimo Mas Sem Host Bom Isso Ensinarei Amanha Dia 11/02/2021 (obg: Esta Aula Não Sera Deletada!)</p>
    <br>
    <h1>HOST</h1>
    Hoje Irei Ensinar Como Hospedar Seu Site Primeiramente Abra o Site <a href="https://netlify.com">https://netlify.com</a> E Crie Uma Conta Apos Criar Sua Conta Crie Um Site Pelo Github E Va No seu Github E Crie Um Repositorio VASIO Va No Seu Vscode Ou Editor De Texto Entre Pelo Terminal Na Pasta Do Progeto E Digite:<br>
    <div class="codego">git init<br>git clone <url_do_seu_github><br>git add * <br>git remote add main <url_do_seu_github> <br>git push -u main main</div>Isso Na Primeira Vez Da 2ª Em Diante Digite:<br>
    <div class="codego">git add * <br>git commit -am 'coisa que fez no commit' <br>git push</div> Pronto Seu Site Estara Online (Se Fez Tudo Corretamente)
    CASO ALGO BUGE:
    Entre No Site <a href="https://git-scm.com">https://git-scm.com</a> E Faça O Download Do Gitbash Provavelmente Por Isso Ele Não Funciona<br>
    Caso Não Seja O GitBash Recomendo Usar O Vscode Pois Com Ele Você Se Loga No Github E Fica Mais Facil De Usar O Gitbash Alem De Conter Varias Abreviaçoes Que Seram Usadas Como Exemplo Aqui!<br> 
    <br>
    <h1>Basicos</h1>
    <h2>Para Escrever Algo No Seu Site</h2>
    <h3>Sem Tags</h3>
    <p>Para Escrever Algo Sem Tags Va Em Body E Escreva Oque Quiser!</p>
    <h3>Com Tags</h3>
    <p>Use A Tag <nada class="codego">&ltp&gtCoisa A Se Escrever&lt/p&gt</nada> Para Criar Um PARAGRAFO</p>
    <p>Use A Tag <nada class="codego">&lth1&gtCoisa A Se Escrever&lt/h1&gt</nada> Para Criar Um TITULO</p>
    <h2>Links No Seu Site</h2>
    <p>Use A Tag <nada class="codego">&lta href="${window.location.href}"&gtOque Aparecera Para Clicar&lt/a&gt</nada>Para Criar Um Link (obg: Troque o <n class="codego">href="${window.location.href}"</n> Pelo Site Que Sera Desviado Quando Clicar)</p>
    <br>
    <h1>NÃO TÃO BASICOS</h1>
    <h2>Img</h2>
    <p>Use A Tag <div class="codego">&ltimg src="./local do arquivo"&gt</div> Para Colocar Uma Imagem e SIIIIM Está Tag Não Tem Fechamento!</p>
    <h2>Figcapion e Picture</h2>
    <p>Use A Tag Figcaption Ex:</p>
    <div class="codego">
    <pre>
&ltpicture&gt
    &ltimg src="./local do arquivo"&gt
    &ltfigcaption&gt
        &ltp&gtDescriçao Da Imagem&ltp&gt
    &lt/figcaption&gt
&lt/picture&gt</pre>
    </div>
    <p>SIIIM Tenque Estar Dentro Da Tag <div class="codego">&ltpicture&gt&lt/picture&gt</div></p>
    <br>
    <h1>Hierarquia de Titulos</h1>
    <p>os tituos ou Tags <nada class="codego">&lth>&lt/h></nada> Funcionam assim H1 é O Maior H6 é o menor!</p>
    <br>
    <h1>Começando No CSS</h1>
    <h2>Como Usar</h2>
    <p>Defina No Objeto Algo Que Te Ajude A Localizalo Ex: <nada class="codego">&ltp id="ID Que Quiser" class="Clase Que Quiser">Nada&ltp></nada></p>
    <div class="codego">
    <pre>
.clase {

}
#id {

}
tag {

}
    </pre>
    </div>
    <p>Use Atributos Como <nada class="codego">color: white; OU position: fixed; OU backgrond: {cor OU url("URL")};</nada></p>
    <p>Caso Queira Um Documento Mais "Profundo" <a href="https://www.oficinadanet.com.br/artigo/1041/atributos_css">https://www.oficinadanet.com.br/artigo/1041/atributos_css</a></p>
    <br>
    <br>
    <br>
    `;

    container.innerHTML = template;

    return container;
}
