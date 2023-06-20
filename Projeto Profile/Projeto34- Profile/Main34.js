function chamar() {

    document.querySelector('#btn').disabled = true

    let imagem = document.createElement('img')
    imagem.setAttribute('id', 'foto')
    imagem.setAttribute('src', 'img-perfil.png')
    imagem.style.margin = '10px'
    document.getElementById('result').appendChild(imagem)

    
    

    let nome = document.createElement('p')
    let idade = document.createElement('p')
    let area = document.createElement('p')

    nome.textContent = 'Nome: Artur Antunes Pereira'
    idade.textContent = 'Idade: 31 Anos'
    area.textContent = 'Área: Desenvolvedor Frontend'

    let projetos = document.createElement('a')
    projetos.textContent = 'Projetos'
    projetos.style.border = '1px solid #fff'
    projetos.style.padding = '.5em'
    projetos.style.margin = '5px'
    projetos.href = 'https://projects-js00.netlify.app/'
    projetos.target = "_blank"


    

    
    document.getElementById('result').appendChild(projetos)
    document.getElementById('result').appendChild(nome)
    document.getElementById('result').appendChild(idade)
    document.getElementById('result').appendChild(area)


}



