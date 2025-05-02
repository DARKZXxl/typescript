const spaceShip = {
    // o ts vai intender que isso vai ser sempre um string
    name: 'X-wing',
    speed: 0
}

function acelerar(spaceShip: {name: string; speed: number}, speed: number) {
    spaceShip.speed = speed
}

acelerar(spaceShip, 50)