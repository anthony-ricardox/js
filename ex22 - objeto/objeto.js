let amigo = {nome:"Anthony" ,
 sexo: "Masculino" ,
 peso: 80.20, engordar(p=0){console.log('Engordou')
 this.peso += p}}
amigo.engordar(5)
console.log(` ${amigo.nome} Pesa ${amigo.peso}`)
