function carregar(){    
    var msg = document.querySelector('#msg')
    var imagem = document.querySelector('#imagem')
    var agora = new Date()
    var hora = agora.getHours()
    msg.innerHTML = `São ${hora} horas`
}