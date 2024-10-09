// Faça um algoritmo que leia um número inteiro menor que 1000 e imprima a quantidade de centenas, dezenas e 
// unidades do mesmo. Observando os termos no plural a colocação do "e", da vírgula entre outros.
// Exemplo: 326: 3 centenas, 2 dezenas e 6 unidades
function contar() {
    const numero = parseInt(document.getElementById('numero').value);
    const resultadoElement = document.getElementById('resultado');

    if (numero < 0 || numero >= 1000 || isNaN(numero)) {
        resultadoElement.innerHTML = "Número inválido. Por favor, insira um número menor que 1000.";
        return;
    }

    const centenas = Math.floor(numero / 100);
    const dezenas = Math.floor((numero % 100) / 10);
    const unidades = numero % 10;

    let resultado = `${numero}: ${centenas} centena${centenas !== 1 ? 's' : ''}, ` +
                    `${dezenas} dezena${dezenas !== 1 ? 's' : ''} ` +
                    `e ${unidades} unidade${unidades !== 1 ? 's' : ''}`;

    resultadoElement.innerHTML = resultado;
}