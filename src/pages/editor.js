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
        
            <ul class="nav-pills">
                <li><a href= "" class="nav-link" @click.prevent="create()">Nova anotaçao</a></li>
                <li v-for="note, index in notes">
                    <a href= "" name="mudar" @click.prevent="select(index)">{{  note.content  }}</a>
                </li>
            </ul>
        </div>
        <br>
    </div>
    <div class="col">
        <button id="codegop">Criar(Resetar Para) Codego Pronto</button>
        <textarea @keyup="save()" ref="textarea" placeholder="insira sua anotaçao!" class="content">{{(active !== null) ? notes[active].content  : ''}}</textarea>
    </div>
    <div class="previu">
    a
    </div>
    </div>
    `
    container.innerHTML = template;


    return container;
    
}
