export default () => {
    const container = document.createElement('div');

    const template = `<center>Sing-In/<a class="a" href="#log-in">Log-in</a></center><br><br><br>
    <center><label for="nome">Nome: </label><input type="text" id="nome"></center><br>
    <center><label for="e-mail">Email: </label><input type="email" id="e-mail"></center><br>
    <center><label for="senha">Senha: </label><input type="password" id="senha"></center><br><br>
    <center><button id="cadastrar">Cadastrar</button></center>
    `;

    container.innerHTML = template;

    return container;
}
