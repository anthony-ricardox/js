let numero = document.getElementById('txtnm')
let lista = document.getElementById('lista')
let res = document.getElementById('res')
let valores = []

function isNumero(n){    
    if(Number(n) >= 1 && Number(n) <= 200){    
            return true
    } else{ 
        return false
    }
}

function inLista(n , l){    
    if(l.indexOf(Number(n)) != -1){  
        return true 
     }else{  
        return false
    }
}


function adicionar(){   
   if(isNumero(numero.value) && !inLista(numero.value, valores)){
    res.innerHTML = ''
    valores.push(Number(numero.value)) 
    let item = document.createElement('option') 
    item.text = `Numero ${numero.value} adicionado`  
    lista.appendChild(item)
    

   }else{   
        alert('Valor invalido ou ja encontrado')

   }
   numero.value = ''
   numero.focus()

}

function finalizar(){   
    if(valores.length == 0){
        alert('Adicione valores antes de finalizar!')
    }else{  
        let total  = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){  
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]

        }
        media = soma / total
        res.innerHTML += `<p>Valor total: ${total}</p>`
        res.innerHTML +=  `<p>Maior valor encontrado: ${maior}</p>`
        res.innerHTML += `<p>Menor valor encontrado: ${menor}</p>`
        res.innerHTML += `<p>A soma de todos os valores: ${soma}</p>`
        res.innerHTML += `<p>Média dos valores: ${media}</p>`
    }
 
  
}