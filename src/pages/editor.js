export default () => {
    const container = document.createElement('div');

    function capitalizeFirst(str) {
        var subst = str.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
        return subst;
    }
    var template = `
    <div id="app">
    <div id="wrapper">
        <div>
        
            <ul class="nav-pills pai_a">
                <li><a href= "" class="nav-link a" @click.prevent="create()">Nova anotaçao</a></li>
                <li v-for="note, index in notes">
                    <a href= "" class="nav-link a" name="mudar" @click.prevent="select(index)">{{  note.content  }}</a>
                </li>
            </ul>
        </div>
        <br>
    </div>
    <div class="col">
        <textarea @keyup="save()" ref="textarea" placeholder="Insira o Conteudo Do Body" class="content">{{(active !== null) ? notes[active].content  : ''}}</textarea>
    </div>
    <iframe src="teste.html" id="CAGADA"></iframe>
    <br><br><br><br><br><br><br><br><br><br><br><br><br></div>
    `
    container.innerHTML = template;


    return container;
    
}
