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

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const exercicioLogin = () => {
    let username = prompt("Digite um nome de usuario:")
    let senha = prompt("Digite a senha:")


    if (username == "admin" && senha == "senha123") {
        alert("Login bem sucedido");
    } else {
        alert("Voce não tem permissão de acesso!  (▀̿̿Ĺ̯̿▀̿ ̿)")
    }
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const tabuada = () => {
    let tabuada = prompt("informe um número de 1 a 10 para mostrar sua tabuada ")

    console.log("Tabuada do " + tabuada + ":")
    for (let i = 0; i <= 10; i++) {
        r = tabuada * i
        alert(tabuada + "x" + i + " = " + r)

    }
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const IMC = () => {
    let peso = parseFloat(prompt("Informe o seu peso (em kg): "));

    let altura = parseFloat(prompt("Informe o seu altura (em metros): "));

    let imc = peso / (altura * altura);

    console.log("Seu IMC é:" + imc.toFixed(2));

    if (imc < 18.5) {
        alert("Abaixo do peso");
    }

    else if (imc >= 18.5 && imc <= 24.9) {
        alert("Peso normal");
    }

    else if (imc >= 25.0 && imc <= 29.9) {
        alert("Sobrepeso");
    }

    else if (imc >= 30.0 && imc <= 34.9) {
        alert("Obsidade grau 1");
    }

    else if (imc >= 35.0 && imc <= 39.9) {
        alert("Obsidade grau 2");
    }

    else {
        alert("Obsidade grau 3");
    }

}

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


const maiorOuMenor = () => {

    let idade = parseInt(prompt("Digite sua idade: "));

    while (idade < 18) {
        idade = parseInt(prompt("Você é menor de idade. Por favor, digite sua idade novamente: "))
    }

    console.log("Você é maior de idade. Sua idade é: " + idade);
}


//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const fibzinho = () => {

    let fib1 = 1;
    let fib2 = 1;

    alert("Os primeiro 10 números da sequência de Fibonacci são: ")
    alert(fib1);
    alert(fib2);

    for (let i = 2; i < 10; i++) {
        let nextFib = fib1 + fib2;
        alert(nextFib);

        fib1 = fib2;
        fib2 = nextFib;
    }
}

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const hellou = () => {
alert (" Hello World")

}

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
let opcaoUsuario;

do {
    opcaoUsuario = prompt("⠀⠀⠀⠀⠀⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n Olaa⠀⠀⠀⢰⣿⡿⠗⠀⠠⠄⡀⠀⠀⠀⠀\n    ⠀⠀⠀⠀⡜⠁⠀⠀⠀⠀⠀⠈⠑⢶⣶⡄\n    ⢀⣶⣦⣸⠀⢼⣟⡇⠀⠀⢀⣀⠀⠘⡿⠃\n    ⠀⢿⣿⣿⣄⠒⠀⠠⢶⡂⢫⣿⢇⢀⠃⠀\n    ⠀⠈⠻⣿⣿⣿⣶⣤⣀⣀⣀⣂⡠⠊⠀⠀\n    ⠀⠀⠀⠃⠀⠀⠉⠙⠛⠿⣿⣿⣧⠀⠀⠀\n    ⠀⠀⠘⡀⠀⠀⠀⠀⠀⠀⠘⣿⣿⡇⠀⠀\n    ⠀⠀⠀⣷⣄⡀⠀⠀⠀⢀⣴⡟⠿⠃⠀⠀\n    ⠀⠀⠀⢻⣿⣿⠉⠉⢹⣿⣿⠁⠀⠀⠀⠀\n    ⠀⠀⠀⠀⠉⠁⠀⠀⠀⠉⠁⠀⠀⠀⠀⠀\n\n__ ▂ ▃ ▅ ▇ █ MENU █ ▇ ▅ ▃ ▂ __\n\n1 - Exemplo de Repetição ∞\n2 - Exercicio Usuario Senha (⌐■_■)\n3 -Tabuda （ｏ。ｏ；） \n4 - Exercicio de IMC (｀∀´)Ψ\n5 -  Exercicio de maior ou menor idade (~˘▾˘)~\n6 - Exercicio de Fibonacci  (；一_一)\n\n0 - Digite 0 para sair  ಥ_ಥ\n◕‿◕ Digita 7 ai")

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

    else if (opcaoUsuario == "5") {
        maiorOuMenor()
    }

    else if (opcaoUsuario == "6") {
        fibzinho()
    }

    else if (opcaoUsuario == "7") {
        hellou ()
    }

    else {
        alert("Exercicio inexistente")
    }

} while (opcaoUsuario != "0");