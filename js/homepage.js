function darkMode(){
    var element = document.body;
    element.classList.toggle("dark")
}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});


var elementTwo = document.getElementsByTagName('body')

function scroll(){
    
    console.log(document.body.onscroll)
}





