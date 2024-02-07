/*
IMC	Classificação
Menor que 18,5	Magreza
18,5 a 24,9	Normal
25 a 29,9	Sobrepeso
30 a 34,9	Obesidade grau I
35 a 39,9	Obesidade grau II
Maior que 40	Obesidade grau III


IMC = peso / (altura x altura).
*/

const resposta = document.querySelector("#telapreta p")
document.querySelector("#botao").addEventListener("click", () => {
    const nome = document.querySelector("#nome").value
    const peso = document.querySelector("#peso").value
    const altura = document.querySelector("#altura").value
    let imc = peso / (altura * altura)


    if(imc < 18.5){
        resposta.innerHTML = `${nome}, Seu IMC é baixo, você está magro!${imc.toFixed(2)}`
    }
    else if(imc <=24.9){
        resposta.innerHTML = `${nome}, Seu IMC é normal!,. seu IMC é de${imc.toFixed(2)}`
    }
    else if(imc <=29.9){
        resposta.innerHTML = `${nome}, Você está com sobrepeso, cuidado!. seu IMC é de ${imc.toFixed(2)}`        
    }
    else if (imc <=34.9){
        resposta.innerHTML = `${nome}, Obesidade grau I, procure um medíco!,  seu IMC é de ${imc.toFixed(2)}`
    }else if (imc <= 39.9){
        resposta.innerHTML = `${nome}, Obesidade grau II, sua saúde está crítica!. seu IMC é de${imc.toFixed(2)}`
    }else{
        resposta.innerHTML = `${nome}, Obesidade grau III, se você engordar mais, você corre muito risco!.  seu IMC é de${imc.toFixed(2)}`
    }

})

