document.addEventListener('DOMContentLoaded', () => {

    // ####################### DECLARAÇÕES #######################
    let quantidade = document.querySelector('#quantidade');
    let sexo = document.querySelector('#sexo');
    let tipo = document.querySelector('#tipo');
    let idade = document.querySelector('#idade');
    let tipoEngorda = document.querySelector('#tipo-engorda');
    let pesoEntrada = document.querySelector('#peso-entrada');
    let resultPesoSaida = document.querySelector('#result-peso-saida');
    let periodo = document.querySelector('#periodo');
    let custoDiaria = document.querySelector('#custo-diaria');
    let ganhoPesoDia = document.querySelector('#ganho-peso-dia');
    let resultGanhoPesoAnimal = document.querySelector('#result-ganho-peso-animal');
    let resultCustoPorArroba = document.querySelector('#custo-por-arroba');
    let resultCustoPorLote = document.querySelector('#custo-por-lote');
    let valorAnimal = document.querySelector('#valor-animal');
    let rendimento = document.querySelector('#rendimento');
    let resultGanhoPesoArroba = document.querySelector('#ganho-peso-arroba');
    let resultTotalArrobaAnimal = document.querySelector('#total-arroba-animal');
    let mortalidade = document.querySelector('#mortalidade');
    let totalArroba = document.querySelector('#total-arroba');
    let investAnimais = document.querySelector('#investimento-animais');
    let investAlimentacao = document.querySelector('#investimento-alimentacao');
    let custoCapitalCDI = document.querySelector('#custo-capital-cdi');
    let investTotal = document.querySelector('#investimento-total');
    let pontoEquilibrio = document.querySelector('#ponto-equilibrio');
    let pesoAnimal = document.querySelector('#peso-animal');
    let pesoProducao = document.querySelector('#peso-producao');
    let pesoCustoCapital = document.querySelector('#peso-custo-capital');
    let cotacaoB3 = document.querySelector('#cotacao-b3');
    let baseRegiao = document.querySelector('#base-regiao');
    let cotacaoB3Base = document.querySelector('#cotacao-b3-base');
    let resultadoArroba = document.querySelector('#resultado-arroba');
    let faturamento = document.querySelector('#faturamento');
    let lucroLiquidoOperacao = document.querySelector('#lucro-liquido-operacao');
    let lucroLiquidoAnimal = document.querySelector('#lucro-liquido-animal');
    let taxaLiquidaPeriodo = document.querySelector('#taxa-liquida-periodo');
    let taxaLiquidaMes = document.querySelector('#taxa-liquida-mes');
    let taxaLiquidaAno = document.querySelector('#taxa-liquida-ano');

    // ####################### OPERAÇÕES #######################
    quantidade.addEventListener('change', (e) => {
        e.preventDefault();
        quantidade = document.querySelector('#quantidade');
        custoDiaria = document.querySelector('#custo-diaria');
        periodo = document.querySelector('#periodo')
        if(quantidade.value != '' && custoDiaria.value != '' && periodo.value != '') {
            getCustoPorLote(parseFloat(custoDiaria.value), parseFloat(quantidade.value), parseFloat(periodo.value));
        }
    });

    periodo.addEventListener('change', (e) => {
        e.preventDefault();
        periodo = document.querySelector('#periodo');
        ganhoPesoDia = document.querySelector('#ganho-peso-dia');
        if(periodo != '' && ganhoPesoDia != '') {
            getGanhoPesoAnimal(parseFloat(periodo.value), parseFloat(ganhoPesoDia.value));
        }
    });

    ganhoPesoDia.addEventListener('change', (e) => {
        e.preventDefault();
        if(periodo.value != '' && ganhoPesoDia.value != '') {
            getGanhoPesoAnimal(parseFloat(periodo.value), parseFloat(ganhoPesoDia.value));
        }
    });

    pesoEntrada.addEventListener('change', (e) => {
        e.preventDefault();
        resultGanhoPesoAnimal = document.querySelector('#result-ganho-peso-animal');
        if(pesoEntrada.value != '' && resultGanhoPesoAnimal.innerHTML != '') {
            getPesoSaida(parseFloat(pesoEntrada.value), parseFloat(resultGanhoPesoAnimal.innerHTML));
        }
    });

    rendimento.addEventListener('change', (e) => {
        e.preventDefault();
        resultPesoSaida = document.querySelector('#result-peso-saida');
        rendimento = document.querySelector('#rendimento');
        if(rendimento.value != '' && resultPesoSaida.innerHTML != ''){
            getTotalArrobaAnimal(parseFloat(rendimento.value), parseFloat(resultPesoSaida.innerHTML));
        }

        if(rendimento.value != '' && resultGanhoPesoAnimal.innerHTML != '') {
            getGanhoPesoArroba(parseFloat(resultGanhoPesoAnimal.innerHTML), parseFloat(rendimento.value));
        }
    });

    custoDiaria.addEventListener('change', (e) => {
        e.preventDefault();
        custoDiaria = document.querySelector('#custo-diaria');
        valorAnimal = document.querySelector('#valor-animal');
        periodo = document.querySelector('#periodo');
        resultTotalArrobaAnimal = document.querySelector('#total-arroba-animal');
        if(valorAnimal.value != '' && custoDiaria.value != '' && periodo.value != '' && resultTotalArrobaAnimal.innerHTML != '') {
            getCustoPorArroba(parseFloat(valorAnimal.value), parseFloat(custoDiaria.value), parseFloat(periodo.value), parseFloat(resultTotalArrobaAnimal.innerHTML))
        }
    });

    valorAnimal.addEventListener('change', (e) => {
        e.preventDefault();
        custoDiaria = document.querySelector('#custo-diaria');
        valorAnimal = document.querySelector('#valor-animal');
        periodo = document.querySelector('#periodo');
        resultTotalArrobaAnimal = document.querySelector('#total-arroba-animal');
        if(valorAnimal.value != '' && custoDiaria.value != '' && periodo.value != '' && resultTotalArrobaAnimal.innerHTML != '') {
            getCustoPorArroba(parseFloat(valorAnimal.value), parseFloat(custoDiaria.value), parseFloat(periodo.value), parseFloat(resultTotalArrobaAnimal.innerHTML));
        }
    });

    // ####################### FUNÇÕES #######################
    function getGanhoPesoAnimal(periodo, ganhoPesoDia) {
        let ganhoPesoAnimal = periodo*ganhoPesoDia;
        resultGanhoPesoAnimal.innerHTML = ganhoPesoAnimal;
    }

    function getPesoSaida(pesoEntrada, ganhoPesoAnimal) {
        let pesoSaida = pesoEntrada + ganhoPesoAnimal;
        resultPesoSaida.innerHTML = pesoSaida;
    }

    function getTotalArrobaAnimal(pesoSaida, rendimento) {
        let totalArrobaAnimal = (pesoSaida * (rendimento/100))/ (15);
        resultTotalArrobaAnimal.innerHTML = totalArrobaAnimal.toFixed(2);
    }

    function getCustoPorArroba(valorAnimal, custoDiaria, periodo, totalArrobaAnimal) {
        let custoPorArroba = (valorAnimal + (custoDiaria * periodo)) / totalArrobaAnimal;
        resultCustoPorArroba.innerHTML = custoPorArroba.toFixed(2);
    }

    function getCustoPorLote(custoDiaria, quantidade, periodo) {
        let custoPorLote = (quantidade * custoDiaria) * periodo;
        resultCustoPorLote.innerHTML = custoPorLote;
    }

    function getGanhoPesoArroba(ganhoPesoAnimal, rendimento) {
        let ganhoPesoArroba = (ganhoPesoAnimal * (rendimento/100)) / 15;
        resultGanhoPesoArroba.innerHTML = ganhoPesoArroba.toFixed(2);
    }
    
});

// # custo de capital-cdi = 
// # investimento total = investAnimais + investAlimentacao + custoCapitalCDI