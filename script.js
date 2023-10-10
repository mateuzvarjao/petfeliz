let btn = document.querySelector('#button');
let botaoEnviar = document.querySelector('#botaoEnviar');
let nomeForm = document.querySelector('#nome');
let telForm = document.querySelector('#tel');
let CEP = document.querySelector('#cep');
let tosa = document.querySelector('#tosa');
let banho = document.querySelector('#banho');
let veterinario = document.querySelector('#veterinario');
let botaoContato = document.querySelector('#botaoContato');


btn.addEventListener('click', () => {

let CEP = document.querySelector('#cep').value;

let urlCep = `https://viacep.com.br/ws/${CEP}/json/`
fetch(urlCep).then(function(response) {
    response.json().then(function(data){
        console.log(data)

        document.querySelector('#rua').value = data.logradouro;
        document.querySelector('#bairro').value = data.bairro;
        document.querySelector('#cidade').value = data.localidade;
        document.querySelector('#estado').value = data.uf;
        
    })
})
console.log(CEP)

})

botaoEnviar.addEventListener('click', (event) => {

    event.preventDefault();

    if(nomeForm.value.length <= 3) {

        alert('Preencha seu nome');
        return;
        
    } else if (telForm.value.length <= 8) {

        alert('Insira seu telefone');
        return;

    } else if (CEP.value.length < 8) {

        alert('Digite seu CEP');
        return;

    } else {

        if (!tosa.checked &&
            !banho.checked &&
            !veterinario.checked) {

            alert('Selecione um dos nossos serviços');

            return;

        } 
        
        botaoEnviar.disabled = false;
    
    alert('Sua solicitação foi enviada! Entraremos em contato em breve! ')
    location.reload()
    } 


}) 

function mudaPagina() {
    window.location.href = 'contato.html';

} 
