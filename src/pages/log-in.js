export default () => {
    const container = document.createElement('div');

    const template = `<center><a href="/#sing-in" class="a">Sing-In</a>/Log-in</center><br><br><br>
    <center><label for="e-maila">Email: </label><input type="email" id="e-maila"></center><br>
    <center><label for="senhaa">Senha: </label><input type="password" id="senhaa"></center><br><br>
    <center><button id="logar">Logar</button></center>
    `;

    container.innerHTML = template;

    return container;
}
