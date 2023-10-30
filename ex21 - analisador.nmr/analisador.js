 let numero = document.querySelector('input#txtn')
 let list = document.querySelector('select#flist')
 let res = document.querySelector('div#res')
 let valores = []

 function isNumero(n){  
    if(Number(n) >= 1 && Number(n) <= 100){   
        return true
    }else{  
        return false
    }

 }

function inLista(n, l){    
    if(l.indexOf(Number.n) != -1 ){ 
        return true
    }else{  
        return false
    }
}


 function adicionar(){
    if(isNumero(numero.value) && !inLista(numero.value , valores)){    
        window.alert('Tudo OK')
    } else{ 
        window.alert('Valor invalido ou já encontrado na lista')
    }  


 }