const form = document.querySelector("form")

form.addEventListener("submit", (e)=>{
    e.preventDefault()

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const results = document.querySelector("#results")

    if(height=== "" || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`
    }else if(weight=== "" || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`
    }else{
        const bmi = (weight / ((height * height)/10000)).toFixed(2)
        let weightCategory
        if(bmi< 18.6){
            weightCategory= "Under Weight"
        }else if(bmi< 24.9){
            weightCategory= "Normal Range"
        }else{
            weightCategory= "Over Weight"
        }
        results.innerHTML = `Your bmi is ${bmi}<p> it's in ${weightCategory} category</p>`
    }
})