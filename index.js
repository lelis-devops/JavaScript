alert("Boas vindas ao site!");
// Agora usando prompt para capturar informações do usuário
let nomeUsuario = prompt("Digite seu nome:");
let idadeUsuario = parseInt(prompt("Digite sua idade:")); // converte para número

// Validação dos campos
if (!nomeUsuario || isNaN(idadeUsuario)) {
    let mensagemDeErro = "Erro! Preencha todos os campos";
    alert(mensagemDeErro);
} else {
    // Validação da idade
    if (idadeUsuario >= 18) {
        alert("Pode tirar a habilitação!");
    } else {
        alert("Não pode tirar a habilitação!");
    }
}


// Guarda o nome
let nome = "Lua";

// Guarda a idade
let idade = 25;

// Guarda o número de vendas
let numeroDeVendas = 50;

// Guarda o saldo disponível
let saldoDisponivel = 1000;


// Agora usando prompt para capturar informações do usuário
let nomeUsuario = prompt("Digite seu nome:");
let idadeUsuario = parseInt(prompt("Digite sua idade:")); // converte para número

// Validação dos campos
if (!nomeUsuario || isNaN(idadeUsuario)) {
    let mensagemDeErro = "Erro! Preencha todos os campos";
    alert(mensagemDeErro);
} else {
    // Validação da idade
    if (idadeUsuario >= 18) {
        alert("Pode tirar a habilitação!");
    } else {
        alert("Não pode tirar a habilitação!");
    }
}


