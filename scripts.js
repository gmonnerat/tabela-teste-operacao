document.addEventListener('DOMContentLoaded', () => {

    let periodo = document.querySelector('#periodo');
    let ganhoPesoDia = document.querySelector('#ganho-peso-dia');
    const resultGanhoPesoAnimal = document.querySelector('#result-ganho-peso-animal');

    periodo.addEventListener('change', (e) => {
        e.preventDefault();
        if(periodo != '' && ganhoPesoDia != '') {
            ganhoPesoAnimal(periodo.value, ganhoPesoDia.value);
        }
    })

    ganhoPesoDia.addEventListener('change', (e) => {
        e.preventDefault();
        if(periodo != '' && ganhoPesoDia != '') {
            ganhoPesoAnimal(periodo.value, ganhoPesoDia.value);
        }
    })


    // --------------- FUNÇÕES ------------------
    
    function ganhoPesoAnimal(periodo, ganhoPesoDia) {
        let ganhoPesoAnimal = periodo*ganhoPesoDia;
        resultGanhoPesoAnimal.innerHTML = ganhoPesoAnimal;
    }
});