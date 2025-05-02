// as tuplas e um tipo primitivo especifico do typescript
// isso cria um arry que so pode conter 3 strings
// isso sao as tuplas e um tipo especifico de array com a quantidade de itens e tipos que voce colou
let crew: [string, string, string] = ['','','']

crew[0] = 'gabriel'
crew[1] = 'felipe'
crew[2] = 'maju'

let pontos: [number, number, string, boolean]

pontos = [30, 10, 'gabriel', true]

let [x, y, nome, isTrue] = pontos
