

$("#backMenu").click(function () {
  $("#menuPage").show()
  $("#checkoutPage").hide()
})






$('#add-card').click(function () {
  var cardInputName = $('#cardInputName').val();
  var cardNum = $('#cardNum').val();
  var cardName = $('#cardName').val();
  var expDate = $('#expDate').val();
  var cvv = $('#cvv').val();
  $('#cardList').append('<h4><input type="radio" name="pay" value=""/>' + cardInputName + ' - ' + cardNum + '</h4>');
})

// var persons = localStorage.getItem('persons');
// console.log(persons)
// if (persons) {
//   persons = JSON.parse(persons);
//   var html = '';
//   for (var k = 0; k < persons.length; k++) {
//       html += '<div class="item">';
//       html += '<h2>' + persons[k].person + '</h2>';
//       html += '<button class="payment-select">Select Payment</button>';
//       html += '<h3>Items: ' + persons[k].items + '</h3>';
//       html += '<h3>Total:</h3>';
//       html += '</div>';
//   }
//   $('#persons').html(html);
// }

$('#addCard-btn').click(function () {
  $("#add-card-modal").show()
})


function checkoutCardList() {
  // Clear divs to ensure no duplication
  $("#cardList").html("");

  for (let x in loggedInAccount.cards) {
    let card = loggedInAccount.cards[x]
    appendCard(card)
  }
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
  console.log("AOSK")
  checkoutCardList();
  $("#payment-modal").show()
  if (localStorage.getItem('data')) {
    var data = JSON.parse(localStorage.getItem('data'));
    console.log(data);
    for (var i = 0; i < data.length; i++) {
      console.log(i)
      $('#cardList').append('<h4><input type="radio" name="pay" value=""/>' + data[i].name + ' - ' + data[i].card + '</h4>');
    }
  }
})


// $('#cardList').append('<h4>' + name + ' - ' + cardNum + '</h4>');
// var data = {
//   'name': name,
//   'card': cardNum
// };

// var arr1 = [];
// if (localStorage.getItem('data')) {
//   arr1 = JSON.parse(localStorage.getItem('data'));
//   arr1.push(data);
//   localStorage.setItem('data', JSON.stringify(arr1));

// } else {
//   arr1.push(data);
//   localStorage.setItem('data', JSON.stringify(arr1));

// }
