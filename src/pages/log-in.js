export default () => {
    const container = document.createElement('div');

    const template = `<center><a href="/#sing-in" class="a">Sing-In</a>/Log-in</center><br><center><h6>Meu Primeiro Login Não Foi Com o Goole <input id="com_o_google" type="checkbox" name="" value=""> Meu Primeiro Login Foi Com o Goole</h6></center><br><br>
    <center><label for="e-maila" id="e-emailb">Email: </label><input type="email" id="e-maila"></center><br>
    <center><label for="senhaa" id="com_o_google2">Senha: </label><input type="password" id="senhaa"></center><br>
    <center><button id="logar">Logar</button></center>
    `;

    container.innerHTML = template;

    return container;
}
