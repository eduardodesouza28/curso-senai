let nomes = [5]
let precos = [5]
let cont = 0
let cont2 = 0
let maiorcinq = ""
let med = 0

for (let i = 0; i < 5; i++){
    nomes[i] = prompt("nome:")
    precos[i] = Number(prompt("preços:"))
    switch (true) {
        case (precos[i] < 50):
            cont++
            break
        case (precos[i] > 50 && precos[i] < 100):
            maiorcinq += `${nomes[i]}, `
            break
        case (precos[i] > 100):
            med += precos[i]
            cont2++
            break
    }
}

med /= cont2
alert(`produtos abaixo de R$50: ${cont}`)
alert(`produtos entre R$50 e R$100: ${maiorcinq}`)
alert(`média dos produtos acima de R$100: ${med}`)