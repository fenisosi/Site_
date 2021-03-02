<!DOCTYPE html>
<html lang="pt-br" id="html">
<head>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-TG86NN0JKJ"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-TG86NN0JKJ');
    </script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./src/style.css">
    <meta name="google-signin-client_id" content="149948105115-f6oc6u03v2p3hqedsat0pa0sjd23ho6q.apps.googleusercontent.com">
    <script src="https://apis.google.com/js/platform.js" async defer></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="notify.min.js"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
    <link rel="apple-touch-icon" sizes="180x180" href="./imagens/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="./imagens/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="./imagens/favicon-16x16.png">
    <link rel="manifest" href="./imagens/site.webmanifest">
    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.js"></script>
    <style>
        #loading{
            position: fixed;
            width: 100%;
            height: 100vh;
            background: #fff no-repeat center center;	
            z-index: 99999;
            text-align: center;
            display: flex;
            align-items: center;
            flex-direction: column;
            font-size: 30px;
            font-family: 'Inconsolata:wght@200', arial;
        }   
    </style>
    <script>
        function typeWriter(elemento) {
            const textoArray = elemento.innerHTML.split('');
            elemento.innerHTML = '';
            textoArray.forEach((letra, i) => {
            setTimeout(() => elemento.innerHTML += letra, 75 * i);
            });
        }
        let original = axios({method: 'get', url: 'https://api.github.com/repos/fenisosi/Site_/commits'})   
            .then(res => {
                var primeiro = res["data"][0]["sha"]
                document.querySelector("#mudar").innerHTML = primeiro
            })
    </script>
    <title>Site Legalzim</title>
</head>
<body onload="myFunction()">
    <!-- The core Firebase JS SDK is always required and must be listed first -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/firebase/8.2.9/firebase.min.js" integrity="sha512-QccMMAh33ttLik7hH89hvlX4F59rOQ236xU6JqGvkurYT3KmI5VbRxF4rGY3MF98iOAFPspM20heS7VyA7TVgw==" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/firebase/8.2.9/firebase-database.min.js" integrity="sha512-ibOrFEtKkrSG230OFOh7lNNnNbk/vdT7JFGPC3zGtod7Bh6PTLD5/cuBpQK7jrllPhhGo1XjWMatHqegIFCQyw==" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/firebase/8.2.9/firebase-messaging.min.js" integrity="sha512-T4FVtnh8TSvHjW2A7BqifhuDmbU2BLhh7KP3RjJu0BB3qPz6FnbkBZJfCcVJdHUJ18q1of0ieGn1PRYIh2sc9Q==" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/firebase/0.900.15/firebase-app.min.js" integrity="sha512-b7wLHQEtdYIVdPmMuIBSUsHEY8cb40CVTII8wcl8p9onWCTikhOt7X+fspDyjmyphhJ8H71OTkdj+i3JVsUPzg==" crossorigin="anonymous"></script>
    <script src="https://smtpjs.com/v3/smtp.js"></script>
    <!-- TODO: Add SDKs for Firebase products that you want to use
        https://firebase.google.com/docs/web/setup#available-libraries -->
    <script src="https://www.gstatic.com/firebasejs/8.2.9/firebase-analytics.js"></script>

    <script>
    localStorage.setItem("henriques_site_method", "deslogado")
    localStorage.setItem("henriques_site_profile_name", "Querido Leitor")

    var firebaseConfig = {
        apiKey: "AIzaSyCyFB5zCCp8Sp4i-mLzlXLTX35THs1oLFI",
        authDomain: "site-32238.firebaseapp.com",
        databaseURL: "https://site-32238-default-rtdb.firebaseio.com",
        projectId: "site-32238",
        storageBucket: "site-32238.appspot.com",
        messagingSenderId: "932946919117",
        appId: "1:932946919117:web:715c2793edafe556f5b384",
        measurementId: "G-J4R8QGJLFN"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    var database = firebase.database();
    </script>
    <script src="src/script.js" type="module"></script>
    
    <div id="loading"><p><img src="./imagens/load-gif.gif" alt="Navegador Incompativel :("><br>Carregando...<br>Talvez Seu Javascript Esteja Desabilitado (Ou é Seu Navegador Que Esta Lento Para Caceta!) Então Ative O Javascript E O Css Apos Ativar Recarrege A Página Obrigado :)<p></div>
    <script>
        var preloader = document.getElementById("loading");
        function myFunction(){
			preloader.style.display = 'none';
		};
    </script>
    <!--Cabecalho-->
        <header class="importante-fixed">
            <nav class="nav">
                <ul id="ul">
                    <li>
                        <a href="/#contato" class="pai_do_bunito"><button class="bunito">Henrique</button></a>
                    </li>
                    <li>
                        <p class="menu"><img src="./imagens/menu.png"></p>
                    </li>
                    <br>
                    <nada class="opt" id="oopt">
                        <br>
                        <li>
                            <a class="a" href="/#">Geral</a>
                        </li>
                        <br>
                        <li>
                            <a class="a" href="/#aulas">Aulas</a>
                        </li>
                        <br>
                        <ol class="isto ninhuma">
                            <li><h6><a href="/#html" style="color: #ffa500;margin-left: 30px;">
                                HTML, CSS
                            </a></h6></li>  
                            <br>  
                        </ol>
                        <li>
                            <a class="a" href="/#blogs">Blogs</a>
                        </li>
                        <br> 
                        <ol class="isto ninhuma">
                            <li><h6><a href="/#luisa" style="color: #fc07db;margin-left: 30px;">
                                Luisa
                            </a></h6></li>  
                            <br>
                            <li><h6><a href="/#henrique" style="color: #1900ff;margin-left: 30px;">
                                Henrique
                            </a></h6></li>  
                            <br>  
                        </ol>   
                        <li>
                            <a class="a" href="/#data">Data</a>
                        </li>
                        <br>
                        <li>
                            <a class="a" href="/#editor" class="Notas">Notas</a>
                        </li>
                        <br>
                        <br>
                        <li><a class="a" href="https://discord.gg/44CcvfYNY8" class="link-fab" target="blank"><i class="fab fa-discord"></i></a></li>
                        <li><a class="a" href="https://www.facebook.com/henrique.franchesco.rosario/" class="link-fab" target="blank"><i class="fab fa-facebook-square"></i></a></li>
                        <li><a class="a" href="https://www.instagram.com/Henrique_Franchesco/" class="link-fab" target="blank"><i class="fab fa-instagram-square"></i></a></li>
                        <li><a class="a" href="https://github.com/fenisosi" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"><i class="isto ninhuma" style="font-size: small;"> Git Geral</i></i></a></li>    
                        <li><a class="a" href="https://github.com/fenisosi/Site_" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"><i class="isto ninhuma" style="font-size: small;"> Git Do Projeto</i></i></a></li>    
                        <o class="isto ninhuma"><br class="isto ninhuma"></o>
                        <li><a class="a"><i class="isto ninhuma" id="fonte_normal" style="font-family: Arial;"> Fonte Normal </i></a></li> 
                        <li><a class="a"><i class="isto ninhuma" id="fonte_curvada"> Fonte Curvada </i></a></li>   
                        <o class="isto ninhuma"><br class="isto ninhuma"></o>
                        <li><a class="a"><i class="isto ninhuma" id="tema_claro"> Tema Light (Recomendado)</i></a></li> 
                        <li><a class="a"><i class="isto ninhuma" id="tema_dark"> Tema Dark (Beta)</i></a></li> 
                        <br>
                        <li onclick='setTimeout(function () {
                            document.querySelectorAll(".isto").forEach((a, b, c) => {
                                a.classList.toggle("ninhuma")
                                setTimeout(function () {
                                    abrir()
                                }, 15)
                            }
                        )}, 20)'>
                            <a class="a">...</a>
                        </li>
                    </nada>
                </ul>
            </nav>
        </header>
    <!--Fim Do Cabecalho-->
    <div id="mudar"></div>
    <div class="body2" id="body2">
    <!--Main-->
    <a class="g-signin2 g-sing" data-onsuccess="onSignIn"></a>
    <p id="Formulario"><a href="/#sing-in"><button class="sing-in"><i class="far fa-address-card"></i> Login</button></a></p>
    <a href="/#hub-log-in" class="remuve"><button id="sing-in2"><i class="far fa-address-book"></i> Hub De Log-in</button></a>
    <script>
        let profile;
        function onSignIn(googleUser) {
            profile = googleUser.getBasicProfile()
            if (email.split("@")[0].split(".")[1]) {
                let footer_color = document.querySelector("footer").style.color;
                let footer_content = document.querySelector("footer").innerHTML;
                document.querySelector("footer").innerHTML = `<center><p>Email Invalido! Ele Não Pode Conter Nenhum Ponto Antes Do '@'</p></center>`
                document.querySelector("footer").style.color = "red";
                setTimeout(function () {document.querySelector("footer").style.color = footer_color; document.querySelector("footer").innerHTML = footer_content}, 10000)
                var auth2 = gapi.auth2.getAuthInstance();
                auth2.signOut()
                return
            }
            if (localStorage.perfil_henriques_site) {
                localStorage.setItem("perfil_henriques_site", profile.getName())
            }

            $(".g-signin2").css("display", "none")
            $(".parede").css("display", "block")
            $("#Formulario").css("display", "none")
            $("#sing-in2").css("display", "none")
            console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
            console.log('Name: ' + profile.getName().toLowerCase());
            console.log('Image URL: ' + profile.getImageUrl());
            console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
            let hash = window.location.hash
            window.location.hash = "#null"
            window.location.hash = hash
            localStorage.setItem("henriques_site_method", "google")
            localStorage.setItem("henriques_site_profile", profile)
            localStorage.setItem("henriques_site_profile_name", profile.getName())
            localStorage.setItem("henriques_site_profile_id", profile.getId())
            localStorage.setItem("henriques_site_profile_img_url", profile.getImageUrl())
            localStorage.setItem("henriques_site_profile_email", profile.getEmail())
            // Database
            database.ref(`Users/${profile.getEmail().split(".")[0]}`).once("value").then(async function(db) {
                if (db.val() == null) {
                    database.ref(`Users/${profile.getEmail().split(".")[0]}`)
                    .set({
                        name: profile.getName(),
                        email: profile.getEmail(),
                        password: ""
                    })
                }
                database.ref(`Users/${profile.getEmail().split(".")[0]}`)
                    .update({
                        name: profile.getName(),
                        email: profile.getEmail()
                    })
            })
            // Tratar Boas Vindas
            if (localStorage.henriques_site_usuario == undefined) {
                localStorage.setItem("henriques_site_usuario", true)
                let popup = document.getElementsByClassName("popup")[0]
                popup.innerHTML = `<center class="popup"><p class="popup">Bem Vindo(a) ${profile.getName()}</p></center>`
                popup.style.display = "block"
                document.addEventListener("click", () => {
                    popup.style.display = "none"
                })
            } else {
                let popup = document.getElementsByClassName("popup")[0]
                popup.innerHTML = `<center class="popup"><p class="popup">Bem Vindo(a) De Volta ${profile.getName()}</p></center>`
                popup.style.display = "block"
                document.addEventListener("click", () => {
                    popup.style.display = "none"
                })
            }
        
            

        }
        
        
        
        </script>
    <a onclick="signOut();" class="parede">Sign out</a>
    <script>
        function signOut() {
            let method = localStorage.henriques_site_method;
            if (method == "email") {
                $(".g-signin2").css("display", "block")
                $(".parede").css("display", "none")
                $("#sing-in2").css("display", "block")
                $("#Formulario").css("display", "block")
                localStorage.setItem("henriques_site_profile", null)
                localStorage.setItem("henriques_site_profile_name", "Querido Leitor")
                localStorage.setItem("henriques_site_profile_id", null)
                localStorage.setItem("henriques_site_profile_img_url", null)
                localStorage.setItem("henriques_site_profile_email", null)
                console.log(localStorage.henriques_site_profile);
                console.log(localStorage.henriques_site_profile_name);
                console.log(localStorage.henriques_site_profile_id);
                console.log(localStorage.henriques_site_profile_img_url);
                console.log(localStorage.henriques_site_profile_email);
                console.log(localStorage.henriques_site);
                let hash = window.location.hash
                window.location.hash = "#null"
                window.location.hash = hash
                let popup = document.getElementsByClassName("popup")[0]
                popup.innerHTML = `<center class="popup"><p class="popup">Thau! <br>(Por Favor Se Logue Novamente ( ͡ಠ ʖ̯ ͡ಠ))</p></center>`
                popup.style.display = "block"
                document.addEventListener("click", () => { 
                    popup.style.display = "none"
                })
            } else if (method == "google") {
                var auth2 = gapi.auth2.getAuthInstance();
                auth2.signOut().then(function () {
                    console.log('User signed out.');
                    $(".g-signin2").css("display", "block")
                    $("#sing-in2").css("display", "block")
                    $(".parede").css("display", "none")
                    $("#Formulario").css("display", "block")
                    profile = null
                    localStorage.setItem("henriques_site_profile", profile)
                    localStorage.setItem("henriques_site_profile_name", "Querido Leitor")
                    localStorage.setItem("henriques_site_profile_id", null)
                    localStorage.setItem("henriques_site_profile_img_url", null)
                    localStorage.setItem("henriques_site_profile_email", null)
                    let hash = window.location.hash
                    window.location.hash = "#null"
                    window.location.hash = hash
                    localStorage.setItem("henriques_site_profile", profile)
                    let popup = document.getElementsByClassName("popup")[0]
                    popup.innerHTML = `<center class="popup"><p class="popup">Thau! <br>(Por Favor Se Logue Novamente ( ͡ಠ ʖ̯ ͡ಠ))</p></center>`
                    popup.style.display = "block"
                    document.addEventListener("click", () => {
                        popup.style.display = "none"
                    })
                });
            }
            localStorage.setItem("henriques_site_method", "deslogado")
        }
    </script>
        <main id="root" class="root">
        </main>
        <?php
            echo "uhul"
        ?>
        <div class="data teste popup"></div>
        <espaço-em-branco><br><br><br></espaço-em-branco>
    <!--Fim Dom Main-->
    <!--Footer-->
    <div class="box-cookies hide">
        <p class="msg-cookies">Este site usa ‘cookies’ para garantir que você obtenha a melhor experiência. <a href="/#priv">Política de Privacidade</a> </p>
        <div class="btn-cookies">Aceitar!</div>
    </div>
    <div id="back_footer">    
        <footer class="footer" id="footer">
            <center><p><a href="/#editor" class="a">Use Nosso Editor Online</a></p></center>
        </footer>
    </div>
    <!--Fim Do Footer-->
    <!--Bnt Top e Scripts Relacionados-->
    <button id="btn-top" onclick="javascript: ScrollToTop();"><o>⇪</o></button>
    <script defer>
        window.onscroll = function () {
            scroll();
        } 
        function scroll() {
            const btn = document.getElementById("btn-top")
            if (document.documentElement.scrollTop > 50) {
                btn.style.display = "block"
            } else {
                btn.style.display = "none" 
            }
        }
        function ScrollToTop() {
            document.documentElement.scrollTop = 0
        }
    </script>
    <!--Fim Do Btn Top e Scripts Relacionados-->
    </div>
    <!--Scripts-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.min.js"></script>
    <script>
        function abrir() {
            const menu = document.querySelector(".menu")
            const opt = document.querySelector("#oopt") 
            $(".menu").css("position", "absolute")
            $(".g-signin2").css("top", "-40px")
            $(".parede").css("top", "-40px")
            
            menu.classList.add("none")
            document.querySelector("#oopt").classList.remove("opt")
            menu.classList.remove("vez")
        }
    </script>
</body>
</html>
