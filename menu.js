var data = '[ \
    {"name":"Combo #1", "text":"Item description", "category":"combos", "price":13.99, "popularity":6, "special":false, "image":"placeholder.png"}, \
    {"name":"Combo #2", "text":"Item description", "category":"combos", "price":10.99, "popularity":3, "special":true, "image":"placeholder.png"}, \
    {"name":"Combo #3", "text":"Item description", "category":"combos", "price":11.49, "popularity":8, "special":false, "image":"placeholder.png"}, \
    {"name":"Appetizer #1", "text":"Item description", "category":"appetizers", "price":3.99, "popularity":5, "special":false, "image":"placeholder.png"}, \
    {"name":"Appetizer #2", "text":"Item description", "category":"appetizers", "price":4.99, "popularity":1, "special":false, "image":"placeholder.png"}, \
    {"name":"Side #1", "text":"Item description", "category":"sides", "price":6.99, "popularity":2, "special":true, "image":"placeholder.png"}, \
    {"name":"Side #2", "text":"Item description", "category":"sides", "price":4.49, "popularity":9, "special":false, "image":"placeholder.png"}, \
    {"name":"Main #1", "text":"Item description", "category":"mains", "price":7.99, "popularity":4, "special":true, "image":"placeholder.png"}, \
    {"name":"Main #2", "text":"Item description", "category":"mains", "price":9.99, "popularity":10, "special":false, "image":"placeholder.png"}, \
    {"name":"Main #3", "text":"Item description", "category":"mains", "price":8.99, "popularity":7, "special":false, "image":"placeholder.png"}, \
    {"name":"Dessert #1", "text":"Item description", "category":"desserts", "price":3.49, "popularity":6, "special":false, "image":"placeholder.png"}, \
    {"name":"Dessert #2", "text":"Item description", "category":"desserts", "price":2.99, "popularity":4, "special":false, "image":"placeholder.png"} \
]';
var items = JSON.parse(data);
var orders = [];
var currentOrderSection = 0;

function refreshMenuItems() {
    var categories = document.getElementsByClassName("pill-active");
    var category = "";
    if (categories[0]) {
        category = categories[0].id
    }
    var sort = document.getElementById("menuSort").value;
    var search = document.getElementById("menuSearch").value.toUpperCase();

    var items = JSON.parse(data);
    if (sort == "price") items.sort(function(a, b){return a.price - b.price});
    if (sort == "popularity") items.sort(function(a, b){return b.popularity - a.popularity});
    if (sort == "specials") items.sort(function(a, b){return b.special - a.special});

    document.getElementById("dishSpace").innerHTML = "";
    for (i=0; i<items.length; i++) {
        if (category == "all" || items[i].category == category) {
            var itemtext = items[i].name + items[i].text;
                if (itemtext.toUpperCase().indexOf(search) > -1) {
                var item = document.createElement("div");
                item.setAttribute("class", "menuitem");
                item.setAttribute("id", "item_" + i.toString());

                if (items[i].special) item.classList.add("onSpecial");

                var name = document.createElement("h3");
                name.setAttribute("class", "itemName");
                name.appendChild(document.createTextNode(items[i].name));

                var text = document.createElement("p");
                text.setAttribute("class", "itemDescription");
                text.appendChild(document.createTextNode(items[i].text));

                var price = document.createElement("p");
                price.setAttribute("class", "itemPrice");
                price.appendChild(document.createTextNode(items[i].price));

                var img = document.createElement("img");
                img.setAttribute("class", "itemImg");
                img.setAttribute("src", items[i].image);

                var orderButtonPos = document.createElement("div");
                orderButtonPos.setAttribute("class","orderButtonPos");

                var menuDescripPos = document.createElement("div");
                menuDescripPos.setAttribute("class","menuDescripPos");

                var addButton = document.createElement("button");
                addButton.setAttribute("type", "button");
                addButton.setAttribute("class", "addButton");
                addButton.appendChild(document.createTextNode("Add to order"));
                addButton.setAttribute("onClick", "addToOrder(" + i.toString() + ");");

                var editDish = document.createElement("button");
                editDish.setAttribute("type", "button");
                editDish.setAttribute("class", "editDish");
                editDish.appendChild(document.createTextNode("Edit"));
                editDish.setAttribute("onClick", "addToOrder(" + i.toString() + ");");

                orderButtonPos.appendChild(addButton);
                orderButtonPos.appendChild(editDish);

                menuDescripPos.appendChild(name);
                menuDescripPos.appendChild(text);
                menuDescripPos.appendChild(price);

                item.appendChild(img);
                item.appendChild(menuDescripPos);
                item.appendChild(orderButtonPos);

                document.getElementById("dishSpace").appendChild(item);
            }
        }
    }
}

function addToOrder(id) {
    orders[currentOrderSection].items.push(id);
    refreshOrderList();
}

function removeFromOrder(section, num) {
    orders[section].items.splice(num, 1);
    refreshOrderList();
    // need to refresh checkout page in case it was done from there
    showCheckoutInfo()
}

function addOrderSection() {
    orders.push({name: "New Person", items: []});
    currentOrderSection = orders.length - 1;
    refreshOrderList();
}

function selectOrderSection(i) {
    currentOrderSection = i;
    refreshOrderList();
}

function removeOrderSection(i) {
    if (currentOrderSection >= i && currentOrderSection != 0) {
        currentOrderSection--;
    }
    orders.splice(i, 1);
    refreshOrderList();
}

function refreshOrderList() {
    if (orders.length == 1) {
        document.getElementById("singleOrGroup").innerHTML = "SINGLE";
    }
    else {
        document.getElementById("singleOrGroup").innerHTML = "GROUP";
    }

    document.getElementById("orderList").innerHTML = "";

    for (i=0; i<orders.length; i++) {
        var section = document.createElement("div");
        section.setAttribute("class", "orderSection");
        section.setAttribute("id", "section_" + i.toString());

        var sectionName = document.createElement("h2");
        sectionName.setAttribute("class", "orderSectionName");
        if (i == currentOrderSection) {
            sectionName.classList.add("selectedOrderSection");
        }
        sectionName.appendChild(document.createTextNode(orders[i].name));
        sectionName.setAttribute("onClick", "selectOrderSection(" + i.toString() + ");");
        section.appendChild(sectionName);

        if (orders.length > 1) {
            var removeButton = document.createElement("button");
            removeButton.setAttribute("type", "button");
            removeButton.setAttribute("class", "removeButton");
            removeButton.innerHTML = '<i class="fa fa-trash-o"></i>';
            removeButton.setAttribute("onClick", "removeOrderSection(" + i.toString() + ");");
            section.appendChild(removeButton);
        }

        for (j=0; j<orders[i].items.length; j++) {
            var orderItem = document.createElement("div");
            orderItem.setAttribute("class", "orderListItem");
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
        }
        document.getElementById("orderList").appendChild(section);
    }
}

function init() {
    refreshMenuItems();
    refreshOrderList();
}

function showMenuPage() {
    if (orders.length == 0) {
        orders.push({name: loggedInAccount.fname, items: []});
    }
    $("#menuPage").show()
    setActive($("#all"))
}

function hideMenuPage() {
    $("#menuPage").hide()
    removeActive()
}

$("#checkout").click(function() {
    $("#menuPage").hide()
    showCheckoutPage()
});

// For selecting categories
$("#all").click(function() {
    setActive(this)
});
$("#combos").click(function() {
    setActive(this)
});
$("#appetizers").click(function() {
    setActive(this)
});
$("#sides").click(function() {
    setActive(this)
});
$("#mains").click(function() {
    setActive(this)
});
$("#desserts").click(function() {
    setActive(this)
});
$("#storePolicy").click(function() {
    setActive(this)
});

function setActive(selected) {
    removeActive()
    $(selected).addClass("pill-active");
    refreshOrderList();
    refreshMenuItems();
}

function removeActive() {
    $("#all").removeClass("pill-active");
    $("#combos").removeClass("pill-active");
    $("#appetizers").removeClass("pill-active");
    $("#sides").removeClass("pill-active");
    $("#mains").removeClass("pill-active");
    $("#desserts").removeClass("pill-active");
    $("#storePolicy").removeClass("pill-active");
}

window.addEventListener('load',init);