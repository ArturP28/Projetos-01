function card01() {
    let card00 = document.querySelector('.div-01')

    card00.style.animation = 'deslocation 1s forwards'

    let date = new Date()

    let horas = date.getHours()
    let minutos = date.getMinutes()
    let segundos = date.getSeconds()

    document.querySelector('.div-01').innerHTML = horas + ":" + minutos + ":" + segundos
    card00.style.color = 'black'
    card00.style.fontSize = '50px'
    card00.style.pointerEvents = 'none'

    setInterval (card01, 1000)

}

function card02() {

    let card02 = document.querySelector('.div-02')

    card02.style.animation = 'deslocation 1s forwards'
    card02.style.color = 'black'


    if (!card02.querySelector('input')) {

        let texto01 = document.createElement('p')
        card02.appendChild(texto01)
        texto01.textContent = 'Número Inicial'
        texto01.style.color = 'white'

        let input = document.createElement('input')
        input.type = 'number'
        card02.appendChild(input)
       
        let texto02 = document.createElement('p')
        card02.appendChild(texto02)
        texto02.textContent = 'Passo de Contagem'
        texto02.style.color = 'white'


        let input2 = document.createElement('input')
        input2.type = 'number'
        card02.appendChild(input2)

        let texto03 = document.createElement('p')
        card02.appendChild(texto03)
        texto03.textContent = 'Número Final'
        texto03.style.color = 'white'


        let input3 = document.createElement('input')

        let btn = document.createElement('button')
        btn.style.width = '50px'
        btn.style.height = '20px'
        btn.textContent = 'Iniciar'
        btn.style.margin = '15px'
        card02.appendChild(input3)


        let resultado = document.createElement('div')
        resultado.textContent = ''

        btn.onclick = function () {

            let inicio = Number(input.value)
            let passo = Number(input2.value)
            let fim = Number(input3.value)

            if (isNaN(inicio) || isNaN(passo) || isNaN(fim)) {

                resultado.textContent = 'ERRO'

            } else {
                resultado.textContent = 'Contagem: '
                resultado.margin = '5px'

                for ( let c = inicio; c <= fim  ; c += passo ) {

                    resultado.textContent += `${c}`
    
                }

                if (fim >= 49) {
                    resultado.textContent = 'Número Máximo excedido'
                }
            }
          
        }
    
        
        card02.appendChild(btn)
        card02.appendChild(resultado)
    }


}

function card03() {

    let card03 = document.querySelector('.div-03')

    card03.style.animation = 'deslocation 1s forwards'
    card03.style.color = 'black'

    card03.style.pointerEvents = 'none'

    let imagem = document.createElement('img')
    imagem.src = 'img.png'
    imagem.classList.add('img')
    card03.appendChild(imagem)

    let texto = document.createElement('p')
    texto.style.color = 'white'
    texto.textContent = 'Em andamento'
    card03.appendChild(texto)

}

function card04() {

    let card04 = document.querySelector('.div-04')

    card04.style.animation = 'deslocation 1s forwards'
    card04.style.color = 'black'

    if (!card04.querySelector('input')) {

        let titulo = document.createElement('p')
        titulo.textContent = 'Adicione Sua Tarefa'
        titulo.style.color = 'white'

        titulo.style.fontSize = '20px'
        card04.appendChild(titulo)
    
        let tarefa = document.createElement('input')
        tarefa.type= 'text'
        card04.appendChild(tarefa)

        let botao = document.createElement('button')
        botao.style.width = '80px'
        botao.style.height = '20px'
        botao.textContent = 'Adicionar'
        botao.style.margin = '15px'
        botao.style.textContent = 'center'
        card04.appendChild(botao)

        botao.onclick = function () {

            let lista = document.createElement('li')
            lista.textContent = String(tarefa.value)
            card04.appendChild(lista)

            

        }

       

    }

   


}




