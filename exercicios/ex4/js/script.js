// Solicite ao usuário um número de 1 a 7 e exiba em texto o dia da semana representado conforme abaixo.
// 1. Domingo
// 2. Segunda-feira
// 3. Terça-feira
// 4. Quarta-feira
// 5. Quinta-feira
// 6. Sexta-feira
// 7. Sábado

function exibirSemana() {
    let dSemana = document.querySelector("#diaSemana").value;
    let resultado = "";
    if (dSemana == "1") 
        resultado = "Domingo"
    else if (dSemana == "2")
        resultado = "Segunda-Feira"
    else if (dSemana == "3")
        resultado = "Terça-Feira"
    else if (dSemana == "4")
        resultado = "Quarta-Feira"
    else if (dSemana == "5")
        resultado = "Quinta-Feira"
    else if (dSemana == "6")
        resultado = "Sexta-Feira"
    else if (dSemana == "7")
        resultado = "Sábado"
    else 
        resultado = "Dia Invalido";

    let p = document.querySelector("p");
    p.innerHTML = resultado;
}

document
    .querySelector('button')
    .addEventListener('click', exibirSemana)