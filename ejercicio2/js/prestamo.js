let array_valor = [];
let array_cuotas = [];
let array_nuevosaldo = [];
let array_cuotamensual= []

const calcular= document.getElementById('calcular')

calcular.addEventListener('click', ()=>{

    let valor = parseInt(document.getElementById('valor').value)
    let cuotas = parseInt(document.getElementById('cuotas').value)
    let interes = parseFloat(document.getElementById('interes').value/100)

    let saldo = valor


    array_valor = [];
    array_cuotamensual = [];
    array_nuevosaldo = [];


    for(let i = 0; i <cuotas; i++) {

        let cuota_capital=valor/cuotas
        let interes_mensual=saldo*interes
        let cuota_mensual=cuota_capital+interes_mensual
        saldo -= cuota_capital




        array_valor.push(valor)
        array_nuevosaldo.push(saldo)
        array_cuotamensual.push(cuota_mensual)

    }


    imprimir()
    

})

let fila =''

function imprimir(){

    const tabla = document.getElementById('datos')
    tabla.innerHTML=''

    for(let i = 0; i<array_cuotamensual.length; i++){

        const fila = document.createElement('tr')
        const td_valor = document.createElement('td')
        const td_cuota = document.createElement('td')
        const td_nuevo = document.createElement('td')

        td_valor.textContent = array_nuevosaldo[i]
        td_cuota.textContent = array_cuotamensual[i]
        td_nuevo.textContent = array_nuevosaldo[i]


        fila.appendChild(td_valor)
        fila.appendChild(td_cuota)
        fila.appendChild(td_nuevo)

        tabla.appendChild(fila)
    }
}