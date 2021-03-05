var profile = localStorage.henriques_site_profile;
var profile_name = localStorage.henriques_site_profile_name;
var profile_id = localStorage.henriques_site_profile_id;
var profile_img_url = localStorage.henriques_site_profile_img_url;
var profile_email = localStorage.henriques_site_profile_email;
var cookies = localStorage.henriques_site;
var tema = "light";

import home from "./pages/load.js"
import aulas from "./pages/aulas.js"
import pg404 from "./pages/404.js"
import html from "./pages/html.js"
import luisa from "./pages/luisa.js"
import henrique from "./pages/henrique.js"
import blogs from "./pages/blogs.js"
import data from "./pages/data.js"
import priv from "./pages/priv.js"
import editor from "./pages/editor.js"
import contato from "./pages/contato.js"
import sing_in from "./pages/sing-in.js"
import log_in from "./pages/log-in.js"
import hub_log_in from "./pages/hub-log-in.js"



const main = document.querySelector('#root')



const init = () => {
    window.addEventListener("hashchange", () => {
        main.innerHTML = ""
        if (tema == "dark") {
            darkMode();
        }
        document.querySelector("footer").innerHTML = `<center><p><a href="/#editor" class="a">Use Nosso Editor Online</a></p></center>`
        profile = localStorage.henriques_site_profile;
        profile_name = localStorage.henriques_site_profile_name;
        profile_id = localStorage.henriques_site_profile_id;
        profile_img_url = localStorage.henriques_site_profile_img_url;
        profile_email = localStorage.henriques_site_profile_email;
        cookies = localStorage.henriques_site;
        switch(window.location.hash.split("?")[0]){
            case "":
                main.appendChild(home(profile != null?profile_name.toLowerCase():"Querido Leitor"));
                break;
            case "#aulas":
                main.appendChild(aulas());
                break;
            case "#hub-log-in":
                main.appendChild(hub_log_in());
                break;
            case "#log-in":
                main.appendChild(log_in());
                document.getElementById("logar").addEventListener("click", () => {
                    let senha = document.getElementById("senhaa").value;
                    let email = document.getElementById("e-maila").value;
                    database.ref("Users/").once("value").then(async function(db) {
                        Object.keys(db.val()).forEach((email_db) => {
                            if (email_db == email.split(".")[0]) {
                                database.ref(`Users/${email.split(".")[0]}`).once("value").then(async function(db) {
                                    if (db.val().password == senha) {
                                        localStorage.setItem("henriques_site_method", "email")
                                        localStorage.setItem("henriques_site_profile", true)
                                        localStorage.setItem("henriques_site_profile_name", db.val().name)
                                        localStorage.setItem("henriques_site_profile_id", "Logado Com Email e Senha, Não Tem Id")
                                        localStorage.setItem("henriques_site_profile_img_url", "Logado Com Email e Senha")
                                        localStorage.setItem("henriques_site_profile_email", db.val().email)
                                        $(".g-signin2").css("display", "none")
                                        $(".parede").css("display", "block")
                                        $("#sing-in2").css("display", "none")
                                        $("#Formulario").css("display", "none")
                                        let hash = window.location.hash
                                        window.location.hash = "#null"
                                        window.location.hash = hash
                                        let popup = document.getElementsByClassName("popup")[0]
                                        popup.innerHTML = `<center class="popup"><p class="popup">Bem Vindo(a) De Volta ${db.val().name}</p></center>`
                                        popup.style.display = "block"
                                        document.addEventListener("click", () => {
                                            popup.style.display = "none"
                                        })
                                        window.location.hash = ""
                                        return
                                    } else {
                                        let footer_color = document.querySelector("footer").style.color;
                                        let footer_content = document.querySelector("footer").innerHTML;
                                        document.querySelector("footer").innerHTML = `<center><p>Senha Errada!</p></center>`
                                        document.querySelector("footer").style.color = "red";
                                        setTimeout(function () {document.querySelector("footer").style.color = footer_color; document.querySelector("footer").innerHTML = footer_content}, 10000)
                                        return
                                    }
                                })
                            }
                        })
                        let footer_color = document.querySelector("footer").style.color;
                        let footer_content = document.querySelector("footer").innerHTML;
                        document.querySelector("footer").innerHTML = `<center><p>Email Incorreto!</p></center>`
                        document.querySelector("footer").style.color = "red";
                        setTimeout(function () {document.querySelector("footer").style.color = footer_color; document.querySelector("footer").innerHTML = footer_content}, 10000)
                        return
                    })
                })
                let btn1 = document.getElementById("com_o_google")
                btn1.addEventListener("change", function () {
                    if (btn1.checked == true) {
                        document.getElementById("senhaa").style.display = "none"
                        document.getElementById("com_o_google2").style.display = "none"
                        document.getElementById("senhaa").value = ""
                      } else {
                        document.getElementById("senhaa").style.display = "inline-block"
                        document.getElementById("com_o_google2").style.display = "inline-block"
                      }
                })
                break;
            case "#html":
                main.appendChild(html());
                break;
            case "#luisa":
                main.appendChild(luisa());
                break;
            case "#henrique":
                main.appendChild(henrique());
                break;
            case "#blogs":
                main.appendChild(blogs())
                break;
            case "#data":
                database2.ref(`Servidores/Cadastros/${localStorage.henriques_site_profile_email.split(".")[0]}`).once("value").then(async function(db) {
                    if (db.val() !== null) {
                        database2.ref(`Servidores/Money`).once("value").then(async function(db2) {
                            Object.keys(db2.val()).forEach((valor, index) => {
                                if (valor == db.val().userId) {
                                    database2.ref(`Servidores/Money/${valor}`).once("value").then(async function(db3) {
                                        database2.ref(`Servidores/Level/${valor}`).once("value").then(async function(db4) {
                                            let tops = []
                                            let talvez = []
                                            let i;
                                            database2.ref(`Servidores/Level/`).once("value").then(async function(db5) {
                                                    Object.keys(db5.val()).forEach((id, index, array) => {
                                                        database2.ref(`Servidores/Level/${id}`).once("value").then(async function(db6) {
                                                        tops.push(db6.val().level+"_"+id)
                                                        if (index + 1 == array.length) {
                                                            function ordenaNum (a, b) {
                                                            a = a.split("_")
                                                            b = b.split("_")
                                                            return b[0] - a[0];
                                                            }
                                                            tops.sort(ordenaNum)
                                                            for (i=0; i<tops.length; i++) {
                                                                talvez.push(tops[i] + "-" + (i + 1))
                                                            }
                                                            talvez.forEach((valor, index) => {
                                                            if (db.val().userId == valor.split("-")[0].split("_")[1]) {
                                                                main.innerHTML = ""
                                                                main.appendChild(data(localStorage.henriques_site_profile_name, profile_id, profile_img_url, profile_email, cookies == "accept"?"Sim!":"Não!", db.val()?db.val().userId:"Não Cadastrado No Discord", db3.val()?db3.val().money:"Não Cadastrado No Discord", valor?valor.split("-")[1]:"Não Cadastrado No Discord", `#${valor?valor.split("_")[0]:"Não Cadastrado No Discord"}`))
                                                                document.getElementById("votar").addEventListener("click", () => {
                                                                    if (parseInt(localStorage.henriques_site_cooldown) > Date.now()) {
                                                                        let footer_color = document.querySelector("footer").style.color;
                                                                        let footer_content = document.querySelector("footer").innerHTML;
                                                                        document.querySelector("footer").innerHTML = `<center><p>Você Já Votou Hoje! Espere ${Math.abs(parseInt(localStorage.henriques_site_cooldown) - Date.now()) / 60 / 60 / 1000} Horas</p></center>`
                                                                        document.querySelector("footer").style.color = "red";
                                                                        setTimeout(function () {document.querySelector("footer").style.color = footer_color; document.querySelector("footer").innerHTML = footer_content}, 10000)
                                                                        return
                                                                    } else {
                                                                        database2.ref(`Servidores/Level/${valor.split("-")[0].split("_")[1]}`).set({
                                                                            xp: (db6.val().level * 100) / 2 + db6.val().xp,
                                                                            level: db6.val().level
                                                                        })
                                                                        database2.ref(`Servidores/Money/${valor.split("-")[0].split("_")[1]}`).set({
                                                                            money: db3.val().money + 500
                                                                        })
                                                                        localStorage.setItem("henriques_site_cooldown", (Date.now() + 43200000))
                                                                    }
                                                                })
                                                                console.log("1")
                                                            }
                                                        })
                                                    }
                                                    })
                                            })
                                            })
                                            
                                        })
                                    })
                                }
                            })
                        })
                        return
                    } else {
                        main.innerHTML = ""
                        console.log("2")
                        main.appendChild(data(localStorage.henriques_site_profile_name, profile_id, profile_img_url, profile_email, cookies == "accept"?"Sim!":"Não!", "Não Cadastrado No Discord!", "<a href='https://discord.com/api/oauth2/authorize?client_id=797559448188354571&permissions=8&scope=bot'>Adicione Meu Bot!</a>", "(prefixo ex: meui6/ ou exclusivo prefixo que escolheu)cadastrar (seu email)", "Para se Cadastrar Use o Comando: "))
                        document.getElementById("votar").style.display = "none"
                        return
                    }
                })
                break;
            case "#sing-in":
                main.appendChild(sing_in())
                document.getElementById("cadastrar").addEventListener("click", () => {
                    let nome = document.getElementById("nome").value;
                    let email = document.getElementById("e-mail").value;
                    let senha = document.getElementById("senha").value;
                    if (!email.includes("@") || email.split("@")[0].split(".")[1]) {
                        let footer_color = document.querySelector("footer").style.color;
                        let footer_content = document.querySelector("footer").innerHTML;
                        document.querySelector("footer").innerHTML = `<center><p>Email Invalido! Ele Não Pode Conter Nenhum Ponto Antes Do '@'</p></center>`
                        document.querySelector("footer").style.color = "red";
                        setTimeout(function () {document.querySelector("footer").style.color = footer_color; document.querySelector("footer").innerHTML = footer_content}, 10000)
                        return
                    }
                    if (!nome.split("")[5]) {
                        let footer_color = document.querySelector("footer").style.color;
                        let footer_content = document.querySelector("footer").innerHTML;
                        document.querySelector("footer").innerHTML = `<center><p>Nome Muito Curto!</p></center>`
                        document.querySelector("footer").style.color = "red";
                        setTimeout(function () {document.querySelector("footer").style.color = footer_color; document.querySelector("footer").innerHTML = footer_content}, 10000)
                        return
                    }
                    if (!senha.split("")[5]) {
                        let footer_color = document.querySelector("footer").style.color;
                        let footer_content = document.querySelector("footer").innerHTML;
                        document.querySelector("footer").innerHTML = `<center><p>Senha Muito Curta!</p></center>`
                        document.querySelector("footer").style.color = "red";
                        setTimeout(function () {document.querySelector("footer").style.color = footer_color; document.querySelector("footer").innerHTML = footer_content}, 10000)
                        return
                    }
                    database.ref("Users/").once("value").then(async function(db) {
                        Object.keys(db.val()).forEach((email_db) => {
                            if (email_db == email.split(".")[0]) {
                                let footer_color = document.querySelector("footer").style.color;
                                let footer_content = document.querySelector("footer").innerHTML;
                                document.querySelector("footer").innerHTML = `<center><p>Email Já Cadastrado!!</p></center>`
                                document.querySelector("footer").style.color = "red";
                                setTimeout(function () {document.querySelector("footer").style.color = footer_color; document.querySelector("footer").innerHTML = footer_content}, 10000)
                                return
                            }
                        })
                        let footer_color = document.querySelector("footer").style.color;
                        let footer_content = document.querySelector("footer").innerHTML;
                        document.querySelector("footer").innerHTML = `<center><p>Cadastrado Com Sucesso!!!</p></center>`
                        document.querySelector("footer").style.color = "green";
                        setTimeout(function () {document.querySelector("footer").style.color = footer_color; document.querySelector("footer").innerHTML = footer_content}, 10000)
                        database.ref(`Users/${email.split(".")[0]}`).set({
                            email: email,
                            name: nome,
                            password: senha
                        })
                        localStorage.setItem("henriques_site_method", "email")
                        localStorage.setItem("henriques_site_profile", true)
                        localStorage.setItem("henriques_site_profile_name", nome)
                        localStorage.setItem("henriques_site_profile_id", "Logado Com Email e Senha, Não Tem Id")
                        localStorage.setItem("henriques_site_profile_img_url", "Logado Com Email e Senha")
                        localStorage.setItem("henriques_site_profile_email", email)
                        profile = localStorage.henriques_site_profile;
                        profile_name = localStorage.henriques_site_profile_name;
                        profile_id = localStorage.henriques_site_profile_id;
                        profile_img_url = localStorage.henriques_site_profile_img_url;
                        profile_email = localStorage.henriques_site_profile_email;
                        cookies = localStorage.henriques_site;
                        $(".g-signin2").css("display", "none")
                        $(".parede").css("display", "block")
                        $("#sing-in2").css("display", "none")
                        $("#Formulario").css("display", "none")
                        let hash = window.location.hash
                        window.location.hash = "#null"
                        window.location.hash = hash
                        localStorage.setItem("henriques_site_usuario", true)
                        let popup = document.getElementsByClassName("popup")[0]
                        popup.innerHTML = `<center class="popup"><p class="popup">Bem Vindo(a) ${nome}</p></center>`
                        popup.style.display = "block"
                        document.addEventListener("click", () => {
                            popup.style.display = "none"
                        })
                        window.location.hash = ""
                    })
                })
                break;
            case "#priv":
                main.appendChild(priv())
                break;
            case "#contato":
                main.appendChild(contato());
                break;
            case "#editor":
                main.appendChild(editor())
                const app = new Vue({
                    el: '#app',
                    data: function () {
                        return {
                            notes: [],
                            active: null
                        }
                    },
                    methods: {
                        remove: function () {
                            for (let i = 0; i < this.notes.length; i++) {
                                if (this.notes[i].content == "") {
                                    this.notes.splice(i, 1)
                                }
                            }
                            window.localStorage.setItem("notes", JSON.stringify(this.notes))
                        },
                        create: function () {
                            this.active = null
                            this.$refs.textarea.value = ""
                            this.remove()
                        },
                        select(key) {
                            this.active = key
                            this.$refs.textarea.value = this.notes[key].content
                            this.remove()
                        },
                        save: _.debounce(function () {
                            let data = this.$refs.textarea.value;
                            let notes = window.localStorage.getItem("notes") || '[]';
                            notes = JSON.parse(notes)

                            if (this.active == null) {
                                notes.splice(0,0, {
                                    content: data
                                })
                            } else {
                                notes[this.active].content = data
                            }

                            this.notes = notes

                            if (this.active === null) {
                                this.select(0)
                            }

                            window.localStorage.setItem("notes", JSON.stringify(this.notes))
                            this.remove()
                            
                        }, 300)
                    },
                    mounted: function () {
                        let notes = window.localStorage.getItem("notes") || '[]';
                        this.notes = JSON.parse(notes)
                    }
                })
                const textarea = document.querySelector('textarea')
                textarea.addEventListener("keyup", () => {
                    const previu = document.querySelector('.previu')
                    localStorage.setItem("Codego-henriques-site", textarea.value)
                    if (tema == "dark") {
                        document.querySelectorAll(".a").forEach((a, b, c) => {
                            a.style.color = "#fff"
                        });
                    }
                })
                document.addEventListener("mousemove", () => {
                    const previu = document.querySelector('.previu')
                    localStorage.setItem("Codego-henriques-site", textarea.value)
                    if (tema == "dark") {
                        document.querySelectorAll(".a").forEach((a, b, c) => {
                            a.style.color = "#fff"
                        });
                    }
                })
                document.querySelector("footer").innerHTML = `<center><p class="a">Apague Tudo Para Remover!</p></center>`
                break;
            default:
                main.appendChild(pg404(window.location.hash.split("#")[1]));
        }
    })
}

window.addEventListener("load", () => {
    main.appendChild(home(profile_name?profile_name.toLowerCase():"Querido Leitor"));
    window.location.hash = ""; 
    init()
});

const menu = document.querySelector(".menu")
const opt = document.querySelector("#oopt") 
menu.addEventListener("click", () => {
    if (menu.classList.contains("none")) {
        
        $(".menu").css("position", "absolute")
        $(".g-signin2").css("top", "45px")
        $(".parede").css("top", "50px")
        
        document.querySelector("#oopt").classList.add("opt")
        menu.classList.remove("none")
        menu.classList.remove("vez")
    } else {
        
        $(".menu").css("position", "absolute")
        $(".g-signin2").css("top", "-50px")
        $(".parede").css("top", "-50px")
        
        menu.classList.add("none")
        document.querySelector("#oopt").classList.remove("opt")
        menu.classList.remove("vez")
    }
})
opt.addEventListener("click", () => {
    document.querySelector("#oopt").classList.toggle("verificar")
    
    $(".menu").css("position", "absolute")
    $(".g-signin2").css("top", "40px")
    $(".parede").css("top", "45px")
    
    menu.classList.remove("none")
    menu.classList.remove("vez")
    document.querySelector("#oopt").classList.add("opt")
})
document.querySelector("body").addEventListener("click", () => {
    if (menu.classList.contains("none") && menu.classList.contains("vez")) {
        document.querySelector("#oopt").classList.remove("verificar")
        
        $(".menu").css("position", "absolute")
        $(".g-signin2").css("top", "40px")
        $(".parede").css("top", "45px")
        
        menu.classList.remove("none")
        menu.classList.remove("vez")
        document.querySelector("#oopt").classList.add("opt")
    } else {
        menu.classList.add("vez")
        return
    }
    
})
setInterval(function () {
    if (localStorage.henriques_site_method != "deslogado") {
        return
    } else {
        $.notify("Logue-se Por Favor!!!", "error")
    }
}, 300000)
setInterval(function () {
    let original2 = axios({method: 'get', url: 'https://api.github.com/repos/fenisosi/Site_/commits'})
    .then(res => {
        var primeiro = res["data"][0]["sha"]
        console.log(`Vamos Atualizar A Pagina Agora? ${primeiro.toString() != localStorage.henriques_site_git_version}`)
        if (primeiro.toString() != localStorage.henriques_site_git_version) {
            $.notify("Reiniciando Em 2 Minutos!", "warn")
            setTimeout(function () {
            if (localStorage.henriques_site) {
                if (window.Notification && Notification.permission != "deined") {
                    Notification.requestPermission(function (status) {
                        let n = new Notification("Site Desatualizado!", {
                            body: "Atualizando..."
                        })
                    })
                }
                if (res["data"][0]["commit"]["message"].toLowerCase().includes("html")) {
                Notification.requestPermission(function (status) {
                    let n = new Notification("Nova Aula De HTML", {
                        body: "SAIO NOVA AULA DE HTMLLLLL"
                    })
                })
                } else {
                    console.log("aaa n saio aula de html")
                }
            }
            window.location.reload()
        }, 299000) 
        
    }
        
        
})
}, 300000)

if (!localStorage.henriques_site) {
    document.querySelector(".box-cookies").classList.remove('hide');
}

const btnCookies = document.querySelector(".btn-cookies");

btnCookies.addEventListener('click', () => {
    const consfirma = confirm("Por Favor Ative As Notificaçoes Para Concluir 🤠 \nObs: Caso Esteja Em Um Dispositivo Movel e Não Estiver Uzando Os Navegadores Firefox Android, Opera Android ou Samsung Internet Não Ira Funcionar! \nObs 2: Caso Esteja No Pc E Esteja Usando o Internet Explorer Não Ira Funcionar")
    
    if (consfirma) {
        try {
            Notification.requestPermission(function (status) {
                let n = new Notification("EEE AMIGIM", {
                    body: "Cookes Aceitos Com Sucesso!"
                }).onshow = function()  {
                    localStorage.setItem("henriques_site", "accept"); 
                    document.querySelector(".box-cookies").classList.add('hide');
                }
                
                
        })
        } catch {
            return;
        }
    } else {
        document.querySelector(".box-cookies").classList.remove('hide');
        return
    }
});

document.getElementById("fonte_normal").addEventListener("click", () => {
    document.getElementById("html").style.fontFamily = "arial"
})
document.getElementById("fonte_curvada").addEventListener("click", () => {
    document.getElementById("html").style.fontFamily = "'Amatic SC', cursive"
})
let saindo = false
document.addEventListener("mouseleave", () => {
    if (saindo != true) {
        let popup = document.getElementsByClassName("popup")[0]
        popup.innerHTML = `<center class="popup"><p class="popup">Já Está Saindo?!<br>Vai Perder A Melhor Parte!</p></center>`
        popup.style.display = "block"
        document.addEventListener("click", () => {
            popup.style.display = "none"
        })
        saindo = true
    }
})


function darkMode() {
    tema = "dark"
    document.getElementsByTagName("body")[0].style.backgroundColor = "#303030"
    document.getElementsByTagName("nav")[0].style.background = "#303030"
    document.getElementById("ul").style.background = "#424242"
    document.getElementById("html").style.color = "rgba(255, 255, 255, 0.5)"
    document.getElementById("footer").style.backgroundColor = "#424242"
    document.querySelectorAll(".a").forEach((a, b, c) => {
        a.style.color = "#fff"
    });
}
function ligthMode() {
    tema = "light"
    document.getElementsByTagName("body")[0].style.backgroundColor = "whitesmoke"
    document.getElementsByTagName("nav")[0].style.background = "whitesmoke"
    document.getElementById("ul").style.background = "#EDEDED"
    document.getElementsByTagName("html")[0].style.color = "#333"
    document.getElementById("footer").style.backgroundColor = "whitesmoke"
    document.querySelectorAll(".a").forEach((a, b, c) => {
        a.style.color = "#333"
    });
}


document.getElementById("tema_claro").addEventListener("click", () => {
    ligthMode();
})
document.getElementById("tema_dark").addEventListener("click", () => {
    darkMode();
})
document.addEventListener("mousemove", () => {
    if (tema == "dark") {
        darkMode();
    }
})

