let loggedInAccount = ""
let accountIndex = null // location in array of currently logged in account for ease of access
let accounts = [{ username:"admin", password:"password", fname:"John", lname:"Smith", email:"admin@admin.ca", 
    cards: [{ name:"John", cardNumber:"1234123412341234", cardName:"John Smith", expDate:"01/22", cvv: "123" }],
    contacts: [{ name:"Jeff", username: "test" }], addresses: [{ name:"John", address:"123 Admin Place"}] }]

function setPage() {
    $("#loginError").hide()
    $("#menuPage").hide()
    $("#accountPage").hide()
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
            accountIndex = x
            break
        }
    }
    // Show error message if no valid account to log in to otherwise route to correct page
    if(!loggedInAccount) {
        $("#loginError").show()
    } else {
        showMenuPage()
    }
}

function logout(){
    loggedInAccount = ""
    accountIndex = null
    $("#loginPage").show()
    $("#menuPage").hide()
}

function showMenuPage() {
    $("#loginPage").hide()
    $("#accountPage").hide()
    $("#menuPage").show()
    // Clear login page values
    $("#username").val("")
    $("#password").val("")
    $("#loginError").hide()
    // Clear modal values
    $("#unameSignUp").val("")
    $("#passSignUp").val("")
    $("#fnameSignUp").val("")
    $("#lnameSignUp").val("")
    $("#emailSignUp").val("")
}

function showAccountPage() {
    $("#menuPage").hide()
    $("#accountPage").show()
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
        // Add new account to array and sets currently logged in account
        accounts.push(newAccount)
        loggedInAccount = newAccount
        closeModal()
        showMenuPage()
    } else {
        $("#signUpError").show()
    }
}

function openSignUpModal() {
    $("#signUpModal").show()
    $("#signUpError").hide()
}