export default () => {
    const container = document.createElement('div');
    const txt = `Essa é a Aba Da Luisa Me Desculpem Por Talvez Não Ser Tão Bom, Pois Não Sera Eu Que Modificarei O Conteúdo <div class="luisa">`


    const template = /*Aqui Começa*/`
    ${txt}

    Oi Meu Nome é Luisa!<br>
    Amo Meu Irmão e Esse Site é Dele<br>
    Eu Gosto Muito Dese Filminho:<br>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/sT5tSvDnl2U" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
    </div>
    <br>
    <br>
    <br>
    <br>
    `/*Aqui Termina*/;

    container.innerHTML = template;

    return container;
}
