function carregar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('img')
    let data = new Date()
    let hora = data.getHours()
   // let hora = '05'
    msg.innerHTML = `Agora sao ${hora} horas`
    if(hora >= 5 && hora < 12) {
        img.src = "fotomanha01.png"
       document.body.style.background = '#f5d4a9'
    } else if(hora >= 12 && hora < 18) {
        img.src = "fototarde01.png"
        document.body.style.background = '#dc9d27'
    } else{
        img.src = "fotonoite01.png"
        document.body.style.background = ' #424d57'
    }
}