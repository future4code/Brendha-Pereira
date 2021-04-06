/* 1-) a = 10
       b = 10
       console.log (b) -----> será impresso o valor de B, que é 10.
   
       b = 5 
       console.log (a, b) ------> será impresso o valor de A e B, que é 10 e 5, respectivamente.

    2-) a = 10
        b = 20
        c = a
        b = c
        a = b

       console.log(a, b, c) -----> será impresso os valores de A, B e C, que 
                                   são 10, 20 e 10, respectivamente. O valor de 
                                   C chama a "variável" A que tem o valor 10.
   */



let nome =  prompt ("Qual o seu nome?")

let idade = prompt ("Quantos anos você tem?") 

// let nomeUsuario = typeof nome
// let idadeUsuario = typeof idade

console.log ("Olá " + nome ,"você tem " + idade + " anos")

/* D) Foi impresso undefined e undefined, porque não foi escrito 
nada que indicasse uma string ou um number. */

/*E) Agora foi impresso String e String, tanto para idade quanto 
pro nome inserido.*/


/*Questão 2*/

//  let endereco = prompt ("Qual seu endereço?")
//  let corFavorita = prompt ("Qual sua cor favorita?")
//  let serieFavorita = prompt ("Qual sua série favorita?")
//  let musicaFavorita = prompt ("Qual sua música favorita?")
//  let lugarFavorito = prompt ("Qual seu lugar favorito no mundo?")

//  console.log("Resposta: " + endereco,
//             "Resposta: " + corFavorita,
//             "Resposta: " + serieFavorita,
//            "Resposta: " + musicaFavorita,
//           "Resposta: " + lugarFavorito)

/* Questão 3 */

let comidaFavoritaUsuario = prompt ("Qual sua comida favorita?")

// let comidasFavoritas = [ "strogonoff", "lasanha", "couve-flor", "feijão", "aipim"]
// console.log("Essas são minhas comidas favpritas: " + comidasFavoritas + " e "+ comidaFavoritaUsuario)

/*DESAFIO LETRA C DO EXERCÍCIO 3 */ 

let comidasFavoritas = [ "strogonoff",  comidaFavoritaUsuario , "couve-flor", "feijão", "aipim"]
console.log("Essas são minhas comidas favoritas: " + comidasFavoritas )

/*Questão 4 */

/* 4. Faça um programa que contenha um array com 3 perguntas de Sim ou Não, armazenado em uma variável. 
Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:

    a) Crie uma nova variável, contendo um array com as respostas. Utilize o tipo booleano para cada resposta.

    b) Imprima na tela todas as perguntas seguidas por suas respectivas respostas. Por exemplo:

    ```
    "Você está usando uma roupa azul hoje?" true
    ``` */

    let booleanQuestions = ["Você está vestindo jeans agora?", "Você está bem?", "Hoje é seu aniversário?"]
    let booleanAnswers = [false, true, false]
    console.log(booleanQuestions[0] + booleanAnswers[0])
    console.log(booleanQuestions[1] + booleanAnswers[1])
    console.log(booleanQuestions[2] + booleanAnswers[2])

    

