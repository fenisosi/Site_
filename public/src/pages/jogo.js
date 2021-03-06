export default () => {
    const container = document.createElement('div')

    const template = `
        <center><canvas id="screen" width="10" height="10"></canvas></center>
    `;

    container.innerHTML = template;

    return container;
    
}
