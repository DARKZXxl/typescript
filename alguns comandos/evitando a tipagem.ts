// tipos opicionais
// os parametros com tipagem sao obrigatorios ter a quantidade que voce colocou
// se voce colocar um ponto de interogacao meio que dis para o typescript que o paremetro e opicional
function spaceship(nave: {piloto: string, copiloto?: string}) {

}

spaceship({piloto: 'gabriel', copiloto: 'felipe'})

spaceship({piloto: 'gabriel'})

// o unknown fala que isso vai ter um tipo, mas esse tipo e desconhecido 
// o unknown permite que eu posso usar varios tipo em uma unica variavel
let input: unknown

input = 'gabriel'
input = 40
input = true

let text: string = ''

// isso no pode acontecer porque a variavel text e uma string e a variavel input nao e definida 
// text = input
// mas o inverso pode
input = text

// o any e como se eu estivesse usando o javascript normal nao tem tipagem
// e ele nao e muito recomendado usar
let nome: any

function verificacao(test) {
    if (test) {
        
    } else {
        // o never nao pode ser nenhum tipo primitivo
        // nada pode ser atribuido nele
        let check: never
    }
}