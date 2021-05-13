/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

 console.log("Bem vindo(a) ao jogo de Blackjack")   
 
let nossoJogo = confirm("Quer iniciar uma rodada?")
 //se for true -----> executa o programa abaixo
 // se for false executa o último else 
if (nossoJogo) {


         let cartaUsuario = comprarCarta()
         let carta2Usuario = comprarCarta()
         let cartaComputador = comprarCarta()
         let carta2Computador = comprarCarta()

         // 5 - Nós preparamos um método que permite sortear uma carta. 
         // Ela vem com um texto que representa o que é escrito na carta; e 
         // um valor que mostra a pontuação da carta. 
         // 6 - O programa deve mostrar, no console, as cartas e pontuação de cada jogador no formato mostrado abaixo

         
      let pontosUsuario = cartaUsuario.valor + carta2Usuario.valor 
      let pontosComputador = cartaComputador.valor + carta2Computador.valor 

      // ```jsx
         // "Usuário - cartas: Q♣️ 10♣️  - pontuação 20" 
         // "Computador - cartas: Q♣️ 10♣️  - pontuação 20"
         // ```

         console.log(`Usuário - cartas: ${cartaUsuario.texto} ${carta2Usuario.texto} = ${pontosUsuario}`)
         console.log(`Computador - cartas: ${cartaComputador.texto} ${carta2Computador.texto} = ${pontosComputador}`)

         if(pontosUsuario>pontosComputador){
            console.log("Usuário venceu!")
         }else if (pontosUsuario<pontosComputador){
            console.log("Computador venceu!")

         }else if (pontosComputador===pontosUsuario){
            console.log("Empate!")
         }

        
} else {
    console.log("Fim de jogo")
 }
