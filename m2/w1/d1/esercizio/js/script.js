let europeo = document.querySelector('#europeo');


europeo = new Date()
document.write(europeo);



setInterval(function() {
    tempoReale = new Date();
    document.querySelector('#tempoReale').innerHTML = tempoReale.getHours() + ':' + tempoReale.getMinutes() + ':' + tempoReale.getSeconds();

},1000)




