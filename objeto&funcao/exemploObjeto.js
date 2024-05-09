// Nome
// let nome = "Thiago"
// let nome1 = "Felipe"


// Apelido
// let apelido = "Thigas"
// let apelido1 = "Tadeu"

let pessoa1 = {
    nome: "Thiago",
    apelido: "Thigas"
}

let pessoa2 = {
    nome: "Felipe",
    apelido: "Tadeu"
}

let pessoa3 = {
    nome: "Caique",
    apelido: "Gaigue"
}

let produto = {
    nomeProduto: "Tônico Capilar",
    marca: "Manual",
    descricao: "Acabe com a calvície",
    preco: 29.90
}

// Concatenação
console.log(produto.preco + " " + produto.descricao);

console.log("Olá Thiago, acabe com a calvície, utilizando a Manual")


// Interpolação (Template Strings)
console.log(`Olá ${pessoa1.nome}, ${produto.descricao}, utilizando a ${produto.marca}`)

let produtoCadastrado = {
    nome: "",
    valor: "",
    marca: ""
}

produtoCadastrado.nome = prompt("Digite o nome do produto: ")
produtoCadastrado.valor = parseFloat(prompt("Digite o valor do produto: "))
produtoCadastrado.marca = prompt("Digite a marca do produto: ")

console.log(produtoCadastrado);