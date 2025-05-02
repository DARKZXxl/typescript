// tipo literal e quando temos um valor literal ou seja um valor especifico para aquele tipo 
// isso e um valor literal, quando passa o mouse por cima nao mostra o valor atribuida a variavel 
// se eu tentar atrabuir um outro valor a essa variavel, ele causa um erro
// por padarao a varialvel const ja e um tipo literal
let leteral: 'hello, word'
let pi: 3.14159

// essa barra e como so fosse um "ou / ||"
// isso faz entender como se eu tivesse o valor da esquerda ou da direita
let opcoes: 'yes' | 'no' | 'maybe'

// outro jeito de fazer, sem os tipo literais e
let age: string | number

opcoes = 'maybe'
age = 100

// isso cria seu proprio tipo
type plane = 'marte' | 'mercurio' | 'terra' | 'venus' | 'jupiter'

let planeta: plane = 'terra'

// isso faz que eu nao precisse escrever todos os planetas
let homeplanet: plane

function checkPlanet(planeta: plane) {
    if(planeta === 'terra') {
        console.log('estamos na terra')
    }
}

type callback = (name:string) => void

function processName(callbackfn: callback) {
    let userName = 'gabriel'
    callbackfn(userName)
}

// isso faz um tipo herdar de outro
// Define the Selestial type
type Selestial = {
    name: string;
    orbit: string;
};

type Asteroid = Selestial & {
    size: number;
};

let asteroid: Asteroid

