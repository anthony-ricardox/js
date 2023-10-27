let n1 = [1, 3, 5, 4, 2, 7, 9,8]
n1.sort()

/*for(let pos  in n1 ){    
    console.log(`A posição ${pos} é o valor ${n1[pos]}`)
}
*/

var n2 = n1.indexOf(5)
if(n2 == -1){   
    console.log('Não encontrado!')
}else{  
    console.log(`Posição: ${n2}`)
}
