document.addEventListener('DOMContentLoaded', () => {

    // ####################### DECLARAÇÕES #######################

    let quantidade = document.querySelector('#quantidade');
    let periodo = document.querySelector('#periodo');
    let ganhoPesoDia = document.querySelector('#ganho-peso-dia');
    let pesoEntrada = document.querySelector('#peso-entrada');
    let resultGanhoPesoAnimal = document.querySelector('#result-ganho-peso-animal');
    let resultPesoSaida = document.querySelector('#result-peso-saida');
    let resultTotalArrobaAnimal = document.querySelector('#total-arroba-animal');
    let rendimento = document.querySelector('#rendimento');
    let valorAnimal = document.querySelector('#valor-animal');
    let custoDiaria = document.querySelector('#custo-diaria');
    let resultCustoPorArroba = document.querySelector('#custo-por-arroba');
    let resultCustoPorLote = document.querySelector('#custo-por-lote')

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



    // getCustoPorArroba(parseFloat(valorAnimal.value), parseFloat(custoDiaria.value), parseFloat(periodo.value), parseFloat(totalArrobaAnimal.innerHTML))

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
    
});