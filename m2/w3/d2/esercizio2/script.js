let prec = document.querySelector('.prec');
let succ = document.querySelector('.succ');
let slider = document.querySelector('.container1');


prec.addEventListener('click', function(){
    slider.transform = "translate-y(`+200 + px`)"
})

succ.addEventListener('click', function(){
    slider.transform = 'translate-y( -200px)'
})