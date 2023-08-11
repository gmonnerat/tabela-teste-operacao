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
const td2 = document.querySelector('.td-2').innerHTML;
const baseTaxa2 = document.querySelector('.base-taxa-2');
const td3 = document.querySelector('.td-3').innerHTML;
const baseTaxa3 = document.querySelector('.base-taxa-3');
const td4 = document.querySelector('.td-4').innerHTML;
const baseTaxa4 = document.querySelector('.base-taxa-4');
const td5 = document.querySelector('.td-5').innerHTML;
const baseTaxa5 = document.querySelector('.base-taxa-5');
const td6 = document.querySelector('.td-6').innerHTML;
const baseTaxa6 = document.querySelector('.base-taxa-6');
const td7 = document.querySelector('.td-7').innerHTML;
const baseTaxa7 = document.querySelector('.base-taxa-7');
const td8 = document.querySelector('.td-8').innerHTML;
const baseTaxa8 = document.querySelector('.base-taxa-8');
const td9 = document.querySelector('.td-9').innerHTML;
const baseTaxa9 = document.querySelector('.base-taxa-9');
const td10 = document.querySelector('.td-10').innerHTML;
const baseTaxa10 = document.querySelector('.base-taxa-10');
const td11 = document.querySelector('.td-11').innerHTML;
const baseTaxa11 = document.querySelector('.base-taxa-11');
const td12 = document.querySelector('.td-12').innerHTML;
const baseTaxa12 = document.querySelector('.base-taxa-12');
const td13 = document.querySelector('.td-13').innerHTML;
const baseTaxa13 = document.querySelector('.base-taxa-13');
const td14 = document.querySelector('.td-14').innerHTML;
const baseTaxa14 = document.querySelector('.base-taxa-14');
const td15 = document.querySelector('.td-15').innerHTML;
const baseTaxa15 = document.querySelector('.base-taxa-15');
const td16 = document.querySelector('.td-16').innerHTML;
const baseTaxa16 = document.querySelector('.base-taxa-16');
const td17 = document.querySelector('.td-17').innerHTML;
const baseTaxa17 = document.querySelector('.base-taxa-17');
const td18 = document.querySelector('.td-18').innerHTML;
const baseTaxa18 = document.querySelector('.base-taxa-18');
const td19 = document.querySelector('.td-19').innerHTML;
const baseTaxa19 = document.querySelector('.base-taxa-19');
const td20 = document.querySelector('.td-20').innerHTML;
const baseTaxa20 = document.querySelector('.base-taxa-20');
const td21 = document.querySelector('.td-21').innerHTML;
const baseTaxa21 = document.querySelector('.base-taxa-21');
const td22 = document.querySelector('.td-22').innerHTML;
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

function getQuantidadeContratos(totalArroba) {
    resultQuantidadeContratos.innerHTML = totalArroba/330;
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

// Taxa Base B3 - (Taxa Base B3 * (%))
function getTaxasBaseB3() {
    baseTaxa2.innerHTML = (cotacaoB3.value - (cotacaoB3.value * (td2/100))).toFixed(2);
    baseTaxa3.innerHTML = (cotacaoB3.value - (cotacaoB3.value * (td3/100))).toFixed(2);
    baseTaxa4.innerHTML = (cotacaoB3.value - (cotacaoB3.value * (td4/100))).toFixed(2);
    baseTaxa5.innerHTML = (cotacaoB3.value - (cotacaoB3.value * (td5/100))).toFixed(2);
    baseTaxa6.innerHTML = (cotacaoB3.value - (cotacaoB3.value * (td6/100))).toFixed(2);
    baseTaxa7.innerHTML = (cotacaoB3.value - (cotacaoB3.value * (td7/100))).toFixed(2);
    baseTaxa8.innerHTML = (cotacaoB3.value - (cotacaoB3.value * (td8/100))).toFixed(2);
    baseTaxa9.innerHTML = (cotacaoB3.value - (cotacaoB3.value * (td9/100))).toFixed(2);
    baseTaxa10.innerHTML = (cotacaoB3.value - (cotacaoB3.value * (td10/100))).toFixed(2);
    baseTaxa11.innerHTML = (cotacaoB3.value - (cotacaoB3.value * (td11/100))).toFixed(2);
    baseTaxa11.innerHTML = (cotacaoB3.value - (cotacaoB3.value * (td11/100))).toFixed(2);
    baseTaxa12.innerHTML = (cotacaoB3.value - (cotacaoB3.value * (td12/100))).toFixed(2);
    baseTaxa13.innerHTML = (cotacaoB3.value - (cotacaoB3.value * (td13/100))).toFixed(2);
    baseTaxa14.innerHTML = (cotacaoB3.value - (cotacaoB3.value * (td14/100))).toFixed(2);
    baseTaxa15.innerHTML = (cotacaoB3.value - (cotacaoB3.value * (td15/100))).toFixed(2);
    baseTaxa16.innerHTML = (cotacaoB3.value - (cotacaoB3.value * (td16/100))).toFixed(2);
    baseTaxa17.innerHTML = (cotacaoB3.value - (cotacaoB3.value * (td17/100))).toFixed(2);
    baseTaxa18.innerHTML = (cotacaoB3.value - (cotacaoB3.value * (td18/100))).toFixed(2);
    baseTaxa19.innerHTML = (cotacaoB3.value - (cotacaoB3.value * (td19/100))).toFixed(2);
    baseTaxa20.innerHTML = (cotacaoB3.value - (cotacaoB3.value * (td20/100))).toFixed(2);
    baseTaxa21.innerHTML = (cotacaoB3.value - (cotacaoB3.value * (td21/100))).toFixed(2);
    baseTaxa22.innerHTML = (cotacaoB3.value - (cotacaoB3.value * (td22/100))).toFixed(2);
}

function getTestesBase() {
    lucro2.innerHTML = (parseFloat(baseTaxa2.innerHTML) - parseFloat(resultPontoEquilibrio.innerHTML)).toFixed(2);
    lucroOperacao2.innerHTML = (parseFloat(lucro2.innerHTML) * parseFloat(resultTotalArroba.innerHTML)).toFixed(2);

    lucro3.innerHTML = (parseFloat(baseTaxa3.innerHTML) - parseFloat(resultPontoEquilibrio.innerHTML)).toFixed(2);
    lucroOperacao3.innerHTML = (parseFloat(lucro3.innerHTML) * parseFloat(resultTotalArroba.innerHTML)).toFixed(2);

    lucro4.innerHTML = (parseFloat(baseTaxa4.innerHTML) - parseFloat(resultPontoEquilibrio.innerHTML)).toFixed(2);
    lucroOperacao4.innerHTML = (parseFloat(lucro4.innerHTML) * parseFloat(resultTotalArroba.innerHTML)).toFixed(2);

    lucro5.innerHTML = (parseFloat(baseTaxa5.innerHTML) - parseFloat(resultPontoEquilibrio.innerHTML)).toFixed(2);
    lucroOperacao5.innerHTML = (parseFloat(lucro5.innerHTML) * parseFloat(resultTotalArroba.innerHTML)).toFixed(2);

    lucro5.innerHTML = (parseFloat(baseTaxa5.innerHTML) - parseFloat(resultPontoEquilibrio.innerHTML)).toFixed(2);
    lucroOperacao5.innerHTML = (parseFloat(lucro5.innerHTML) * parseFloat(resultTotalArroba.innerHTML)).toFixed(2);

    lucro6.innerHTML = (parseFloat(baseTaxa6.innerHTML) - parseFloat(resultPontoEquilibrio.innerHTML)).toFixed(2);
    lucroOperacao6.innerHTML = (parseFloat(lucro6.innerHTML) * parseFloat(resultTotalArroba.innerHTML)).toFixed(2);

    lucro7.innerHTML = (parseFloat(baseTaxa7.innerHTML) - parseFloat(resultPontoEquilibrio.innerHTML)).toFixed(2);
    lucroOperacao7.innerHTML = (parseFloat(lucro7.innerHTML) * parseFloat(resultTotalArroba.innerHTML)).toFixed(2);

    lucro8.innerHTML = (parseFloat(baseTaxa8.innerHTML) - parseFloat(resultPontoEquilibrio.innerHTML)).toFixed(2);
    lucroOperacao8.innerHTML = (parseFloat(lucro8.innerHTML) * parseFloat(resultTotalArroba.innerHTML)).toFixed(2);

    lucro9.innerHTML = (parseFloat(baseTaxa9.innerHTML) - parseFloat(resultPontoEquilibrio.innerHTML)).toFixed(2);
    lucroOperacao9.innerHTML = (parseFloat(lucro9.innerHTML) * parseFloat(resultTotalArroba.innerHTML)).toFixed(2);

    lucro10.innerHTML = (parseFloat(baseTaxa10.innerHTML) - parseFloat(resultPontoEquilibrio.innerHTML)).toFixed(2);
    lucroOperacao10.innerHTML = (parseFloat(lucro10.innerHTML) * parseFloat(resultTotalArroba.innerHTML)).toFixed(2);

    lucro11.innerHTML = (parseFloat(baseTaxa11.innerHTML) - parseFloat(resultPontoEquilibrio.innerHTML)).toFixed(2);
    lucroOperacao11.innerHTML = (parseFloat(lucro11.innerHTML) * parseFloat(resultTotalArroba.innerHTML)).toFixed(2);

    lucro12.innerHTML = (parseFloat(baseTaxa12.innerHTML) - parseFloat(resultPontoEquilibrio.innerHTML)).toFixed(2);
    lucroOperacao12.innerHTML = (parseFloat(lucro12.innerHTML) * parseFloat(resultTotalArroba.innerHTML)).toFixed(2);

    lucro14.innerHTML = (parseFloat(baseTaxa14.innerHTML) - parseFloat(resultPontoEquilibrio.innerHTML)).toFixed(2);
    lucroOperacao14.innerHTML = (parseFloat(lucro14.innerHTML) * parseFloat(resultTotalArroba.innerHTML)).toFixed(2);

    lucro13.innerHTML = (parseFloat(baseTaxa13.innerHTML) - parseFloat(resultPontoEquilibrio.innerHTML)).toFixed(2);
    lucroOperacao13.innerHTML = (parseFloat(lucro13.innerHTML) * parseFloat(resultTotalArroba.innerHTML)).toFixed(2);

    lucro15.innerHTML = (parseFloat(baseTaxa15.innerHTML) - parseFloat(resultPontoEquilibrio.innerHTML)).toFixed(2);
    lucroOperacao15.innerHTML = (parseFloat(lucro15.innerHTML) * parseFloat(resultTotalArroba.innerHTML)).toFixed(2);

    lucro16.innerHTML = (parseFloat(baseTaxa16.innerHTML) - parseFloat(resultPontoEquilibrio.innerHTML)).toFixed(2);
    lucroOperacao16.innerHTML = (parseFloat(lucro16.innerHTML) * parseFloat(resultTotalArroba.innerHTML)).toFixed(2);

    lucro17.innerHTML = (parseFloat(baseTaxa17.innerHTML) - parseFloat(resultPontoEquilibrio.innerHTML)).toFixed(2);
    lucroOperacao17.innerHTML = (parseFloat(lucro17.innerHTML) * parseFloat(resultTotalArroba.innerHTML)).toFixed(2);

    lucro18.innerHTML = (parseFloat(baseTaxa18.innerHTML) - parseFloat(resultPontoEquilibrio.innerHTML)).toFixed(2);
    lucroOperacao18.innerHTML = (parseFloat(lucro18.innerHTML) * parseFloat(resultTotalArroba.innerHTML)).toFixed(2);

    lucro19.innerHTML = (parseFloat(baseTaxa19.innerHTML) - parseFloat(resultPontoEquilibrio.innerHTML)).toFixed(2);
    lucroOperacao19.innerHTML = (parseFloat(lucro19.innerHTML) * parseFloat(resultTotalArroba.innerHTML)).toFixed(2);

    lucro20.innerHTML = (parseFloat(baseTaxa20.innerHTML) - parseFloat(resultPontoEquilibrio.innerHTML)).toFixed(2);
    lucroOperacao20.innerHTML = (parseFloat(lucro20.innerHTML) * parseFloat(resultTotalArroba.innerHTML)).toFixed(2);

    lucro21.innerHTML = (parseFloat(baseTaxa21.innerHTML) - parseFloat(resultPontoEquilibrio.innerHTML)).toFixed(2);
    lucroOperacao21.innerHTML = (parseFloat(lucro21.innerHTML) * parseFloat(resultTotalArroba.innerHTML)).toFixed(2);

    lucro22.innerHTML = (parseFloat(baseTaxa22.innerHTML) - parseFloat(resultPontoEquilibrio.innerHTML)).toFixed(2);
    lucroOperacao22.innerHTML = (parseFloat(lucro22.innerHTML) * parseFloat(resultTotalArroba.innerHTML)).toFixed(2);
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
        getQuantidadeContratos(parseFloat(resultTotalArroba.innerHTML));
        getResultadoArroba(parseFloat(resultCotacaoB3Base.innerHTML), parseFloat(resultPontoEquilibrio.innerHTML));
        getFaturamento(parseFloat(resultTotalArroba.innerHTML), parseFloat(resultCotacaoB3Base.innerHTML));
        getLucroOperacao(parseFloat(resultFaturamento.innerHTML), parseFloat(resultInvestTotal.innerHTML));
        getLucroAnimal(parseFloat(resultLucroLiquidoOperacao.innerHTML), parseFloat(quantidade.value), parseFloat(mortalidade.value));
        getTaxaLiquidaPeriodo(parseFloat(resultLucroLiquidoOperacao.innerHTML), parseFloat(resultInvestTotal.innerHTML));
        getTaxaLiquidaMes(parseFloat(resultTaxaLiquidaPeriodo.innerHTML), parseFloat(periodo.value));
        getTaxaLiquidaAno(parseFloat(resultTaxaLiquidaMes.innerHTML));
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
        // Converte o canvas em uma URL de imagem
        var link = document.createElement('a');
        link.href = canvas.toDataURL();

        var today = new Date();
        var formattedDate = today.getDate().toString().padStart(2, '0') + 
            '-' + (today.getMonth() + 1).toString().padStart(2, '0') + 
            '-' + today.getFullYear() + 
            '_' + today.getHours().toString().padStart(2, '0') + 
            '-' + today.getMinutes().toString().padStart(2, '0') + 
            '-' + today.getSeconds().toString().padStart(2, '0');

        // Define o nome do arquivo
        link.download = 'tabela-' + formattedDate + '.png';

        // Dispara um evento de clique para iniciar o download
        link.dispatchEvent(new MouseEvent('click'));
    });
}
