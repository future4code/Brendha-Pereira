/* EXERCÍCIO 1 
 
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

Para números pares ele imprime "passou no teste"
e para números ímpares ele imprime "não passsou no teste".
*/

 
/* EXERCÍCIO 2

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

A) O código serve para dizer ao usuário o valor de cada fruta
B) O preço da fruta Maça é R$2.25
*/

/* EXERCÍCIO 3

A) A primeira linha pede para que o usuário digite um número 
B) O console vai imprimir que o número passou no teste, e se o número
fosse -10 não imprimiria nada
C) O console de "mensagem" não imprimiria por não estar dentro das {}
do If 
*/


// EXERCÍCIO 4

// let idadeUsuario = Number(prompt("Quantos anos você tem?"))

// if (idadeUsuario >= 18) {
//     console.log("Você pode dirigir")
// }else {
//     console.log("Você não pode dirigir")
// }


/*Exercício 5 */

// let turnoAluno = prompt("Qual o seu turno de estudos? (M (para Matutino), V (para Vespertino) ou N (para Noturno))")

// if (turnoAluno === "M"){
//     console.log("Bom dia!")
// }else if (turnoAluno === "V"){
//   console.log("Boa Tarde!")

// }else{
//     console.log("Boa noite!")
// }

/* EXERCÍCIO 6 */


// let turnoAluno = prompt("Qual o seu turno de estudos? (M (para Matutino), V (para Vespertino) ou N (para Noturno))")
// let saudacoes 

// switch (turnoAluno){
//     case "M":
//     saudacoes = "Bom dia!"
//      break;
//     case "V":
//     saudacoes = "Boa tarde!"
//     break;
//     default:
//     saudacoes = "Boa noite!"
//      break;
//  }
//  console.log(saudacoes)

/* EXERCÍCIO 7 */

// let genero = prompt("Qual gênero gostaria de assistir?")
// let preco = Number(prompt("Quanto é o preço do ingresso?"))

// if (genero === "fantasia"){
//     console.log("bom filme!")
// }else if (preco < 15){
//     console.log("Bom filme!")
// }else{
//     console.log("Escolha outro filme")
// }

/* DESAFIO 1 */

// let genero = prompt("Qual gênero gostaria de assistir?")
// let preco = Number(prompt("Quanto é o preço do ingresso?"))
// let snak = prompt("Qual snak você gostaria de comer?")

// if (genero === "fantasia"){
//     console.log("bom filme!")
// }else if (preco < 15){
//     console.log("Bom filme!")
//     console.log("... e com " + snak)
// }else{
//     console.log("Escolha outro filme")
// }

/*DESAFIO 2 */

// - Nome completo;
// - Tipo de jogo: IN indica internacional; e DO indica doméstico;
// - Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
// - Categoria: pode ser as opções 1, 2, 3 ou 4;
// - Quantidade de ingressos

let nomeUsuario = prompt("Qual o seu nome?")
let tipoJogoEscolhido = prompt("Qual o tipo de jogo? (IN indica internacional; e DO indica doméstico;)")
let etapaJogoEscolhido = prompt("Qual a etapa do jogo? (SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final)")
let categoriaEscolhida = Number(prompt("Qual a categoria? (opção 1, 2, 3 e 4)")) 
let quantidadeIngressosUsuario = Number(prompt("Quantos ingressos?"))


