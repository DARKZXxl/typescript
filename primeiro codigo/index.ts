function mandarNave(nome:string, capitao: string) {
    const espasonave = {
        nome,
        capitao,
        speed: 20,
        inMission: true,
        crew: []
    }

    alert(`a nave ${espasonave.nome}, que e comandada pelo capitao ${espasonave.capitao} partiu a ${espasonave.speed} km/h para lua`)

    return espasonave
}

function almentarVelocidade(velocidade: number, nave:{nome:string, speed:number}) {
    if(nave.speed > velocidade) {
        alert(`reduzindo a velocidade da nave ${nave.speed} para ${nave.speed}...`)
    } else if(nave.speed < velocidade) {
        alert(`aumentando a velocidade da nave ${nave.speed} para ${nave.speed}...`)
    } else {
        alert('a nave continua na mesma velocidade')
    }
}

const nave = prompt('qual o nome da nave? ') || 'Nave Desconhecida';
const capitao = prompt('qual o nome do capitao? ') || 'Capitão Desconhecido';


const valor = mandarNave(nave, capitao)
const speed = Number(prompt('qual a velocidade da nave'))

almentarVelocidade(speed, valor)