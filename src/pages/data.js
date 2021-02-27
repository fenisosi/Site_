export default (nome, id, img, email, coocks) => {
    const container = document.createElement('div');

    function capitalizeFirst(str) {
        var subst = str.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
        return subst;
    }
    var template;
    if (nome != null) {
        template = `
        <div class="data">
        <center><img src="${img}" class="img-circle"><br></center>
        <center>Olá ${capitalizeFirst(nome)}<br></center>
        <center>Temos os Seguintes Dados Sobre Você:<br></center>
        <center>Seu Id: ${id}<br></center>
        <center>Seu Email: ${email}<br></center>
        <center>Aceitou os Cookies? ${coocks}</center>
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
