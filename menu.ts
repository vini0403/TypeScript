import PromptSync from "prompt-sync"; // chamer o pacote prompt-sync

const prompt = PromptSync();

//do while e uma estrutura de repticao que continua a execusao conforme a condicao for verdadeira

let exercicio:number;
let continuar:string;

import { funcao, funcao2, funcao3, funcao4, funcao5, funcao6 } from "./exercicio"


//1. Imprimir números de 1 a 10 utilizando o loop for

do {

    exercicio = parseInt(prompt(`Digite um numero de 1 a 6 para ver os exercicios: `));
    
    switch (exercicio) {
        case 1:
            funcao()
            break;
        case 2:
            funcao2()
            break;    
        case 3:
            funcao3()
            break;
            case 4:
                funcao4()
                break;
                case 5:
                funcao5()
                break;
                case 6:
                funcao6()
                break;
            default:
                console.log("digite um numero de 1 a 6!!!");
            break;
    }

    continuar = prompt("deseja continuar ver outros exercicios? digite s para sim e digite n para não: ").toLocaleLowerCase();

}while (continuar === "s");