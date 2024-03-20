let questionCards = document.querySelectorAll(".questionContainer");
for(let it of questionCards){
    it.childNodes[1].addEventListener("click",()=>{
        it.childNodes[3].style.display = "block";
        it.childNodes[1].childNodes[3].style.display="none";
        it.childNodes[1].childNodes[5].style.display = "block";
    })
}

for(let it of questionCards){
    it.childNodes[1].childNodes[5].addEventListener("click",()=>{
        // it.childNodes[3].setAttribute("style","display:none");
       window.location.reload();
    })
}