$("#account-profile-tab").click(function () {
	$("#profile").show();
	$("#contacts").hide();
	$("#cards").hide();
	$("#addresses").hide();
	$(this).addClass("pill-active");
	$("#account-card-tab").removeClass("pill-active");
	$("#account-contact-tab").removeClass("pill-active");
	$("#account-address-tab").removeClass("pill-active");
});

$("#account-card-tab").click(function () {
	$("#profile").hide();
	$("#contacts").hide();
	$("#cards").show();
	$("#addresses").hide();
	$(this).addClass("pill-active");
	$("#account-profile-tab").removeClass("pill-active");
	$("#account-contact-tab").removeClass("pill-active");
	$("#account-address-tab").removeClass("pill-active");
});

$("#account-contact-tab").click(function () {
	$("#profile").hide();
	$("#contacts").show();
	$("#cards").hide();
	$("#addresses").hide();
	$(this).addClass("pill-active");
	$("#account-card-tab").removeClass("pill-active");
	$("#account-profile-tab").removeClass("pill-active");
	$("#account-address-tab").removeClass("pill-active");
});

$("#account-address-tab").click(function () {
	$("#profile").hide();
	$("#contacts").hide();
	$("#cards").hide();
	$("#addresses").show();
	$(this).addClass("pill-active");
	$("#account-card-tab").removeClass("pill-active");
	$("#account-contact-tab").removeClass("pill-active");
	$("#account-profile-tab").removeClass("pill-active");
});

$("#btnAddress").click(function () {
	$("#add-address-modal").show();
});

$("#btnPwd").click(function () {
	$("#passwordError").hide()
	$("#change-pwd-modal").show();
});

$("#btnContact").click(function () {
	$("#add-contact-modal").show();
});

$("#btnCard").click(function () {
	$("#cardNumError").hide()
	$("#cvvError").hide()
	$("#expDateError").hide()
	$("#add-card-modal").show();
});

function removeAccountActive() {
	$("#account-card-tab").removeClass("pill-active");
	$("#account-contact-tab").removeClass("pill-active");
	$("#account-profile-tab").removeClass("pill-active");
	$("#account-address-tab").removeClass("pill-active");
}

function hideAccountPage() {
	$("#accountPage").hide()
	removeAccountActive()
}

function showAccountPage() {
	$("#restaurantPage").hide()
	$("#accountPage").show()
	$("#account-profile-tab").removeClass("pill-active");
	listInit()
	// Sets Account field values
	$("#usernameAcc").val(loggedInAccount.username)
	$("#fnameAcc").val(loggedInAccount.fname)
	$("#lnameAcc").val(loggedInAccount.lname)
	$("#emailAcc").val(loggedInAccount.email)
	$("#passwordAcc").val(loggedInAccount.password)
}

$("#save-info").click(function () {
	var r = confirm("Are you sure you want to change this information?");
	if (r == true) {
		loggedInAccount.username = $("#usernameAcc").val()
		loggedInAccount.fname = $("#fnameAcc").val()
		loggedInAccount.lname = $("#lnameAcc").val()
		loggedInAccount.email = $("#emailAcc").val()
	}
});

$("#change-pwd").click(function () {
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

$("#add-card").click(function () {
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
	if (!expDate.match(/^[0-9][0-9]\/[0-9][0-9]$/)) {
		$("#expDateError").show()
		error = true
	}
	if (!cardNum.match(/^[0-9]{16}$/)) {
		$("#cardNumError").show()
		error = true
	}
	if (!cvv.match(/^[0-9]{3}$/)) {
		$("#cvvError").show()
		error = true
	}
	// Add card to list
	if (!error) {
		let card = {
			name: name,
			cardNumber: cardNum,
			cardName: cardName,
			expDate: expDate,
			cvv: cvv
		}
		loggedInAccount.cards.push(card)
		appendCard(card)
		$("#cardInputName").val("")
		$("#cardNum").val("")
		$("#cardName").val("")
		$("#expDate").val("")
		$("#cvv").val("")
		$(".modal").hide()
	}
});

$("#add-contact").click(function () {
	let name = $("#contactInputName").val()
	let username = $("#contactUsername").val()
	let contact = {
		name: name,
		username: username
	}
	loggedInAccount.contacts.push(contact)
	appendContact(contact)
	$("#contactInputName").val("")
	$("#contactUsername").val("")
	$(".modal").hide()
});

$("#add-address").click(function () {
	let name = $("#addressInputName").val()
	let address = $("#address").val()
	let addr = {
		name: name,
		address: address
	}
	loggedInAccount.addresses.push(addr)
	appendAddress(addr)
	$("#addressInputName").val("")
	$("#address").val("")
	$(".modal").hide()
});

function listInit() {
	// Clear divs to ensure no duplication
	$("#cardList").html("");
	$("#contactList").html("");
	$("#addressList").html("");
	for (x in loggedInAccount.cards) {
		let card = loggedInAccount.cards[x]
		appendCard(card)
	}
	for (x in loggedInAccount.contacts) {
		let contact = loggedInAccount.contacts[x]
		appendContact(contact)
	}
	for (x in loggedInAccount.addresses) {
		let addr = loggedInAccount.addresses[x]
		appendAddress(addr)
	}
}

function appendCard(card) {
	var item = document.createElement("h4")
	item.appendChild(document.createTextNode(card.name + " - " + card.cardNumber))
	document.getElementById("cardList").appendChild(item);
}

function appendContact(contact) {
	var item = document.createElement("h4")
	item.appendChild(document.createTextNode(contact.name + " - " + contact.username))
	document.getElementById("contactList").appendChild(item);
}

function appendAddress(addr) {
	var item = document.createElement("h4")
	item.appendChild(document.createTextNode(addr.name + " - " + addr.address))
	document.getElementById("addressList").appendChild(item);
}