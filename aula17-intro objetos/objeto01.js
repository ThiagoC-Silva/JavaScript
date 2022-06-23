//array - var amigo = []
//object - var object = {}
var 
let amigo = {nome: 'José', sexo: 'M', peso: 85.5, 
engordar(p=0){
    console.log('Engordou') 
    //this - se refere diratamente ao abjeto
    this.peso+=p
 }
}

amigo.engordar(2)
console.log(`${(amigo.nome)} pesa ${amigo.peso} kg.`)