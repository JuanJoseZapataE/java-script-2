let signo = 'E';
let turno = 'X';
let ganador = 'E'
let intentos = 0


let triqui = [
    ['E', 'E', 'E'],
    ['E', 'E', 'E'],
    ['E', 'E', 'E']
];

const celdas = document.querySelectorAll('.celda');
console.log(celdas);

celdas.forEach(celda =>{
    celda.addEventListener('click', almacenarturno);
});

function almacenarturno(event){
    let id = event.target.id;
    console.log('funcionando' + id);
    intentos++;
    switch(id){
        case '1': triqui [0][0] = turno; break;
        case '2': triqui [0][1]=  turno; break; 
        case '3': triqui [0][2] = turno; break;
        case '4': triqui [1][0] = turno; break;
        case '5': triqui [1][1] = turno; break;
        case '6': triqui [1][2] = turno; break;
        case '7': triqui [2][0] = turno; break;
        case '8': triqui [2][1] = turno; break;
        case '9': triqui [2][2] = turno; break;
    };
    console.log(triqui);
    const cuadro = event.target;
    cuadro.innerText = turno;
    turno = turno == 'X' ? 'O' : 'X'
    
    if(intentos > 4){
        validar();
    }
    

    if(intentos==9){
        termino()
    }
};

function validar(){
    
    signo = turno == 'X' ? 'O' : 'X';
    for(let i = 0; i < 3 ; i++){
        if (signo == triqui [i][0] && signo == triqui [i][1] && signo == triqui[i][2]){
            ganador = signo;
            termino();
        };
    };
    for(let j = 0 ; j < 3 ; j++){
        if (signo == triqui [0][j] && signo == triqui [1][j] && signo == triqui[2][j]){
            ganador = signo;
            termino();
        };
    };
    if (signo == triqui[0][0] && signo == triqui [1][1] && signo == triqui [2][2]){
        ganador = signo;
        termino();
    };
    if (signo == triqui[2][0] && signo == triqui [1][1] && signo == triqui [0][2]){
        ganador = signo;
        termino();
    };
}



function termino(){
    let mensaje = ''
    if (ganador == "E"){
        mensaje = 'empate';
    }else{
        if (ganador == 'X'){
            mensaje = 'felicidade gano x';
        }else{
            mensaje = 'felicidades gano O';
        };
    };
    document.getElementById('mensaje').innerHTML = mensaje;
    
    triqui = [
        ['E', 'E', 'E'],
        ['E', 'E', 'E'],
        ['E', 'E', 'E']
    ];
     
};
