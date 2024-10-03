// Faça um algoritmo para montar uma calculadora simples, onde o usuário vai optar em escolher conforme o menu 
// adiante. 
// Observação: no caso de divisão, o denominador não pode ser zero, invalidando a operação.
// 1. Soma.
// 2. Subtração.
// 3. Multiplicação.
// 4. Divisão
// 5. Potenciação
// 6. Radiciação

function calcular() {
    let numero1 = parseFloat(document.querySelector('.nu1').value);
    let numero2 = parseFloat(document.querySelector('.nu2').value);
    let operacao = document.querySelector('select').value;


    switch (operacao) {
        case "+":
            document.querySelector('.resultado').innerHTML = ` A soma é ${numero1 + numero2}`;
            break;
        case "-":
            document.querySelector('.resultado').innerHTML = ` A subtração é ${numero1 - numero2}`;
            break;
        case "*":
            document.querySelector('.resultado').innerHTML = ` A multiplicação é ${numero1 * numero2}`;
            break;
        case "/":
            document.querySelector('.resultado').innerHTML = ` A divisão é ${numero1 / numero2}`;
            break;
        case "**":
            document.querySelector('.resultado').innerHTML = `A potenciação é ${numero1 ** numero2}`;
            break;
        case "|":
            document.querySelector('.resultado').innerHTML = ` A radiciação é ${numero1 ** (1/numero2)}`;
            break;
    }

}

    document
        .querySelector('button')
        .addEventListener('click', calcular);