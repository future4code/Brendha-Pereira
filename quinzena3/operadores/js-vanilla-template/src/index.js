/* 1) console.log ("a. " false)
    console.log ("b. " false)
    console.log ("c. " !resultado && true === False)
    console.log ("d. " boolean )

    2) console.log ('a. ' undefined)
    console.log ("b. " null)
    console.log("c. " 4 )
    console.log("d. " NaN)
    console.log("e. "  )
    console.log ("f. " )
 */

    /* Exercício de escrita de código */

     let idadeUsuario = Number (prompt("Quantos anos você tem?"))
     let idadeMelhorAmiga = Number (prompt("Quantos anos seu(a) melhor amigo(a) tem?"))
     console.log("eu tenho " + idadeUsuario + " anos" + " e minha melhor amiga tem " + idadeMelhorAmiga + " anos." )

     let diferencaAmigos = false
     document.write("Sua idade é maior do que a do seu melhor amigo?", diferencaAmigos)
     document.write("Qual a diferença de idade entre vocês?",idadeUsuario - idadeMelhorAmiga )

    /* Questão 2 */

     let numeroPar = Number(prompt("Insira um número par:"))
     document.write(numeroPar%2)
    /*b. Todos os resultados são 0 */
    /*c. Todos os resultados são 1 */

    /*Questão 3 */

     let listaDeTarefas = [prompt]
     prompt("Cite aqui 3 tarefas do dia")
     document.write(listaDeTarefas)
    // nossa senhora não consigo 

     /* Questão 4 */

     let nomeUsuario = prompt("Qual o seu nome?")
     let email = prompt("Qual o seu e-mail?")
     document.write("O e-mail " + email + " foi cadastrado com sucesso. Seja bem-vinda(o), " + nomeUsuario +"!")
