export default () => {
    const container = document.createElement('div');

    function capitalizeFirst(str) {
        var subst = str.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
        return subst;
    }
    var template = `
    <h1>Sobre Mim:</h1>
    <p>Me Chamo Henrique Tenho (Atualmente) 11 Anos Naci Em Junho De 2009<br>Construi Este Site Para Compartilhar Meu Conhecimento Com Outras Pessoas :)</p>
    <h1>Meios De Comunicação:</h1>
    <p><a href="https://discord.gg/44CcvfYNY8">Discord</a> (Sendo Meu Favorito) O Discord Conta Com Varios Metodos Inclusive Metodos Para Compartilhar Aprendizado!</p>
    <h1>Sobre O Site:</h1>
    <p>Este Site Conta Com Um Editor De Codego Online Que Roda Html, Css (Javascript Eu Ainda Não Sei Como Incrementar kkk)</p>
    `
    container.innerHTML = template;


    return container;
    
}
