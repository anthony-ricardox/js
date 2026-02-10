function carregar(){    
    var msg = document.getElementById('msg')
    var res = document.getElementById('res')
    var foto = document.getElementById('imagem')
    var titulo = document.getElementsByClassName('titulo')[0]
    var titulo1 = document.getElementsByClassName('titulo')[1]

    var agora = new Date()
    var hora = agora.getHours()
    var minuto = agora.getMinutes()



    msg.innerHTML = `São ${hora}h:${minuto}m`
    if(hora > 4 && hora <= 12){ 
        res.innerHTML = 'Bom Dia!!'
        foto.src = 'imagens/manha.png'
        document.body.style.background = '#87CEEB'
        titulo.style.color = 'black'
        titulo1.style.color = 'black'
        
        
    }else if(hora > 12  && hora < 18){ 
          res.innerHTML = 'Boa tarde!!' 
        foto.src = 'imagens/tarde.png'

        document.body.style.background = '#FFA559'
        titulo.style.color = 'black'
        titulo1.style.color = 'black'

    }else if(hora >= 18 || hora <= 4){ 
         res.innerHTML = 'Boa Noite!!'  
         foto.src = 'imagens/noite.png'

        document.body.style.background = '#3A2E5F'
        titulo.style.color = 'white'
        titulo1.style.color = 'white'

    }
}
