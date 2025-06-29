function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let deNumero = parseInt(document.getElementById('de').value);
    let ateNumero = parseInt(document.getElementById('ate').value);

    while (deNumero >= ateNumero){

        alert ( ' O valor do campo Do numero é maior ou igual ao valor do campo Até o número.');
        reiniciar();
        alterarStatusBotao();
        return;
    }

    let intervalo = ateNumero - deNumero;
    let sorteados = [];
    let numero;

    while ( quantidade > intervalo){
        alert ('A quantidade de numeros solicitados para sortear é menor do que o intervalo dos campos Do numero-Até o numero.Tente Novamente');
        reiniciar();
        alterarStatusBotao();
        return;
    }

    for (let i = 0 ; i < quantidade; i++){

        numero = sortearNumeroAleatorio (deNumero, ateNumero);

        while (sorteados.includes(numero)){
            numero = sortearNumeroAleatorio (deNumero, ateNumero);
      
        }
        sorteados.push(numero);

            }

            let resultado = document.getElementById('resultado');
            resultado.innerHTML = ` <label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`

            alterarStatusBotao();
            
}

function sortearNumeroAleatorio ( min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao (){
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');

    }
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao ();
}