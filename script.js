function openWhatsApp(){

window.open(
"https://wa.me/56987475287?text=Hola%2C%20me%20interesa%20la%20oficina%20205%20en%20Alameda%204050.%20%C2%BFPodr%C3%ADan%20enviarme%20m%C3%A1s%20informaci%C3%B3n%3F",
"_blank"
);

}

function openImage(src){

const lightbox = document.getElementById("lightbox");
const img = document.getElementById("lightbox-img");

img.src = src;
lightbox.style.display = "flex";

}

function closeImage(){

document.getElementById("lightbox").style.display = "none";

}
