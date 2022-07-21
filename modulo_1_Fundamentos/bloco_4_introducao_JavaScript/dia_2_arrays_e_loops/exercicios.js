let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

function exercicio1(){
    for(let index = 0; index < numbers.length; index++){
        console.log(numbers[index]);
    }
}

function exercicio2(){
    let soma = 0;
    for(let index = 0; index < numbers.length; index++){
        soma += numbers[index];
    }
    console.log("Soma: ", soma);
    return soma;
}

function exercicio3(){
    let soma = 0;
    for(let index = 0; index < numbers.length; index++){
        soma += numbers[index];
    }
    let media = soma/numbers.length;
    console.log("Média: ", media);
    return media;
}

function exercicio4(){
    let media = exercicio3();
    if(media > 20){
        console.log("Valor maior que 20.");
    }
    else{
        console.log("Valor menor que 20.");
    }
}

function exercicio5(){
    let maior = numbers[0];
    for(let index = 0; index < numbers.length; index++){
        if(numbers[index] > maior)
            maior = numbers[index];
    }
    console.log("O Maior valor é: ", maior);
    return maior;
}

function exercicio6(){
    let valoresImpares = 0;
    for(let index = 0; index < numbers.length; index++){
        if(numbers[index]%2 !== 0)
            valoresImpares++;
    }
    if(valoresImpares === 0)
        console.log("Nenhum valor ímpar encontrado.");
    else
        console.log("Existem ", valoresImpares, " valores ímpares no array.");

    return valoresImpares;
}

function exercicio7(){
    let menor = numbers[0];
    for(let index = 0; index < numbers.length; index++){
        if(numbers[index] < menor)
            menor = numbers[index];
    }
    console.log("Menor valor é: ", menor);
    return menor;
}

function exercicio8(){
    let array = [];
    for(let index = 1; index <= 25; index++){
        array.push(index);
    }
    console.log("Array resultante: ", array);

    return array;
}

function exercicio9(){
    let arrayGerado = exercicio8();
    for(let index = 0; index < arrayGerado.length; index++){
        arrayGerado[index] = arrayGerado[index] / 2;
    }
    console.log("Cada elemento do array dividido por 2: ",arrayGerado);
}

exercicio1();
exercicio2();
exercicio3();
exercicio4();
exercicio5();
exercicio6();
exercicio7();
exercicio8();
exercicio9();