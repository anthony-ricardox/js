
function contar(){ 
    var inicio = document.getElementById('nc')
    var fim = document.getElementById('f')
    var pass = document.getElementById('pa')
    var res = document.getElementById('res')
    if(inicio.value.length == 0 || fim.value.length == 0 || pass.value.lenght == 0){   
        window.alert('[ERRO]')
        res.innerHTML = 'Impossivel contar!'
    }else{ 
         
        res.innerHTML = 'Contando: <br>' 
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(pass.value)
       }if (i < f) { 
            for(c = i ;c <= f ;c += p ){  
            res.innerHTML += ` ${c} - `
            } 
            res.innerHTML += '\u{1f3c1}'
        }else{  
                for( c = i;c >= f ; c -= p){    
                    res.innerHTML += ` ${c} - `
               
               }  res.innerHTML += '\u{1f3c1}' 
            }
           
                     


}   