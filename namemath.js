//Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.

console.log("Boas vindas")


//Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
let nome = "Mileni"
console.log(`Boas vindas ${nome}!`);


//Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
let nome = "Mileni"
alert(`Boas vindas ${nome}!`);

//Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
let pergunta = prompt("Qual a linguagem de programação que você mais gosta?")



//Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
let valor1 = 5;
let valor2 = 2;
let resultado = " valor1 + valor2";
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);






//Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
let valor1 = 5;
let valor2 = 2;
let resultado = " valor1 - valor2";
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);

//Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
let idade = parseInt(prompt("Qual é sua idade?"));

if (${idade} >= 18) {
   console.log("Você é maior de idade")
else {
      console.log("Você é menor de idade")


}









//Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.

let numero = parseInt(prompt("Digite um número")
    if ( numero >= 0) {
   console.log("É maior que zero");
  else if {
     console.log("É menor que zero");
  } else {
      console.log("O número é zero");
}
  
//Use um loop while para imprimir os números de 1 a 10 no console.

let numeroInicial = 1
let numeroFinal = 10
  while (numeroIniciL <= numeroFinal)
      console.log(numeroInicial)
         numeroInicial ++;
}


//Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
     let nota = parseInt(prompt("Digite um número de 1 a 10")
                       if ( numero >= 7) {
   console.log("Aprovado");
 else {
      console.log("Reprovado");
}      
//Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.

let numeroMaximo =10
let nota  = parseInt(Math.random() * numeroMaximo +1);
    console.log( `Número aleatório gerado é ${nota}`)

//Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
let numeroMaximo = 10;
let numeroAleatorio = parseInt(Math.random() * numeroMaximo + 1);

console.log(numeroAleatorio);
//Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
let numeroMaximo = 100;
let numeroAleatorio = parseInt(Math.random() * numeroMaximo + 1);

console.log(numeroAleatorio);
