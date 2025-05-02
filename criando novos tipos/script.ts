const planetas: any[] = []
let opcoes: string = ''

function planet(nome: string, coordenadas: [number,number,number,number], situacao: 'habitado' | 'habitavel'| 'inabitavel', satelites?: string[]) {
    const obj = {
        nome,
        coordenadas,
        situacao,
        satelites,
    }
    planetas.push(obj)
    return obj
}

function acharPlanetas() {
    const planetName = prompt('digite o nome do planeta')
    return planetas.find(res => res.nome === planetName)
}

function atualizarSituacao() {
    const planeta = acharPlanetas()
    const planetSituation = prompt('digite a situacao do planeta: habitado/habitavel/inabitavel')
    planeta.situacao = planetSituation
}

function addSatelite() {
    const planeta = acharPlanetas();
    const newSatelit = prompt('digite o nome do satelite');
    if (planeta) {
        if (!planeta.satelites) {
            planeta.satelites = [];
        }
        planeta.satelites.push(newSatelit);
    }
}

function removeSatelit() {
    const planeta = acharPlanetas()
    const sateliteName = prompt('digite o nome do satelite para remover')
    const index = planeta.satelites.findIndex((res:string) => res === sateliteName)
    planeta.satelites.splice(index, 1)
}

function mostrarPlanetas() {
    console.log(planetas)
}

do {
    opcoes = prompt('escolha sua opcao: \n 1. criar planeta \n 2. mudar situacao de um planeta \n 3. adicioar um satelite a um planeta \n 4. remover uma satelite de um planeta \n 5. mostar todos os planetas \n 6. sair') || ''

    switch(opcoes) {
        case '1':
            const name = prompt('digite o nome do planeta') || ''
            const coordenadasInput = prompt('digite as cordenadas separadas por espaço (ex: 1 2 3 4)');
            const coordenadas = coordenadasInput ? coordenadasInput.split(' ').map(item => parseInt(item)) : [];

            if (coordenadas.length !== 4 || coordenadas.some(isNaN)) {
                alert('As coordenadas devem ser exatamente quatro números.');
                break;
            }
            const planetSituation = prompt('digite a situacao do planeta: habitado/habitavel/inabitavel') as 'habitado' | 'habitavel' | 'inabitavel';
            
            planet(name, coordenadas as [number, number, number, number], planetSituation);

            break
        case '2':
            atualizarSituacao()
            break
        case '3':
            addSatelite()
            break
        case '4':
            removeSatelit()
            break
        case '5':
            mostrarPlanetas()
            break
        case '6':
            alert('saindo...')
            break
        default:
            alert('as opcoes nao sao validas')
    }
} while (opcoes != '6');