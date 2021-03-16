export default (nome, id, img, email, coocks, userId, money, rank, level, items) => {
    
        var container = document.createElement('div');

        function capitalizeFirst(str) {
            var subst = str.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
            return subst;
        }
        var template;
        if (localStorage.henriques_site_method != "deslogado") {
            template = `
            <div class="data">
            <center><h2>ALL DATA:</h2></center>
            <center>${img == "Logado Com Email e Senha"?"Não Tem Imagem De Perfil":`<img src="${img}" class="img-circle">`}<br></center>
            <center>Olá ${capitalizeFirst(nome)}<br></center>
            <center>Temos os Seguintes Dados Sobre Você:<br></center>
            <center>Seu Id: ${id}<br></center>
            <center>Seu Email: ${email}<br></center>
            <center>Aceitou os Cookies? ${coocks}</center><br>
            <center><h2>DISCORD DATA:</h2></center>
            `
            if (userId != "Não Cadastrado No Discord") {
                template += `
                <center>Seu ID No Discord: ${userId}</center>
                <center>Suas Moedas Do Meui6: ${money}</center>
                <center>Seu Level: ${level}</center>
                <center>Seu Rank: ${rank}</center>
                <center><h2>Seus Items: </h2></center>
                ${items.replace(/\*/g, "")}
                <br>
                <br>
                </div>
                `;
            } else {
                template += `
                <center>Não Cadastrado No Discord!</center>
                <center><a href="https://discord.com/api/oauth2/authorize?client_id=797559448188354571&permissions=8&scope=bot">Clique Aqui Para Adicionar o Bot!</a></center>
                `
            }
        } else {
            template = `
            <div class="data"> 
            Não Temos Dados Sobre Você, Se Loge Para Termos!
            </div>`
        }
        container.innerHTML = template;
        
        return container;
    
}
