function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')
    if(fano.value.lenght == 0 || (fano.lenght) > ano) {
        window.alert('[ERRO] Verifique seus dados e tente de novo')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 13) {
                img.setAttribute('src', 'menino.png')
            } else if(idade >= 13 && idade < 21) {
                img.setAttribute('src', 'homemadolecente.png')
            } else if(idade >= 21 && idade < 57) {
                img.setAttribute('src', 'homem.png')
            }
        } else if(fsex[1].checked) {
            genero = 'Mulher'
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} ano`
        res.appendChild(img)
    }
}