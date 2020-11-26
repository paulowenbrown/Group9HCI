let fakeaccount = [{
  username: "admin", password: "password", fname: "John", lname: "Smith", email: "admin@admin.ca",
  cards: [{ name: "John", cardNumber: "1234123412341234", cardName: "John Smith", expDate: "01/22", cvv: "123" }],
  contacts: [{ name: "Jeff", username: "test" }], addresses: [{ name: "John", address: "123 Admin Place" }]
}]

// Get the modal
var modal = document.getElementById("payment-modal");

// Get the button that opens the modal
var btn = document.getElementById("payment-select");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("payment-close")[0];



// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Get the modal
var card_modal = document.getElementById("add-card-modal");

// Get the button that opens the modal
var card_btn = document.getElementById("addCard-btn");

// Get the <span> element that closes the modal
var card_span = document.getElementsByClassName("add-card-close")[0];

// When the user clicks the button, open the modal 
card_btn.onclick = function () {
  card_modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
card_span.onclick = function () {
  card_modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == card_modal) {
    card_modal.style.display = "none";
  }
}



function checkoutCardList() {

  // Clear divs to ensure no duplication
  $("#cardList").html("");

  for (let x in fakeaccount.cards) {
    let card = fakeaccount.cards[x]
    appendCard(card)
  }
  console.log("testing2222");
}

function appendCard(card) {
  console.log("testing333");
  var item = document.createElement("input")
  item.setAttribute("type", "radio")
  item.setAttribute("value", card.cardNumber)
  var itemLable = document.createElement("lable")
  itemLable.setAttribute("for", card.cardNumber)
  itemLable.appendChild(document.createTextNode(card.name + " - " + card.cardNumber))
  document.getElementById("cardList").appendChild(item);
  document.getElementById("cardList").appendChild(itemLable);
}
// When the user clicks the button, open the modal 


$("#payment-select").click(function () {

  checkoutCardList();
  console.log("testing");
  modal.style.display = "block";
  if (localStorage.getItem('data')) {
    var data = JSON.parse(localStorage.getItem('data'));
    console.log(data);
    for (var i = 0; i < data.length; i++) {
      console.log(i)
      $('#cardList').append('<h4><input type="radio" name="pay" value=""/>' + data[i].name + ' - ' + data[i].card + '</h4>');
    }
  }
})