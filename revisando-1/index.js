console.log('hello world')

// const nome = prompt('Qual o seu nome?')

/* const cor = prompt('Qual sua cor favorita?')

console.log(`O meu nome é ${nome} e a minha cor favorita é ${cor}`)
console.log('O meu nome é ' + nome + ' e a minha cor favorita é ' + cor)
console.log(nome.length) */
/* console.log(nome.toLowerCase())
console.log(nome.trim()) */

// console.log(nome.includes('c'))

// const cachorros = ['viralata', 'chowchow', 'pinscher']

// const numeroCachorro = Number(prompt('insira um numero'))

// console.log(cachorros[numeroCachorro])

/* cachorros.push('brenda')
cachorros.pop()

console.log(cachorros)

console.log(cachorros.includes('brenda')) */

// cachorros.splice(2,1)

// console.log(cachorros)

// let array
// console.log('a. ', array)

// array = null
// console.log('b. ', array)

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)

// let i = 0
// console.log('d. ', array[i])

// array[i+1] = 19
// console.log('e. ', array)

// const valor = array[i+6]
// console.log('f. ', valor)

// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

// const nome = prompt('Qual seu nome?')
// const email = prompt ('Qual seu email?')

// console.log(`O e-mail ${nome} foi cadastrado com sucesso. Seja bem-vinda(o), ${email}`)

// const comidasFavoritas = ["carne", "feijao", "massa", "sushi", "arroz"]

// console.log(comidasFavoritas)

// console.log('Essa são as minhas comidas favoritas')
// console.log(comidasFavoritas[0])
// console.log(comidasFavoritas[1])

// const novaComida = prompt("Qual a sua comida favorita?")

// comidasFavoritas[1] = novaComida

// console.log(comidasFavoritas)

// const listaDeTarefas = []

// const tarefa1 = prompt("Qual a primeira tarefa")

// const tarefa2 = prompt("Qual a segunda tarefa")

// const tarefa3 = prompt("Qual a terceira tarefa")


// listaDeTarefas[0] = tarefa1

// listaDeTarefas[1] = tarefa2 

// listaDeTarefas[2] = tarefa3

// console.log(listaDeTarefas)

// const removerTarefa = Number(prompt('Digite um índice'))

// listaDeTarefas.splice(removerTarefa, 1)

// console.log(listaDeTarefas)

// const frase = 'essa é uma frase'
// const novaFrase = frase.split(" ")
// console.log(novaFrase)

// const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

// const arrayFind = frutas.indexOf("Abacaxi")

// console.log(arrayFind)

// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// minhaFuncao(2)
// minhaFuncao(10)

// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

// function clarice (){
//     return ('meu nome é clarice')
// }

// console.log(clarice())


// function parametros (nome, idade, cidade, profissao ){
//     return (`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`)
// }

// console.log(parametros('clarice', 34, 'porto alegre', 'jornalista'))

// function soma (num1,num2){
//     return num1 + num2
// }

// function soma2 (num1,num2){
//     return num1 >= num2
// }

// function soma3 (num1,num2){
//     return num1 % 2 === 0 
// }

// console.log(soma(1,2))

// console.log(soma2())

// console.log(soma3())

// function recebeString(string){
//     return `${string.length}, ${string.toUpperCase()}`
// }

// console.log(recebeString('olá, clarice'))

// function checaRenovacaoRG() {
//     // implemente sua lógica aqui
//     const anoAtual = Number(prompt("Digite o ano atual"))
//     const anoNascimento = Number(prompt("Digite o ano de nascimento"))
//     const anoEmissao = Number(prompt("Digite o ano de emissão do documento"))

//     const idade = anoAtual - anoNascimento
//     const tempoCarteira = anoAtual - anoEmissao

//     const cond1 = idade <= 20 && tempoCarteira >= 5
//     const cond2 = idade > 20 && idade <= 50 && tempoCarteira >= 10
//     const cond3 = idade > 50 && tempoCarteira >= 15

//     console.log(cond1 || cond2 || cond3)
//  }

// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])

// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "idade"))

// const pessoa1 = {
//     nome: 'Clarice',
//     apelidos: ['Cla', 'Clari', 'Crocs']
// }


// function escreveNome(pessoa) {
//     console.log(
//         `"Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]},  ${pessoa.apelidos[1]} ou  ${pessoa.apelidos[2]}"`
//         )
// }

// escreveNome(pessoa1)

// const novaPessoa = {
//     ...pessoa1,
//     apelidos: ['joana', 'maria', 'flor']
// }

// escreveNome(novaPessoa)

// const pessoa = {
//     nome: "Bruno",
//     idade: 23,
//     profissao: "Instrutor"
// }

// const pessoa1 = {
//     nome: "Flor",
//     idade: 23,
//     profissao: "Instrutor"
// }

// function recebePessoa(objeto){
// return ([objeto.nome, objeto.nome.length, objeto.idade, objeto.profissao, objeto.profissao.length])
// }

// console.log(recebePessoa(pessoa))
// console.log(recebePessoa(pessoa1))

// const carrinho = []

// const fruta = {
//     nome: "banana",
//     disponibilidade: true
// }

// const fruta1 = {
//     nome: "maçã",
//     disponibilidade: true
// }

// const fruta2 = {
//     nome: "uva",
//     disponibilidade: true
// }

// function colocaFrutaCarrinho(objeto){
//     carrinho.push(objeto)
//     return carrinho
// }

// colocaFrutaCarrinho(fruta)
// colocaFrutaCarrinho(fruta1)
// colocaFrutaCarrinho(fruta2)

// function inverteFruta(fruta){
//     fruta.disponibilidade = !fruta.disponibilidade
//     console.log(fruta)
// }

// inverteFruta(fruta1)
// inverteFruta(fruta2)


// console.log(carrinho)

// function imprimeUsuario(){
//     const nome= prompt('Qual seu nome')
//     const idade= Number(prompt('Qual sua idade'))
//     const profissao = prompt('Qual sua profissao')

//     const objeto={
//         nome: nome,
//         idade: idade,
//         profissao: profissao
//     }

//     console.log(objeto, typeof objeto)
// }

// imprimeUsuario()

// const filme1 = {
//     filme: 'et',
//     ano: 1989
// }

// const filme2 ={
//     filme: 'joao e maria',
//     ano: 1985
// }

// function anoLancamento(filme1, filme2){
//     console.log('O primeiro filme foi lançado antes do segundo?', filme1.ano < filme2.ano)
// }

// anoLancamento(filme1, filme2 )

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

// let indice = 0
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {

//     if (numero > 18) {
//         console.log(numero, "indice", indice)
//     }

//     indice++
// }

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }


// const bichinhos = Number(prompt('quantos bichinhos voce tem?'))

// if (bichinhos === 0) {console.log("Que pena! Você pode adotar um pet!") }

// if (bichinhos > 0) {
//   let listdeBichos = []
//   for (let i = 0; i < bichinhos; i++) {
//     listdeBichos.push(prompt("Digite o nome deles "))
//   }
//   console.log(listdeBichos)
// }

// const arrayOriginal = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of arrayOriginal) {
//   console.log(numero)
// }

// for (let numero of arrayOriginal) {
//   console.log(numero / 10)
// }



// function criaArray(arrayOriginal) {
//   let novoArray = []

//   for (let numero of arrayOriginal) {
//     if (numero % 2 === 0) {
//       novoArray.push(numero)
//     }
//   }
//   console.log(novoArray)
// }

// criaArray(arrayOriginal)

// function arrayIndice(arrayOriginal) {
//   let indice = 0
//   for (let numero of arrayOriginal) {
//     console.log(numero, indice++)
//   }
// }

// arrayIndice(arrayOriginal)

// function maiorMenor (arrayOriginal){
//   let maiorNumero = 0
//   let menorNumero = Infinity
//   for(let i = 0; i < arrayOriginal.length; i++){
//     if (arrayOriginal[i] < menorNumero){
//       menorNumero = arrayOriginal[i]
//     } else if (arrayOriginal[i] > maiorNumero){
//       maiorNumero = arrayOriginal[i]
//     }
//   }
//  console.log("O maior numero é:", maiorNumero)
// console.log("O menor numero é:", menorNumero)}

// maiorMenor(arrayOriginal)

// console.log('Vamos Jogar')

// const primeiraJogada = Math.floor(Math.random() * 10) + 1

// console.log(primeiraJogada)
// let tentativas = 0
// let acertou = false

//   while (!acertou) {
//     let segundaJogada = Number(prompt('Adivinhe o número'))
//     tentativas++

//     console.log(`o número jogado foi ${segundaJogada}`)

//     if (primeiraJogada === segundaJogada) {
//       console.log('Parabéns')
//       acertou = true
//     } else if (primeiraJogada > segundaJogada) {
//       console.log('O número certo é maior')
//     } else {
//         console.log('O número certo é menor')
//     }
//   }


// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// const numero = Number(prompt("Digite o primeiro número."))
// let mensagem = ''

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// const idade = Number(prompt('Qual a sua idade'))

// if (idade >= 18){
//   console.log('Você pode dirigir')
// } else{
//   console.log('Você não pode dirigir')
// }

// let turnoEstudo = prompt('Qual turno vc estuda?')

// if (turnoEstudo.toUpperCase() === 'M') {
//   console.log("Bom Dia!")
// } if (turnoEstudo.toUpperCase() === 'V') {
//   console.log("Boa tarde!")
// } if (turnoEstudo.toUpperCase() === 'N') {
//   console.log('Boa Noite')
// }

// let turnoEstudo = prompt('Qual turno vc estuda?').toUpperCase()
// let saudacao = ''


// switch (turnoEstudo) {
//   case "M":
//     saudacao = 'Bom dia'
//     break;
//   case "V":
//     saudacao = 'Boa tarde'
//     break;
//   case "N":
//     saudacao = 'Boa noite'
//     break;
//   default:
//     saudacao = 'Olá'
//     break;
// }


// console.log(saudacao)

// let generoFilme = prompt('Escolha um genero de filme').toUpperCase()

// let valorIngresso = Number(prompt('Qual o valor do ingresso'))

// if (generoFilme === 'FANTASIA' && valorIngresso < 15){
//   const lanche = prompt('Escolha um lanche')
//   console.log('Bom filme')
//   console.log(lanche)
// } else{
//   console.log ('Escolha outro filme')
// }

// const nome = prompt('Qual seu nome')
// const tipoJogo = prompt('IN ou DO').toUpperCase()
// const etapa = prompt('SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final')
// const categoria = Number(prompt('pode ser as opções 1, 2, 3 ou 4'))
// let quantidadeIngresso = Number(prompt('Quantidade de ingressos'))

// let valorIngresso

// switch (etapa) {
//   case 'SF':
//     switch (categoria) {
//       case 1:
//         valorIngresso = 1320
//         break;
//       case 2:
//         valorIngresso = 880
//         break;
//       case 3:
//         valorIngresso = 550
//         break;
//       case 4:
//         valorIngresso = 200
//         break;
//       default:
//         valorIngresso = 0
//         break;
//     }
//     break
//   case 'DT':
//     switch (categoria) {
//       case 1:
//         valorIngresso = 660
//         break;
//       case 2:
//         valorIngresso = 440
//         break;
//       case 3:
//         valorIngresso = 330
//         break;
//       case 4:
//         valorIngresso = 170
//         break;
//       default:
//         console.log('Coloque um número válido')
//         break;
//     }
//     break

// }


// if (tipoJogo === "IN"){
//   valorIngresso = valorIngresso * 4.1
// }

// console.log(nome)
// console.log(tipoJogo)
// console.log(etapa)
// console.log(categoria)
// console.log(quantidadeIngresso)
// console.log(quantidadeIngresso * valorIngresso)

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]

//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })

//   const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]

//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })

//   console.log(novoArrayB)

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]

//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })

//   console.log(novoArrayC)

// const pets = [
//     { nome: "Lupin", raca: "Salsicha" },
//     { nome: "Polly", raca: "Lhasa Apso" },
//     { nome: "Madame", raca: "Poodle" },
//     { nome: "Quentinho", raca: "Salsicha" },
//     { nome: "Fluffy", raca: "Poodle" },
//     { nome: "Caramelo", raca: "Vira-lata" },
// ]

// const nomes = pets.map((item) => {
//     return item.nome
// })

// console.log(nomes)

// const cachorroSalsicha = pets.filter((item) => {
//     return item.raca === "Salsicha"
// })

// console.log(cachorroSalsicha)

// const mensagem = pets.filter((item) =>{
//     return item.raca ==="Poodle"
// }).map((item) =>{
//     return (`Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`)
// })

// console.log(mensagem)

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 const nomeProdutos = produtos.map((item)=>{
    return (item.nome)
 })

console.log(nomeProdutos)

const objeto = produtos.map((item)=>{
    const nome = item.nome
    const preco = (item.preco * 0.95).toFixed(2)
    return ({nome, preco})
})

console.log(objeto)

const produtosFiltrado = produtos.filter((item)=>{
return item.categoria === "Bebidas"
})

console.log(produtosFiltrado)

const ype = produtos.filter((item)=>{
    return item.nome.includes('Ypê')
})

console.log(ype)

const ype2 = produtos.filter((item)=>{
    return item.nome.includes('Ypê')
}).map((item)=>{
    return (`Compre ${item.nome} por ${item.preco}`)
})

console.log(ype2)

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

 const pokemonsAlfabetica = pokemons.map((item)=>{
    return item.nome
 })

console.log(pokemonsAlfabetica.sort())

const pokemonRepeticao = pokemons.map((item)=>{
    return item.tipo
})

const semRepeticao = [...new Set(pokemonRepeticao)]

console.log(semRepeticao)