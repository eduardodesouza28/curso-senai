let num1 = Number(prompt("digite o primeiro numero: "))
// let num2 = Number(prompt("digite o segundo numero: "))
// let num3 = Number(prompt("digite o terceiro numero: "))
// alert(soma(num1,num2))
// alert(numQuadrado(num1))
// alert(fatorial(num1))
// alert(medPonderada(num1,num2,num3))
// alert(numMaior(num1,num2))
// alert(tempFahrenheit(num1))
// alert(expoente(num1,num2))
alert(raiz(num1))


function soma (a,b){
    return`a soma é de: ${a+b}`
}
function numQuadrado (a){
    return`o quadrado é: ${a*a}`
}
function fatorial (a){
    for(i=a;i>0;i--){
        a*=i
    }
    return`o fatorial é ${a}`
}
function medPonderada (a,b,c){
    return`a média ponerada é: ${((a*2)+(b*3)+(c*5))/10}`
}
function numMaior (a,b){
    if(a>b){
        return`${a} é maior que ${b}`
    }
    else{
        return`${b} é maior que ${a}`
    }
}
function tempFahrenheit (a){
    let b = (9*a/5) + 32
    return`a temperatura em fahreinheit é: ${b}`
}
function expoente (a,b){
    return(Math.pow(a,b))
}
function raiz (a){
    return(Math.sqrt(a))
}

