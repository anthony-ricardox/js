function clicar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('textano')
    var res = document.querySelector('div.res')
    if(fano.value.length == 0 || fano.value > ano){  
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else{  
        var sex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var genero = ' '
        var img = document.createElement('img')
        img.setAttribute('id' , 'imagem')
        }if(sex[0].checked){ 
                genero = 'Homem'

            if(idade >=0 && idade < 10){  
                   //criança
                img.setAttribute('src','imagem/bb-m.png')
              
            }else if(idade > 10 && idade <= 21){ 
                    //Jovem
                img.setAttribute('src','imagem/jovem-m.png')

            }else if(idade > 21 && idade < 60){
                    //adulto 
                img.setAttribute('src', 'imagem/adulto-m.png')

            }else{  
                //idade avancada
                img.setAttribute('src','imagem/idoso-m.png')

            }  
                
            }else if(sex[1].checked){
                genero = 'Mulher'

                if(idade >=0 && idade <=10){  
                    //criança
                img.setAttribute('src','bb-f.png')
               
             }else if(idade > 10 && idade <= 21){ 
                     //Jovem
                img.setAttribute('src','jovem-f.png')
 
             }else if(idade > 21 && idade < 50){
                     //adulto 
                img.setAttribute('src', 'imagem/adulto-f.png')
             }else{  
                 //idoso
                img.setAttribute('src', 'imagem/idosa-f.png')
             }   
           
            }
            res.style.textAlign='center'
            res.innerHTML =`Detectamos ${genero} de ${idade} anos `
            res.appendChild(img)
                   
                

            
            
    }





