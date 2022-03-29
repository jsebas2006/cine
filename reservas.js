let sillas=document.getElementById("sillas")
sillas.addEventListener("click",function(evento){
    if(evento.target.classList.contains("w-50")){
        evento.target.src="img/cineroja.png"
    }
})