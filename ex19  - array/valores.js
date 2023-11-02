let valores = [1, 2, 4, 3, 5]
/* for(pos = 0 ;pos < valores.length ; pos++){ 
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`) 
    valores.sort()

}*/

for( let pos  in valores){  
    console.log(`A posição ${pos} tem o valor  ${valores[pos]}`) //Essa simplificação só funciona com objetos
    valores.sort()
     
}

