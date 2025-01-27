function tabuada() {
  let num = document.getElementById('txtn')
  let tab = document.getElementById('seltab')
  if(num.value.lenght == 0) {
    window.alert('Por favor, Digite um numero')
  } else {
    let n = Number(num.value)
    let c = 1
    tab.innerHTML = ""
  }
}
