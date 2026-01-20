

let firstName = document.getElementById("firstName")
let lastName = document.getElementById("lastName")
let date = document.getElementById("date")
let month = document.getElementById("month")
let year = document.getElementById("year")
let email = document.getElementById("email")
let password = document.getElementById("password")
let gender = document.getElementsByName("gender")
let selectedGender = document.querySelector('input[name="gender"]:checked');



let users = []
let isChecked = false



let btn = document.getElementById("submit")

const errorFunction = (title, message, icon) => {
    Swal.fire({
        icon: icon,
        title: title,
        text: message,
        footer: '<a href="#">Why do I have this issue?</a>'
    });

}

const handlerSubmit = () => {


    usersData = {
        firstName: firstName.value,
        lastName: lastName.value,
        date: date.value,
        month: month.value,
        year: year.value,
        email: email.value,
        password: password.value,

    }
    for (let i = 0; i < gender.length; i++) {
        if(gender[i].checked){
            usersData.gender = gender[i].value
            isChecked = true
        }
    }
   

    if (email.value.trim() == "" || password.value.trim() == "" || firstName.value.trim() == "" || lastName.value.trim() == "" ||
        date.value.trim() == "" || month.value.trim() == "" || year.value.trim() == ""  ) {
        errorFunction("Error", "Please Fill All The Fields", "error")
        return
    }
    if (password.value.length < 8) {
        errorFunction("Error", "Your password must be greater than 8 characters", "error")
    }
    if(isChecked == false){
        errorFunction("Error", "Please enter your gender", "error")
        return

    }


    else {
        errorFunction("Conguration", "Your account has been created", "success")
    }
  
   
    
    
    users.push(usersData)

    JSON.parse(localStorage.getItem("users"))
    localStorage.setItem("users", JSON.stringify(users))



}

btn.addEventListener("click", handlerSubmit)



