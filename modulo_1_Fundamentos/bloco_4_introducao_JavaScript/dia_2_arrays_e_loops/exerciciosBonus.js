let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
const compararCrescente = (num1, num2) => {
    if (num1 < num2) {
        return -1;
    }
    else if (num1 > num2) {
        return 1;
    }
    else{
        return 0;
    }
}

const compararDecrescente = (num1, num2) => {
    if (num1 < num2) {
        return 1;
    }
    else if (num1 > num2) {
        return -1;
    }
    else{
        return 0;
    }
}

let ordenadoCrescente = Array.from(numbers).sort(compararCrescente);
let ordenadoDecrescente = Array.from(numbers).sort(compararDecrescente);

function mutiplicaPeloDaFrente(){
    let arrayGerado = [];
    for(let index = 0; index < numbers.length; index++){
        if((index + 1) < numbers.length)
            arrayGerado.push(numbers[index] * numbers[index + 1]);
        else
            arrayGerado.push(numbers[index] * 2);
    }

    return arrayGerado;
}

console.log("Array ordenado em ordem crescente: ", ordenadoCrescente);
console.log("Array ordenado em ordem decrescente: ", ordenadoDecrescente);
console.log("Array gerado pela regra de multiplicar pelo número da frente: ", mutiplicaPeloDaFrente());