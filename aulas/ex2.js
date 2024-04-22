let nomes = [""]
let ind = 0
let menu = 11

while (menu != 0) {

    menu = prompt("menu: ")

    switch (true) {
        case (menu == 1):
            //cadastrar nome
            nomes.push(prompt("cadastrar um nome: "))
            break
        case (menu == 2):
            //excluir um nome
            nomes.pop()
            break
        case (menu == 3):
            //editar um nome
            ind = nomes.indexOf(prompt("qual a posição do nome: "))
            nomes[ind] = prompt("escreva o nome: ")
            break
        case (menu == 4):
            //pesquisar se um nome esta cadastrado
            let verd = nomes.includes(prompt("nome: "))
            if (verd) {
                alert("está cadastrado")
            } else {
                alert("não está cadastrado")
            }
            break
        case (menu == 5):
            //pesquisar os nomes em ordem alfabetica
            alert(nomes.sort())
            break
        case (menu == 0):
            break
        default:
            alert("opção inválida")
    }
}