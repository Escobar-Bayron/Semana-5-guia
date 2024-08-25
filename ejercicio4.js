let fecha1 = new Date('2024-08-25');
let fecha2 = new Date('2024-12-8');

let diferencia = fecha2 - fecha1;

let diferenciaDias = Math.round(diferencia / (1000 * 60 * 60 * 24))


let opcionesFecha = { year: 'numeric', month: '2-digit', day: '2-digit' }
let fecha1FormatoSV = fecha1.toLocaleDateString('es-SV', opcionesFecha)
let fecha2FormatoSV = fecha2.toLocaleDateString('es-SV', opcionesFecha)

console.log(`La diferencia de días entre ${fecha1FormatoSV} y ${fecha2FormatoSV} es de ${diferenciaDias} días.`)