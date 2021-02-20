export default (nome, coocks) => {
    const container = document.createElement('div');

    function capitalizeFirst(str) {
        var subst = str.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
        return subst;
    }
    var template;
    if (nome != null) {
        template = `
        <div class="data">
        <center><img src="${nome.getImageUrl()}" class="img-circle"><br></center>
        <center>Olá ${capitalizeFirst(nome.getName())}<br></center>
        <center>Temos os Seguintes Dados Sobre Você:<br></center>
        <center>Seu Id: ${nome.getId()}<br></center>
        <center>Seu Email: ${nome.getEmail()}<br></center>
        <center>Aceitou os Cookies? ${coocks?"Sim!":"Não!"}</center>
        </div>
        `;
    } else {
        template = `
        <div class="data"> 
        Não Temos Dados Sobre Você, Se Loge Para Termos!
        </div>`
    }
    container.innerHTML = template;

    return container;
    
}
