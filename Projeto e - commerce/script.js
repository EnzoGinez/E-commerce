function abrirMenu() {
  document.getElementById("menu").classList.add("active");
  document.getElementById("overlay").classList.add("active");
}

function fecharMenu() {
  document.getElementById("menu").classList.remove("active");
  document.getElementById("overlay").classList.remove("active");
}

let slides = document.querySelectorAll(".slide");
let index = 0;

function mudarSlide(n = 1){

  slides[index].classList.remove("active");

  index = index + n;

  if(index >= slides.length){
    index = 0;
  }

  if(index < 0){
    index = slides.length - 1;
  }

  slides[index].classList.add("active");

}

setInterval(function(){
  mudarSlide(1);
}, 4000);



document.addEventListener('DOMContentLoaded', () => {
    
    
    const thumbnails = document.querySelectorAll('.thumbnails img');
    const mainImg = document.getElementById('main-featured');

    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function() {
          
            const newSrc = this.src;
            mainImg.src = newSrc;
            thumbnails.forEach(img => img.classList.remove('active'));
            this.classList.add('active');
            

            console.log("Imagem alterada para: " + newSrc);
        });
    });
});