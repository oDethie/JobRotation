const verificaNaSequencia = 34;
let resultados = [0,1];
let contador = 0;
let i = 0;

verificaNaSequencia < 0 ? console.log(`Número incorreto`):console.log(`Vamos verificar`);

while(verificaNaSequencia >= contador) {
    if(verificaNaSequencia>1) {
        resultados.push(resultados[i+1]+resultados[i]);
        contador = resultados[(resultados.length - 1)];
        i++;
        if(verificaNaSequencia === contador) {
            console.log(`${verificaNaSequencia}, Pertence!!`);
            break;
        } else if(contador > verificaNaSequencia) {
            console.log(`${verificaNaSequencia}, Não Pertence!!`);
        }
    } else if(verificaNaSequencia === 0 || verificaNaSequencia === 1){
        console.log(`${verificaNaSequencia}, Pertence!!`);
        break;
    }
}