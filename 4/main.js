const faturamentoMensal = [
    {
        estado: "São Paulo",
        valor: 67836.43
    },
    {
        estado: "Rio de Janeiro",
        valor: 36678.66
    },
    {
        estado: "Minas Gerais",
        valor: 29229.88
    },
    {
        estado: "Espírito Santo",
        valor: 27165.48
    },
    {
        estado: "Outros",
        valor: 19849.53
    }
]

const calculaTudo = (vetor) => {
    const valorTotal = vetor
    .map((lugarFat) => {
        return lugarFat.valor;
    })
    .reduce((acum, atual) => {
        return acum+atual;
    })
    return valorTotal;
}


function calculaPercentual(valorTotal, faturamento) {
    const resultado = (faturamento.valor * 100)/valorTotal;
    return resultado;
}

const valorTotal = calculaTudo(faturamentoMensal);

faturamentoMensal.forEach(elemento => {
    let resultado = calculaPercentual(valorTotal, elemento)
    console.log(`${elemento.estado} [${resultado.toFixed(2)}%]`);
})