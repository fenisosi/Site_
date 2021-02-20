<<<<<<< HEAD
export default () => {
    const container = document.createElement('div');

    function capitalizeFirst(str) {
        var subst = str.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
        return subst;
    }
    var template = `
    <div id="app" class="d-flex flex-column container-fluid">
    <div id="wrapper" class="row">
        <div class="">
        
            <ul class="notas">
                <li class="nav-item"><a href= "" class="na" @click.prevent="create()">Nova anotaçao</a></li>
                <li class="nav-item" v-for="note, index in notes">
                    <a href= "" class="nav-link" @click.prevent="select(index)">{{  note.content  }}</a>
                </li>
                
            </ul>
        </div>
        <div class="col">
            <textarea @keyup="save()" ref="textarea" placeholder="insira sua anotaçao!" class="content">{{(active !== null) ? notes[active].content  : ''}}</textarea>
        </div>
    </div>
    <div id="footer" class="bg-info">
        <h6><strong>Dica:</strong> apague o conteudo para remover!</h6>
    </div>
</div>
    `
    container.innerHTML = template;

    return container;
    
}
=======
export default () => {
    const container = document.createElement('div');

    function capitalizeFirst(str) {
        var subst = str.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
        return subst;
    }
    var template = `
    <div id="app" class="d-flex flex-column container-fluid">
    <div id="wrapper" class="row">
        <div class="">
        
            <ul class="notas">
                <li class="nav-item"><a href= "" class="na" @click.prevent="create()">Nova anotaçao</a></li>
                <li class="nav-item" v-for="note, index in notes">
                    <a href= "" class="nav-link" @click.prevent="select(index)">{{  note.content  }}</a>
                </li>
                
            </ul>
        </div>
        <div class="col">
            <textarea @keyup="save()" ref="textarea" placeholder="insira sua anotaçao!" class="content">{{(active !== null) ? notes[active].content  : ''}}</textarea>
        </div>
    </div>
    <div id="footer" class="bg-info">
        <h6><strong>Dica:</strong> apague o conteudo para remover!</h6>
    </div>
</div>
    `
    container.innerHTML = template;

    return container;
    
}
>>>>>>> e91f80934eeea8da6b6f52a1a0ef031985d0055d
