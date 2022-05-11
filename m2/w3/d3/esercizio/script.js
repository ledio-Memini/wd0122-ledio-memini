fetch("json/discografia.json")
.then(res => {
    if(res.ok)
    console.log(res);
    return res.json
})

let first = document.querySelector('#first')
let bottone1 = document.querySelector('#scrivi')
let bottone2 = document.querySelector('#cancella')
let titolo = document.querySelector('#titolo')

bottone1.addEventListener('click',function(e){
    e.preventDefault()
    sessionStorage.setItem("nome", first.value)
    titolo.innerHTML = "ciao sono " + sessionStorage.getItem("nome")

})


bottone2.addEventListener('click',function(e){
    e.preventDefault()
    sessionStorage.clear()
    titolo.innerHTML = "no data"
    first.value = ""
})

let bottone3 = document.querySelector("#write")
let bottone4 = document.querySelector("#cancella1")

bottone3.addEventListener('click',function(e){
    e.preventDefault()
    localStorage.setItem("nome", first.value)

})


bottone4.addEventListener('click',function(e){
    e.preventDefault()
    localStorage.clear()
    titolo.innerHTML = "no data"
    first.value = ""
})


titolo.innerHTML = "ciao sono " + localStorage.getItem("nome")