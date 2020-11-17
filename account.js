$("#account-profile-tab").click(function() {
	$("#profile").show();
	$("#contacts").hide();
	$("#cards").hide();
	$("#addresses").hide();
	$(this).addClass("pill-active");
	$("#account-card-tab").removeClass("pill-active");
	$("#account-contact-tab").removeClass("pill-active");
	$("#account-address-tab").removeClass("pill-active");
});

$("#account-card-tab").click(function() {
	$("#profile").hide();
	$("#contacts").hide();
	$("#cards").show();
	$("#addresses").hide();
	$(this).addClass("pill-active");
	$("#account-profile-tab").removeClass("pill-active");
	$("#account-contact-tab").removeClass("pill-active");
	$("#account-address-tab").removeClass("pill-active");
});

$("#account-contact-tab").click(function() {
	$("#profile").hide();
	$("#contacts").show();
	$("#cards").hide();
	$("#addresses").hide();
	$(this).addClass("pill-active");
	$("#account-card-tab").removeClass("pill-active");
	$("#account-profile-tab").removeClass("pill-active");
	$("#account-address-tab").removeClass("pill-active");
});

$("#account-address-tab").click(function() {
	$("#profile").hide();
	$("#contacts").hide();
	$("#cards").hide();
	$("#addresses").show();
	$(this).addClass("pill-active");
	$("#account-card-tab").removeClass("pill-active");
	$("#account-contact-tab").removeClass("pill-active");
	$("#account-profile-tab").removeClass("pill-active");
});

$("#btnAddress").click(function() {
 	$("#add-address-modal").show();
});

$("#btnPwd").click(function() {
	$("#passwordError").hide()
 	$("#change-pwd-modal").show();
});

$("#btnContact").click(function() {
 	$("#add-contact-modal").show();
});

$("#btnCard").click(function() {
	$("#cardNumError").hide()
	$("#cvvError").hide()
	$("#expDateError").hide()
 	$("#add-card-modal").show();
});

// Code other than modal showing and pill

function showAccountPage() {
	$("#restaurantPage").hide()
	$("#accountPage").show()
	// Sets Account field values
	$("#usernameAcc").val(loggedInAccount.username)
	$("#fnameAcc").val(loggedInAccount.fname)
	$("#lnameAcc").val(loggedInAccount.lname)
	$("#emailAcc").val(loggedInAccount.email)
	$("#passwordAcc").val(loggedInAccount.password)
}

$("#save-info").click(function() {
	var r = confirm("Are you sure you want to change this information?");
	if (r == true) {
    	loggedInAccount.username = $("#usernameAcc").val()
		loggedInAccount.fname = $("#fnameAcc").val()
		loggedInAccount.lname = $("#lnameAcc").val()
		loggedInAccount.email = $("#emailAcc").val()
 	}
});

$("#change-pwd").click(function() {
	let newPass = $("#passwordNew").val()
	let confirmPass = $("#passwordConfirm").val()
	// Passwords must match
	if (newPass == confirmPass) {
		loggedInAccount.password = newPass
		$("#passwordAcc").val(loggedInAccount.password)
		$("#passwordNew").val("")
		$("#passwordConfirm").val("")
		$(".modal").hide()
	} else {
		$("#passwordError").show()
	}
});

$("#add-card").click(function() {
	let error = false
	let name = $("#cardInputName").val()
	let cardNum = $("#cardNum").val()
	let cardName = $("#cardName").val()
	let expDate = $("#expDate").val()
	let cvv = $("#cvv").val()
	// Hide all errors before checking and redisplaying if necessary
	$("#cardNumError").hide()
	$("#cvvError").hide()
	$("#expDateError").hide()
	// Error checking for incorrect inputs
	if(!expDate.match(/^[0-9][0-9]\/[0-9][0-9]$/)) {
		$("#expDateError").show()
		error = true
	}
	if(!cardNum.match(/^[0-9]{16}$/)) {
		$("#cardNumError").show()
		error = true
	}
	if(!cvv.match(/^[0-9]{3}$/)) {
		$("#cvvError").show()
		error = true
	}
	// Add card to list
	if (!error) {
		loggedInAccount.cards.push({
			name: name,
			cardNumber: cardNum,
			cardName: cardName,
			expDate: expDate,
			cvv: cvv
		})
		$("#cardInputName").val("")
		$("#cardNum").val("")
		$("#cardName").val("")
		$("#expDate").val("")
		$("#cvv").val("")
		$(".modal").hide()
	}
});

$("#add-contact").click(function() {
	let name = $("#contactInputName").val()
	let username = $("#contactUsername").val()
	loggedInAccount.contacts.push({
		name: name,
		username: username
	})
	$("#contactInputName").val("")
	$("#contactUsername").val("")
	$(".modal").hide()
});

$("#add-address").click(function() {
	let name = $("#addressInputName").val()
	let address = $("#address").val()
	loggedInAccount.adresses.push({
		name: name,
		address: address
	})
	$("#addressInputName").val("")
	$("#address").val("")
	$(".modal").hide()
});