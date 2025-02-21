const boton = document.getElementById('calcular')

let matrizcredito = []

let iguales = false


boton.addEventListener('click', ()=>{
    matrizcredito=[]
    let objetocredito = document.getElementById('valorcredito')
    let objetocuotas = document.getElementById('numerocuotas')
    let objetointeres = document.getElementById('tasainteres')


    let valorcredito = parseFloat(objetocredito.value)
    let numerocuotas = parseInt(objetocuotas.value)
    let tasainteres = parseFloat(objetointeres.value)

    let saldo = valorcredito
    let valorcuotacapital = valorcredito /numerocuotas
    let valorinteres = 0
    let valorcuota = 0
    let total_credito = 0
    let cuotaigual = 0

    for(let i=1; i<=numerocuotas;i++){
        valorinteres = saldo*tasainteres/100
        valorcuota = valorinteres + valorcuotacapital
        total_credito += valorcuota
        matrizcredito.push([i,saldo,valorcuota, saldo - valorcuotacapital])
        saldo = saldo - valorcuotacapital

        cuotaigual = cuotaigual+valorcuota
    }
    

    document.getElementById('total').innerHTML = cuotaigual

    console.log(matrizcredito)
    imprimir()
})

function imprimir (){
    const listacuotas = document.getElementById('listacuotas')
    for(i=0; i < matrizcredito.length; i++){
        const fila = document.createElement('tr')
        for(j=0;j<matrizcredito[0].length;j++){
            const celda = document.createElement('td')
            celda.textContent = matrizcredito[i][j]
            fila.appendChild(celda)
        }
        listacuotas.appendChild(fila)
    }
}


checkbutton = document.getElementById('botoncheck')

checkbutton.addEventListener