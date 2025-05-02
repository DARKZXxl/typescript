"use strict";
const spaceships = [];
function addSpaceship(name, pilot, crewLimit) {
    const spaceship = {
        name,
        pilot,
        crewLimit,
        crew: [],
        inMission: false
    };
    spaceships.push(spaceship);
    alert(`a nave ${spaceship.name} foi criada`);
}
function findSpaceship(name) {
    let spaceship;
    spaceship = spaceships.find((ship) => ship.name === name);
}
function addCrewMember(member, spaceship) {
    if (spaceship.crew.length >= spaceship.crewLimit) {
        alert('nao e possivel adicionar um outro membro na nave ele esta muito cheia');
    }
    else {
        spaceship.crew.push(member);
        alert('um novo tripulante entrou na nave');
    }
}
function sendInMission(spaceship) {
    if (spaceship.inMission) {
        alert('sua nave ja foi em missao');
    }
    else if (spaceship.crew.length < Math.floor(spaceship.crewLimit / 3)) {
        alert('sua nave nao foi enviada pois tem poucos membros');
    }
    else {
        spaceship.inMission = true;
        alert('sua nave saiu em missao');
    }
}
