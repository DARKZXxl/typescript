// nas classe vode deve colocar o nome do atributo fora do construtor
// atributos publicos = podem ser acessdos de qualquer lugar
// artibutos privados = so pode ser usada dentro da propria classe
// artibutos protegidos = ela so pode ser usada dentro as classes ou subclasses
class Spaceship {
  private _name: string
  protected captain: string
  protected speed: number
    constructor(name: string, captain: string) {
      this._name = name
      this.captain = captain
      this.speed = 0
    }

    get name() {
      return this._name
    }
  
    set name(name) {
      this._name = name
    }
    
    public accelerate(rate: number, time: number) {
      this.speed = rate * time
    }
  }
  
  class Fighter extends Spaceship {
    weapons: number
    constructor(name: string, captain: string, weapons: number) {
      super(name, captain)
      this.weapons = weapons
    }
  
    shoot() {
      for (let i = 0; i < this.weapons; i++) {
        console.log('Pew!')
      }
    }
  
    erase() {
      this.captain = ''
      this.speed = 0
    }
  }
  
  let ship = new Spaceship('USS Enterprise', 'James T. Kirk')
  
  ship.accelerate(50, 10)