function gerar(){   
    var num = document.getElementById('txtnm')
    var tabuada = document.getElementById('stab')
    if(num.value.length == 0){  
        window.alert('[ERRO] Digite um número!!')
    }else{  
        var n1 = Number(num.value)
        var c = 1
        stab.innerHTML = ' '
        while(c <= 10){ 
            var item = document.createElement('option')
            item.text = `${n1} X ${c} = ${n1 * c}`
            c++
            stab.appendChild(item)

        }
    }



}