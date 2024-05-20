// localStorage.clear()

function registrarLogin(){
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value
    let nome = document.getElementById("nome").value

    localStorage.setItem("email", email)
    localStorage.setItem("senha", senha)
    localStorage.setItem("nome", nome)

    window.location.href = "pgInicio.html"
}
function login(){
    let email = document.getElementById("nome2").value
    let senha = document.getElementById("senha2").value
    let nome = document.getElementById("nome2").value
    let emailS = localStorage.getItem("email")
    let senhaS = localStorage.getItem("senha")
    let nomeS = localStorage.getItem("nome")

    if (email == emailS && senha == senhaS && nome == nomeS) {
        window.location.href = "pgInicio.html"
    } else {
        alert("login fracassado, tente novamente")
    }
}