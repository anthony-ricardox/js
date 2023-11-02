 let numero = document.querySelector('input#txtn')
 let lista = document.querySelector('select#flist')
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
    if(l.indexOf(Number(n)) != -1 ){ 
        return true
    }else{  
        return false
    }
}


 function adicionar(){
    if(isNumero(numero.value) && !inLista(numero.value , valores)){    
      valores.push(Number(numero.value)) 
      let item = document.createElement('option')
      item.text = `Valor ${numero.value} foi adicionado`
      lista.appendChild(item)
      res.innerHTML = ''
    } else{ 
        window.alert('Valor invalido ou já encontrado na lista')
    }  
    numero.value = ''
    numero.focus()

 }
 function finalizar(){  
        if(valores.length == 0){    

            alert('Adicione valores antes de finalizar!')
        }else{  
            let total = valores.length
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
            res.innerHTML = ''
            res.innerHTML += `<p>Total de valores cadastrados: ${total}</p>`
            res.innerHTML += `<p>Maior valor informado: ${maior}</p>
            ` 
            res.innerHTML += `<p>Menor valor informado: ${menor}</p>`

            res.innerHTML += `<p>Todos os valores somados: ${soma}</p>`

            res.innerHTML += `<p>Média dos valores: ${media}</p>`
        }

}