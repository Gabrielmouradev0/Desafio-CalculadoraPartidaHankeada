let heroi = "Goku";
let vitorias = 20;
let derrotas = 8;
let nivelHeroi;
let saldoVitorias = 0;

//Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
//depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

//Se vitórias for menor do que 10 = Ferro
//Se vitórias for entre 11 e 20 = Bronze
//Se vitórias for entre 21 e 50 = Prata
//Se vitórias for entre 51 e 80 = Ouro
//Se vitórias for entre 81 e 90 = Diamante
//Se vitórias for entre 91 e 100= Lendário
//Se vitórias for maior ou igual a 101 = Imortal

//As 3 Variaveis Foram Criadas Agora devo usar Switch para validar as variaveis e tambem usar o brake para limitar
// a variavel niver heroi ficou sem atribuir valor pois sera atribuido dentro do Escopo do case 
// Usar uma função e definir detro do Escopo o que deseja 
// Usar tambem um return 
// Declarar variaveis vitorias e derrotas e subitrair os valores para assim ver no que enacixa segundo os valores determinados

function ResultSaldo(vit, der) {
    let saldoDeVitorias = vit - der
    return saldoDeVitorias
}

saldoVitorias = ResultSaldo(vitorias, derrotas)


switch (true) {
    case saldoVitorias <= 10 : nivelHeroi = "Ferro"; 
    break;

     case saldoVitorias < 21 : nivelHeroi = "Bronze";
    break;
   
    case saldoVitorias < 51 : nivelHeroi = "Prata";
    break;
    
    case saldoVitorias < 81 : nivelHeroi = "Ouro";
    break; 

    case saldoVitorias < 91 : nivelHeroi = "Diamante";
    break; 

    case saldoDeVitorias < 101 : nivelHeroi = "Lendário";
    break; 

    case saldoDeVitorias >= 101 : nivelHeroi = "Imortal";
    break; 

default : "Heroi nao Classificado Dentro Dos Padrões"

}

console.log ("O heroi " + heroi, "tem o saldo de " + saldoVitorias, "vitorias, e esta no nivel "+ nivelHeroi, "!" )
