//Crie dois inputs de tipo numeros e aio clicar no botão "somar" imprima os valores num elemento "p" no formato "1+2=3".

function somar(){
    let numero1 = 
        document.querySelector('.num1').value;

    let numero2 = 
        document.querySelector('.num2').value;

    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    let soma = numero1 + numero2;

    pResultado = 
        document.querySelector("#resultado");

    pResultado.innerHTML = 
            `${numero1} + ${numero2} = ${soma}`;
}

let botao = document.querySelector("button");
botao.addEventListener('click', somar);