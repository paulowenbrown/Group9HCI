let loggedInAccount = ""
let accounts = [{ username:"admin", password:"password", fname:"admin", lname:"admin", email:"admin@admin.ca"}]

function setPage() {
    $("#loginError").hide()
    $("#menuPage").hide()
    $("#username").val("admin")
    $("#password").val("password")
}

function login(){
    let uname = $("#username").val()
    let pass = $("#password").val()
    // Search account list and set current logged in acount if found
    for(x in accounts) {
        let account = accounts[x]
        if(account.username == uname && account.password == pass) {
            loggedInAccount = account
            break
        }
    }
    // Show error message if no valid account to log in to otherwise route to correct page
    if(!loggedInAccount) {
        $("#loginError").show()
    } else {
        // Clear login page values
        $("#username").val("")
        $("#password").val("")
        $("#loginError").hide()
        showMenuPage()
    }
}

function logout(){
    loggedInAccount = ""
    $("#loginPage").show()
    $("#menuPage").hide()
}

function showMenuPage() {
    $("#loginPage").hide()
    $("#menuPage").show()
}

function signUp(){
    let uname = $("#unameSignUp").val()
    let pass = $("#passSignUp").val()
    let fname = $("#fnameSignUp").val()
    let lname = $("#lnameSignUp").val()
    let email = $("#emailSignUp").val()
    // Username and password cannot be blank
    if (uname && pass) {
        let newAccount = {
            username: uname,
            password: pass,
            fname: fname,
            lname: lname,
            email: email
        }
        // Add new account to array and set currently logged in
        accounts.push(newAccount)
        loggedInAccount = newAccount
        // Clear modal values
        $("#unameSignUp").val("")
        $("#passSignUp").val("")
        $("#fnameSignUp").val("")
        $("#lnameSignUp").val("")
        $("#emailSignUp").val("")
        closeModal()
        showMenuPage()
    } else {
        $("#signUpError").show()
    }
}

function openModal() {
    $("#signUpModal").show()
    $("#signUpError").hide()
}

// When the user clicks on <span> (x), close the modal
function closeModal() {
    $("#signUpModal").hide()
    $("#signUpError").hide()
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.id == "signUpModal") {
        closeModal()
    }
}