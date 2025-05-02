interface gitHubUser {
    id: number,
    login: string,
    name: string,
    bio: string,
    public_repos: number,
    repos_url: string,
    message?: 'not found'
}

interface gitHubRepos {
    name: string,
    description: string,
    fork: boolean,
    stargazers_count: number
}

const users: gitHubUser[] = []

async function pegarUsuario(name: string) {
    const resposta = await fetch(`https://api.github.com/users/${name}`)
    const user: gitHubUser = await resposta.json()

    if(user.message) {
        console.log('o usuario nao foi encontrado')
    }
    else {
        users.push(user)
        console.log(`o usuario ${user.login} foi salvo`)
    }
}

async function showUser(username: string) {
    const user = users.find(user => user.login === username)

    if(typeof user === 'undefined') {
        console.log('o usuario nao foi encontrado')
    }
    else {
        const resposta = await fetch(user.repos_url)
        const repos: gitHubRepos = await resposta.json()
        console.log(repos)
    }
}
function showAllUser() {
    console.log(users)
}

function showReposTotal() {
    const somar = users.reduce((total, item) => total + item.public_repos, 0)
    console.log('total de repositorios: ' + somar)
}

function showTopFive() {
    const topFive = users.slice().sort((a,b) => b.public_repos - a.public_repos).slice(0, 5)
    console.log(topFive)
}

async function main() {
    await pegarUsuario('isaacpontes')
    await pegarUsuario('julianaconde')
    await pegarUsuario('pcaldass')
    await pegarUsuario('lucasqueirogaa')
    await pegarUsuario('frans203')
    await pegarUsuario('LeDragoX')

    await showUser('isaacpontes')
    await showUser('julianaconde')

    showAllUser()
    showReposTotal()
    showTopFive()
}

main()