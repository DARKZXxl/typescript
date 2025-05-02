import { SpaceShip } from "./expots";
// o "* as" fala que quer todo o arquivo serve para bibliotecas externas
import * as loadsh from "lodash"

interface BattaleSpaceShip extends SpaceShip {
    armas: number
}

let minhaNave: BattaleSpaceShip = {
    name: 'x-wing',
    armas: 10,
    pilot: 'gabriel',
    speed: 100
}
