

const buttons =  document.querySelectorAll('button')
const display  = document.querySelector('.display')
buttons.forEach(function(button){
    button.addEventListener("click", calculate)
})
function  calculate(event){
    const buttonclickValue = event.target.value
    if(buttonclickValue === "="){
        if(display.value !==""){
            display.value = eval(display.value)
        }
    }else if(buttonclickValue === "clear"){
        display.value = ""
    }else{
        display.value += buttonclickValue
    }
}