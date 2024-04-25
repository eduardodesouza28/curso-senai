
function ad(a) {
    document.getElementById("display").value += a
}
function resultado() {
    let dis = eval(document.getElementById("display").value)
    document.getElementById("display").value = dis
}
function limpar() {
    document.getElementById("display").value = ""
}
function ligar() {
    let on = document.getElementById("off")
    on.src = "on.gif"
}
function desligar() {
    let off = document.getElementById("off")
    off.src = "off.gif"
}
function mostrar() {

    document.getElementById("final").innerHTML =
        `nome: ${document.getElementById("nome").value} <br>
       senha: ${document.getElementById("senha").value} <br>
        receber? ${document.getElementById("news").checked ? "sim" : "não"} <br>
       genero: ${document.getElementById("masc").checked ? "masculino" : "feminino"} <br>
       cidade: ${document.getElementById("cidade").value} <br>
       mensagem: ${document.getElementById("mens").value} 
`




}
function compra() {
    let quantidade = Number(prompt("quantos você dejesa comprar?"))
    if (quantidade > 0 && quantidade < 30) {
        alert(500 * quantidade)
        document.getElementById("estq").innerHTML -= quantidade
    } else {
        alert("quantidade indisponivel")
    }
}
