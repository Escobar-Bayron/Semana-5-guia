const fecha = new Date('February 20, 2012 03:12:00')


let opcionesParaFecha = { year: 'numeric', month: 'short', day: 'numeric' }

let fechaFormateada = fecha.toLocaleDateString('en-US', opcionesParaFecha)
let hora = fecha.toLocaleTimeString('en-US')

console.log(`${fechaFormateada}, ${hora}`)


