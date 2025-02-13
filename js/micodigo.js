const nombre = document.getElementById("nombre")
const marca = document.getElementById("marca")
const stock = document.getElementById("stock")
const agregar = document.getElementById("agregar")




let array_nombre = []
let array_marca = []
let array_stock = []

agregar.addEventListener("click", () =>{


    const nombre1 = (nombre.value) 
    const marca1 = (marca.value)
    const stock1 = (stock.value)

    array_nombre.push(nombre1)
    array_marca.push(marca1)
    array_stock.push(stock1)

    agregar1()
})

let fila = ""

function agregar1(){

    const tabla1 = document.getElementById("datos")
    tabla1.innerHTML=''

    for(let i=0; i<array_nombre.length; i++){
        
        const fila = document.createElement('tr')
        const td1 = document.createElement('td')
        const td2 = document.createElement('td')
        const td3 = document.createElement('td')

        td1.textContent = array_nombre[i]
        td2.textContent = array_marca[i]
        td3.textContent = array_stock[i]

        fila.appendChild(td1)
        fila.appendChild(td2)
        fila.appendChild(td3)

        tabla1.appendChild(fila)
        
    }

}




const id = document.getElementById("identificacion")
const nombre_ins1 = document.getElementById("instructor")


let array_id = []
let array_ins = []


agregar2.addEventListener("click", ()=>{

    const iden = (id.value)
    const nombre_ins = (nombre_ins1.value)

    array_id.push(iden)
    array_ins.push(nombre_ins)

    agregar02()

})


function agregar02(){
    const tabla2 = document.getElementById("datos2")
    tabla2.innerHTML=''

    for(let i=0; i<array_id.length; i++){


        const fila1 = document.createElement('tr')
        const td1 = document.createElement('td')
        const td2 = document.createElement('td')

        td1.textContent = array_id[i]
        td2.textContent = array_ins[i]

        fila1.appendChild(td1)
        fila1.appendChild(td2)

        tabla2.appendChild(fila1)
    }
}