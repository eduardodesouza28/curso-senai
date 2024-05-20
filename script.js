function login() {
    let nome = document.getElementById("nome").value
    let senha = document.getElementById("senha").value

    localStorage.setItem("nome", nome)
    localStorage.setItem("senha", senha)

    window.location.href = "login.html"
}

function fazerLogin() {
    let nome = document.getElementById("nome2").value
    let senha = document.getElementById("senha2").value
    let nomeS = localStorage.getItem("nome")
    let senhaS = localStorage.getItem("senha")

    if (nome == nomeS && senha == senhaS) {
        alert("login efetuado com sucesso")
    } else {
        alert("login fracassado, tente novamente")
    }
}

let r = Math.floor(Math.random() * 255)
let g = Math.floor(Math.random() * 255)
let b = Math.floor(Math.random() * 255)
let cor = "rgb(" + r + ", " + g + ", " + b + ")"
document.getElementById("color-box").style.backgroundColor = cor