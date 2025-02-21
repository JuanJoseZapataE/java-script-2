
const calcular= document.getElementById('calcular')




calcular.addEventListener('click', ()=>{


    let turno = 0

    for (i = 0; i<9;i++){
        if(turno=0){
            document.getElementById('total').innerHTML = "x"
        }else{
            document.getElementById('total').innerHTML = "o"
        }
    }
    

})