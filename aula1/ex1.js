function login(){
    let user = document.getElementById("usern").value
    let senha = document.getElementById("senhan").value
    if (user == "admin" && senha == "admin"){
       document.getElementById("log").innerHTML = 'acesso concedido'
       window.location.href="page2.html"
    }else{
        alert("acesso negado")
    }
}