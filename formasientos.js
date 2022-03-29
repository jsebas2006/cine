let etiquetaBoton=document.getElementById("boton")
etiquetaBoton.addEventListener("click",escuchar)
function escuchar(event){
    event.preventDefault()
    let pelicula=document.getElementById("Pelicula").value
    console.log(pelicula)
    let cantidad=document.getElementById("cantidad").value
    console.log(cantidad)
    let asiento=document.getElementById("Asiento").value
    console.log(asiento)
    let subtotal=asiento*cantidad
    alert("Su total a pagar es: $"+subtotal)
}