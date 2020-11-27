$("#backMenu").click(function () {
  $("#menuPage").show()
  $("#checkoutPage").hide()
})

function showCheckoutInfo() {
  document.getElementById("persons").innerHTML = "";

  for (i = 0; i < orders.length; i++) {
    var section = document.createElement("div");
    section.setAttribute("class", "orderSection");
    section.setAttribute("id", "section_" + i.toString());

    var sectionName = document.createElement("h2");
    sectionName.setAttribute("class", "orderSectionName");
    sectionName.appendChild(document.createTextNode(orders[i].name));
    section.appendChild(sectionName);

    // Payment title
    var payTitle = document.createElement("h3");
    payTitle.appendChild(document.createTextNode("Select a payment option:"));
    section.appendChild(payTitle);

    // Radio box to use either card or contact
    var radioForm = document.createElement("form");

    var radioCard = document.createElement("input");
    var labelRadioCard = document.createElement('label');
    radioCard.setAttribute("type", "radio");
    radioCard.setAttribute("class", "paymentChoice");
    radioCard.setAttribute("id", "radioCard_" + i);
    radioCard.setAttribute("value", "card");
    radioCard.setAttribute("name", "select");
    radioCard.setAttribute("onChange", "setSelected(" + i + ");");
    if (orders[i].checked == "card") {
      radioCard.setAttribute("checked", true);
    }
    labelRadioCard.setAttribute("for", "radioCard_" + i);
    labelRadioCard.setAttribute("id", "labelRadioCard_" + i);
    labelRadioCard.appendChild(document.createTextNode("Credit Card"));
    radioForm.appendChild(radioCard);
    radioForm.appendChild(labelRadioCard);

    var radioContact = document.createElement("input");
    var labelRadioContact = document.createElement('label');
    radioContact.setAttribute("type", "radio");
    radioContact.setAttribute("class", "paymentChoice");
    radioContact.setAttribute("id", "radioContact_" + i);
    radioContact.setAttribute("value", "contact");
    radioContact.setAttribute("name", "select");
    radioContact.setAttribute("onChange", "setSelected(" + i + ");");
    if (orders[i].checked == "contact") {
      radioContact.setAttribute("checked", true);
    }
    labelRadioContact.setAttribute("for", "radioContact_" + i);
    labelRadioContact.setAttribute("id", "labelRadioContact_" + i);
    labelRadioContact.appendChild(document.createTextNode("Contact"));
    radioForm.appendChild(radioContact);
    radioForm.appendChild(labelRadioContact);
    section.append(radioForm);

    // Card option
    var cardSelect = document.createElement('select');
    var labelCard = document.createElement('label');
    labelCard.setAttribute("for", "card_" + i);
    labelCard.setAttribute("class", "labelDropdown");
    labelCard.setAttribute("id", "labelCard_" + i);
    labelCard.appendChild(document.createTextNode("Credit Card:"));
    section.appendChild(labelCard);
    cardSelect.setAttribute("onChange", "setCard(" + i + ");");
    cardSelect.setAttribute("class", "dropdownOption");
    cardSelect.setAttribute("id", "card_" + i);
    for (j = 0; j < loggedInAccount.cards.length; j++) {
      var card = loggedInAccount.cards[j];
      var opt = document.createElement('option');
      opt.setAttribute('value', card.cardNumber);
      if (orders[i].cardNumber == card.cardNumber) {
        opt.setAttribute('selected', 'selected');
      }
      opt.appendChild(document.createTextNode(card.name + " - " + card.cardNumber));
      cardSelect.appendChild(opt);
    }
    section.appendChild(cardSelect);
    // Add card button
    var addCard = document.createElement('button');
    addCard.appendChild(document.createTextNode("Add Card"));
    addCard.setAttribute("id", "addCard_" + i);
    addCard.setAttribute("onClick", "showCardModal();");
    section.appendChild(addCard);

    // Contact option
    var contactSelect = document.createElement('select');
    var labelContact = document.createElement('label');
    labelContact.setAttribute("for", "contact_" + i);
    labelContact.setAttribute("class", "labelDropdown");
    labelContact.setAttribute("id", "labelContact_" + i);
    labelContact.appendChild(document.createTextNode("Contact:"));
    section.appendChild(labelContact);
    contactSelect.setAttribute("onChange", "setContact(" + i + ");");
    contactSelect.setAttribute("class", "dropdownOption");
    contactSelect.setAttribute("id", "contact_" + i);
    for (j = 0; j < loggedInAccount.contacts.length; j++) {
      var contact = loggedInAccount.contacts[j];
      var opt = document.createElement('option');
      opt.setAttribute('value', contact.username);
      if (orders[i].contact == contact.username) {
        opt.setAttribute('selected', 'selected');
      }
      opt.appendChild(document.createTextNode(contact.name + " - " + contact.username));
      contactSelect.appendChild(opt);
    }
    section.appendChild(contactSelect);
    // Add contact button
    var addContact = document.createElement('button');
    addContact.appendChild(document.createTextNode("Add Contact"));
    addContact.setAttribute("id", "addContact_" + i);
    addContact.setAttribute("onClick", "showContactModal();");
    section.appendChild(addContact);

    var total = 0;

    for (j = 0; j < orders[i].items.length; j++) {
      var orderItem = document.createElement("div");
      orderItem.setAttribute("class", "orderListItemCheckout");
      orderItem.setAttribute("id", "orderListItem_" + i.toString() + "_" + j.toString());

      var text = document.createElement("p");
      text.setAttribute("class", "orderListItemText");
      text.appendChild(document.createTextNode(items[orders[i].items[j]].name));

      var text2 = document.createElement("p");
      text2.setAttribute("class", "orderListItemText");
      text2.setAttribute("class", "orderListItemTextPrice");
      text2.appendChild(document.createTextNode(items[orders[i].items[j]].price));

      var removeButton = document.createElement("button");
      removeButton.setAttribute("type", "button");
      removeButton.setAttribute("class", "removeButton");
      removeButton.innerHTML = '&times;';
      removeButton.setAttribute("onClick", "removeFromOrder(" + i.toString() + ", " + j.toString() + ");");

      orderItem.appendChild(text);
      orderItem.appendChild(text2);
      orderItem.appendChild(removeButton);

      section.appendChild(orderItem);

      total += items[orders[i].items[j]].price;
    }

    section.appendChild(document.createElement("br"));
    var sectionTotal = document.createElement("h2");
    sectionTotal.setAttribute("class", "orderSectionTotal");
    sectionTotal.appendChild(document.createTextNode("Total: " + total));
    section.appendChild(sectionTotal);

    document.getElementById("persons").appendChild(section);
    hideNotSelected();
  }
}

function hideNotSelected() {
  for (x = 0; x < orders.length; x++) {
    // hide all first
    $("#card_" + x).hide()
    $("#labelCard_" + x).hide()
    $("#addCard_" + x).hide()
    $("#contact_" + x).hide()
    $("#labelContact_" + x).hide()
    $("#addContact_" + x).hide()
    // show if selected
    if (orders[x].checked == "contact") {
      $("#contact_" + x).show()
      $("#labelContact_" + x).show()
      $("#addContact_" + x).show()
    } else if (orders[x].checked == "card") {
      $("#card_" + x).show()
      $("#labelCard_" + x).show()
      $("#addCard_" + x).show()
    }
  }
}

function setSelected(index) {
  var bool = document.getElementById("radioCard_" + index).checked;
  if (bool) {
    orders[index].checked = "card"
    $("#card_" + index).show()
    $("#labelCard_" + index).show()
    $("#addCard_" + index).show()
    $("#contact_" + index).hide()
    $("#labelContact_" + index).hide()
    $("#addContact_" + index).hide()
  } else {
    orders[index].checked = "contact"
    $("#contact_" + index).show()
    $("#labelContact_" + index).show()
    $("#addContact_" + index).show()
    $("#card_" + index).hide()
    $("#labelCard_" + index).hide()
    $("#addCard_" + index).hide()
  }
}

function setCard(index) {
  orders[index].cardNumber = $("#card_" + index).val();
}

function setContact(index) {
  orders[index].contact = $("#contact_" + index).val();
}

function showCardModal() {
  $("#cardNumErrorC").hide()
  $("#cvvErrorC").hide()
  $("#expDateErrorC").hide()
  $("#add-card-modal-checkout").show();
}

function showContactModal() {
  $("#add-contact-modal-checkout").show();
}

$("#add-card-checkout").click(function () {
  let error = false
  let name = $("#cardInputNameC").val()
  let cardNum = $("#cardNumC").val()
  let cardName = $("#cardNameC").val()
  let expDate = $("#expDateC").val()
  let cvv = $("#cvvC").val()
  // Hide all errors before checking and redisplaying if necessary
  $("#cardNumErrorC").hide()
  $("#cvvErrorC").hide()
  $("#expDateErrorC").hide()
  // Error checking for incorrect inputs
  if (!expDate.match(/^[0-9][0-9]\/[0-9][0-9]$/)) {
    $("#expDateErrorC").show()
    error = true
  }
  if (!cardNum.match(/^[0-9]{16}$/)) {
    $("#cardNumErrorC").show()
    error = true
  }
  if (!cvv.match(/^[0-9]{3}$/)) {
    $("#cvvErrorC").show()
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

    showCheckoutInfo()

    $("#cardInputNameC").val("")
    $("#cardNumC").val("")
    $("#cardNameC").val("")
    $("#expDateC").val("")
    $("#cvvC").val("")
    $(".modal").hide()
  }
});

$("#add-contact-checkout").click(function () {
  let name = $("#contactInputNameC").val()
  let username = $("#contactUsernameC").val()
  let contact = {
    name: name,
    username: username
  }
  loggedInAccount.contacts.push(contact)

  showCheckoutInfo()

  $("#contactInputNameC").val("")
  $("#contactUsernameC").val("")
  $(".modal").hide()
});

function placeOrder() {
  var showError = false;
  for (i = 0; i < orders.length; i++) {
    if (!orders[i].checked) {
      showError = true;
    }
  }
  if (showError) {
    $("#payError").show()
  } else {
    $("#payError").hide()
    $("#orderConfirm").show()
  }
}

function showCheckoutPage() {
  $("#payError").hide()
  $("#orderConfirm").hide()
  showCheckoutInfo()
  $("#checkoutPage").show()
}

function hideCheckoutPage() {
  $("#checkoutPage").hide()
}