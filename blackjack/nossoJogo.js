

console.log('"Boas vindas ao jogo de Blackjack!"')

let jogo = confirm("Quer jogar?")

if (jogo) {
   console.log('Iniciou o jogo')
   let carta1Usuario = comprarCarta()
   let carta2Usuario = comprarCarta()
   let carta1Pc = comprarCarta()
   let carta2Pc = comprarCarta()


   let pontuacaoUsuario = carta1Usuario.valor + carta2Usuario.valor

   let pontuacaoPc = carta1Pc.valor + carta2Pc.valor

   console.log(`Usuário - cartas: ${carta1Usuario.texto} ${carta2Usuario.texto}  - pontuação ${pontuacaoUsuario} `)

   console.log(`Computador - cartas: ${carta1Pc.texto} ${carta2Pc.texto}  - pontuação ${pontuacaoPc} `)

   if (carta1Usuario.texto.naipe && carta2Usuario.texto.naipe || carta1Pc.texto.naipe && carta2Pc.texto.naipe === "♦️"){
      carta1Usuario, carta2Usuario
      carta1Pc, carta2Pc
   }

   if (pontuacaoUsuario > pontuacaoPc) {
      console.log('Você ganhou!')

   } else if (pontuacaoUsuario < pontuacaoPc) {
      console.log('Você perdeu:/')
   } else if (pontuacaoUsuario === pontuacaoPc) {
      console.log('O jogo empatou')
   }

} else {
   console.log('O jogo terminou')
}



// const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros

// console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
// console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
