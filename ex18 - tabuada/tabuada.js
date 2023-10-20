function gerar(){   
    var num = document.getElementById('nm')
    var tabuada = document.getElementById('tab')
    if(num.value.length == 0){  
        window.alert('[ERRO] digite um número!')
    }else{  
        var n1 = Number(num.value)
        var c = 1
        tabuada.innerHTML = ' '
        while(c <= 10){  
            var item = document.createElement('option')
            item.text = `${n1} X ${c} = ${n1 * c}` 
            c++
            tabuada.appendChild(item)
           

        }
    }

    
    


}