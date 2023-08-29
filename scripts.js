// ####################### DECLARAÇÕES #######################
const quantidade = document.querySelector('#quantidade');
const sexo = document.querySelector('#sexo');
const tipo = document.querySelector('#tipo');
const idade = document.querySelector('#idade');
const tipoEngorda = document.querySelector('#tipo-engorda');
const pesoEntrada = document.querySelector('#peso-entrada');
const resultPesoSaida = document.querySelector('#result-peso-saida');
const periodo = document.querySelector('#periodo');
const custoDiaria = document.querySelector('#custo-diaria');
const ganhoPesoDia = document.querySelector('#ganho-peso-dia');
const resultGanhoPesoAnimal = document.querySelector('#result-ganho-peso-animal');
const resultCustoPorArroba = document.querySelector('#custo-por-arroba');
const resultCustoPorLote = document.querySelector('#custo-por-lote');
const valorAnimal = document.querySelector('#valor-animal');
const rendimento = document.querySelector('#rendimento');
const resultGanhoPesoArroba = document.querySelector('#ganho-peso-arroba');
const resultTotalArrobaAnimal = document.querySelector('#total-arroba-animal');
const mortalidade = document.querySelector('#mortalidade');
const resultTotalArroba = document.querySelector('#total-arroba');
const resultInvestimentoAnimais = document.querySelector('#investimento-animais');
const resultInvestimentoAlimentacao = document.querySelector('#investimento-alimentacao');
const resultCustoCapitalCDI = document.querySelector('#custo-capital-cdi');
const resultInvestTotal = document.querySelector('#investimento-total');
const resultPontoEquilibrio = document.querySelector('#ponto-equilibrio');
const resultPesoAnimal = document.querySelector('#peso-animal');
const resultPesoProducao = document.querySelector('#peso-producao');
const resultPesoCustoCapital = document.querySelector('#peso-custo-capital');
const cotacaoB3 = document.querySelector('#cotacao-b3');
const baseRegiao = document.querySelector('#base-regiao');
const resultCotacaoB3Base = document.querySelector('#cotacao-b3-base');
const resultQuantidadeContratos =  document.querySelector('#quantidade-contratos');
const resultResultadoArroba = document.querySelector('#resultado-arroba');
const resultFaturamento = document.querySelector('#faturamento');
const resultLucroLiquidoOperacao = document.querySelector('#lucro-liquido-operacao');
const resultLucroLiquidoAnimal = document.querySelector('#lucro-liquido-animal');
const resultTaxaLiquidaPeriodo = document.querySelector('#taxa-liquida-periodo');
const resultTaxaLiquidaMes = document.querySelector('#taxa-liquida-mes');
const resultTaxaLiquidaAno = document.querySelector('#taxa-liquida-ano');
const td2 = document.querySelector('.td-2').getAttribute('data-value');
const baseTaxa2 = document.querySelector('.base-taxa-2');
const td3 = document.querySelector('.td-3').getAttribute('data-value');
const baseTaxa3 = document.querySelector('.base-taxa-3');
const td4 = document.querySelector('.td-4').getAttribute('data-value');
const baseTaxa4 = document.querySelector('.base-taxa-4');
const td5 = document.querySelector('.td-5').getAttribute('data-value');
const baseTaxa5 = document.querySelector('.base-taxa-5');
const td6 = document.querySelector('.td-6').getAttribute('data-value');
const baseTaxa6 = document.querySelector('.base-taxa-6');
const td7 = document.querySelector('.td-7').getAttribute('data-value');
const baseTaxa7 = document.querySelector('.base-taxa-7');
const td8 = document.querySelector('.td-8').getAttribute('data-value');
const baseTaxa8 = document.querySelector('.base-taxa-8');
const td9 = document.querySelector('.td-9').getAttribute('data-value');
const baseTaxa9 = document.querySelector('.base-taxa-9');
const td10 = document.querySelector('.td-10').getAttribute('data-value');
const baseTaxa10 = document.querySelector('.base-taxa-10');
const td11 = document.querySelector('.td-11').getAttribute('data-value');
const baseTaxa11 = document.querySelector('.base-taxa-11');
const td12 = document.querySelector('.td-12').getAttribute('data-value');
const baseTaxa12 = document.querySelector('.base-taxa-12');
const td13 = document.querySelector('.td-13').getAttribute('data-value');
const baseTaxa13 = document.querySelector('.base-taxa-13');
const td14 = document.querySelector('.td-14').getAttribute('data-value');
const baseTaxa14 = document.querySelector('.base-taxa-14');
const td15 = document.querySelector('.td-15').getAttribute('data-value');
const baseTaxa15 = document.querySelector('.base-taxa-15');
const td16 = document.querySelector('.td-16').getAttribute('data-value');
const baseTaxa16 = document.querySelector('.base-taxa-16');
const td17 = document.querySelector('.td-17').getAttribute('data-value');
const baseTaxa17 = document.querySelector('.base-taxa-17');
const td18 = document.querySelector('.td-18').getAttribute('data-value');
const baseTaxa18 = document.querySelector('.base-taxa-18');
const td19 = document.querySelector('.td-19').getAttribute('data-value');
const baseTaxa19 = document.querySelector('.base-taxa-19');
const td20 = document.querySelector('.td-20').getAttribute('data-value');
const baseTaxa20 = document.querySelector('.base-taxa-20');
const td21 = document.querySelector('.td-21').getAttribute('data-value');
const baseTaxa21 = document.querySelector('.base-taxa-21');
const td22 = document.querySelector('.td-22').getAttribute('data-value');
const baseTaxa22 = document.querySelector('.base-taxa-22');
const lucro2 = document.querySelector('.lucro-2');
const lucroOperacao2 = document.querySelector('.lucro-operacao-2');
const lucro3 = document.querySelector('.lucro-3');
const lucroOperacao3 = document.querySelector('.lucro-operacao-3');
const lucro4 = document.querySelector('.lucro-4');
const lucroOperacao4 = document.querySelector('.lucro-operacao-4');
const lucro5 = document.querySelector('.lucro-5');
const lucroOperacao5 = document.querySelector('.lucro-operacao-5');
const lucro6 = document.querySelector('.lucro-6');
const lucroOperacao6 = document.querySelector('.lucro-operacao-6');
const lucro7 = document.querySelector('.lucro-7');
const lucroOperacao7 = document.querySelector('.lucro-operacao-7');
const lucro8 = document.querySelector('.lucro-8');
const lucroOperacao8 = document.querySelector('.lucro-operacao-8');
const lucro9 = document.querySelector('.lucro-9');
const lucroOperacao9 = document.querySelector('.lucro-operacao-9');
const lucro10 = document.querySelector('.lucro-10');
const lucroOperacao10 = document.querySelector('.lucro-operacao-10');
const lucro11 = document.querySelector('.lucro-11');
const lucroOperacao11 = document.querySelector('.lucro-operacao-11');
const lucro12 = document.querySelector('.lucro-12');
const lucroOperacao12 = document.querySelector('.lucro-operacao-12');
const lucro13 = document.querySelector('.lucro-13');
const lucroOperacao13 = document.querySelector('.lucro-operacao-13');
const lucro14 = document.querySelector('.lucro-14');
const lucroOperacao14 = document.querySelector('.lucro-operacao-14');
const lucro15 = document.querySelector('.lucro-15');
const lucroOperacao15 = document.querySelector('.lucro-operacao-15');
const lucro16 = document.querySelector('.lucro-16');
const lucroOperacao16 = document.querySelector('.lucro-operacao-16');
const lucro17 = document.querySelector('.lucro-17');
const lucroOperacao17 = document.querySelector('.lucro-operacao-17');
const lucro18 = document.querySelector('.lucro-18');
const lucroOperacao18 = document.querySelector('.lucro-operacao-18');
const lucro19 = document.querySelector('.lucro-19');
const lucroOperacao19 = document.querySelector('.lucro-operacao-19');
const lucro20 = document.querySelector('.lucro-20');
const lucroOperacao20 = document.querySelector('.lucro-operacao-20');
const lucro21 = document.querySelector('.lucro-21');
const lucroOperacao21 = document.querySelector('.lucro-operacao-21');
const lucro22 = document.querySelector('.lucro-22');
const lucroOperacao22 = document.querySelector('.lucro-operacao-22');

// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------

// ####################### FUNÇÕES #######################    
// --- Peso Saída (Kg)
function getPesoSaida(pesoEntrada, ganhoPesoAnimal) {
    let x = pesoEntrada + ganhoPesoAnimal;
    resultPesoSaida.innerHTML = formatNumberWithThousands((x.toFixed(2)).replace('.', ','));
    resultPesoSaida.setAttribute('data-value', x.toFixed(6));
}

// --- Ganho de Peso Animal (Kg)
function getGanhoPesoAnimal(periodo, ganhoPesoDia) {
    let x = periodo * ganhoPesoDia;
    resultGanhoPesoAnimal.innerHTML = formatNumberWithThousands((x.toFixed(2)).replace('.', ','));
    resultGanhoPesoAnimal.setAttribute('data-value', x.toFixed(6));
}

// --- Custo por @
function getCustoPorArroba(valorAnimal, custoDiaria, periodo, totalArrobaAnimal) {
    let x = ((valorAnimal + (custoDiaria * periodo)) / totalArrobaAnimal);
    resultCustoPorArroba.innerHTML = formatNumberWithThousands((x.toFixed(2)).replace('.', ','));
    resultCustoPorArroba.setAttribute('data-value', x.toFixed(6));
}

// --- Custo por Lote
function getCustoPorLote(custoDiaria, quantidade, periodo) {
    let x = (quantidade * custoDiaria) * periodo
    resultCustoPorLote.innerHTML = formatNumberWithThousands((x.toFixed(2)).replace('.', ','));
    resultCustoPorLote.setAttribute('data-value', x.toFixed(6));
}

// --- Ganho de Peso @
function getGanhoPesoArroba(ganhoPesoAnimal, rendimento) {
    let x = (ganhoPesoAnimal * (rendimento/100)) / 15;
    resultGanhoPesoArroba.innerHTML = formatNumberWithThousands((x.toFixed(2)).replace('.', ','));
    resultGanhoPesoArroba.setAttribute('data-value', x.toFixed(6));
}

// --- Total de @ Animal
function getTotalArrobaAnimal(pesoSaida, rendimento) {
    let x = ((pesoSaida * (rendimento/100))/ (15));
    resultTotalArrobaAnimal.innerHTML = formatNumberWithThousands((x.toFixed(2)).replace('.', ','));
    resultTotalArrobaAnimal.setAttribute('data-value', x.toFixed(6));
}

// -- Total de @
function getTotalArroba(quantidade, mortalidade, totalArrobaAnimal) {
    let x = ((quantidade - (quantidade * (mortalidade/100))) * totalArrobaAnimal);
    resultTotalArroba.innerHTML = formatNumberWithThousands((x.toFixed(2)).replace('.', ','));
    resultTotalArroba.setAttribute('data-value', x.toFixed(6));
}

// --- Investimento Animais
function getInvestimentoAnimais(quantidade, valorAnimal) {
    let x = valorAnimal * quantidade;
    resultInvestimentoAnimais.innerHTML = formatNumberWithThousands((x.toFixed(2)).replace('.', ','));
    resultInvestimentoAnimais.setAttribute('data-value', x.toFixed(6));
}

// --- Investimento Alimentação
function getInvestimentoAlimentacao(quantidade, periodo, custoDiaria) {
    let x = quantidade * periodo * custoDiaria;
    resultInvestimentoAlimentacao.innerHTML = formatNumberWithThousands((x.toFixed(2)).replace('.', ','));
    resultInvestimentoAlimentacao.setAttribute('data-value', x.toFixed(6));
}

// --- Custo de Capital CDI
function getCapitalCDI(investAnimais, periodo, investAlimentacao) {
    const juroAnimais = (investAnimais * Math.pow(1.01, (periodo / 30))) - investAnimais;
    const juroAlimentacao = (investAlimentacao * Math.pow(1.01, (periodo / 45))) - investAlimentacao;
    let x = juroAnimais + juroAlimentacao;
    resultCustoCapitalCDI.innerHTML = formatNumberWithThousands((x.toFixed(2)).replace('.', ','));
    resultCustoCapitalCDI.setAttribute('data-value', x.toFixed(6));
}

// --- Investimento Total
function getInvestimentoTotal(investAnimais, investAlimentacao, capitalCDI) {
    let x = investAnimais + investAlimentacao + capitalCDI;
    resultInvestTotal.innerHTML = formatNumberWithThousands((x.toFixed(2)).replace('.', ','));
    resultInvestTotal.setAttribute('data-value', x.toFixed(6));
}  

// --- Peso do Animal
function getPesoAnimal(investAnimais, investTotal) {
    let x = (investAnimais * 100) / investTotal;
    resultPesoAnimal.innerHTML = formatNumberWithThousands((x.toFixed(2)).replace('.', ','));
    resultPesoAnimal.setAttribute('data-value', x.toFixed(6));
}

// --- Peso da Produção
function getPesoProducao(investAlimentacao, investTotal) {
    let x = (investAlimentacao * 100) / investTotal;
    resultPesoProducao.innerHTML = formatNumberWithThousands((x.toFixed(2)).replace('.', ','));
    resultPesoProducao.setAttribute('data-value', x.toFixed(6));
}

// --- Peso do Custo de Capital
function getPesoCustoCapital(capitalCDI, investTotal) {
    let x = (capitalCDI * 100) / investTotal;
    resultPesoCustoCapital.innerHTML = formatNumberWithThousands((x.toFixed(2)).replace('.', ','));
    resultPesoCustoCapital.setAttribute('data-value', x.toFixed(6));
}

// --- Cotação B3 - Base
function getCotacaoB3Base(cotacaoB3, baseRegiao) {
    let x = cotacaoB3 - (cotacaoB3 * (baseRegiao/100));
    resultCotacaoB3Base.innerHTML = formatNumberWithThousands((x.toFixed(2)).replace('.', ','));
    resultCotacaoB3Base.setAttribute('data-value', x.toFixed(6));
}

function getQuantidadeContratos(totalArroba) {
    let x = totalArroba/330;
    resultQuantidadeContratos.innerHTML = formatNumberWithThousands((x.toFixed(2)).replace('.', ','));
    resultQuantidadeContratos.setAttribute('data-value', x.toFixed(6));
}

// --- Resultado p/ @
function getResultadoArroba(cotacaoB3Base, pontoEquilibrio) {
    let x = cotacaoB3Base - pontoEquilibrio;
    resultResultadoArroba.innerHTML = formatNumberWithThousands((x.toFixed(2)).replace('.', ','));
    resultResultadoArroba.setAttribute('data-value', x.toFixed(6));
}

// --- Faturamento
function getFaturamento(totalArroba, cotacaoB3Base) {
    let x = totalArroba * cotacaoB3Base;
    resultFaturamento.innerHTML = formatNumberWithThousands((x.toFixed(2)).replace('.', ','));
    resultFaturamento.setAttribute('data-value', x.toFixed(6));
}

// --- Lucro Líquido na Operação
function getLucroOperacao(faturamento, investTotal) {
    let x = faturamento - investTotal;
    resultLucroLiquidoOperacao.innerHTML = formatNumberWithThousands((x.toFixed(2)).replace('.', ','));
    resultLucroLiquidoOperacao.setAttribute('data-value', x.toFixed(6));
}

// --- Lucro Líquido por Animal
function getLucroAnimal(lucroOperacao, quantidade, mortalidade) {
    let x = lucroOperacao / (quantidade - (quantidade * (mortalidade/100)));
    resultLucroLiquidoAnimal.innerHTML = formatNumberWithThousands((x.toFixed(2)).replace('.', ','));
    resultLucroLiquidoAnimal.setAttribute('data-value', x.toFixed(6));
}

// --- Taxa Líquida no Período
function getTaxaLiquidaPeriodo(lucroOperacao, investTotal) {
    let x = (lucroOperacao * 100) / investTotal;
    resultTaxaLiquidaPeriodo.innerHTML = formatNumberWithThousands((x.toFixed(2)).replace('.', ','));
    resultTaxaLiquidaPeriodo.setAttribute('data-value', x.toFixed(6));
}

// --- Taxa Líquida ao Mês
function getTaxaLiquidaMes(taxaLiquidaPeriodo, periodo) {
    let x = (Math.pow((1 + (taxaLiquidaPeriodo/100)), (1/(periodo/30))) - 1)*100;
    resultTaxaLiquidaMes.innerHTML = formatNumberWithThousands((x.toFixed(2)).replace('.', ','));
    resultTaxaLiquidaMes.setAttribute('data-value', x.toFixed(6));
}

// --- Taxa Líquida ao Ano
function getTaxaLiquidaAno(taxaLiquidaMes) {
    let x = (Math.pow((1 + (taxaLiquidaMes/100)), 12) - 1)*100;
    resultTaxaLiquidaAno.innerHTML = formatNumberWithThousands((x.toFixed(2)).replace('.', ','));
    resultTaxaLiquidaAno.setAttribute('data-value', x.toFixed(6));
}

// --- Ponto de Equilíbrio
function getPontoEquilibrio(investTotal, totalArroba) {
    let x = investTotal/totalArroba;
    resultPontoEquilibrio.innerHTML = formatNumberWithThousands((x.toFixed(2)).replace('.', ','));
    resultPontoEquilibrio.setAttribute('data-value', x.toFixed(6));
}


// Taxa Base B3 - (Taxa Base B3 * (%))
function getTaxasBaseB3() {
    baseTaxa2.innerHTML = formatNumberWithThousands(((cotacaoB3.value - (cotacaoB3.value * (td2/100))).toFixed(2)).replace('.', ','));
    baseTaxa2.setAttribute('data-value', (cotacaoB3.value - (cotacaoB3.value * (td2/100))).toFixed(6));
    baseTaxa3.innerHTML = formatNumberWithThousands(((cotacaoB3.value - (cotacaoB3.value * (td3/100))).toFixed(2)).replace('.', ','));
    baseTaxa3.setAttribute('data-value', (cotacaoB3.value - (cotacaoB3.value * (td3/100))).toFixed(6));
    baseTaxa4.innerHTML = formatNumberWithThousands(((cotacaoB3.value - (cotacaoB3.value * (td4/100))).toFixed(2)).replace('.', ','));
    baseTaxa4.setAttribute('data-value', (cotacaoB3.value - (cotacaoB3.value * (td4/100))).toFixed(6));
    baseTaxa5.innerHTML = formatNumberWithThousands(((cotacaoB3.value - (cotacaoB3.value * (td5/100))).toFixed(2)).replace('.', ','));
    baseTaxa5.setAttribute('data-value', (cotacaoB3.value - (cotacaoB3.value * (td5/100))).toFixed(6));
    baseTaxa6.innerHTML = formatNumberWithThousands(((cotacaoB3.value - (cotacaoB3.value * (td6/100))).toFixed(2)).replace('.', ','));
    baseTaxa6.setAttribute('data-value', (cotacaoB3.value - (cotacaoB3.value * (td6/100))).toFixed(6));
    baseTaxa7.innerHTML = formatNumberWithThousands(((cotacaoB3.value - (cotacaoB3.value * (td7/100))).toFixed(2)).replace('.', ','));
    baseTaxa7.setAttribute('data-value', (cotacaoB3.value - (cotacaoB3.value * (td7/100))).toFixed(6));
    baseTaxa8.innerHTML = formatNumberWithThousands(((cotacaoB3.value - (cotacaoB3.value * (td8/100))).toFixed(2)).replace('.', ','));
    baseTaxa8.setAttribute('data-value', (cotacaoB3.value - (cotacaoB3.value * (td8/100))).toFixed(6));
    baseTaxa9.innerHTML = formatNumberWithThousands(((cotacaoB3.value - (cotacaoB3.value * (td9/100))).toFixed(2)).replace('.', ','));
    baseTaxa9.setAttribute('data-value', (cotacaoB3.value - (cotacaoB3.value * (td9/100))).toFixed(6));
    baseTaxa10.innerHTML = formatNumberWithThousands(((cotacaoB3.value - (cotacaoB3.value * (td10/100))).toFixed(2)).replace('.', ','));
    baseTaxa10.setAttribute('data-value', (cotacaoB3.value - (cotacaoB3.value * (td10/100))).toFixed(6));
    baseTaxa11.innerHTML = formatNumberWithThousands(((cotacaoB3.value - (cotacaoB3.value * (td11/100))).toFixed(2)).replace('.', ','));
    baseTaxa11.setAttribute('data-value', (cotacaoB3.value - (cotacaoB3.value * (td11/100))).toFixed(6));
    baseTaxa12.innerHTML = formatNumberWithThousands(((cotacaoB3.value - (cotacaoB3.value * (td12/100))).toFixed(2)).replace('.', ','));
    baseTaxa12.setAttribute('data-value', (cotacaoB3.value - (cotacaoB3.value * (td12/100))).toFixed(6));
    baseTaxa13.innerHTML = formatNumberWithThousands(((cotacaoB3.value - (cotacaoB3.value * (td13/100))).toFixed(2)).replace('.', ','));
    baseTaxa13.setAttribute('data-value', (cotacaoB3.value - (cotacaoB3.value * (td13/100))).toFixed(6));
    baseTaxa14.innerHTML = formatNumberWithThousands(((cotacaoB3.value - (cotacaoB3.value * (td14/100))).toFixed(2)).replace('.', ','));
    baseTaxa14.setAttribute('data-value', (cotacaoB3.value - (cotacaoB3.value * (td14/100))).toFixed(6));
    baseTaxa15.innerHTML = formatNumberWithThousands(((cotacaoB3.value - (cotacaoB3.value * (td15/100))).toFixed(2)).replace('.', ','));
    baseTaxa15.setAttribute('data-value', (cotacaoB3.value - (cotacaoB3.value * (td15/100))).toFixed(6));
    baseTaxa16.innerHTML = formatNumberWithThousands(((cotacaoB3.value - (cotacaoB3.value * (td16/100))).toFixed(2)).replace('.', ','));
    baseTaxa16.setAttribute('data-value', (cotacaoB3.value - (cotacaoB3.value * (td16/100))).toFixed(6));
    baseTaxa17.innerHTML = formatNumberWithThousands(((cotacaoB3.value - (cotacaoB3.value * (td17/100))).toFixed(2)).replace('.', ','));
    baseTaxa17.setAttribute('data-value', (cotacaoB3.value - (cotacaoB3.value * (td17/100))).toFixed(6));
    baseTaxa18.innerHTML = formatNumberWithThousands(((cotacaoB3.value - (cotacaoB3.value * (td18/100))).toFixed(2)).replace('.', ','));
    baseTaxa18.setAttribute('data-value', (cotacaoB3.value - (cotacaoB3.value * (td18/100))).toFixed(6));
    baseTaxa19.innerHTML = formatNumberWithThousands(((cotacaoB3.value - (cotacaoB3.value * (td19/100))).toFixed(2)).replace('.', ','));
    baseTaxa19.setAttribute('data-value', (cotacaoB3.value - (cotacaoB3.value * (td19/100))).toFixed(6));
    baseTaxa20.innerHTML = formatNumberWithThousands(((cotacaoB3.value - (cotacaoB3.value * (td20/100))).toFixed(2)).replace('.', ','));
    baseTaxa20.setAttribute('data-value', (cotacaoB3.value - (cotacaoB3.value * (td20/100))).toFixed(6));
    baseTaxa21.innerHTML = formatNumberWithThousands(((cotacaoB3.value - (cotacaoB3.value * (td21/100))).toFixed(2)).replace('.', ','));
    baseTaxa21.setAttribute('data-value', (cotacaoB3.value - (cotacaoB3.value * (td21/100))).toFixed(6));
    baseTaxa22.innerHTML = formatNumberWithThousands(((cotacaoB3.value - (cotacaoB3.value * (td22/100))).toFixed(2)).replace('.', ','));
    baseTaxa22.setAttribute('data-value', (cotacaoB3.value - (cotacaoB3.value * (td22/100))).toFixed(6));
}


function getTestesBase() {
    lucro2.innerHTML = formatNumberWithThousands((parseFloat(baseTaxa2.getAttribute('data-value')) - parseFloat(resultPontoEquilibrio.getAttribute('data-value'))).toFixed(2));
    lucro2.setAttribute('data-value', (parseFloat(baseTaxa2.getAttribute('data-value')) - parseFloat(resultPontoEquilibrio.getAttribute('data-value'))).toFixed(6));
    lucroOperacao2.innerHTML = formatNumberWithThousands(((parseFloat(lucro2.getAttribute('data-value')) * parseFloat(resultTotalArroba.getAttribute('data-value'))).toFixed(2)).replace('.', ','));
    lucroOperacao2.setAttribute('data-value', (parseFloat(lucro2.getAttribute('data-value')) * parseFloat(resultTotalArroba.getAttribute('data-value'))).toFixed(6));

    lucro3.innerHTML = formatNumberWithThousands((parseFloat(baseTaxa3.getAttribute('data-value')) - parseFloat(resultPontoEquilibrio.getAttribute('data-value'))).toFixed(2));
    lucro3.setAttribute('data-value', (parseFloat(baseTaxa3.getAttribute('data-value')) - parseFloat(resultPontoEquilibrio.getAttribute('data-value'))).toFixed(6));
    lucroOperacao3.innerHTML = formatNumberWithThousands(((parseFloat(lucro3.getAttribute('data-value')) * parseFloat(resultTotalArroba.getAttribute('data-value'))).toFixed(2)).replace('.', ','));
    lucroOperacao3.setAttribute('data-value', (parseFloat(lucro3.getAttribute('data-value')) * parseFloat(resultTotalArroba.getAttribute('data-value'))).toFixed(6));

    lucro4.innerHTML = formatNumberWithThousands((parseFloat(baseTaxa4.getAttribute('data-value')) - parseFloat(resultPontoEquilibrio.getAttribute('data-value'))).toFixed(2));
    lucro4.setAttribute('data-value', (parseFloat(baseTaxa4.getAttribute('data-value')) - parseFloat(resultPontoEquilibrio.getAttribute('data-value'))).toFixed(6));
    lucroOperacao4.innerHTML = formatNumberWithThousands(((parseFloat(lucro4.getAttribute('data-value')) * parseFloat(resultTotalArroba.getAttribute('data-value'))).toFixed(2)).replace('.', ','));
    lucroOperacao4.setAttribute('data-value', (parseFloat(lucro4.getAttribute('data-value')) * parseFloat(resultTotalArroba.getAttribute('data-value'))).toFixed(6));

    lucro5.innerHTML = formatNumberWithThousands((parseFloat(baseTaxa5.getAttribute('data-value')) - parseFloat(resultPontoEquilibrio.getAttribute('data-value'))).toFixed(2));
    lucro5.setAttribute('data-value', (parseFloat(baseTaxa5.getAttribute('data-value')) - parseFloat(resultPontoEquilibrio.getAttribute('data-value'))).toFixed(6));
    lucroOperacao5.innerHTML = formatNumberWithThousands(((parseFloat(lucro5.getAttribute('data-value')) * parseFloat(resultTotalArroba.getAttribute('data-value'))).toFixed(2)).replace('.', ','));
    lucroOperacao5.setAttribute('data-value', (parseFloat(lucro5.innerHTML) * parseFloat(resultTotalArroba.getAttribute('data-value'))).toFixed(6));

    lucro6.innerHTML = formatNumberWithThousands((parseFloat(baseTaxa6.getAttribute('data-value')) - parseFloat(resultPontoEquilibrio.getAttribute('data-value'))).toFixed(2));
    lucro6.setAttribute('data-value', (parseFloat(baseTaxa6.getAttribute('data-value')) - parseFloat(resultPontoEquilibrio.getAttribute('data-value'))).toFixed(6));
    lucroOperacao6.innerHTML = formatNumberWithThousands(((parseFloat(lucro6.getAttribute('data-value')) * parseFloat(resultTotalArroba.getAttribute('data-value'))).toFixed(2)).replace('.', ','));
    lucroOperacao6.setAttribute('data-value', (parseFloat(lucro6.getAttribute('data-value')) * parseFloat(resultTotalArroba.getAttribute('data-value'))).toFixed(6));

    lucro7.innerHTML = formatNumberWithThousands((parseFloat(baseTaxa7.getAttribute('data-value')) - parseFloat(resultPontoEquilibrio.getAttribute('data-value'))).toFixed(2));
    lucro7.setAttribute('data-value', (parseFloat(baseTaxa7.getAttribute('data-value')) - parseFloat(resultPontoEquilibrio.getAttribute('data-value'))).toFixed(6));
    lucroOperacao7.innerHTML = formatNumberWithThousands(((parseFloat(lucro7.getAttribute('data-value')) * parseFloat(resultTotalArroba.getAttribute('data-value'))).toFixed(2)).replace('.', ','));
    lucroOperacao7.setAttribute('data-value', (parseFloat(lucro7.getAttribute('data-value')) * parseFloat(resultTotalArroba.getAttribute('data-value'))).toFixed(6));

    lucro8.innerHTML = formatNumberWithThousands((parseFloat(baseTaxa8.getAttribute('data-value')) - parseFloat(resultPontoEquilibrio.getAttribute('data-value'))).toFixed(2));
    lucro8.setAttribute('data-value', (parseFloat(baseTaxa8.getAttribute('data-value')) - parseFloat(resultPontoEquilibrio.getAttribute('data-value'))).toFixed(6));
    lucroOperacao8.innerHTML = formatNumberWithThousands(((parseFloat(lucro8.getAttribute('data-value')) * parseFloat(resultTotalArroba.getAttribute('data-value'))).toFixed(2)).replace('.', ','));
    lucroOperacao8.setAttribute('data-value', (parseFloat(lucro8.getAttribute('data-value')) * parseFloat(resultTotalArroba.getAttribute('data-value'))).toFixed(6));

    lucro9.innerHTML = formatNumberWithThousands((parseFloat(baseTaxa9.getAttribute('data-value')) - parseFloat(resultPontoEquilibrio.getAttribute('data-value'))).toFixed(2));
    lucro9.setAttribute('data-value', (parseFloat(baseTaxa9.getAttribute('data-value')) - parseFloat(resultPontoEquilibrio.getAttribute('data-value'))).toFixed(6));
    lucroOperacao9.innerHTML = formatNumberWithThousands(((parseFloat(lucro9.getAttribute('data-value')) * parseFloat(resultTotalArroba.getAttribute('data-value'))).toFixed(2)).replace('.', ','));
    lucroOperacao9.setAttribute('data-value', (parseFloat(lucro9.getAttribute('data-value')) * parseFloat(resultTotalArroba.getAttribute('data-value'))).toFixed(6));

    lucro10.innerHTML = formatNumberWithThousands((parseFloat(baseTaxa10.getAttribute('data-value')) - parseFloat(resultPontoEquilibrio.getAttribute('data-value'))).toFixed(2));
    lucro10.setAttribute('data-value', (parseFloat(baseTaxa10.getAttribute('data-value')) - parseFloat(resultPontoEquilibrio.getAttribute('data-value'))).toFixed(6));
    lucroOperacao10.innerHTML = formatNumberWithThousands(((parseFloat(lucro10.getAttribute('data-value')) * parseFloat(resultTotalArroba.getAttribute('data-value'))).toFixed(2)).replace('.', ','));
    lucroOperacao10.setAttribute('data-value', (parseFloat(lucro10.getAttribute('data-value')) * parseFloat(resultTotalArroba.getAttribute('data-value'))).toFixed(6));

    lucro11.innerHTML = formatNumberWithThousands((parseFloat(baseTaxa11.getAttribute('data-value')) - parseFloat(resultPontoEquilibrio.getAttribute('data-value'))).toFixed(2));
    lucro11.setAttribute('data-value', (parseFloat(baseTaxa11.getAttribute('data-value')) - parseFloat(resultPontoEquilibrio.getAttribute('data-value'))).toFixed(6));
    lucroOperacao11.innerHTML = formatNumberWithThousands(((parseFloat(lucro11.getAttribute('data-value')) * parseFloat(resultTotalArroba.getAttribute('data-value'))).toFixed(2)).replace('.', ','));
    lucroOperacao11.setAttribute('data-value', (parseFloat(lucro11.getAttribute('data-value')) * parseFloat(resultTotalArroba.getAttribute('data-value'))).toFixed(6));

    lucro12.innerHTML = formatNumberWithThousands((parseFloat(baseTaxa12.getAttribute('data-value')) - parseFloat(resultPontoEquilibrio.getAttribute('data-value'))).toFixed(2));
    lucro12.setAttribute('data-value', (parseFloat(baseTaxa12.getAttribute('data-value')) - parseFloat(resultPontoEquilibrio.getAttribute('data-value'))).toFixed(6));
    lucroOperacao12.innerHTML = formatNumberWithThousands(((parseFloat(lucro12.getAttribute('data-value')) * parseFloat(resultTotalArroba.getAttribute('data-value'))).toFixed(2)).replace('.', ','));
    lucroOperacao12.setAttribute('data-value', (parseFloat(lucro12.getAttribute('data-value')) * parseFloat(resultTotalArroba.getAttribute('data-value'))).toFixed(6));

    lucro13.innerHTML = formatNumberWithThousands((parseFloat(baseTaxa13.getAttribute('data-value')) - parseFloat(resultPontoEquilibrio.getAttribute('data-value'))).toFixed(2));
    lucro13.setAttribute('data-value', (parseFloat(baseTaxa13.getAttribute('data-value')) - parseFloat(resultPontoEquilibrio.getAttribute('data-value'))).toFixed(6));
    lucroOperacao13.innerHTML = formatNumberWithThousands(((parseFloat(lucro13.getAttribute('data-value')) * parseFloat(resultTotalArroba.getAttribute('data-value'))).toFixed(2)).replace('.', ','));
    lucroOperacao13.setAttribute('data-value', (parseFloat(lucro13.getAttribute('data-value')) * parseFloat(resultTotalArroba.getAttribute('data-value'))).toFixed(6));

    lucro14.innerHTML = formatNumberWithThousands((parseFloat(baseTaxa14.getAttribute('data-value')) - parseFloat(resultPontoEquilibrio.getAttribute('data-value'))).toFixed(2));
    lucro14.setAttribute('data-value', (parseFloat(baseTaxa14.getAttribute('data-value')) - parseFloat(resultPontoEquilibrio.getAttribute('data-value'))).toFixed(6));
    lucroOperacao14.innerHTML = formatNumberWithThousands(((parseFloat(lucro14.getAttribute('data-value')) * parseFloat(resultTotalArroba.getAttribute('data-value'))).toFixed(2)).replace('.', ','));
    lucroOperacao14.setAttribute('data-value', (parseFloat(lucro14.getAttribute('data-value')) * parseFloat(resultTotalArroba.getAttribute('data-value'))).toFixed(6));

    lucro15.innerHTML = formatNumberWithThousands((parseFloat(baseTaxa15.getAttribute('data-value')) - parseFloat(resultPontoEquilibrio.getAttribute('data-value'))).toFixed(2));
    lucro15.setAttribute('data-value', (parseFloat(baseTaxa15.getAttribute('data-value')) - parseFloat(resultPontoEquilibrio.getAttribute('data-value'))).toFixed(6));
    lucroOperacao15.innerHTML = formatNumberWithThousands(((parseFloat(lucro15.getAttribute('data-value')) * parseFloat(resultTotalArroba.getAttribute('data-value'))).toFixed(2)).replace('.', ','));
    lucroOperacao15.setAttribute('data-value', (parseFloat(lucro15.getAttribute('data-value')) * parseFloat(resultTotalArroba.getAttribute('data-value'))).toFixed(6));

    lucro16.innerHTML = formatNumberWithThousands((parseFloat(baseTaxa16.getAttribute('data-value')) - parseFloat(resultPontoEquilibrio.getAttribute('data-value'))).toFixed(2));
    lucro16.setAttribute('data-value', (parseFloat(baseTaxa16.getAttribute('data-value')) - parseFloat(resultPontoEquilibrio.getAttribute('data-value'))).toFixed(6));
    lucroOperacao16.innerHTML = formatNumberWithThousands(((parseFloat(lucro16.getAttribute('data-value')) * parseFloat(resultTotalArroba.getAttribute('data-value'))).toFixed(2)).replace('.', ','));
    lucroOperacao16.setAttribute('data-value', (parseFloat(lucro16.getAttribute('data-value')) * parseFloat(resultTotalArroba.getAttribute('data-value'))).toFixed(6));

    lucro17.innerHTML = formatNumberWithThousands((parseFloat(baseTaxa17.getAttribute('data-value')) - parseFloat(resultPontoEquilibrio.getAttribute('data-value'))).toFixed(2));
    lucro17.setAttribute('data-value', (parseFloat(baseTaxa17.getAttribute('data-value')) - parseFloat(resultPontoEquilibrio.getAttribute('data-value'))).toFixed(6));
    lucroOperacao17.innerHTML = formatNumberWithThousands(((parseFloat(lucro17.getAttribute('data-value')) * parseFloat(resultTotalArroba.getAttribute('data-value'))).toFixed(2)).replace('.', ','));
    lucroOperacao17.setAttribute('data-value', (parseFloat(lucro17.getAttribute('data-value')) * parseFloat(resultTotalArroba.getAttribute('data-value'))).toFixed(6));

    lucro18.innerHTML = formatNumberWithThousands((parseFloat(baseTaxa18.getAttribute('data-value')) - parseFloat(resultPontoEquilibrio.getAttribute('data-value'))).toFixed(2));
    lucro18.setAttribute('data-value', (parseFloat(baseTaxa18.getAttribute('data-value')) - parseFloat(resultPontoEquilibrio.getAttribute('data-value'))).toFixed(6));
    lucroOperacao18.innerHTML = formatNumberWithThousands(((parseFloat(lucro18.getAttribute('data-value')) * parseFloat(resultTotalArroba.getAttribute('data-value'))).toFixed(2)).replace('.', ','));
    lucroOperacao18.setAttribute('data-value', (parseFloat(lucro18.getAttribute('data-value')) * parseFloat(resultTotalArroba.getAttribute('data-value'))).toFixed(6));

    lucro19.innerHTML = formatNumberWithThousands((parseFloat(baseTaxa19.getAttribute('data-value')) - parseFloat(resultPontoEquilibrio.getAttribute('data-value'))).toFixed(2));
    lucro19.setAttribute('data-value', (parseFloat(baseTaxa19.getAttribute('data-value')) - parseFloat(resultPontoEquilibrio.getAttribute('data-value'))).toFixed(6));
    lucroOperacao19.innerHTML = ((parseFloat(lucro19.getAttribute('data-value')) * parseFloat(resultTotalArroba.getAttribute('data-value'))).toFixed(2)).replace('.', ',');
    lucroOperacao19.setAttribute('data-value', (parseFloat(lucro19.getAttribute('data-value')) * parseFloat(resultTotalArroba.getAttribute('data-value'))).toFixed(6));

    lucro20.innerHTML = formatNumberWithThousands((parseFloat(baseTaxa20.getAttribute('data-value')) - parseFloat(resultPontoEquilibrio.getAttribute('data-value'))).toFixed(2));
    lucro20.setAttribute('data-value', (parseFloat(baseTaxa20.getAttribute('data-value')) - parseFloat(resultPontoEquilibrio.getAttribute('data-value'))).toFixed(6));
    lucroOperacao20.innerHTML = formatNumberWithThousands(((parseFloat(lucro20.getAttribute('data-value')) * parseFloat(resultTotalArroba.getAttribute('data-value'))).toFixed(2)).replace('.', ','));
    lucroOperacao20.setAttribute('data-value', (parseFloat(lucro20.getAttribute('data-value')) * parseFloat(resultTotalArroba.getAttribute('data-value'))).toFixed(6));

    lucro21.innerHTML = formatNumberWithThousands((parseFloat(baseTaxa21.getAttribute('data-value')) - parseFloat(resultPontoEquilibrio.getAttribute('data-value'))).toFixed(2));
    lucro21.setAttribute('data-value', (parseFloat(baseTaxa21.getAttribute('data-value')) - parseFloat(resultPontoEquilibrio.getAttribute('data-value'))).toFixed(6));
    lucroOperacao21.innerHTML = formatNumberWithThousands(((parseFloat(lucro21.getAttribute('data-value')) * parseFloat(resultTotalArroba.getAttribute('data-value'))).toFixed(2)).replace('.', ','));
    lucroOperacao21.setAttribute('data-value', (parseFloat(lucro21.getAttribute('data-value')) * parseFloat(resultTotalArroba.getAttribute('data-value'))).toFixed(6));

    lucro22.innerHTML = formatNumberWithThousands((parseFloat(baseTaxa22.getAttribute('data-value')) - parseFloat(resultPontoEquilibrio.getAttribute('data-value'))).toFixed(2));
    lucro22.setAttribute('data-value', (parseFloat(baseTaxa22.getAttribute('data-value')) - parseFloat(resultPontoEquilibrio.getAttribute('data-value'))).toFixed(6));
    lucroOperacao22.innerHTML = formatNumberWithThousands(((parseFloat(lucro22.getAttribute('data-value')) * parseFloat(resultTotalArroba.getAttribute('data-value'))).toFixed(2)).replace('.', ','));
    lucroOperacao22.setAttribute('data-value', (parseFloat(lucro22.getAttribute('data-value')) * parseFloat(resultTotalArroba.getAttribute('data-value'))).toFixed(6));
}

// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------

// ############## EXECUÇÃO DAS FUNÇÕES ##############
function generateResults() {
    const inputs = document.querySelectorAll('.required');

    // Flag para verificar se todos os inputs estão preenchidos
    let allInputsFilled = true;

    // Verifica cada input
    inputs.forEach(input => {
        if (input.value.trim() === '') {
            allInputsFilled = false;
        }
    });

    // Executa as funções caso todos os campos estejam preenchidos
    if (allInputsFilled) {
        getGanhoPesoAnimal(parseFloat((periodo.value).replace(',', '.')), parseFloat((ganhoPesoDia.value).replace(',', '.')));
        getPesoSaida(parseFloat((pesoEntrada.value).replace(',', '.')), parseFloat(resultGanhoPesoAnimal.getAttribute('data-value')));
        getTotalArrobaAnimal(parseFloat((rendimento.value).replace(',', '.')), parseFloat(resultPesoSaida.getAttribute('data-value')));
        getCustoPorArroba(parseFloat((valorAnimal.value).replace(',', '.')), parseFloat(custoDiaria.value), parseFloat(periodo.value), parseFloat(resultTotalArrobaAnimal.getAttribute('data-value')));
        getGanhoPesoArroba(parseFloat(resultGanhoPesoAnimal.getAttribute('data-value')), parseFloat((rendimento.value).replace(',', '.')));
        getCustoPorLote(parseFloat((custoDiaria.value).replace(',', '.')), parseFloat(quantidade.value), parseFloat(periodo.value));
        getTotalArroba(parseFloat(quantidade.value), parseFloat((mortalidade.value).replace(',', '.')), parseFloat(resultTotalArrobaAnimal.getAttribute('data-value')));
        getInvestimentoAnimais(parseFloat(quantidade.value), parseFloat((valorAnimal.value).replace(',', '.')));
        getInvestimentoAlimentacao(parseFloat(quantidade.value), parseFloat(periodo.value), parseFloat(((custoDiaria.value).replace(',', '.')).replace(',', '.')));
        getCapitalCDI(parseFloat(resultInvestimentoAnimais.getAttribute('data-value')), parseFloat(periodo.value), resultInvestimentoAlimentacao.getAttribute('data-value'));
        getInvestimentoTotal(parseFloat(resultInvestimentoAnimais.getAttribute('data-value')), parseFloat(resultInvestimentoAlimentacao.getAttribute('data-value')), parseFloat(resultCustoCapitalCDI.getAttribute('data-value')));
        getPontoEquilibrio(parseFloat(resultInvestTotal.getAttribute('data-value')), parseFloat(resultTotalArroba.getAttribute('data-value')));
        getPesoAnimal(parseFloat(resultInvestimentoAnimais.getAttribute('data-value')), parseFloat(resultInvestTotal.getAttribute('data-value')));
        getPesoProducao(parseFloat(resultInvestimentoAlimentacao.getAttribute('data-value')), parseFloat(resultInvestTotal.getAttribute('data-value')));
        getPesoCustoCapital(parseFloat(resultCustoCapitalCDI.getAttribute('data-value')), parseFloat(resultInvestTotal.getAttribute('data-value')));
        getCotacaoB3Base(parseFloat((cotacaoB3.value).replace(',', '.')), parseFloat((baseRegiao.value).replace(',', '.')));
        getQuantidadeContratos(parseFloat(resultTotalArroba.getAttribute('data-value')));
        getResultadoArroba(parseFloat(resultCotacaoB3Base.getAttribute('data-value')), parseFloat(resultPontoEquilibrio.getAttribute('data-value')));
        getFaturamento(parseFloat(resultTotalArroba.getAttribute('data-value')), parseFloat(resultCotacaoB3Base.getAttribute('data-value')));
        getLucroOperacao(parseFloat(resultFaturamento.getAttribute('data-value')), parseFloat(resultInvestTotal.getAttribute('data-value')));
        getLucroAnimal(parseFloat(resultLucroLiquidoOperacao.getAttribute('data-value')), parseFloat(quantidade.value), parseFloat((mortalidade.value).replace(',', '.')));
        getTaxaLiquidaPeriodo(parseFloat(resultLucroLiquidoOperacao.getAttribute('data-value')), parseFloat(resultInvestTotal.getAttribute('data-value')));
        getTaxaLiquidaMes(parseFloat(resultTaxaLiquidaPeriodo.getAttribute('data-value')), parseFloat(periodo.value));
        getTaxaLiquidaAno(parseFloat(resultTaxaLiquidaMes.getAttribute('data-value')));
        getTaxasBaseB3();
        getTestesBase();

        // Encerra funções -> Fim dos resultados!
    } else {
        // Se algum input estiver vazio, exibe o alerta
        alert('Por favor, preencha todos os campos.');
    }
}

function captureTableAndDownload() {
    const options = {
        scale: 1, 
        width: 1020, 
        windowWidth: 1020, 
        windowHeight: document.getElementById('printScreen').scrollHeight
    };

    // Captura a tabela com o id 'printScreen' usando html2canvas
    html2canvas(document.getElementById('printScreen'), options).then(function(canvas) {
        const dataURL = canvas.toDataURL();

        const printWindow = window.open('', '_blank');

        printWindow.document.write('<html><head><title>Sistema de Testes de Operações da Turmada Bruta</title></head><body>');
        printWindow.document.write('<style>body { margin: 0; padding: 0; width: 1020px;} img { margin: 0; padding: 0; } img { display: block; }</style>');
        printWindow.document.write('<img src="' + dataURL + '" width="920" height="' + canvas.height + '"/>');
        printWindow.document.write('</body></html>');
        printWindow.document.close();

        printWindow.onload = function() {
            printWindow.print();
        };
    });
}

function clearFields() {
    quantidade.value = '';
    pesoEntrada.value = '';
    resultPesoSaida.innerHTML = '';
    resultGanhoPesoAnimal.innerHTML = '';
    resultCustoPorArroba.innerHTML = '';
    resultCustoPorLote.innerHTML = '';
    resultGanhoPesoArroba.innerHTML = '';
    resultTotalArrobaAnimal.innerHTML = '';
    resultTotalArroba.innerHTML = '';
    resultInvestimentoAnimais.innerHTML = '';
    resultInvestimentoAlimentacao.innerHTML = '';
    resultCustoCapitalCDI.innerHTML = '';
    resultInvestTotal.innerHTML = '';
    resultPontoEquilibrio.innerHTML = '';
    resultPesoAnimal.innerHTML = '';
    resultPesoProducao.innerHTML = '';
    resultPesoCustoCapital.innerHTML = '';
    resultCotacaoB3Base.innerHTML = '';
    resultQuantidadeContratos.innerHTML = '';
    resultResultadoArroba.innerHTML = '';
    resultFaturamento.innerHTML = '';
    resultLucroLiquidoOperacao.innerHTML = '';
    resultLucroLiquidoAnimal.innerHTML = '';
    resultTaxaLiquidaPeriodo.innerHTML = '';
    resultTaxaLiquidaMes.innerHTML = '';
    resultTaxaLiquidaAno.innerHTML = '';
    periodo.value = '';
    custoDiaria.value = '';  
    ganhoPesoDia.value = '';
    valorAnimal.value = '';
    rendimento.value = '';
    mortalidade.value = '';
    cotacaoB3.value = '';
    baseRegiao.value = '';
    baseTaxa2.innerHTML = '';
    baseTaxa3.innerHTML = '';
    baseTaxa4.innerHTML = '';
    baseTaxa5.innerHTML = '';
    baseTaxa6.innerHTML = '';
    baseTaxa7.innerHTML = '';
    baseTaxa8.innerHTML = '';
    baseTaxa9.innerHTML = '';
    baseTaxa10.innerHTML = '';
    baseTaxa11.innerHTML = '';
    baseTaxa12.innerHTML = '';
    baseTaxa13.innerHTML = '';
    baseTaxa14.innerHTML = '';
    baseTaxa15.innerHTML = '';
    baseTaxa16.innerHTML = '';
    baseTaxa17.innerHTML = '';
    baseTaxa18.innerHTML = '';
    baseTaxa19.innerHTML = '';
    baseTaxa20.innerHTML = '';
    baseTaxa21.innerHTML = '';
    baseTaxa22.innerHTML = '';
    lucro2.innerHTML = '-';
    lucroOperacao2.innerHTML = '-';
    lucro3.innerHTML = '-';
    lucroOperacao3.innerHTML = '-';
    lucro4.innerHTML = '-';
    lucroOperacao4.innerHTML = '-';
    lucro5.innerHTML = '-';
    lucroOperacao5.innerHTML = '-';
    lucro6.innerHTML = '-';
    lucroOperacao6.innerHTML = '-';
    lucro7.innerHTML = '-';
    lucroOperacao7.innerHTML = '-';
    lucro8.innerHTML = '-';
    lucroOperacao8.innerHTML = '-';
    lucro9.innerHTML = '-';
    lucroOperacao9.innerHTML = '-';
    lucro10.innerHTML = '-';
    lucroOperacao10.innerHTML = '-';
    lucro11.innerHTML = '-';
    lucroOperacao11.innerHTML = '-';
    lucro12.innerHTML = '-';
    lucroOperacao12.innerHTML = '-';
    lucro13.innerHTML = '-';
    lucroOperacao13.innerHTML = '-';
    lucro14.innerHTML = '-';
    lucroOperacao14.innerHTML = '-';
    lucro15.innerHTML = '-';
    lucroOperacao15.innerHTML = '-';
    lucro16.innerHTML = '-';
    lucroOperacao16.innerHTML = '-';
    lucro17.innerHTML = '-';
    lucroOperacao17.innerHTML = '-';
    lucro18.innerHTML = '-';
    lucroOperacao18.innerHTML = '-';
    lucro19.innerHTML = '-';
    lucroOperacao19.innerHTML = '-';
    lucro20.innerHTML = '-';
    lucroOperacao20.innerHTML = '-';
    lucro21.innerHTML = '-';
    lucroOperacao21.innerHTML = '-';
    lucro22.innerHTML = '-';
    lucroOperacao22.innerHTML = '-';
}

function test() {
    quantidade.value = 100;
    pesoEntrada.value = 420;
    periodo.value = 90;
    custoDiaria.value = 15;  
    ganhoPesoDia.value = '1,5';
    valorAnimal.value = 3200;
    rendimento.value = 56;
    mortalidade.value = 1;
    cotacaoB3.value = 265;
    baseRegiao.value = 10;
}

function formatNumberWithThousands(number) {
    // Separa a parte inteira da parte decimal
    const parts = number.toString().split('.');
    let integerPart = parts[0];
    const decimalPart = parts[1] || '';

    // Verifica se a parte inteira precisa de formatação com pontos nos milhares
    if (integerPart.length > 3) {
        integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }

    // Combina a parte inteira formatada com a parte decimal
    const formattedNumber = decimalPart ? `${integerPart},${decimalPart}` : integerPart;
    return formattedNumber;
}

// document.addEventListener("DOMContentLoaded", (e) => {
//     e.preventDefault();
//     test();
//     generateResults();
// });