document.write("<h1>Estamos executando o script.js</h1>");
document.write("Esse script esta sendo chamado no HEAD");
console.log("Primeiro");
console.log("Segundo");

// Comentário da linha 
// CTRL + ;

/* Atalho para comentário em varias linhas
ALT + SHIFT + A
*/

// Tipagem Fraca
var teste = 1;
console.log(typeof(teste));
document.write("<hr>O valor da variável teste é: </hr>" + teste);
teste = 'joao'
console.log(typeof(teste));
document.write("<hr>O valor da variável teste agora é: </hr>" + teste);
// Variavel global - criada sem necessidade de declaração de tipo
nome = 'joao'
console.log(nome.toUpperCase())

// Formas de decleração de variáveis
var v1 = 5.25;
let v2 = null;
const v3 = 'teste';

console.log("Tipo da variavel v1:" + typeof(v1));
console.log("Tipo da variavel v2:" + typeof(v2));
console.log("Tipo da variavel v3:" + typeof(v3));
console.log("Tipo do NaN:" + typeof NaN); //Tipo number
console.log("Tipo do null:" + typeof null); //Tipo number
console.log("Tipo da variavel +Infinity:" + typeof +Infinity);
const numero = "1";
// Operadores de comparação
console.log("Testa se o numero == 1:" + (numero == 1));
console.log("Testa se o numero === 1:" + (numero === 1));

// Adicionar uma lista no body do HTML
var lista = ['arroz', 'feijao', 'carne', 'macarrao'];
var listaUl = document.createElement('ul');

// Acessar elementos através do DOM
var body = document.getElementsByTagName('body');

console.log(listaUl);
console.log(body);

document.write("<hr> Vamos criar uma lista agora! </hr>");
body[0].appendChild(listaUl);

for (var i=0; i<lista.length; i++){
    var liFor = document.createElement('li');
    var textoLi = document.createTextNode(lista[i]);
    liFor.appendChild(textoLi);
    listaUl.appendChild(liFor);
}

document.write("<hr>A <b> Lista Acima </b> foi criada dinamicamente via JS </hr>");

