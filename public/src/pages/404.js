export default (hash) => {
    const container = document.createElement('div');

    const template = `\
    <h1>404 not found</h1>\
    <p>Não Achei Nada Com O Hash De ${hash}</p>\
    `;

    container.innerHTML = template;

    return container;
}
