const time = document.getElementById("clock")

setInterval(()=>{
    time.innerHTML = new Date().toLocaleTimeString()
}, 1000)