// Fazer um menu de exercicios utilizando o exemplo dado em aula
// Criar um menu, onde é possível executar 6 dos exercícios anteriores.
// Cada exercicio deve ser encapsulado em uma função, e o menu deve executar essas funções.
// O usuário poderá escolher qual exercicio ele quer visualizar.

// O usuário deverá digitar 0 para sair do menu.


function exemploRepeticao() {
    let opcao = prompt("EXERCICIO DE REPETICAO\nDigite uma opção\nDigite 0 para sair:")

    while (opcao != "0") {
        console.log("Repetiuuuuuu");

        opcao = prompt("R:Digite uma opção\nDigite 0 para sair:")
    }

    console.log("Saiuuuuu");
}


const exercicioLogin = () => {
    let username = prompt("Digite um nome de usuario:")
    let senha = prompt("Digite a senha:")


    if (username == "admin" && senha == "senha123") {
        alert("Login bem sucedido");
    } else {
        alert("Voce não tem permissão de acesso!")
    }
}

const tabuada = () => {
    let tabuada = prompt("informe um número de 1 a 10 para mostrar sua tabuada ")

    console.log("Tabuada do " + tabuada + ":")
    for (let i = 0; i <= 10; i++) {
        r = tabuada * i
        alert(tabuada + "x" + i + " = " + r)

    }
}

const IMC = () => {
    let peso = parseFloat(prompt("Informe o seu peso (em kg): "));

let altura = parseFloat(prompt("Informe o seu altura (em metros): "));

let imc = peso / (altura*altura);

console.log("Seu IMC é:" + imc.toFixed(2));

if(imc < 18.5){
    alert("Abaixo do peso");
}

else if( imc>= 18.5 && imc <= 24.9 ){
    alert("Peso normal");
}

else if (imc >= 25.0 && imc <= 29.9){
    alert("Sobrepeso");
}

else if (imc >= 30.0 && imc <= 34.9){
    alert("Obsidade grau 1");
}

else if (imc >= 35.0 && imc <= 39.9){
    alert("Obsidade grau 2");
}

else {
    alert("Obsidade grau 3");
}

}


let opcaoUsuario;

do {
    opcaoUsuario = prompt("MENU\n\n1 - Exemplo de Repetição\n2 - Exercicio Usuario Senha\n3 - Exercicio da Tabuada\n4 - Exercicio de IMC\n5 - Exercicio Usuario Senha\n6 - Exercicio Usuario Senha\n\n0 - Digite 0 para sair")

    if (opcaoUsuario == "0") {
        alert("Voce escolheu sair :(")

    } else if (opcaoUsuario == "1") {
        // Mostrar exemplo de repeticao
        exemploRepeticao()

    } else if (opcaoUsuario == "2") {
        // Mostrar exercicio usuario e senha
        exercicioLogin()
    }

    else if (opcaoUsuario == "3") {
        // Mostrar exercicio usuario e senha
        tabuada()
    }

    else if (opcaoUsuario == "4") {
        IMC()
    }




    else {
        alert("Exercicio inexistente")
    }

} while (opcaoUsuario != "0");