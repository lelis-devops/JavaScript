alert('Seja bem vindo ao sorteio, que a sorte esteja contigo!');
let numeroMaximo = 70;
let numeroSecreto = parseInt(Math.random() * numeroMaximo +1);
console.log(numeroResultante);

let suposição;
let tentativas = 1;

// enquanto chute não for igual ao número secreto
while (suposição != numeroSecreto) {
    suposição = parseInt(prompt(`Escolha um número entre 1 e 70 ${numeroMaximo}`));

    if (suposição == numeroSecreto) {
        break; // se acertar, sai do laço
    } else {
        if ( suposição > numeroSecreto) {
            alert(`O número secreto é menor que ${suposição}`);
        } else {
            alert(`O número sorteado é maior que ${suposição}`);
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Meus parabéns! Você descobriu o número sorteado ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

