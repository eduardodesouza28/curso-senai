function redirect() {
    window.location.href = "https://www.bing.com/search?q=window.location.href+&qs=n&form=QBRE&sp=-1&lq=0&sm=csrmain&pq=window.location.href+&sc=11-21&sk=&cvid=36F77AF52C18427B83E83124A16553FB&ghsh=0&ghacc=0&ghpl="
}
function adElemento() {
    document.getElementById("titulo").innerHTML = "teste"
}
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
function lampada() {
    function ligar() {
        let on = document.getElementById("off")
        on.src = "on.gif"
        document.body.appendChild(on)
    }
    function desligar() {
        let off = document.getElementById("off")
        off.src = "off.gif"
        // document.body.removeChild(on)
        document.body.appendChild(on)

    }
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
    if (quantidade > 0 && quantidade < 30){
        alert (500 * quantidade)
        document.getElementById("estq").innerHTML -= quantidade
    } else {
        alert("quantidade indisponivel")
    }
}
