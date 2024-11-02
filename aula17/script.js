var num = document.getElementById('fnum')
var lista = document.getElementById('flista')
var res = document.getElementById('res')
var valores = []

function adicionar(){
    if(isNumero(num.value) && !isLista(num.value, valores)) {
        window.alert('Tudo ok')
    } else {
        window.alert('Valor invalido ou ja encontrado na lista.')
    }
}

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <=100) {
        return true
    } else {
        return false 
    }
}

function isLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false 
    }

}