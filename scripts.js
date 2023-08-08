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
const cotacaoB3Base = document.querySelector('#cotacao-b3-base');
const resultadoArroba = document.querySelector('#resultado-arroba');
const faturamento = document.querySelector('#faturamento');
const lucroLiquidoOperacao = document.querySelector('#lucro-liquido-operacao');
const lucroLiquidoAnimal = document.querySelector('#lucro-liquido-animal');
const taxaLiquidaPeriodo = document.querySelector('#taxa-liquida-periodo');
const taxaLiquidaMes = document.querySelector('#taxa-liquida-mes');
const taxaLiquidaAno = document.querySelector('#taxa-liquida-ano');;
    
// ####################### FUNÇÕES #######################    
// --- Peso Saída (Kg)
function getPesoSaida(pesoEntrada, ganhoPesoAnimal) {
    const pesoSaida = pesoEntrada + ganhoPesoAnimal;
    resultPesoSaida.innerHTML = pesoSaida;
}

// --- Ganho de Peso Animal (Kg)
function getGanhoPesoAnimal(periodo, ganhoPesoDia) {
    const ganhoPesoAnimal = periodo*ganhoPesoDia;
    resultGanhoPesoAnimal.innerHTML = ganhoPesoAnimal;
}

// --- Custo por @
function getCustoPorArroba(valorAnimal, custoDiaria, periodo, totalArrobaAnimal) {
    const custoPorArroba = (valorAnimal + (custoDiaria * periodo)) / totalArrobaAnimal;
    resultCustoPorArroba.innerHTML = custoPorArroba.toFixed(2);
}

// --- Custo por Lote
function getCustoPorLote(custoDiaria, quantidade, periodo) {
    const custoPorLote = (quantidade * custoDiaria) * periodo;
    resultCustoPorLote.innerHTML = custoPorLote;
}

// --- Ganho de Peso @
function getGanhoPesoArroba(ganhoPesoAnimal, rendimento) {
    const ganhoPesoArroba = (ganhoPesoAnimal * (rendimento/100)) / 15;
    resultGanhoPesoArroba.innerHTML = ganhoPesoArroba.toFixed(2);
}

// --- Total de @ Animal
function getTotalArrobaAnimal(pesoSaida, rendimento) {
    const totalArrobaAnimal = (pesoSaida * (rendimento/100))/ (15);
    resultTotalArrobaAnimal.innerHTML = totalArrobaAnimal.toFixed(2);
}

// -- Total de @
function getTotalArroba(quantidade, mortalidade, totalArrobaAnimal) {
    const totalArroba = (quantidade - (quantidade * (mortalidade/100))) * totalArrobaAnimal;
    resultTotalArroba.innerHTML = totalArroba.toFixed(2);
}

// --- Investimento Animais
function getInvestimentoAnimais(quantidade, valorAnimal) {
    const investimentoAnimais = valorAnimal * quantidade;
    resultInvestimentoAnimais.innerHTML = investimentoAnimais;
}

// --- Investimento Alimentação
function getInvestimentoAlimentacao(quantidade, periodo, custoDiaria) {
    const investimentoAlimentacao = quantidade * periodo * custoDiaria;
    resultInvestimentoAlimentacao.innerHTML = investimentoAlimentacao;
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
function getCotacaoB3Base() {
    
}

// --- Resultado p/ @
function getResultadoArroba() {
    
}

// --- Faturamento
function getFaturamento() {
    
}

// --- Lucro Líquido na Operação
function getLucroOperacao() {
    
}

// --- Lucro Líquido por Animal
function getLucroAnimal() {
    
}

// --- Taxa Líquida no Período
function getLucroPeriodo() {
    
}

// --- Taxa Líquida ao Mês
function getLucroMes() {
    
}

// --- Taxa Líquida ao Ano
function getLucroAno() {
    
}

// --- Ponto de Equilíbrio
function getPontoEquilibrio(investTotal, totalArroba) {
    const pontoEquilibrio = investTotal/totalArroba;
    resultPontoEquilibrio.innerHTML = pontoEquilibrio.toFixed(2);
}

// ############## EXECUÇÃO DAS FUNÇÕES ##############
function generateResults() {
    const inputs = document.querySelectorAll('.input-item');

    // Flag para verificar se todos os inputs estão preenchidos
    const allInputsFilled = true;

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
        // Encerra funções -> Fim dos resultados!
    } else {
        // Se algum input estiver vazio, exibe o alerta
        alert('Por favor, preencha todos os campos.');
    }
}
