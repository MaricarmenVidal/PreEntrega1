alert ("¡Bienvenid@ a Librería Vidal!")

function productoLibreria(totalProducto, precio, cantidad){
    return totalProducto + precio * cantidad;
}
    let total= 0;

    let lapiceros = 1;
    let cuadernos = 2;
    let resaltadores = 3;
    let siliconas = 4;
    let plastilinas = 5;

    let producto;
    let continuar;

    do{
        producto = Number(prompt("Ingresa el número de la opción que deseas adquirir: " + "Opción 1: lapiceros   Opción 2: cuadernos   Opción 3: resaltadores   Opción 4: siliconas   Opción 5: plastilinas"));


        switch(producto){
            case lapiceros:
                cantidadProductos=Number(prompt("El precio de cada lapicero es de S/. 2.00. Ingresar la cantidad de lapiceros que desea:"));

                total= productoLibreria(total, 2, cantidadProductos)
                alert("Hasta el momento vas: " + total);
                break;
            case cuadernos:
                cantidadProductos=Number(prompt("El precio de cada cuaderno es de S/. 4.00. Ingresar la cantidad de cuadernos que desea:"));

                total= productoLibreria(total, 4, cantidadProductos)
                alert("Hasta el momento vas: " + total);
                break;
                
            case resaltadores:
                cantidadProductos=Number(prompt("El precio de cada resaltador es de S/. 3.00. Ingresar la cantidad de resaltadores que desea:"));

                total= productoLibreria(total, 3, cantidadProductos)
                alert("Hasta el momento vas: " + total);
                break;
            case siliconas:
                cantidadProductos=Number(prompt("El precio de cada silicona es de S/. 8.00. Ingresar la cantidad de siliconas que desea:"));

                total= productoLibreria(total, 8, cantidadProductos)
                alert("Hasta el momento vas: " + total);
                break;
            case plastilinas:
                cantidadProductos=Number(prompt("El precio de cada plastilina es de S/. 6.00. Ingresar la cantidad de plastilinas que desea:"));

                total= productoLibreria(total, 3, cantidadProductos)
                alert("Hasta el momento vas: " + total);
                break;
                
            default: 
            alert("Por favor, ingrese una opción válida")
        }

        continuar = prompt("¿Desea continuar? si/no")


    }

    while(continuar !== "no")

document.write("El total de su compra es de " + total + ". Muchas gracias!!")
