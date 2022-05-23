/*for(let i=0;i<fotos.length;i++)
    document.write(`<img src='${fotos[i]}' alt='imagen'>`)
   */


let cad=  `<div class= "container">`
    
for(i=0; i<data.length;i++)
    cad+=`<div clas="Tarjeta">
            <img src= "${data[i].image}" alt='imagen'>
            <div class= "Cuerpo">
            <h3>Nombre: ${data[i].name}</h3>
            <h4>Especie: ${data[i].species}</h4>
            <h4>Genero: ${data[i].gender}</h4>
            <h4>Especie: ${data[i].species}</h4>
            <h4>Estado: ${data[i].status}</h4>
            </div>
        </div>
            `

cad+= `</div> `
document.write(cad)

/*
var cad=`
<div class= "container">
`

for(let i=0; i< data.length; i++){
   cad +=
    `
    <div class="tarjeta">
    <img src="${data[i].image}" alt="Fotos">
    <div class="cuerpo">
        <h4>nombre: ${data[i].name}</h4>
        <p>genero: ${data[i].gender}</p>
        </div>
    </div>
    `

}*/

cad+= `
</div>
`
document.write(cad)

