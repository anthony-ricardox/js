let num = [1 , 10, 30]
num[1] = 6 //esse codigo posso botar algo em um lugar especifico
num.push(21, 15 , 19)// esse codigo vai botando os elementos onde tiver vaga
num.sort()//deixar os numeros em ordem crescente
num.push(2)
num.sort()
console.log(`Meus vetores são: ${num}`)
console.log(`Tem ${num.length} posições`)
console.log(`O primeiro número é ${num[0]} e o ultimo é ${num[5]}`)
let pos = num.indexOf(6)
if(pos == -1){  
    console.log('Não encontrado!')
}else{  
    console.log(`O valor 6 está na posição ${pos}`)
}






