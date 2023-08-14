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
    resultPesoSaida.innerHTML = x.toFixed(4);
    resultPesoSaida.setAttribute('data-value', x.toFixed(4));
}

// --- Ganho de Peso Animal (Kg)
function getGanhoPesoAnimal(periodo, ganhoPesoDia) {
    let x = periodo * ganhoPesoDia;
    resultGanhoPesoAnimal.innerHTML = x.toFixed(4);
    resultGanhoPesoAnimal.setAttribute('data-value', x.toFixed(4));
}

// --- Custo por @
function getCustoPorArroba(valorAnimal, custoDiaria, periodo, totalArrobaAnimal) {
    let x = ((valorAnimal + (custoDiaria * periodo)) / totalArrobaAnimal);
    resultCustoPorArroba.innerHTML = x.toFixed(4);
    resultCustoPorArroba.setAttribute('data-value', x.toFixed(4));
}

// --- Custo por Lote
function getCustoPorLote(custoDiaria, quantidade, periodo) {
    let x = (quantidade * custoDiaria) * periodo
    resultCustoPorLote.innerHTML = x.toFixed(4);
    resultCustoPorLote.setAttribute('data-value', x.toFixed(4));
}

// --- Ganho de Peso @
function getGanhoPesoArroba(ganhoPesoAnimal, rendimento) {
    let x = (ganhoPesoAnimal * (rendimento/100)) / 15;
    resultGanhoPesoArroba.innerHTML = x.toFixed(4);
    resultGanhoPesoArroba.setAttribute('data-value', x.toFixed(4));
}

// --- Total de @ Animal
function getTotalArrobaAnimal(pesoSaida, rendimento) {
    let x = ((pesoSaida * (rendimento/100))/ (15));
    resultTotalArrobaAnimal.innerHTML = x.toFixed(4);
    resultTotalArrobaAnimal.setAttribute('data-value', x.toFixed(4));
}

// -- Total de @
function getTotalArroba(quantidade, mortalidade, totalArrobaAnimal) {
    let x = ((quantidade - (quantidade * (mortalidade/100))) * totalArrobaAnimal);
    resultTotalArroba.innerHTML = x.toFixed(4);
    resultTotalArroba.setAttribute('data-value', x.toFixed(4));
}

// --- Investimento Animais
function getInvestimentoAnimais(quantidade, valorAnimal) {
    let x = valorAnimal * quantidade;
    resultInvestimentoAnimais.innerHTML = x.toFixed(4);
    resultInvestimentoAnimais.setAttribute('data-value', x.toFixed(4));
}

// --- Investimento Alimentação
function getInvestimentoAlimentacao(quantidade, periodo, custoDiaria) {
    let x = quantidade * periodo * custoDiaria;
    resultInvestimentoAlimentacao.innerHTML = x.toFixed(4);
    resultInvestimentoAlimentacao.setAttribute('data-value', x.toFixed(4));
}

// --- Custo de Capital CDI
function getCapitalCDI(investAnimais, periodo, investAlimentacao) {
    const juroAnimais = (investAnimais * Math.pow(1.01, (periodo / 30))) - investAnimais;
    const juroAlimentacao = (investAlimentacao * Math.pow(1.01, (periodo / 45))) - investAlimentacao;
    let x = juroAnimais + juroAlimentacao;
    resultCustoCapitalCDI.innerHTML = x.toFixed(4);
    resultCustoCapitalCDI.setAttribute('data-value', x.toFixed(4));
}

// --- Investimento Total
function getInvestimentoTotal(investAnimais, investAlimentacao, capitalCDI) {
    let x = investAnimais + investAlimentacao + capitalCDI;
    resultInvestTotal.innerHTML = x.toFixed(4);
    resultInvestTotal.setAttribute('data-value', x.toFixed(4));
}  

// --- Peso do Animal
function getPesoAnimal(investAnimais, investTotal) {
    let x = (investAnimais * 100) / investTotal;
    resultPesoAnimal.innerHTML = x.toFixed(4);
    resultPesoAnimal.setAttribute('data-value', x.toFixed(4));
}

// --- Peso da Produção
function getPesoProducao(investAlimentacao, investTotal) {
    let x = (investAlimentacao * 100) / investTotal;
    resultPesoProducao.innerHTML = x.toFixed(4);
    resultPesoProducao.setAttribute('data-value', x.toFixed(4));
}

// --- Peso do Custo de Capital
function getPesoCustoCapital(capitalCDI, investTotal) {
    let x = (capitalCDI * 100) / investTotal;
    resultPesoCustoCapital.innerHTML = x.toFixed(4);
    resultPesoCustoCapital.setAttribute('data-value', x.toFixed(4));
}

// --- Cotação B3 - Base
function getCotacaoB3Base(cotacaoB3, baseRegiao) {
    let x = cotacaoB3 - (cotacaoB3 * (baseRegiao/100));
    resultCotacaoB3Base.innerHTML = x.toFixed(4);
    resultCotacaoB3Base.setAttribute('data-value', x.toFixed(4));
}

function getQuantidadeContratos(totalArroba) {
    let x = totalArroba/330;
    resultQuantidadeContratos.innerHTML = x.toFixed(4);
    resultQuantidadeContratos.setAttribute('data-value', x.toFixed(4));
}

// --- Resultado p/ @
function getResultadoArroba(cotacaoB3Base, pontoEquilibrio) {
    let x = cotacaoB3Base - pontoEquilibrio;
    resultResultadoArroba.innerHTML = x.toFixed(4);
    resultResultadoArroba.setAttribute('data-value', x.toFixed(4));
}

// --- Faturamento
function getFaturamento(totalArroba, cotacaoB3Base) {
    let x = totalArroba * cotacaoB3Base;
    resultFaturamento.innerHTML = x.toFixed(4);
    resultFaturamento.setAttribute('data-value', x.toFixed(4));
}

// --- Lucro Líquido na Operação
function getLucroOperacao(faturamento, investTotal) {
    let x = faturamento - investTotal;
    resultLucroLiquidoOperacao.innerHTML = x.toFixed(4);
    resultLucroLiquidoOperacao.setAttribute('data-value', x.toFixed(4));
}

// --- Lucro Líquido por Animal
function getLucroAnimal(lucroOperacao, quantidade, mortalidade) {
    let x = lucroOperacao / (quantidade - (quantidade * (mortalidade/100)));
    resultLucroLiquidoAnimal.innerHTML = x.toFixed(4);
    resultLucroLiquidoAnimal.setAttribute('data-value', x.toFixed(4));
}

// --- Taxa Líquida no Período
function getTaxaLiquidaPeriodo(lucroOperacao, investTotal) {
    let x = (lucroOperacao * 100) / investTotal;
    resultTaxaLiquidaPeriodo.innerHTML = x.toFixed(4);
    resultTaxaLiquidaPeriodo.setAttribute('data-value', x.toFixed(4));
}

// --- Taxa Líquida ao Mês
function getTaxaLiquidaMes(taxaLiquidaPeriodo, periodo) {
    let x = (Math.pow((1 + (taxaLiquidaPeriodo/100)), (1/(periodo/30))) - 1)*100;
    resultTaxaLiquidaMes.innerHTML = x.toFixed(4);
    resultTaxaLiquidaMes.setAttribute('data-value', x.toFixed(6));
}

// --- Taxa Líquida ao Ano
function getTaxaLiquidaAno(taxaLiquidaMes) {
    let x = (Math.pow((1 + (taxaLiquidaMes/100)), 12) - 1)*100;
    resultTaxaLiquidaAno.innerHTML = x.toFixed(4);
    resultTaxaLiquidaAno.setAttribute('data-value', x.toFixed(4));
}

// --- Ponto de Equilíbrio
function getPontoEquilibrio(investTotal, totalArroba) {
    let x = investTotal/totalArroba;
    resultPontoEquilibrio.innerHTML = x.toFixed(4);
    resultPontoEquilibrio.setAttribute('data-value', x.toFixed(4));
}


// Taxa Base B3 - (Taxa Base B3 * (%))
function getTaxasBaseB3() {
    baseTaxa2.innerHTML = (cotacaoB3.value - (cotacaoB3.value * (td2/100))).toFixed(2);
    baseTaxa2.setAttribute('data-value', (cotacaoB3.value - (cotacaoB3.value * (td2/100))).toFixed(4));
    baseTaxa3.innerHTML = (cotacaoB3.value - (cotacaoB3.value * (td3/100))).toFixed(2);
    baseTaxa3.setAttribute('data-value', (cotacaoB3.value - (cotacaoB3.value * (td3/100))).toFixed(4));
    baseTaxa4.innerHTML = (cotacaoB3.value - (cotacaoB3.value * (td4/100))).toFixed(2);
    baseTaxa4.setAttribute('data-value', (cotacaoB3.value - (cotacaoB3.value * (td4/100))).toFixed(4));
    baseTaxa5.innerHTML = (cotacaoB3.value - (cotacaoB3.value * (td5/100))).toFixed(2);
    baseTaxa5.setAttribute('data-value', (cotacaoB3.value - (cotacaoB3.value * (td5/100))).toFixed(4));
    baseTaxa6.innerHTML = (cotacaoB3.value - (cotacaoB3.value * (td6/100))).toFixed(2);
    baseTaxa6.setAttribute('data-value', (cotacaoB3.value - (cotacaoB3.value * (td6/100))).toFixed(4));
    baseTaxa7.innerHTML = (cotacaoB3.value - (cotacaoB3.value * (td7/100))).toFixed(2);
    baseTaxa7.setAttribute('data-value', (cotacaoB3.value - (cotacaoB3.value * (td7/100))).toFixed(4));
    baseTaxa8.innerHTML = (cotacaoB3.value - (cotacaoB3.value * (td8/100))).toFixed(2);
    baseTaxa8.setAttribute('data-value', (cotacaoB3.value - (cotacaoB3.value * (td8/100))).toFixed(4));
    baseTaxa9.innerHTML = (cotacaoB3.value - (cotacaoB3.value * (td9/100))).toFixed(2);
    baseTaxa9.setAttribute('data-value', (cotacaoB3.value - (cotacaoB3.value * (td9/100))).toFixed(4));
    baseTaxa10.innerHTML = (cotacaoB3.value - (cotacaoB3.value * (td10/100))).toFixed(2);
    baseTaxa10.setAttribute('data-value', (cotacaoB3.value - (cotacaoB3.value * (td10/100))).toFixed(4));
    baseTaxa11.innerHTML = (cotacaoB3.value - (cotacaoB3.value * (td11/100))).toFixed(2);
    baseTaxa11.setAttribute('data-value', (cotacaoB3.value - (cotacaoB3.value * (td11/100))).toFixed(4));
    baseTaxa12.innerHTML = (cotacaoB3.value - (cotacaoB3.value * (td12/100))).toFixed(2);
    baseTaxa12.setAttribute('data-value', (cotacaoB3.value - (cotacaoB3.value * (td12/100))).toFixed(4));
    baseTaxa13.innerHTML = (cotacaoB3.value - (cotacaoB3.value * (td13/100))).toFixed(2);
    baseTaxa13.setAttribute('data-value', (cotacaoB3.value - (cotacaoB3.value * (td13/100))).toFixed(4));
    baseTaxa14.innerHTML = (cotacaoB3.value - (cotacaoB3.value * (td14/100))).toFixed(2);
    baseTaxa14.setAttribute('data-value', (cotacaoB3.value - (cotacaoB3.value * (td14/100))).toFixed(4));
    baseTaxa15.innerHTML = (cotacaoB3.value - (cotacaoB3.value * (td15/100))).toFixed(2);
    baseTaxa15.setAttribute('data-value', (cotacaoB3.value - (cotacaoB3.value * (td15/100))).toFixed(4));
    baseTaxa16.innerHTML = (cotacaoB3.value - (cotacaoB3.value * (td16/100))).toFixed(2);
    baseTaxa16.setAttribute('data-value', (cotacaoB3.value - (cotacaoB3.value * (td16/100))).toFixed(4));
    baseTaxa17.innerHTML = (cotacaoB3.value - (cotacaoB3.value * (td17/100))).toFixed(2);
    baseTaxa17.setAttribute('data-value', (cotacaoB3.value - (cotacaoB3.value * (td17/100))).toFixed(4));
    baseTaxa18.innerHTML = (cotacaoB3.value - (cotacaoB3.value * (td18/100))).toFixed(2);
    baseTaxa18.setAttribute('data-value', (cotacaoB3.value - (cotacaoB3.value * (td18/100))).toFixed(4));
    baseTaxa19.innerHTML = (cotacaoB3.value - (cotacaoB3.value * (td19/100))).toFixed(2);
    baseTaxa19.setAttribute('data-value', (cotacaoB3.value - (cotacaoB3.value * (td19/100))).toFixed(4));
    baseTaxa20.innerHTML = (cotacaoB3.value - (cotacaoB3.value * (td20/100))).toFixed(2);
    baseTaxa20.setAttribute('data-value', (cotacaoB3.value - (cotacaoB3.value * (td20/100))).toFixed(4));
    baseTaxa21.innerHTML = (cotacaoB3.value - (cotacaoB3.value * (td21/100))).toFixed(2);
    baseTaxa21.setAttribute('data-value', (cotacaoB3.value - (cotacaoB3.value * (td21/100))).toFixed(4));
    baseTaxa22.innerHTML = (cotacaoB3.value - (cotacaoB3.value * (td22/100))).toFixed(2);
    baseTaxa22.setAttribute('data-value', (cotacaoB3.value - (cotacaoB3.value * (td22/100))).toFixed(4));
}


function getTestesBase() {
    lucro2.innerHTML = (parseFloat(baseTaxa2.innerHTML) - parseFloat(resultPontoEquilibrio.innerHTML)).toFixed(4);
    lucro2.setAttribute('data-value', (parseFloat(baseTaxa2.innerHTML) - parseFloat(resultPontoEquilibrio.innerHTML)).toFixed(4));
    lucroOperacao2.innerHTML = (parseFloat(lucro2.innerHTML) * parseFloat(resultTotalArroba.innerHTML)).toFixed(2);
    lucroOperacao2.setAttribute('data-value', (parseFloat(lucro2.innerHTML) * parseFloat(resultTotalArroba.innerHTML)).toFixed(4));

    lucro3.innerHTML = (parseFloat(baseTaxa3.innerHTML) - parseFloat(resultPontoEquilibrio.innerHTML)).toFixed(4);
    lucro3.setAttribute('data-value', (parseFloat(baseTaxa3.innerHTML) - parseFloat(resultPontoEquilibrio.innerHTML)).toFixed(4));
    lucroOperacao3.innerHTML = (parseFloat(lucro3.innerHTML) * parseFloat(resultTotalArroba.innerHTML)).toFixed(2);
    lucroOperacao3.setAttribute('data-value', (parseFloat(lucro3.innerHTML) * parseFloat(resultTotalArroba.innerHTML)).toFixed(4));

    lucro4.innerHTML = (parseFloat(baseTaxa4.innerHTML) - parseFloat(resultPontoEquilibrio.innerHTML)).toFixed(4);
    lucro4.setAttribute('data-value', (parseFloat(baseTaxa4.innerHTML) - parseFloat(resultPontoEquilibrio.innerHTML)).toFixed(4));
    lucroOperacao4.innerHTML = (parseFloat(lucro4.innerHTML) * parseFloat(resultTotalArroba.innerHTML)).toFixed(2);
    lucroOperacao4.setAttribute('data-value', (parseFloat(lucro4.innerHTML) * parseFloat(resultTotalArroba.innerHTML)).toFixed(4));

    lucro5.innerHTML = (parseFloat(baseTaxa5.innerHTML) - parseFloat(resultPontoEquilibrio.innerHTML)).toFixed(4);
    lucro5.setAttribute('data-value', (parseFloat(baseTaxa5.innerHTML) - parseFloat(resultPontoEquilibrio.innerHTML)).toFixed(4));
    lucroOperacao5.innerHTML = (parseFloat(lucro5.innerHTML) * parseFloat(resultTotalArroba.innerHTML)).toFixed(2);
    lucroOperacao5.setAttribute('data-value', (parseFloat(lucro5.innerHTML) * parseFloat(resultTotalArroba.innerHTML)).toFixed(4));

    lucro6.innerHTML = (parseFloat(baseTaxa6.innerHTML) - parseFloat(resultPontoEquilibrio.innerHTML)).toFixed(4);
    lucro6.setAttribute('data-value', (parseFloat(baseTaxa6.innerHTML) - parseFloat(resultPontoEquilibrio.innerHTML)).toFixed(4));
    lucroOperacao6.innerHTML = (parseFloat(lucro6.innerHTML) * parseFloat(resultTotalArroba.innerHTML)).toFixed(2);
    lucroOperacao6.setAttribute('data-value', (parseFloat(lucro6.innerHTML) * parseFloat(resultTotalArroba.innerHTML)).toFixed(4));

    lucro7.innerHTML = (parseFloat(baseTaxa7.innerHTML) - parseFloat(resultPontoEquilibrio.innerHTML)).toFixed(4);
    lucro7.setAttribute('data-value', (parseFloat(baseTaxa7.innerHTML) - parseFloat(resultPontoEquilibrio.innerHTML)).toFixed(4));
    lucroOperacao7.innerHTML = (parseFloat(lucro7.innerHTML) * parseFloat(resultTotalArroba.innerHTML)).toFixed(2);
    lucroOperacao7.setAttribute('data-value', (parseFloat(lucro7.innerHTML) * parseFloat(resultTotalArroba.innerHTML)).toFixed(4));

    lucro8.innerHTML = (parseFloat(baseTaxa8.innerHTML) - parseFloat(resultPontoEquilibrio.innerHTML)).toFixed(4);
    lucro8.setAttribute('data-value', (parseFloat(baseTaxa8.innerHTML) - parseFloat(resultPontoEquilibrio.innerHTML)).toFixed(4));
    lucroOperacao8.innerHTML = (parseFloat(lucro8.innerHTML) * parseFloat(resultTotalArroba.innerHTML)).toFixed(2);
    lucroOperacao8.setAttribute('data-value', (parseFloat(lucro8.innerHTML) * parseFloat(resultTotalArroba.innerHTML)).toFixed(4));

    lucro9.innerHTML = (parseFloat(baseTaxa9.innerHTML) - parseFloat(resultPontoEquilibrio.innerHTML)).toFixed(4);
    lucro9.setAttribute('data-value', (parseFloat(baseTaxa9.innerHTML) - parseFloat(resultPontoEquilibrio.innerHTML)).toFixed(4));
    lucroOperacao9.innerHTML = (parseFloat(lucro9.innerHTML) * parseFloat(resultTotalArroba.innerHTML)).toFixed(2);
    lucroOperacao9.setAttribute('data-value', (parseFloat(lucro9.innerHTML) * parseFloat(resultTotalArroba.innerHTML)).toFixed(4));

    lucro10.innerHTML = (parseFloat(baseTaxa10.innerHTML) - parseFloat(resultPontoEquilibrio.innerHTML)).toFixed(4);
    lucro10.setAttribute('data-value', (parseFloat(baseTaxa10.innerHTML) - parseFloat(resultPontoEquilibrio.innerHTML)).toFixed(4));
    lucroOperacao10.innerHTML = (parseFloat(lucro10.innerHTML) * parseFloat(resultTotalArroba.innerHTML)).toFixed(2);
    lucroOperacao10.setAttribute('data-value', (parseFloat(lucro10.innerHTML) * parseFloat(resultTotalArroba.innerHTML)).toFixed(4));

    lucro11.innerHTML = (parseFloat(baseTaxa11.innerHTML) - parseFloat(resultPontoEquilibrio.innerHTML)).toFixed(4);
    lucro11.setAttribute('data-value', (parseFloat(baseTaxa11.innerHTML) - parseFloat(resultPontoEquilibrio.innerHTML)).toFixed(4));
    lucroOperacao11.innerHTML = (parseFloat(lucro11.innerHTML) * parseFloat(resultTotalArroba.innerHTML)).toFixed(2);
    lucroOperacao11.setAttribute('data-value', (parseFloat(lucro11.innerHTML) * parseFloat(resultTotalArroba.innerHTML)).toFixed(4));

    lucro12.innerHTML = (parseFloat(baseTaxa12.innerHTML) - parseFloat(resultPontoEquilibrio.innerHTML)).toFixed(4);
    lucro12.setAttribute('data-value', (parseFloat(baseTaxa12.innerHTML) - parseFloat(resultPontoEquilibrio.innerHTML)).toFixed(4));
    lucroOperacao12.innerHTML = (parseFloat(lucro12.innerHTML) * parseFloat(resultTotalArroba.innerHTML)).toFixed(2);
    lucroOperacao12.setAttribute('data-value', (parseFloat(lucro12.innerHTML) * parseFloat(resultTotalArroba.innerHTML)).toFixed(4));

    lucro13.innerHTML = (parseFloat(baseTaxa13.innerHTML) - parseFloat(resultPontoEquilibrio.innerHTML)).toFixed(4);
    lucro13.setAttribute('data-value', (parseFloat(baseTaxa13.innerHTML) - parseFloat(resultPontoEquilibrio.innerHTML)).toFixed(4));
    lucroOperacao13.innerHTML = (parseFloat(lucro13.innerHTML) * parseFloat(resultTotalArroba.innerHTML)).toFixed(2);
    lucroOperacao13.setAttribute('data-value', (parseFloat(lucro13.innerHTML) * parseFloat(resultTotalArroba.innerHTML)).toFixed(4));

    lucro14.innerHTML = (parseFloat(baseTaxa14.innerHTML) - parseFloat(resultPontoEquilibrio.innerHTML)).toFixed(4);
    lucro14.setAttribute('data-value', (parseFloat(baseTaxa14.innerHTML) - parseFloat(resultPontoEquilibrio.innerHTML)).toFixed(4));
    lucroOperacao14.innerHTML = (parseFloat(lucro14.innerHTML) * parseFloat(resultTotalArroba.innerHTML)).toFixed(2);
    lucroOperacao14.setAttribute('data-value', (parseFloat(lucro14.innerHTML) * parseFloat(resultTotalArroba.innerHTML)).toFixed(4));

    lucro15.innerHTML = (parseFloat(baseTaxa15.innerHTML) - parseFloat(resultPontoEquilibrio.innerHTML)).toFixed(4);
    lucro15.setAttribute('data-value', (parseFloat(baseTaxa15.innerHTML) - parseFloat(resultPontoEquilibrio.innerHTML)).toFixed(4));
    lucroOperacao15.innerHTML = (parseFloat(lucro15.innerHTML) * parseFloat(resultTotalArroba.innerHTML)).toFixed(2);
    lucroOperacao15.setAttribute('data-value', (parseFloat(lucro15.innerHTML) * parseFloat(resultTotalArroba.innerHTML)).toFixed(4));

    lucro16.innerHTML = (parseFloat(baseTaxa16.innerHTML) - parseFloat(resultPontoEquilibrio.innerHTML)).toFixed(4);
    lucro16.setAttribute('data-value', (parseFloat(baseTaxa16.innerHTML) - parseFloat(resultPontoEquilibrio.innerHTML)).toFixed(4));
    lucroOperacao16.innerHTML = (parseFloat(lucro16.innerHTML) * parseFloat(resultTotalArroba.innerHTML)).toFixed(2);
    lucroOperacao16.setAttribute('data-value', (parseFloat(lucro16.innerHTML) * parseFloat(resultTotalArroba.innerHTML)).toFixed(4));

    lucro17.innerHTML = (parseFloat(baseTaxa17.innerHTML) - parseFloat(resultPontoEquilibrio.innerHTML)).toFixed(4);
    lucro17.setAttribute('data-value', (parseFloat(baseTaxa17.innerHTML) - parseFloat(resultPontoEquilibrio.innerHTML)).toFixed(4));
    lucroOperacao17.innerHTML = (parseFloat(lucro17.innerHTML) * parseFloat(resultTotalArroba.innerHTML)).toFixed(2);
    lucroOperacao17.setAttribute('data-value', (parseFloat(lucro17.innerHTML) * parseFloat(resultTotalArroba.innerHTML)).toFixed(4));

    lucro18.innerHTML = (parseFloat(baseTaxa18.innerHTML) - parseFloat(resultPontoEquilibrio.innerHTML)).toFixed(4);
    lucro18.setAttribute('data-value', (parseFloat(baseTaxa18.innerHTML) - parseFloat(resultPontoEquilibrio.innerHTML)).toFixed(4));
    lucroOperacao18.innerHTML = (parseFloat(lucro18.innerHTML) * parseFloat(resultTotalArroba.innerHTML)).toFixed(2);
    lucroOperacao18.setAttribute('data-value', (parseFloat(lucro18.innerHTML) * parseFloat(resultTotalArroba.innerHTML)).toFixed(4));

    lucro19.innerHTML = (parseFloat(baseTaxa19.innerHTML) - parseFloat(resultPontoEquilibrio.innerHTML)).toFixed(4);
    lucro19.setAttribute('data-value', (parseFloat(baseTaxa19.innerHTML) - parseFloat(resultPontoEquilibrio.innerHTML)).toFixed(4));
    lucroOperacao19.innerHTML = (parseFloat(lucro19.innerHTML) * parseFloat(resultTotalArroba.innerHTML)).toFixed(2);
    lucroOperacao19.setAttribute('data-value', (parseFloat(lucro19.innerHTML) * parseFloat(resultTotalArroba.innerHTML)).toFixed(4));

    lucro20.innerHTML = (parseFloat(baseTaxa20.innerHTML) - parseFloat(resultPontoEquilibrio.innerHTML)).toFixed(4);
    lucro20.setAttribute('data-value', (parseFloat(baseTaxa20.innerHTML) - parseFloat(resultPontoEquilibrio.innerHTML)).toFixed(4));
    lucroOperacao20.innerHTML = (parseFloat(lucro20.innerHTML) * parseFloat(resultTotalArroba.innerHTML)).toFixed(2);
    lucroOperacao20.setAttribute('data-value', (parseFloat(lucro20.innerHTML) * parseFloat(resultTotalArroba.innerHTML)).toFixed(4));

    lucro21.innerHTML = (parseFloat(baseTaxa21.innerHTML) - parseFloat(resultPontoEquilibrio.innerHTML)).toFixed(4);
    lucro21.setAttribute('data-value', (parseFloat(baseTaxa21.innerHTML) - parseFloat(resultPontoEquilibrio.innerHTML)).toFixed(4));
    lucroOperacao21.innerHTML = (parseFloat(lucro21.innerHTML) * parseFloat(resultTotalArroba.innerHTML)).toFixed(2);
    lucroOperacao21.setAttribute('data-value', (parseFloat(lucro21.innerHTML) * parseFloat(resultTotalArroba.innerHTML)).toFixed(4));

    lucro22.innerHTML = (parseFloat(baseTaxa22.innerHTML) - parseFloat(resultPontoEquilibrio.innerHTML)).toFixed(4);
    lucro22.setAttribute('data-value', (parseFloat(baseTaxa22.innerHTML) - parseFloat(resultPontoEquilibrio.innerHTML)).toFixed(4));
    lucroOperacao22.innerHTML = (parseFloat(lucro22.innerHTML) * parseFloat(resultTotalArroba.innerHTML)).toFixed(2);
    lucroOperacao22.setAttribute('data-value', (parseFloat(lucro22.innerHTML) * parseFloat(resultTotalArroba.innerHTML)).toFixed(4));
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
        getGanhoPesoAnimal(parseFloat(periodo.value), parseFloat(ganhoPesoDia.value));
        getPesoSaida(parseFloat(pesoEntrada.value), parseFloat(resultGanhoPesoAnimal.getAttribute('data-value')));
        getTotalArrobaAnimal(parseFloat(rendimento.value), parseFloat(resultPesoSaida.getAttribute('data-value')));
        getCustoPorArroba(parseFloat(valorAnimal.value), parseFloat(custoDiaria.value), parseFloat(periodo.value), parseFloat(resultTotalArrobaAnimal.getAttribute('data-value')));
        getGanhoPesoArroba(parseFloat(resultGanhoPesoAnimal.getAttribute('data-value')), parseFloat(rendimento.value));
        getCustoPorLote(parseFloat(custoDiaria.value), parseFloat(quantidade.value), parseFloat(periodo.value));
        getTotalArroba(parseFloat(quantidade.value), parseFloat(mortalidade.value), parseFloat(resultTotalArrobaAnimal.getAttribute('data-value')));
        getInvestimentoAnimais(parseFloat(quantidade.value), parseFloat(valorAnimal.value));
        getInvestimentoAlimentacao(parseFloat(quantidade.value), parseFloat(periodo.value), parseFloat(custoDiaria.value));
        getCapitalCDI(parseFloat(resultInvestimentoAnimais.getAttribute('data-value')), parseFloat(periodo.value), resultInvestimentoAlimentacao.getAttribute('data-value'));
        getInvestimentoTotal(parseFloat(resultInvestimentoAnimais.getAttribute('data-value')), parseFloat(resultInvestimentoAlimentacao.getAttribute('data-value')), parseFloat(resultCustoCapitalCDI.getAttribute('data-value')));
        getPontoEquilibrio(parseFloat(resultInvestTotal.getAttribute('data-value')), parseFloat(resultTotalArroba.getAttribute('data-value')));
        getPesoAnimal(parseFloat(resultInvestimentoAnimais.getAttribute('data-value')), parseFloat(resultInvestTotal.getAttribute('data-value')));
        getPesoProducao(parseFloat(resultInvestimentoAlimentacao.getAttribute('data-value')), parseFloat(resultInvestTotal.getAttribute('data-value')));
        getPesoCustoCapital(parseFloat(resultCustoCapitalCDI.getAttribute('data-value')), parseFloat(resultInvestTotal.getAttribute('data-value')));
        getCotacaoB3Base(parseFloat(cotacaoB3.value), parseFloat(baseRegiao.value));
        getQuantidadeContratos(parseFloat(resultTotalArroba.getAttribute('data-value')));
        getResultadoArroba(parseFloat(resultCotacaoB3Base.getAttribute('data-value')), parseFloat(resultPontoEquilibrio.getAttribute('data-value')));
        getFaturamento(parseFloat(resultTotalArroba.getAttribute('data-value')), parseFloat(resultCotacaoB3Base.getAttribute('data-value')));
        getLucroOperacao(parseFloat(resultFaturamento.getAttribute('data-value')), parseFloat(resultInvestTotal.getAttribute('data-value')));
        getLucroAnimal(parseFloat(resultLucroLiquidoOperacao.getAttribute('data-value')), parseFloat(quantidade.value), parseFloat(mortalidade.value));
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
    // Captura a tabela com o id 'myTable' usando html2canvas
    html2canvas(document.getElementById('printScreen')).then(function(canvas) {
        // Convert canvas content to an image (data URL)
        const dataURL = canvas.toDataURL();

        // Open a new window or tab
        const printWindow = window.open('', '_blank');

        // Write content to the new window or tab
        printWindow.document.write('<html><head><title>Sistema de Testes de Operações da Turmada Bruta</title></head><body>');
        printWindow.document.write('<style>body, img { margin: 0; padding: 0; } img { display: block; }</style>');
        printWindow.document.write('<img src="' + dataURL + '" width="900px" height="' + canvas.height + '"/>');
        printWindow.document.write('</body></html>');
        printWindow.document.close();

        // Wait for the content to load and then trigger the print
        printWindow.onload = function() {
            printWindow.print();
        };
    });
}

function test() {
    quantidade.value = 100;
    pesoEntrada.value = 420;
    periodo.value = 90;
    custoDiaria.value = 15;  
    ganhoPesoDia.value = 1.5;
    valorAnimal.value = 3200;
    rendimento.value = 56;
    mortalidade.value = 1;
    cotacaoB3.value = 265;
    baseRegiao.value = 10;
}

document.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault();
    // test();
    // generateResults();
});