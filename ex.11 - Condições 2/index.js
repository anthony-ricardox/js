/*var idade = 67
if(idade < 16){ 
    console.log('Não vota')
}else if(idade < 18){  
    console.log('Voto opcional')
}else if(idade >= 67) {
    console.log('Voto opcional')
}else{  
    console.log('Voto obrigatório')

}*/

/*var h = 20
console.log( ` São ${h}horas`)
if(h < 12){   
    console.log('Bom dia!')
}else if(h > 12 && h < 18){ 
    console.log('Boa tade!')
}else{  
    console.log('Boa noite')
}*/

var agora = new Date()
var horas = agora.getHours
console.log(`São exatamente ${horas}horas`)
if(horas <= 12){
    console.log('Bom dia!')
       
}else if(horas >= 13 && horas <=18){
    console.log('Boa tarde!')
}else{  
    console.log('Boa noite!')
}


