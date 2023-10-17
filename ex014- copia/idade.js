function clicar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('textano')
    var res = document.querySelector('div.res')
    if(fano.value.length == 0 || Number(fano.value) > ano){  
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else{  
        var sex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var genero = ' '
        var img = document.querySelector('.foto')
        
           }if(sex[0].checked){ 
                genero = 'Homem'

            if(idade >=0 && idade < 10){  
                   //criança
                img.src='imagem/bb-m.png'
            }else if(idade > 10 && idade < 21){ 
                    //Jovem
                img.src='imagem/jovem-m.png'

            }else if(idade >= 21 && idade < 50){
                    //adulto 
                img.src='imagem/adulto-m.png'

            }else{  
                //idade avancada
                img.src='imagem/idoso-m.png'

            }  
                
            }else if(sex[1].checked){
                genero = 'Mulher'

            if(idade >=0 && idade <=10){  
                    //criança
                img.src='imagem/bb-f.png'
               
             }else if(idade > 10 && idade <= 21){ 
                     //Jovem
                img.src='imagem/jovem-f.png'
 
             }else if(idade >= 21 && idade < 50){
                     //adulto 
                img.src='imagem/adulta-f.png'
             }else{  
                 //idosa
                 img.src='imagem/idosa-f.png'
               
             }   
           
            }  
            res.innerHTML =`Detectamos ${genero} de ${idade} anos `
            res.style.
            res.innerHTML = img
            
           
                   
                

            
            
    }





