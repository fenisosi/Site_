export default () => {
    const container = document.createElement('div');
    
    const template = `
    Blog da <a href="/#luisa" style="text-decoration: underline; color: red;">Luisa</a> Não Espere Muito Deste Blog!<br>
    "Blog" Do <a href="/#henrique" style="text-decoration: underline; color: red;">Henrique</a> Nem Deste!
    `;
    
    container.innerHTML = template;
    
    return container;
}