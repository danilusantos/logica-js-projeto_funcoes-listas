let numeroSecreto = parseInt(Math.random() * 10 + 1);
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute != numeroSecreto) {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor.');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior.');
        }
        // tentativas = tentativas + 1;
        tentativas++;
        limparCampo();
    } else {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1
            ? 'tentativas'
            : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}.`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

function limparCampo() {
    let chute = document.querySelector('input');
    chute.value = '';
}
