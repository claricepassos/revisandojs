// EXERCÍCIO 01
function inverteArray(array) {
  let arrayInvertido = []
  for (let i = array.length - 1; i >= 0; i--) {
    arrayInvertido.push(array[i])
  }
  return arrayInvertido
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  let numerosPares = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      numerosPares.push(array[i] * array[i])
    }
  }
  return numerosPares
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  let novoArray = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      novoArray.push(array[i])
    }
  }
  return novoArray
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let maiorNumero = array[0]
  for (let i = 0; i < array.length; i++) {
    if (maiorNumero < array[i]) {
      maiorNumero = array[i]
    }
  }
  return maiorNumero
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  return array.length

}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2
  const booleano4 = !booleano3
  const um = booleano1 && booleano2 && !booleano4
  const dois = (booleano1 && booleano2) || !booleano3
  const tres = (booleano2 || booleano3) && (booleano4 || booleano1)
  const quatro = !(booleano2 && booleano3) || !(booleano1 && booleano3)
  const cinco = !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)
  return [um, dois, tres, quatro, cinco]
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  let numerosPares = []
  for (let number = 0; numerosPares.length < n; number++) {
    if (number % 2 === 0) {
      numerosPares.push(number)
    }
  }
  return numerosPares
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  if (a === b && a === c && b === c) {
    return 'Equilátero'
  } else if (a !== b && b !== c && b !== c) {
    return 'Escaleno'
  } else {
    return 'Isósceles'
  }
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  let maiorNumero
  let menorNumero

  if (num1 > num2) {
    maiorNumero = num1
    menorNumero = num2
  } else {
    maiorNumero = num2
    menorNumero = num1
  }

  let maiorDivisivelPorMenor = maiorNumero % menorNumero === 0
  let diferenca = maiorNumero - menorNumero

  return ({ maiorNumero, maiorDivisivelPorMenor, diferenca })
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  let menor = Infinity
  let maior = -Infinity
  let segundoMaior = -Infinity
  let segundoMenor = Infinity
  let novoArray = []

  for (let i of array) {
    if (i < menor) {
      menor = i
    }
    if (i > maior) {
      maior = i
    }
  }

  for (let i of array) {
    if (i < segundoMenor && i !== menor) {
      segundoMenor = i
    }

    if (i > segundoMaior && i !== maior) {
      segundoMaior = i
    }
  }

  novoArray.push(segundoMaior)
  novoArray.push(segundoMenor)

  return novoArray

}

// EXERCÍCIO 11
function ordenaArray(array) {
  const arrayOrdernado = array.sort((a, b) => a - b)
  return arrayOrdernado
}

// EXERCÍCIO 12
function filmeFavorito() {
  const nome = "O Diabo Veste Prada"
  const ano = 2006
  const diretor = "David Frankel"
  const atores = ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
  return { nome, ano, diretor, atores }
}

// EXERCÍCIO 13
function imprimeChamada() {
  const nome = "O Diabo Veste Prada"
  const ano = 2006
  const diretor = "David Frankel"
  const atores = ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
  return (`Venha assistir ao filme ${nome}, de ${ano}, dirigido por ${diretor} e estrelado por ${atores[0]}, ${atores[1]}, ${atores[2]}, ${atores[3]}.`)
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  const retangulo = {
    largura: lado1,
    altura: lado2,
    perimetro: 2 * (lado1 + lado2),
    area: lado1 * lado2
  }
  return retangulo
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
  pessoa.nome = 'ANÔNIMO'
  return pessoa

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {
  let maiores18 = []
  for (let pessoa of arrayDePessoas) {
    if (pessoa.idade >= 18) {
      maiores18.push(pessoa)
    }
  }
  return maiores18
}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {
  let menores18 = []
  for (let pessoa of arrayDePessoas) {
    if (pessoa.idade < 18) {
      menores18.push(pessoa)
    }
  }
  return menores18
}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {
  let array2 = []
  for (let number of array) {
    array2.push(number * 2)
  }
  return array2
}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {
  let array2 = []
  for (let number of array) {
    let array2s = (number * 2).toString()
    array2.push(array2s)
  }
  return array2
}

// EXERCÍCIO 17C
function verificaParidade(array) {
  const novoArray = array.map((n) => {
    if (n % 2 === 0) {
      return (`${n} é par`)
    } else {
      return (`${n} é ímpar`)
    }
  })
  return novoArray
}


// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {
  let array2 = []
  for (let pessoa of pessoas) {
    if (14 < pessoa.idade && pessoa.idade < 60 && (pessoa.altura >= 1.50)) {
      array2.push(pessoa)
    }
  }
  return array2
}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {
  let array2 = []
  for (let pessoa of pessoas) {
    if (14 >= pessoa.idade || pessoa.idade > 60 || (pessoa.altura < 1.50)) {
      array2.push(pessoa)
    }
  }
  return array2
}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {
  consultasNome.sort(function (a, b) {
    return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0;
  });
  return consultasNome
}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {
  const arreyMapeado = consultasData.map((n) => {
      let data = new Date(n.dataDaConsulta)
      ano = data.getFullYear()
      mes = (data.getMonth() + 1).toString().padStart(2, '0'), //+1 pois no getMonth Janeiro começa com zero.
      dia = data.getDate().toString().padStart(2, '0')

      const pessoa = {'nome': n.nome, 'dataDaConsulta': `${ano}/${dia}/${mes}`}
    return pessoa
  })
  
  const arreySortido = arreyMapeado.sort(function (a, b) {
    return new Date(a.dataDaConsulta) - new Date(b.dataDaConsulta);
  })

  const arreyRemapeado = arreySortido.map((n) => {
    let data = new Date(n.dataDaConsulta)
    ano = data.getFullYear()
    mes = (data.getMonth() + 1).toString().padStart(2, '0'), //+1 pois no getMonth Janeiro começa com zero.
    dia = data.getDate().toString().padStart(2, '0')

    const pessoa = {'nome':n.nome, 'dataDaConsulta':`${dia}/${mes}/${ano}`}
    return pessoa
  })
  return arreyRemapeado
}



// EXERCÍCIO 20
function calculaSaldo(contas) {

}
