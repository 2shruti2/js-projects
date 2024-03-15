const randomColor = () => {
    const hex = "0123456789ABCDEF"
    let color = "#"
    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}

const start = document.getElementById("start")
const stop = document.getElementById("stop")
const body = document.querySelector("body")

const changeBgColor = () =>{
    body.style.backgroundColor = randomColor()
}

let intervalId
start.addEventListener("click", function(){
    if(!intervalId){
    intervalId = setInterval(changeBgColor, 1000)
    }
})

stop.addEventListener("click", function(){
    clearInterval(intervalId)
    intervalId = null
})