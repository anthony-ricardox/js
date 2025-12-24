function funcao(){  
    let total = 0;
    for(let argumentos of arguments){   
        total += argumentos
       console.log(`${total}`)
    }
     
}
funcao(  1, 2, 4 , 8 )