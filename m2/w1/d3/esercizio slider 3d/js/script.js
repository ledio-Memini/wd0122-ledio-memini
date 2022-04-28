var angle = 0
function galleryspin(sign){
    spinner = document.querySelector(".spinner");
    if(!sign){
        angle = angle + 45;
    }
    else{
        angle = angle - 45;
    }
    spinner.setAttribute("style","transform:rotateY("+ angle +"deg);");
}