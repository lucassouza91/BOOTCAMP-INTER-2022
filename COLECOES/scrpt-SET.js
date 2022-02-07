const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5, 1, 1];

function valoresUnicos(array){
    const minha = new Set(array);
    return [...minha];
}

console.log(valoresUnicos(meuArray));