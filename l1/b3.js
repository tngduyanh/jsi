const form = document.getElementById("form")


form.addEventListener("submit", (e) =>{
    e.preventDefault()

    const data = {
        name: form.name.value.trim(),
        age: form.age.value.trim(),
        rela: form.rela.value.trim(),
        email: form.email.value.trim(),
        gender: form.gender.value.trim(),              
    }
  
    if(data.name === ""){
        const nameError = document.getElementById('name-error')
        nameError.innerHTML = "Name cannot be empty"
        nameError.style = "display: block"
    }
    else{
        const nameError = document.getElementById('name-error')
        nameError.innerHTML = ""
        nameError.style = "display: none"
    }

    if(data.age === ""){
        const ageError = document.getElementById('age-error')
        ageError.innerHTML = "Age cannot be empty"
        ageError.style = "display: block"
    }
    else{
        const ageError = document.getElementById('age-error')
        ageError.innerHTML = ""
        ageError.style = "display: none"
    }

    if(data.rela === ""){
        const relaError = document.getElementById('rela-error')
        relaError.innerHTML = "Relationship cannot be empty"
        relaError.style = "display: block"
    }
    else{
        const relaError = document.getElementById('rela-error')
        relaError.innerHTML = ""
        relaError.style = "display: none"
    }

    if(data.email === ""){
        const emailError = document.getElementById('email-error')
        emailError.innerHTML = "Email cannot be empty"
        emailError.style = "display: block"
    }
    else{
        const emailError = document.getElementById('email-error')
        emailError.innerHTML = ""
        emailError.style = "display: none"
    }
     
    if(data.gender === ""){
        const genderError = document.getElementById('gender-error')
        genderError.innerHTML = "Gender cannot be empty"
        genderError.style = "display: block"
    }
    else{
        const genderError = document.getElementById('gender-error')
        genderError.innerHTML = ""
        genderError.style = "display: none"
    }
    // let jsonstring = JSON.stringify(data)

    // console.log(data);
    // console.log(jsonstring);

    // localStorage.setItem("user",jsonstring)

    // // console.log(localStorage.getItem("user"));
console.log(data);


}) 
  

