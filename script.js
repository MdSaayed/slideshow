//selecting  slideshow Element
const slideshowElement = document.querySelectorAll('.slideshow-element');

var countElement = 1;
setInterval(()=>{
    countElement++;
    var currentElement = document.querySelector('.current');
    currentElement.classList.remove('current');
    if(countElement > slideshowElement.length){
        slideshowElement[0].classList.add('current');
        countElement = 1;
    }
    currentElement.nextElementSibling.classList.add('current');
},2000);






























































