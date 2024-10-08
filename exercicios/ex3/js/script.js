// Faça um algoritmo para a leitura de duas notas parciais de um aluno. O algoritmo deve calcular a média
// alcançada por aluno e apresentar:
// 3. A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
// 4. A mensagem "Reprovado", se a média for menor do que cinco;
// 5. A mensagem “Recuperação", se a média estiver entre cinco e sete.

// function media1() {
//     let numero1 = document.querySelector('.num1').value;
//     let numero2 = document.querySelector('.num2').value;

//     numero1 = parseFloat(numero1);
//     numero2 = parseFloat(numero2);
//     let media = (numero1 + numero2) / 2;

//     pResultado =
//         document.querySelector("#media1");

//     pResultado.innerHTML =
//         `${numero1} + ${numero2} + ${media}`;

//     if (media >= 7) {
//         console.log("Aprovado")
//     }

//     else if (media > 5) {
//         console.log("Recuperação")
//     }

//     else {
//         console.log("Reprovado")
//     }



//     pResultado.innerHTML = `${media}`;
// }


// let botao = document.querySelector("button");
// botao.addEventListener('click', media1);


function lerEexibirResultado() {
    let nota1 = parseFloat (document.querySelector(".num1").value);
    let nota2 = parseFloat (document.querySelector(".num2").value);

    let media = (nota1 + nota2) / 2;

    let resultado = " ";
    if (media<5) {
        resultado = "Reprovado";
    }
    else if (media <7) {
        resultado = "Recuperação";
    }
    else {
        resultado = "Aprovado";
    }

    let p = document.querySelector("#resultado");
    p.innerHTML = `O aluno de média ${media.toFixed(2)} está ${resultado}`;
}

let botao = document.querySelector('button');
    botao.addEventListener("click", lerEexibirResultado);
