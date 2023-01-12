//Carrito de compra
//constantes
iva = 0.17
mouse = 590
teclado = 750
audifonos = 650

//variables
let comprar = true
let precioMouse = 0
let precioTeclado = 0
let precioAudifonos = 0
let costoMouse = 0
let costoTeclado = 0
let costoAudifonos = 0
//do while para realizar compra
    do{
    let producto = prompt(`Que producto desea comprar: 
    1. Mouse $590 
    2. Teclado $750
    3. Audifonos $650
    4. Pagar
    5. Salir`)
    
    //seleccion de productos
    switch(producto){
        case "1":
            let addMouse = parseInt(prompt("Cuantos Mouse desea agregar al carrito: "))
            precioMouse = mouse * addMouse
            costoMouse = costoMouse + precioMouse
            break

        case "2":
            let addTeclado =  parseInt(prompt("Cuantos Teclados desea agregar al carrito: "))
            precioTeclado = teclado * addTeclado
            costoTeclado = costoTeclado + precioTeclado
            break

        case "3":
            let addAudifonos = parseInt(prompt("Cuantos Audifonos desea agregar al carrito: "))
            precioAudifonos = audifonos * addAudifonos
            costoAudifonos = costoAudifonos + precioAudifonos
            break
        
        case "4":
            subTotal = costoMouse + costoTeclado + costoAudifonos
            pagoTotal = subTotal + (subTotal*iva)

            alert(`Total Mouse S/IVA: ${costoMouse}`)
            alert(`Total Teclado S/IVA: ${costoTeclado}`)
            alert(`Total Audifonos S/IVA: ${costoAudifonos}`)
            alert(`Pago Total sin IVA: ${subTotal}`)
            alert(`Total a Pagar con IVA: ${pagoTotal}`)
            alert("Gracias por su compra!")
            break

        case "5":
            alert("Gracias por visitar nuestra tienda")
            comprar = false
            break

        default:
            alert("Error: El producto no existe")
            break
    }

}while(comprar)


