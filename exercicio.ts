import PromptSync from "prompt-sync";
const prompt = PromptSync();

//1. Imprimir números de 1 a 10 utilizando o loop for


export function funcao(): void {
    console.log("1. Imprimir números de 1 a 10 utilizando o loop for")
    for (let contador: number = 1; contador <= 10; contador++) {
        console.log(contador);

    }
}

//2. Imprimir números pares de 1 a 10.

export function funcao2(): void {
    console.log("2. Imprimir números pares de 1 a 10.")
    for (let contador: number = 2; contador <= 10; contador += 2) {
        console.log(contador);
    }
}

//3. Faça um programa que imprima os números impares de 0 a 50

export function funcao3(): void {
    console.log("3. Faça um programa que imprima os números impares de 0 a 50")
    for (let contador: number = 1; contador <= 50; contador += 2) {
        console.log(contador);
    }
}


//4. Faça um programa que imprima na tela a tabuada de um número
// qualquer escolhido pelo usuário até o 10.

export function funcao4(): void {
    console.log("4. Faça um programa que imprima na tela a tabuada de um número qualquer escolhido pelo usuário até o 10.")
    let numerodigitado: number = parseInt(prompt("digite o numero para a tabuada: "));
    for (let contador: number = 0; contador <= 10; contador++) {
        console.log(`${numerodigitado} x ${contador} = ${numerodigitado * contador}`);

    }
}

// 5. Imprimir os primeiros 10 números da sequência de Fibonacci.

export function funcao5(): void {
    console.log("5. Imprimir os primeiros 10 números da sequência de Fibonacci.")
    let numanterior: number = 0
    let numatual: number = 1
    for (let contador: number = 0; contador <= 10; contador++) {
        let proximonumero = numanterior + numatual;

        console.log(proximonumero)

        numanterior = numatual;
        numatual = proximonumero;

    }
}

//6.Imprimir números pares de 0 a 20 utilizando o loop while

export function funcao6(): void {
    console.log("6.Imprimir números pares de 0 a 20 utilizando o loop while")
    let contador: number = 0
    while (contador <= 20) {
        console.log(contador);
        contador += 2
    }
}