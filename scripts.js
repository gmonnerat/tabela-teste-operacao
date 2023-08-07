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
    let resultTotalArrobaAnimal = document.querySelector('#total-arroba-animal');
    let rendimento = document.querySelector('#rendimento');
    let valorAnimal = document.querySelector('#valor-animal');
    let resultCustoPorLote = document.querySelector('#custo-por-lote');
    let resultGanhoPesoArroba = document.querySelector('#ganho-peso-arroba');


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

function generateResults() {
    
}