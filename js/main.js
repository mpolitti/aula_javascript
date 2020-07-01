function funcaoChange(elemento) {
    alert(elemento.value);
}

function load() {
    console.log("Página carregada!");
}
function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
}

function mouseMove() {
    document.getElementById("trocartexto").innerHTML = "Obrigado por passar o mouse";
}

function redirecionar(){
    window.open("https://www.google.com");
    //window.location.href = "https://www.google.com";
}

function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por ter clicado</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por ter clicado!");
}

/*
var validar;
function validarIdade(idade){
    
    if (idade >= 18) {
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual a sua idade:");
//console.log(validarIdade(idade));

function soma( a, b){
    return a + b;
}

//alert(soma(1,2));

function setReplace(frase, nome, novonome){
    return frase.replace(nome,novonome);
}

//alert(setReplace("Vai Japão!","Japão","Brasil"));
*/
/*
var data = new Date();
alert(data);
alert(data.getMonth()+1);
*/
/*
var count;

for (count = 0; count <= 5; count++) {
    console.log(count);
}
*/

/*
var count = 0;
while (count <= 5) {
  console.log(count);
  count++;
}
*/

/*
var idade = prompt("Informe sua idade:");

if (idade >= 18) {
    alert("Maior de idade!");
} else {
    alert("Menor de idade!");
}
*

/*
//lista de dicionário
var frutas = [{nome: "maçã", cor:"vermelha"},{nome: "pêra", cor:"amarela"}];
console.log(frutas);
*/

/*
//dicionário
var fruta = {nome: "maçã", cor:"vermelha"};
console.log(fruta);
console.log(fruta.nome);
*/

/*
var lista = ["Maçã","Abacaxi","Uva"];
console.log(lista);

lista.push("Limão");
console.log(lista);

console.log(lista[2]);
lista.pop();

console.log(lista);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join("|"));
*/

/*
var nome = "Marco Politti";
var idade = 43;

//alert(nome + " tem " + idade + " anos.");

var idade2 = 10;

console.log(nome);
console.log(idade + idade2);

var frase = "Japão é o melhor time do mundo!";
console.log(frase);

frase = frase.replace("Japão","Brasil");
console.log(frase);

frase = frase.toUpperCase();
console.log(frase);
*/