let number = document.querySelector(".number")
let submit = document.querySelector(".submit")
let view = document.querySelector(".view")

submit.addEventListener("click", function(){
    if(number.value >= 18){
        view.innerHTML = "You are adult"
        view.classList.add("d-block")
    } else{
        view.innerHTML = "You are child"
    }
})
