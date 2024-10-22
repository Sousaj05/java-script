function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora sao ${hora} horas`
    if (hora >= 0 && hora < 12) {
        // BOM DIA 
        img.src = 'fotomanha01.png'
        document.body.style.background = '#b5a07c'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE
        img.src = 'fototarde01.png'
        document.body.style.background = '#f5ab5d'
    } else {
        // BOA NOITE
        img.src = 'fotonoite01.png'
        document.body.style.background = '#16222e'
    }
}

