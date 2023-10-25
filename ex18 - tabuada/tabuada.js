function Gerar(){   
    var num = document.getElementById('#txtnm')
    var tabu = document.getElementById('#ftab')
    if (num.value.length == 0){  
        window.alert('[ERRO] digite um número!')
    }else{ 
        var n1 = Number(num.value)
        var c = 1
        tabu.innerHTML = ' '
        while(c <= 10){  
            var item = document.createElement('option')
            item.text = `${n1} X ${c} = ${n1*c}`
            tabu.appendChild(item) 
            c++ 
            
        

        }
    }

    
    


}
