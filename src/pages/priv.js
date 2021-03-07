export default () => {
    const container = document.createElement('div');

    function capitalizeFirst(str) {
        var subst = str.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
        return subst;
    }
    var template = `
        <p>Não Seja Burro, e Só 👍</p>
    `
    container.innerHTML = template;

    return container;
    
}
