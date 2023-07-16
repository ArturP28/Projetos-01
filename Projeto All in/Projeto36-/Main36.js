function card01() {
    let card00 = document.querySelector('.div-01')

    card00.style.animation = 'deslocation 1s forwards'

    let date = new Date()

    let horas = date.getHours()
    let minutos = date.getMinutes()
    let segundos = date.getSeconds()


    segundos = segundos.toString().padStart(2 , '0')

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
        btn.style.margin = '10px'
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
    
    
    

    if(!card03.querySelector('.btn-container')) {


        // div botoes

        let btnContainer = document.createElement('div')
        btnContainer.classList.add('btn-container')
        btnContainer.style.display = 'flex'
        btnContainer.style.flexDirection = 'row'

        let btnContainer2 = document.createElement('div')
        btnContainer2.classList.add('btn-container')
        btnContainer2.style.display = 'flex'
        btnContainer2.style.flexDirection = 'row'

        let btnContainer3 = document.createElement('div')
        btnContainer3.classList.add('btn-container')
        btnContainer3.style.display = 'flex'
        btnContainer3.style.flexDirection = 'row'

        let btnContainer4 = document.createElement('div')
        btnContainer4.classList.add('btn-container')
        btnContainer4.style.display = 'flex'
        btnContainer4.style.flexDirection = 'row'


        // visor

        let visortext = document.createElement('div')
        visortext.classList.add('visortext')
        visortext.style.display = 'flex'
        visortext.style.flexDirection = 'row'

        let visor = document.createElement('input')
        visor.type = 'text'
        visor.style.margin = '10px'


        // botoes

        let btn07 = document.createElement('button')
        btn07.textContent = '7'
        btn07.style.width = '20px'
        btn07.style.height = '20px'
        btnContainer.appendChild(btn07)

        let btn08 = document.createElement('button')
        btn08.textContent = '8'
        btn08.style.width = '20px'
        btn08.style.height = '20px'
        btnContainer.appendChild(btn08)

        let btn09 = document.createElement('button')
        btn09.textContent = '9'
        btn09.style.width = '20px'
        btn09.style.height = '20px'
        btnContainer.appendChild(btn09)

        let btn04 = document.createElement('button')
        btn04.textContent = '4'
        btn04.style.width = '20px'
        btn04.style.height = '20px'
        btnContainer2.appendChild(btn04)

        let btn05 = document.createElement('button')
        btn05.textContent = '5'
        btn05.style.width = '20px'
        btn05.style.height = '20px'
        btnContainer2.appendChild(btn05)

        let btn06 = document.createElement('button')
        btn06.textContent = '6'
        btn06.style.width = '20px'
        btn06.style.height = '20px'
        btnContainer2.appendChild(btn06)

        let btn01 = document.createElement('button')
        btn01.textContent = '1'
        btn01.style.width = '20px'
        btn01.style.height = '20px'
        btnContainer3.appendChild(btn01)

        let btn02 = document.createElement('button')
        btn02.textContent = '2'
        btn02.style.width = '20px'
        btn02.style.height = '20px'
        btnContainer3.appendChild(btn02)

        let btn03 = document.createElement('button')
        btn03.textContent = '3'
        btn03.style.width = '20px'
        btn03.style.height = '20px'
        btnContainer3.appendChild(btn03)

        let btnponto = document.createElement('button')
        btnponto.textContent = '.'
        btnponto.style.width = '20px'
        btnponto.style.height = '20px'
        btnContainer4.appendChild(btnponto)

        let btn00 = document.createElement('button')
        btn00.textContent = '0'
        btn00.style.width = '20px'
        btn00.style.height = '20px'
        btnContainer4.appendChild(btn00)

        
        let btnigual = document.createElement('button')
        btnigual.textContent = '='
        btnigual.style.width = '20px'
        btnigual.style.height = '20px'
        btnContainer4.appendChild(btnigual)

        let textoaviso = document.createElement('p')
        textoaviso.textContent = 'Em Andamento'
        textoaviso.style.color = 'white'



        card03.appendChild(visor)
        card03.appendChild(textoaviso)
        card03.appendChild(btnContainer)
        card03.appendChild(btnContainer2)
        card03.appendChild(btnContainer3)
        card03.appendChild(btnContainer4)


    }

    

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

function card05() {

    let card05 = document.querySelector('.div-05')

    card05.style.animation = 'deslocation 1s forwards'
    card05.style.color = 'black'

    let imagem05 = document.createElement('img')

    imagem05.src = 'jj.png'
    imagem05.classList.add('imagem05')
    imagem05.style.animation = 'rotateAnimation 10s infinite'
    card05.style.pointerEvents = 'none'




    card05.appendChild(imagem05)

}


function card06() {
    let card06 = document.querySelector('.div-06')

    card06.style.animation = 'deslocation 1s forwards'
    card06.style.color = 'black'

    if(!card06.querySelector('.btn-container')) {

        let btnContainer = document.createElement('div')
        btnContainer.classList.add('btn-container')
        btnContainer.style.display = 'flex'
        btnContainer.style.flexDirection = 'row'
        btnContainer.style.margin = '10px'

        let btnContainer2 = document.createElement('div')
        btnContainer2.classList.add('btn-container')
        btnContainer2.style.display = 'flex'
        btnContainer2.style.flexDirection = 'row'
        btnContainer2.style.margin = '5px'

        let btnContainer3 = document.createElement('div')
        btnContainer3.classList.add('btn-container')
        btnContainer3.style.display = 'flex'
        btnContainer3.style.flexDirection = 'row'
        btnContainer3.style.margin = '5px'

    let div01 = document.createElement('div')
    div01.style.border = '2px solid #fff'
    div01.style.width = '30px'
    div01.style.height = '30px'
    div01.style.margin = '10px'
    div01.style.textAlign = 'center'
    div01.style.lineHeight = '30px'

    div01.addEventListener('click', function() {
       if (this.textContent === 'X')  {
            this.textContent = 'O'
        } else {
            this.textContent = 'X'
        }
    }) 
    btnContainer.appendChild(div01)
    card06.appendChild(btnContainer)

    let div02 = document.createElement('div')
    div02.style.border = '2px solid #fff'
    div02.style.width = '30px'
    div02.style.height = '30px'
    div02.style.margin = '10px'
    btnContainer.appendChild(div02)
    card06.appendChild(btnContainer)

    let div03 = document.createElement('div')
    div03.style.border = '2px solid #fff'
    div03.style.width = '30px'
    div03.style.height = '30px'
    div03.style.margin = '10px'
    btnContainer.appendChild(div03)
    card06.appendChild(btnContainer)

    // segunda linha

    let div04 = document.createElement('div')
    div04.style.border = '2px solid #fff'
    div04.style.width = '30px'
    div04.style.height = '30px'
    div04.style.margin = '10px'
    btnContainer2.appendChild(div04)
    card06.appendChild(btnContainer2)

    let div05 = document.createElement('div')
    div05.style.border = '2px solid #fff'
    div05.style.width = '30px'
    div05.style.height = '30px'
    div05.style.margin = '10px'
    btnContainer2.appendChild(div05)
    card06.appendChild(btnContainer2)

    let div06 = document.createElement('div')
    div06.style.border = '2px solid #fff'
    div06.style.width = '30px'
    div06.style.height = '30px'
    div06.style.margin = '10px'
    btnContainer2.appendChild(div06)
    card06.appendChild(btnContainer2)

    // terceira linha

    let div07 = document.createElement('div')
    div07.style.border = '2px solid #fff'
    div07.style.width = '30px'
    div07.style.height = '30px'
    div07.style.margin = '10px'
    btnContainer3.appendChild(div07)
    card06.appendChild(btnContainer3)

    let div08 = document.createElement('div')
    div08.style.border = '2px solid #fff'
    div08.style.width = '30px'
    div08.style.height = '30px'
    div08.style.margin = '10px'
    btnContainer3.appendChild(div08)
    card06.appendChild(btnContainer3)

    let div09 = document.createElement('div')
    div09.style.border = '2px solid #fff'
    div09.style.width = '30px'
    div09.style.height = '30px'
    div09.style.margin = '10px'
    btnContainer3.appendChild(div09)
    card06.appendChild(btnContainer3)


    }

    
    




}



