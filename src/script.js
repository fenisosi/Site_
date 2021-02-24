var profile = localStorage.henriques_site_profile;
var profile_name = localStorage.henriques_site_profile_name;

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



const main = document.querySelector('#root')



const init = () => {
    window.addEventListener("hashchange", () => {
        main.innerHTML = ""
        document.querySelector("footer").innerHTML = `<center><p><a href="/#editor">Use Nosso Editor Online</a></p></center>`
        switch(window.location.hash.split("?")[0]){
            case "":
                main.appendChild(home(profile?profile_name.toLowerCase():"Querido Leitor"));
                break;
            case "#aulas":
                main.appendChild(aulas());
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
                main.appendChild(data(profile?profile:null, localStorage.henriques_site))
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
                })
                document.addEventListener("mousemove", () => {
                    const previu = document.querySelector('.previu')
                    localStorage.setItem("Codego-henriques-site", textarea.value)
                })
                document.querySelector("footer").innerHTML = `<center><p>Apague Tudo Para Remover!</p></center>`
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
        $(".g-signin2").css("top", "-40px")
        $(".parede").css("top", "-40px")
        
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
    if (profile) {
        return
    } else {
        $.notify("Logue-se Por Favor!!!", "error")
    }
}, 300000)
setInterval(function () {
    let original2 = axios({method: 'get', url: 'https://api.github.com/repos/fenisosi/Site_/commits'})
    .then(res => {
        console.log(primeiro)
        var primeiro = res["data"][0]["sha"]
        console.log(`Vamos Atualizar A Pagina Agora? ${primeiro.toString() != document.querySelector("#mudar").innerHTML}`)
        if (primeiro.toString() != document.querySelector("#mudar").innerHTML) {
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
        }, 59000) 
        
    }
        
        
})
}, 60000)

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
