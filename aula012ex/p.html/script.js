function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.lenght >= 0 || (fano.value) > ano) {
        window.alert = ('[ERRO] Verifique seus dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if(fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 13) {
                //Crianca
                img.setAttribute('src', 'menino.png')
            } else if(idade < 20) {
                //Adolecente
                img.setAttribute('src', "homemadolecente.png")
            } else if(idade <= 55) {
                //Homem
                img.setAttribute('src', 'homem.png')
            } else if (idade > 55) {
                //Velho
                img.setAttribute('src', 'velho.png')
            }
        } else if(fsex[1].checked) {
            genero = 'Mulher'
            if(idade >= 0 && idade < 13) {
                //Crianca
                img.setAttribute('src', 'menina.png')
            } else if(idade < 20) {
                //Adolecente
                img.setAttribute('src', "mulheradolecente.png")
            } else if(idade <= 55) {
                //Homem
                img.setAttribute('src', 'mulher.png')
            } else if (idade > 55) {
                //Velho
                img.setAttribute('src', 'velha.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} ano`
        res.appendChild(img)
    }
} 