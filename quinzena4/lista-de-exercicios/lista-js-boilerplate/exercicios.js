//Exercício 1
function inverteArray(array) {
  // implemente sua lógica aqui
 return array.reverse()
}

//Exercício 2
function retornaNumerosParesElevadosADois (array) {
   //implemente sua lógica aqui
   let novoArray = []
   for(let i = 0; i < array.length; i++){
      if(array[i] % 2 === 0){
       novoArray.push(array[i]*array[i])
      }
      
   }
   return novoArray
  }
   
//Exercício 3

function retornaNumerosPares (array) {
   // implemente sua lógica aqui
   let novoArray = []
   for(let i=0; i<array.length; i++){
      if(array[i]%2===0)
      novoArray.push(array[i])
   }
   return novoArray
}

//Exercício 4

function retornaMaiorNumero(array) {
   // implemente sua lógica aqui
   let maiorNumero = 0
   for(let i = 0; i < array.length; i++)
   if(array[i]>maiorNumero){
      maiorNumero = array[i]
   }
   return maiorNumero
}

//Exercício 5

function retornaQuantidadeElementos (array) {
   // implemente sua lógica aqui
   return array.length
}

//Exercício 6

function retornaExpressoesBooleanas() {
   // implemente sua lógica aqui
   return [false,false,true,true,true]
      

}

//Exercício 7

function retornaNNumerosPares(n) {
   const novoArray = [];
   for(let i = 0; novoArray.length < n; i++) {
    if(i % 2 === 0) {
      novoArray.push(i)
    }
   }
   return novoArray
  }


// Exercício 8

function checaTriangulo(a, b, c) {
  // implemente sua lógica aqui
  if(a != b && b != c){
   return 'Escaleno'
   }else if(a === b && b === c){
      return 'Equilátero'
   }else {
      return 'Isósceles'
   }
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
   // implemente sua lógica aqui
  let maiorNumero;
  let menorNumero;
  let maiorDivisivelporMenor;
 
   
  if(num1 > num2){
     maiorNumero = num1;
     menorNumero = num2;
  }else{ 
     maiorNumero = num2;
     menorNumero= num1;
   }
   maiorDivisivelporMenor = maiorNumero % menorNumero === 0;
   let diferenca = maiorNumero-menorNumero;

   return{
      maiorNumero : maiorNumero,
      maiorDivisivelporMenor : maiorDivisivelporMenor,
      diferenca : diferenca
     
   }  
     
}
// Exercício 10

function segundoMaiorEMenor(array) {
   // implemente sua lógica aqui
  let maior = 0
  let segundoMaior = 0
  let menor = Infinity
  let segundoMenor = Infinity
  let indexMaior = 0
  let indexMenor = 0
  let novoArray = []

  for( i of array){
     if(i < menor){
        menor = i
        indexMenor = array.indexOf(menor)

     } if(i > maior){
      maior = i
      indexMaior = array.indexOf(maior)

  }
    
}
array.splice(indexMaior, 1)
array.splice(indexMenor, 1)

for( i of array){
   if(i > segundoMaior){
      segundoMaior = i
   }if(i < segundoMenor){
      segundoMenor = i
   }

  
}

novoArray.push(segundoMaior)
novoArray.push(segundoMenor)
  
 return novoArray
  
}

//Exercício 11

function ordenaArray(array) {
   // implemente sua lógica aqui
      const len = array.length;
      for(let i = 0; i < len; i++) {
       for(let j = 0; j < len; j++) {
        if(array[j] > array[j + 1]) {
         let tmp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = tmp;
         }
        }
       }
     return array
     }
   

// Exercício 12

function filmeFavorito()  {
   // implemente sua lógica aqui
      let filme = {
      nome: 'O Diabo Veste Prada',
      ano: Number(2006) ,
      diretor:'David Frankel',
      atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci'] 
    }
    return filme
   }
  
// Exercício 13

function imprimeChamada() {
   // implemente sua lógica aqui
   let filme = {
      nome: 'O Diabo Veste Prada',
      ano: 2006,
      diretor:'David Frankel',
      atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci'] 
    }
      return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
      
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   // implemente sua lógica aqui
   let lados = {
      largura: lado1,
      altura: lado2,
      perimetro: 2 * (lado1 + lado2),
      area: lado1 * lado2
   }
   return lados 
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   // implemente sua lógica aqui
   
   return {
      ...pessoa,
      nome:'ANÔNIMO'
   }
}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 } 
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
  const novoArray = arrayDePessoas.filter((pessoa) =>{
     return pessoa.idade >= 18 
  })
  return novoArray
 }
 
// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
   const novoArray = arrayDePessoas.filter((pessoa) =>{
      return pessoa.idade < 18 
   })
   return novoArray
  }


// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   // implemente sua lógica aqui
   let novoArray = array.map((numero) => {
      return numero*2
   })
   return novoArray
  
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
  // implemente sua lógica aqui
  let novoArray = array.map((numero) => {
   return String(numero*2)
})
return novoArray
}

// Exercício 17, letra C

function verificaParidade(array) {
   // implemente sua lógica aqui
   let novoArray = array.map((numero) => {
      if(numero % 2 === 0){
         return `${numero} é par`
       } else{
         return `${numero} é ímpar`
      }
   })
   return novoArray
}


// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8},
  { nome: "João", idade: 20, altura: 1.3},
  { nome: "Pedro", idade: 15, altura: 1.9},
  { nome: "Luciano", idade: 22, altura: 1.8},
  { nome: "Artur", idade: 10, altura: 1.2},
  { nome: "Soter", idade: 70, altura: 1.9}
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   // implemente sua lógica aqui
   let pessoasPermitidas = []
   for(pessoa of pessoas){
      if(pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60){
         pessoasPermitidas.push(pessoa)
      }
      
   }
   return pessoasPermitidas
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   // implemente sua lógica aqui
   let pessoasNaoPermitidas = []
   for(pessoa of pessoas){
      if(pessoa.altura < 1.5 || pessoa.idade < 14 || pessoa.idade > 60){
         pessoasNaoPermitidas.push(pessoa)
      }
      
   }
   return pessoasNaoPermitidas
}


//Exercício 19

const consultasNome = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
 ]
 
 //Exercício 19, letra A
 
 function ordenaPorNome() {
  
  }
  
 
 
 // Exercício 19, letra B
 
 const consultasData = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
 ]
 
 function ordenaPorData() {
    
 
 }

//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
  // implemente sua lógica aqui
  contas.forEach((conta)=> {
      let total = 0
      conta.compras.forEach((value) => {
      total += value 
    })
    conta.saldoTotal -= total
  })
  return contas
  
}