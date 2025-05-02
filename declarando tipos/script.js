"use strict";
const naves = [];
let opcao = '';
class Spaceship {
    name;
    pilot;
    crewLimit;
    crew;
    inMission;
    constructor(name, pilot, crewLimit, crew, inMission = false) {
        this.name = name;
        this.pilot = pilot;
        this.crewLimit = crewLimit;
        this.crew = crew;
        this.inMission = inMission;
    }
}
function criar(name, pilot, crewLimit, crew = []) {
    naves.push(new Spaceship(name, pilot, crewLimit, crew));
    return Spaceship;
}
function adicionarTripulante(nave) {
    if (nave.crew.length >= nave.crewLimit) {
        alert('a nave nao suporta mais tripulates');
    }
    else {
        const nome = prompt('digite o nome do tripulante') || 'tripulante desconhecido';
        nave.crew.push(nome);
    }
}
function eviarNave(nave) {
    const calcular = Math.floor(nave.crewLimit / 3);
    console.log(calcular);
    if (nave.inMission === true) {
        alert('sua nave ja esta em uma missao');
    }
    else if (nave.crew.length < calcular) {
        alert('a sua nave precisa de mais tripulantes');
    }
    else {
        nave.inMission = true;
        alert('sua nave saiu para missao');
    }
}
function listarNaves() {
    console.log(naves);
}
function pegandoNave(naveName) {
    const naveRetornada = naves.findIndex(res => res.name === naveName);
    return naves[naveRetornada];
}
do {
    opcao = prompt('escolha uma opcao: \n 1. criar uma nave \n 2. adicionar um tripulante \n 3. enviar a nave \n 4. listar todas naves \n 5. sair ') || '';
    switch (opcao) {
        case '1':
            const nome = prompt('qual o nome da nave? ') || '';
            const piloto = prompt('qual o nome do piloto') || '';
            const tamanho = Number(prompt('qual o tamanho da tripulacao'));
            criar(nome, piloto, tamanho);
            break;
        case '2':
            const naveName = prompt('digite o nome da nave') || '';
            const spaceship = pegandoNave(naveName);
            adicionarTripulante(spaceship);
            break;
        case '3':
            const nomeDaNave = prompt('digite o nome da nave para eviar em missao') || '';
            const naveASeEnviada = pegandoNave(nomeDaNave);
            eviarNave(naveASeEnviada);
            break;
        case '4':
            listarNaves();
            break;
        case '5':
            alert('saindo...');
            break;
        default:
            alert('opcoes invalidas');
    }
} while (opcao !== '5');
