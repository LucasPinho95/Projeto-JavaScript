
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
     window.open("https://web.digitalinnovation.one");  //Abre em nova guia
     //window.location.href = "https://web.digitalinnovation.one"; //Abre no mesmo local
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}


function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}


function load(){
      alert("Página carregada");
}


function funcaoChange(elemento){
    console.log(elemento.value)
}



/*
function soma(n1, n2){
    return n1 + n2;
}
*/

/*
function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));
*/

//alert(soma(5, 10));


/*
var d = new Date();
alert(d.getDay()+1);
alert(d.getHours()+1);
alert(d.getMinutes()+1);
alert(d.getMonth()+1);
*/

/*
var d = new Date();
alert(d);
*/

/*
var count;
for(count=0; count <= 5; count++){
     alert(count);
};
*/


/*
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
}
*/

/*
var idade = prompt("Qual sua idade?");
if (idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade")
};
*/


/*
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/

/*
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["maçã","pêra","laranja"];
//lista.push("uva");
//lsita.pop();

//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" / "));

//var nome = "Lucas Pinho";
//var idade = 29;
//var idade2 = 10;
//var frase = "Mansel é o melhor piloto do mundo"
//alert(nome + " tem " + idade + " anos.");
//alert(idade + idade2);
//console.log(nome);
//console.log(idade*idade2);
//console.log(frase.toLowerCase());
//alert(frase.replace("Mansel","Senna"));