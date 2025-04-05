let amigo = { nome: 'jordao',
sexo: 'M',
peso: '60',
engordar(p=0){
    console.log('engordou')
    this.peso += p
}}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)