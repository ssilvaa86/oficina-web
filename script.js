let images=[]
let current=0

document.addEventListener("DOMContentLoaded",()=>{

images=Array.from(document.querySelectorAll(".gallery img"))

images.forEach((img,index)=>{
img.addEventListener("click",()=>{
openImage(index)
})
})

})

function openImage(index){

current=index

const lightbox=document.getElementById("lightbox")
const lightboxImg=document.getElementById("lightbox-img")

lightboxImg.src=images[current].src

lightbox.style.display="flex"

}

function closeImage(){
document.getElementById("lightbox").style.display="none"
}

function nextImage(){

current++

if(current>=images.length){
current=0
}

document.getElementById("lightbox-img").src=images[current].src

}

function prevImage(){

current--

if(current<0){
current=images.length-1
}

document.getElementById("lightbox-img").src=images[current].src

}
