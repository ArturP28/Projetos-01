
function clicar() {
    let res = document.querySelector('#result')

    let inicio = document.querySelector('#inicio')
    let passos = document.querySelector('#passos')
    let fim = document.querySelector('#fim')

    if (inicio.value.length == 0 || passos.value.length == 0 || fim.value.length == 0 ) {
        res.textContent = '[ERRO] Dados Incorretos'
    } else {


        res.textContent = 'Contando...'

    let ini = Number(inicio.value)
    let pass = Number(passos.value)
    let fi = Number(fim.value)

    for ( let conta = ini  ; conta <= fi    ;  conta += pass  ) {

        res.textContent += `${conta}`
    }

    }

    


}