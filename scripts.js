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
const resultResultadoArroba = document.querySelector('#resultado-arroba');
const resultFaturamento = document.querySelector('#faturamento');
const resultLucroLiquidoOperacao = document.querySelector('#lucro-liquido-operacao');
const resultLucroLiquidoAnimal = document.querySelector('#lucro-liquido-animal');
const resultTaxaLiquidaPeriodo = document.querySelector('#taxa-liquida-periodo');
const resultTaxaLiquidaMes = document.querySelector('#taxa-liquida-mes');
const resultTaxaLiquidaAno = document.querySelector('#taxa-liquida-ano');;
    
// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------

// ####################### FUNÇÕES #######################    
// --- Peso Saída (Kg)
function getPesoSaida(pesoEntrada, ganhoPesoAnimal) {
    resultPesoSaida.innerHTML = pesoEntrada + ganhoPesoAnimal;
}

// --- Ganho de Peso Animal (Kg)
function getGanhoPesoAnimal(periodo, ganhoPesoDia) {
    resultGanhoPesoAnimal.innerHTML = periodo * ganhoPesoDia;
}

// --- Custo por @
function getCustoPorArroba(valorAnimal, custoDiaria, periodo, totalArrobaAnimal) {
    resultCustoPorArroba.innerHTML = ((valorAnimal + (custoDiaria * periodo)) / totalArrobaAnimal).toFixed(2);
}

// --- Custo por Lote
function getCustoPorLote(custoDiaria, quantidade, periodo) {
    resultCustoPorLote.innerHTML = (quantidade * custoDiaria) * periodo;
}

// --- Ganho de Peso @
function getGanhoPesoArroba(ganhoPesoAnimal, rendimento) {
    resultGanhoPesoArroba.innerHTML = ((ganhoPesoAnimal * (rendimento/100)) / 15).toFixed(2);
}

// --- Total de @ Animal
function getTotalArrobaAnimal(pesoSaida, rendimento) {
    resultTotalArrobaAnimal.innerHTML = ((pesoSaida * (rendimento/100))/ (15)).toFixed(2);
}

// -- Total de @
function getTotalArroba(quantidade, mortalidade, totalArrobaAnimal) {
    resultTotalArroba.innerHTML = ((quantidade - (quantidade * (mortalidade/100))) * totalArrobaAnimal).toFixed(2);
}

// --- Investimento Animais
function getInvestimentoAnimais(quantidade, valorAnimal) {
    resultInvestimentoAnimais.innerHTML = (valorAnimal * quantidade.toFixed(2));
}

// --- Investimento Alimentação
function getInvestimentoAlimentacao(quantidade, periodo, custoDiaria) {
    resultInvestimentoAlimentacao.innerHTML = (quantidade * periodo * custoDiaria).toFixed(2);
}

// --- Custo de Capital CDI
function getCapitalCDI(investAnimais, periodo, investAlimentacao) {
    // Cálculo do valor futuro do primeiro investimento após 30 dias
    const juroAnimais = (investAnimais * Math.pow(1.01, (periodo / 30))) - investAnimais;
    // Cálculo do valor futuro do segundo investimento após 45 dias
    const juroAlimentacao = (investAlimentacao * Math.pow(1.01, (periodo / 45))) - investAlimentacao;
    // Resultado final
    const capitalCDI = juroAnimais + juroAlimentacao;

    resultCustoCapitalCDI.innerHTML = capitalCDI.toFixed(2);
}

// --- Investimento Total
function getInvestimentoTotal(investAnimais, investAlimentacao, capitalCDI) {
    resultInvestTotal.innerHTML = (investAnimais + investAlimentacao + capitalCDI).toFixed(2);
}   

// --- Peso do Animal
function getPesoAnimal(investAnimais, investTotal) {
    resultPesoAnimal.innerHTML = ((investAnimais * 100) / investTotal).toFixed(2);
}

// --- Peso da Produção
function getPesoProducao(investAlimentacao, investTotal) {
    resultPesoProducao.innerHTML = ((investAlimentacao * 100) / investTotal).toFixed(2);
}

// --- Peso do Custo de Capital
function getPesoCustoCapital(capitalCDI, investTotal) {
    resultPesoCustoCapital.innerHTML = ((capitalCDI * 100) / investTotal).toFixed(2);
}

// --- Cotação B3 - Base
function getCotacaoB3Base(cotacaoB3, baseRegiao) {
    resultCotacaoB3Base.innerHTML = (cotacaoB3 - (cotacaoB3 * (baseRegiao/100))).toFixed(2);
}

// --- Resultado p/ @
function getResultadoArroba(cotacaoB3Base, pontoEquilibrio) {
    resultResultadoArroba.innerHTML = (cotacaoB3Base - pontoEquilibrio).toFixed(2);
}

// --- Faturamento
function getFaturamento(totalArroba, cotacaoB3Base) {
    resultFaturamento.innerHTML = (totalArroba * cotacaoB3Base).toFixed(2);
}

// --- Lucro Líquido na Operação
function getLucroOperacao(faturamento, investTotal) {
    resultLucroLiquidoOperacao.innerHTML = (faturamento - investTotal).toFixed(2);
}

// --- Lucro Líquido por Animal
function getLucroAnimal(lucroOperacao, quantidade, mortalidade) {
    resultLucroLiquidoAnimal.innerHTML = (lucroOperacao / (quantidade - (quantidade * (mortalidade/100)))).toFixed(2);
}

// --- Taxa Líquida no Período
function getTaxaLiquidaPeriodo(lucroOperacao, investTotal) {
    resultTaxaLiquidaPeriodo.innerHTML = ((lucroOperacao * 100) / investTotal).toFixed(2);
}

// --- Taxa Líquida ao Mês
function getTaxaLiquidaMes(taxaLiquidaPeriodo, periodo) {
    resultTaxaLiquidaMes.innerHTML = ((Math.pow((1 + (taxaLiquidaPeriodo/100)), (1/(periodo/30))) - 1)*100).toFixed(4);
}

// --- Taxa Líquida ao Ano
function getTaxaLiquidaAno(taxaLiquidaMes) {
    resultTaxaLiquidaAno.innerHTML = ((Math.pow((1 + (taxaLiquidaMes/100)), 12) - 1)*100).toFixed(2);
}

// --- Ponto de Equilíbrio
function getPontoEquilibrio(investTotal, totalArroba) {
    resultPontoEquilibrio.innerHTML = (investTotal/totalArroba).toFixed(2);
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
        getPesoSaida(parseFloat(pesoEntrada.value), parseFloat(resultGanhoPesoAnimal.innerHTML));
        getTotalArrobaAnimal(parseFloat(rendimento.value), parseFloat(resultPesoSaida.innerHTML));
        getCustoPorArroba(parseFloat(valorAnimal.value), parseFloat(custoDiaria.value), parseFloat(periodo.value), parseFloat(resultTotalArrobaAnimal.innerHTML));
        getGanhoPesoArroba(parseFloat(resultGanhoPesoAnimal.innerHTML), parseFloat(rendimento.value));
        getCustoPorLote(parseFloat(custoDiaria.value), parseFloat(quantidade.value), parseFloat(periodo.value));
        getTotalArroba(parseFloat(quantidade.value), parseFloat(mortalidade.value), parseFloat(resultTotalArrobaAnimal.innerHTML));
        getInvestimentoAnimais(parseFloat(quantidade.value), parseFloat(valorAnimal.value));
        getInvestimentoAlimentacao(parseFloat(quantidade.value), parseFloat(periodo.value), parseFloat(custoDiaria.value));
        getCapitalCDI(parseFloat(resultInvestimentoAnimais.innerHTML), parseFloat(periodo.value), resultInvestimentoAlimentacao.innerHTML);
        getInvestimentoTotal(parseFloat(resultInvestimentoAnimais.innerHTML), parseFloat(resultInvestimentoAlimentacao.innerHTML), parseFloat(resultCustoCapitalCDI.innerHTML));
        getPontoEquilibrio(parseFloat(resultInvestTotal.innerHTML), parseFloat(resultTotalArroba.innerHTML));
        getPesoAnimal(parseFloat(resultInvestimentoAnimais.innerHTML), parseFloat(resultInvestTotal.innerHTML));
        getPesoProducao(parseFloat(resultInvestimentoAlimentacao.innerHTML), parseFloat(resultInvestTotal.innerHTML));
        getPesoCustoCapital(parseFloat(resultCustoCapitalCDI.innerHTML), parseFloat(resultInvestTotal.innerHTML));
        getCotacaoB3Base(parseFloat(cotacaoB3.value), parseFloat(baseRegiao.value));
        getResultadoArroba(parseFloat(resultCotacaoB3Base.innerHTML), parseFloat(resultPontoEquilibrio.innerHTML))
        getFaturamento(parseFloat(resultTotalArroba.innerHTML), parseFloat(resultCotacaoB3Base.innerHTML))
        getLucroOperacao(parseFloat(resultFaturamento.innerHTML), parseFloat(resultInvestTotal.innerHTML))
        getLucroAnimal(parseFloat(resultLucroLiquidoOperacao.innerHTML), parseFloat(quantidade.value), parseFloat(mortalidade.value))
        getTaxaLiquidaPeriodo(parseFloat(resultLucroLiquidoOperacao.innerHTML), parseFloat(resultInvestTotal.innerHTML))
        getTaxaLiquidaMes(parseFloat(resultTaxaLiquidaPeriodo.innerHTML), parseFloat(periodo.value))
        getTaxaLiquidaAno(parseFloat(resultTaxaLiquidaMes.innerHTML))
        
        // Encerra funções -> Fim dos resultados!
    } else {
        // Se algum input estiver vazio, exibe o alerta
        alert('Por favor, preencha todos os campos.');
    }
}
