import faturamento from "./dados.js";
//console.log(faturamento);

let faturamentoMaiorMedia = 0;
 
let menorFaturamento = {
    valor: 1000000000000,
    dia: 0,
}
let maiorFaturamento = {
        valor: -1000000000000,
        dia: 0,
};

const mediaFaturamento = (faturamento
                            .map((fatuDia) => {
                                return fatuDia.valor;
                            })
                            .reduce((acum, atual) => {
                                return acum+atual;
                            }))/faturamento.length;

faturamento.forEach((fatDiario) => {
    if(fatDiario.valor < menorFaturamento.valor) {
        menorFaturamento.valor = fatDiario.valor;
        menorFaturamento.dia = fatDiario.dia;
    }
    if(fatDiario.valor > maiorFaturamento.valor) {
        maiorFaturamento.valor = fatDiario.valor;
        maiorFaturamento.dia = fatDiario.dia;
    }
    if(fatDiario.valor > mediaFaturamento) {
        faturamentoMaiorMedia++;
    }
})

console.log(`O maior faturamento foi no dia ${maiorFaturamento.dia}, R$${maiorFaturamento.valor}\nO menor faturamento foi no dia ${menorFaturamento.dia}, R$${menorFaturamento.valor}\n\nTivemos ${faturamentoMaiorMedia} dias em que nosso faturamento foi maior que a média mensal`);