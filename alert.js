// Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

let finaldeSemana = prompt("Bom dia, qual é o dia da semana?")

//Caso for final de semana

if (finaldeSemana === "sábado" || finaldeSemana === "sabado" || finaldeSemana === "domingo")
    alert ("Bom fim de semana!")
else {
  //Caso for dia de semana

    alert ("Boa semana!")
}


Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

let numerodoUsuario = prompt("Digite um número")

//caso for número positivo 

if (numerodoUsuario > 0)
   alert ('O número é positivo')
else if (numerodoUsuario < 0)
   alert ('O número é negativo')
} else {
    alert("O número é zero!");
}
}



//Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

let numerodaPontuaçao = prompt("Digite um número de 0 a 100")

//caso for igual ou maior que 100

if ( numerodaPontuaçao >= 100)
      alert (` Sua pontuação é ${numerodaPontuaçao} "Parabéns, você venceu!" `);
//caso for menor que 100 
else {
    alert (` Sua pontuação é ${numerodaPontuaçao} Tente novamente para ganhar `);
}




//Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

let saldodaConta =1000

alert (`Senhorita, o saldo da sua conta é ${saldodaConta}`);



//Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

let nomedeUsuario = prompt("Qual é seu nome?");

    alert (`Boas vindas ${nomedeUsuario}!`);
