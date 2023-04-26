document.addEventListener("DOMContentLoaded", () => {
    let Anillos = document.querySelector("#Anillo")
	let Collares = document.querySelector("#Collares")
	let Pulceras = document.querySelector("#Pulceras")
	let Topos = document.querySelector("#Topos")
	let Candongas = document.querySelector("#Candongas")
	let Relojes = document.querySelector("#Relojes")
	let ReparacionJoya = document.querySelector("#ReparacionJoya")
	let ReparacionReloj = document.querySelector("#ReparacionReloj")
    Anillos.addEventListener("click",()=>{
        location.href="../Producto-y-Servicios/index.html?Anillos"
    })
    Collares.addEventListener("click",()=>{
        location.href="../Producto-y-Servicios/index.html?Collares"
    })
    Pulceras.addEventListener("click",()=>{
        location.href="../Producto-y-Servicios/index.html?Pulceras"
    })
    Topos.addEventListener("click",()=>{
        location.href="../Producto-y-Servicios/index.html?Topos"
    })
    Candongas.addEventListener("click",()=>{
        location.href="../Producto-y-Servicios/index.html?Candongas"
    })
    Relojes.addEventListener("click",()=>{
        location.href="../Producto-y-Servicios/index.html?Relojes"
    })
    ReparacionJoya.addEventListener("click",()=>{
        location.href="../Producto-y-Servicios/index.html?ReparacionJoya"
    })
    ReparacionReloj.addEventListener("click",()=>{
        location.href="../Producto-y-Servicios/index.html?ReparacionReloj"
    })
})