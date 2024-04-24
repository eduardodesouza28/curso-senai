let nomes = [""]
let camada = []
let menu = 11
let cont = 0
let cam = 0

while (menu != 4) {

    menu = prompt("menu: ")

    switch (true) {
        case (menu == 1):
            //adicionar saber (ate 3)
            if (cont < 3) {
                nomes.push(prompt("digite o sabor: "))
                cam ++
                camada.unshift(cam)
                cont++
            } else {
                alert("número maximo de sabores retire um sabor")
            }
            break
        case (menu == 2):
            //remover um sabor
            if (cont != 0) {
                nomes.pop(prompt("qual camada você quer remover"))
                cam --
                camada.pop()
                cont--
            } else {
                alert("não existem sabres a ser removidos, adicione um sabor")
            }
            break
        case (menu == 3):
            //mostrar sabores e camadas
            alert(nomes + "\n" + camada)
            break
        case (menu == 4):
            //finalizar pedido
            break
        default:
            alert("opção inválida")
    }
}