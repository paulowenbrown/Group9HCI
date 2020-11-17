let loggedInAccount = ""
let accounts = [{ username:"admin", password:"password", fname:"John", lname:"Smith", email:"admin@admin.ca", 
    cards: [{ name:"John", cardNumber:"1234123412341234", cardName:"John Smith", expDate:"01/22", cvv: "123" }],
    contacts: [{ name:"Jeff", username: "test" }], addresses: [{ name:"John", address:"123 Admin Place"}] }]

function setPage() {
    $("#loginError").hide()
    $("#restaurantPage").hide()
    $("#accountPage").hide()
    $("#menuPage").hide()
    $("#checkoutPage").hide()
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
        $("#accountBtn").show()
        showRestaurantPage()
    }
}

function guestUserLogin(){
    $("#accountBtn").hide()
    showRestaurantPage()
}

function logout(){
    loggedInAccount = ""
    $("#loginPage").show()
    $("#restaurantPage").hide()
}

function showRestaurantPage() {
    $("#loginPage").hide()
    $("#accountPage").hide()
    $("#restaurantPage").show()
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
            email: email,
            cards: [],
            contacts: [],
            addresses: []
        }
        // Add new account to array and sets currently logged in account
        accounts.push(newAccount)
        loggedInAccount = newAccount
        closeModal()
        showRestaurantPage()
    } else {
        $("#signUpError").show()
    }
}

function openSignUpModal() {
    $("#signUpModal").show()
    $("#signUpError").hide()
}