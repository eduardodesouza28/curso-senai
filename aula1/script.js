
function mostrarConteudo() {
    let name = document.getElementById("nome").value
    let senha = document.getElementById("pass").value
    if (nome != "" && senha != "" ){
        alert(name)
        alert(senha)
    } else {
        alert("complete os campos")
    }
}