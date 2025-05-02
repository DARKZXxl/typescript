const naves: Spaceship[] = []
let opcao: string = ''

class Spaceship {
    name: string;
    pilot: string;
    crewLimit: number;
    crew:string[]
    inMission:boolean
    constructor(name:string, pilot:string, crewLimit:number, crew:string[], inMission:boolean = false) {
        this.name = name
        this.pilot = pilot
        this.crewLimit = crewLimit
        this.crew = crew
        this.inMission = inMission
    }
}

function criar(name:string, pilot:string, crewLimit:number, crew:string[] = []) {
    naves.push(new Spaceship(name, pilot, crewLimit, crew))
    return Spaceship
}

function adicionarTripulante(nave:{crewLimit:number, crew:string[]}) {
    if(nave.crew.length >= nave.crewLimit) {
        alert('a nave nao suporta mais tripulates')
    } else {
        const nome = prompt('digite o nome do tripulante') || 'tripulante desconhecido'
        nave.crew.push(nome)
    }
}

function eviarNave(nave:{inMission:boolean, crew:string[], crewLimit:number}) {
    const calcular = Math.floor(nave.crewLimit/3)
    console.log(calcular)
    if(nave.inMission === true) {
        alert('sua nave ja esta em uma missao')
    } else if(nave.crew.length < calcular){
        alert('a sua nave precisa de mais tripulantes')
    } else {
        nave.inMission = true
        alert('sua nave saiu para missao')
    }
}

function listarNaves() {
    console.log(naves)
}

function pegandoNave(naveName:string) {
    const naveRetornada = naves.findIndex(res => res.name === naveName)
    return naves[naveRetornada]
}

do {
    opcao = prompt('escolha uma opcao: \n 1. criar uma nave \n 2. adicionar um tripulante \n 3. enviar a nave \n 4. listar todas naves \n 5. sair ') || ''
    switch (opcao) {
        case '1':
            const nome: string = prompt('qual o nome da nave? ') || ''
            const piloto: string = prompt('qual o nome do piloto') || ''
            const tamanho: number = Number(prompt('qual o tamanho da tripulacao'))
            criar(nome, piloto, tamanho)
            break
        case '2':
            const naveName:string = prompt('digite o nome da nave') || ''
            const spaceship = pegandoNave(naveName)
            adicionarTripulante(spaceship)
            break
        case '3':
            const nomeDaNave:string = prompt('digite o nome da nave para eviar em missao') || ''
            const naveASeEnviada = pegandoNave(nomeDaNave)
            eviarNave(naveASeEnviada)
            break
        case '4':
            listarNaves()
            break
        case '5':
            alert('saindo...')
            break
        default:
            alert('opcoes invalidas')
    }
} while (opcao !== '5');

