// a interface e uma outra forma de criar os seus priprios tipos
// mas ela e ultilizada para objetos
// e possivel voce herdar interfaces como nas classes

interface Selestial {
    name: string,
    mass: number
}

// isso vai herdar name e mass da inferface Selestial
interface Star extends Selestial {
    age: number,
    planets: Planet[]
}

interface Planet extends Selestial {
    population: number,
    createSatelite: (name: string) => void
}

let sun: Star = {
    age: 0,
    mass: 0,
    name: '',
    planets: []
}



sun.name = 'sol'
sun.mass = 12157897
sun.age = 1595962
sun.planets = []

// isso faz que ter tudo que tem em planet
// com isso a classe e obrigada a ter os atributos de planet
class MillyWayPlanet implements Planet {
    name: string
    mass: number
    population: number
    idade: number

    constructor(name: string, mass: number, population: number, idade: number) {
        this.name = name
        this.mass = mass
        this.population = population
    }

    createSatelite(name: string) {
        
    }
}

// isso diferente do type que nao e posivel criar dois type com o mesmo
// isso so adiciona a chave idade na inteface "Star"

interface Planet {
    idade: number
}