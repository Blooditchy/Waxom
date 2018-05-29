const left = document.querySelector('.arrow-left');
const right = document.querySelector('.arrow-right');
const slide = document.querySelector('.hero__content-items');

const minRight = -1230;
const maxRight = 1230;
const step = 1230;
let currentRight = -1230;

right.addEventListener("click", function () {
    if (currentRight < maxRight) {
        currentRight += step;
        slide.style.right = currentRight + 'px';
    }
});

left.addEventListener("click", function () {
    if (currentRight > minRight) {
        currentRight -= step;
        slide.style.right = currentRight + 'px';
    }
});


//Клик по иконке поиск
var userSearch = document.querySelector('.user-block__search');
var addInput = document.querySelector('.main-search');

userSearch.addEventListener("click", function () {
    addInput.classList.toggle('main-search-active');
    return;
});


$(document).ready(function () {  
    $('.slider__inner').bxSlider({
        pager: false,
        nextText: '',
        nextSelector: '.arrow-next',
        prevText: '',
        prevSelector: '.arrow-prev',
    });
});//конец ready


