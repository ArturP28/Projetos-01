function chamar() {

    document.querySelector('#btn').disabled = true

    let imagem = document.createElement('img')

    imagem.setAttribute('id', 'foto')

    imagem.setAttribute('src', 'img-perfil.png')

    document.getElementById('result').appendChild(imagem)
    

    let nome = document.createElement('p')
    let idade = document.createElement('p')
    let area = document.createElement('p')

    

    nome.textContent = 'Nome: Artur Antunes Pereira'
    idade.textContent = 'Idade: 31 Anos'
    area.textContent = 'Área: Desenvolvedor Frontend'
    

    document.getElementById('result').appendChild(nome)
    document.getElementById('result').appendChild(idade)
    document.getElementById('result').appendChild(area)


}



