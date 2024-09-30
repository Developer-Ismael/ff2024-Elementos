// Funções para os eventos
function aoClicar(){
    alert('Você clicou no botão !');
}
function aoPerderFoco(){
    alert('Você saiu do campo!');
}
//Selecionando o elemento usando querySelector
let campo = document.querySelector('#meuCampo');
let botao = document.querySelector('.btnCampo');
 
// adicionando os eventos
campo.addEventListener('blur', aoPerderFoco);
botao.addEventListener('click',aoClicar);