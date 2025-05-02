const usuarios: Dados[] = []
let opcoes = ''

interface Dados {
    id: string,
    login: string,
    name: string,
    bio: string,
    repos: number,
    url: string
}
async function usuario(nome:string) {
    const resposta = await fetch(`https://api.github.com/users/${nome}`)

    const valor = resposta.json()
    return valor
}


function modelandoDados({id, login, name, bio, public_repos, repos_url}: { id: string, login: string, name: string, bio: string, public_repos: number, repos_url: string }) {
    const user: Dados = {
        id: id,
        login: login,
        name: name,
        bio: bio,
        repos: public_repos,
        url: repos_url
    }

    return user
}

// funcao provisoria dps vou colocar isso dentro do switch
async function pegandoUser() {
    const user = prompt('digite o nome do usuario para ser buscado') || ''
    const conta = await usuario(user)
    usuarios.push(modelandoDados(conta))
}

async function pegandoRepos() {
    const repos: { name: string, description: string, fork: boolean, stargazers_count: number }[] = []
    const user: string = prompt('digite o nome do usuario salvo') || ''
    const buscandoUser = usuarios.find(usuario => usuario.login === user);
    const url = buscandoUser?.url
    const resposta = await fetch(`${url}`)

    const valor = await resposta.json()
    valor.forEach(({name, description, fork, stargazers_count}: { name: string, description: string, fork: boolean, stargazers_count: number }) => {
        repos.push({ name, description, fork, stargazers_count })
    });
    console.log(repos)
}

function mostarUsuarios() {
    console.log(usuarios)
}

async function fazendoCalculo() {
    return console.log("total de repositorios salvos: " + usuarios.reduce((total, item) => total + item.repos, 0))
}

async function topCincoUser() {
    const cinco: string[] = []
    const ordenado = [...usuarios].sort((a, b) => b.repos - a.repos);

    const topCinco = ordenado.slice(0, 5);

    const resultado = topCinco.map(user => ({
        login: user.login,
        repos: user.repos,
    }));
    console.log(resultado)
    
}

let confirmacao: boolean = false
async function chamandoFuncoes() {
    do {
        await pegandoUser()
        confirmacao = confirm('deseja adicionar outro usuario?')
    } while (confirmacao);
    await pegandoRepos()
    await fazendoCalculo()
    await topCincoUser()
}

chamandoFuncoes()
mostarUsuarios()



