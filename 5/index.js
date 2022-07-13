const entradaString = "Job Rotation";
let tamanho = (entradaString.length - 1);
let entradaInvertida = [];
let contador = 0;

while(contador < entradaString.length) {
    entradaInvertida.push(entradaString[tamanho]);
    contador++;
    tamanho--;
}

console.log(entradaInvertida.join(""));