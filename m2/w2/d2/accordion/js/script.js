let bottoni = document.querySelectorAll('button')//array
let contents = document.querySelectorAll('.content')//array perche queryselectorall crea un array


for(let bottone of bottoni){
bottone.addEventListener('click', function(){
    
    bottone.nextElementSibling.classList.toggle('open')//toggle e un interruttore quindi quando premo il bottone gli dara la classe open, se viene ricliccato toglie la classe open

})
}
/*
bottoni.forEach((bottone,i) =>{

    bottone.addEventListener('click',function(){
        bottone.nextElementSibling.classList.toggle('open')
        bottone.nextElementSibling.id = "bottone" +i
    })
})VERSIONE CON IL FOREACH*/