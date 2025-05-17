// add mais funcionalidades onde eu insirir o decorator

function log() {
    // o kay e o proprio metodo
    return function (target, key, descriptor) {
        const original = descriptor.value

        descriptor.value = function (...args: any[]) {
            console.log('--------------------')

            const result = original.apply(this, args)

            console.log('-------------')

            return result
        }
    }
}

class Planeta {
    name: string

    constructor(name: string) {
        this.name = name
    }

    // @Decorator() esta causando erro talvez pq nn ativei o Decoratos no ariquivo de configuracao
    // @log()
    calcular(value: number) {

        return value * 2
    }

    // @log()
    invertName() {
        return this.name.split('').reverse().join('')
    }
}
const planeta = new Planeta('terra')

const result = planeta.calcular(5)

