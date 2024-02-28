let offset = 0
let next = document.querySelector('#next')
let prev = document.querySelector('#prev')
const sliderLine = document.querySelector('.slider')
const slider = document.querySelector('.slider-container')
let clone = sliderLine.cloneNode(true)

let i = 2
next.addEventListener('click', function(){
    offset = offset + 432
    sliderLine.style.left = offset + 'px'
})
prev.addEventListener('click', function(){
    offset = offset - 432
    sliderLine.style.left = offset + 'px'
})