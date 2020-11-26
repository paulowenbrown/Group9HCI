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
    var category = categories[0].id;
    var sort = document.getElementById("sort").value;
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

                var addButton = document.createElement("button");
                addButton.setAttribute("type", "button");
                addButton.setAttribute("class", "addButton");
                addButton.appendChild(document.createTextNode("Add to order"));
                addButton.setAttribute("onClick", "addToOrder(" + i.toString() + ");");

                item.appendChild(img);
                item.appendChild(name);
                item.appendChild(text);
                item.appendChild(price);
                item.appendChild(addButton);

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
}

function addOrderSection() {
    orders.push({name: "New Section", items: []});
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
            removeButton.appendChild(document.createTextNode("Remove Section"));
            removeButton.setAttribute("onClick", "removeOrderSection(" + i.toString() + ");");
            section.appendChild(removeButton);
        }

        for (j=0; j<orders[i].items.length; j++) {
            var orderItem = document.createElement("div");
            orderItem.setAttribute("class", "orderListItem");
            orderItem.setAttribute("id", "orderListItem_" + i.toString() + "_" + j.toString());

            var text = document.createElement("p");
            text.setAttribute("class", "orderListItemText");
            text.appendChild(document.createTextNode(items[orders[i].items[j]].name + " - " + items[orders[i].items[j]].price));

            var removeButton = document.createElement("button");
            removeButton.setAttribute("type", "button");
            removeButton.setAttribute("class", "removeButton");
            removeButton.appendChild(document.createTextNode("Remove"));
            removeButton.setAttribute("onClick", "removeFromOrder(" + i.toString() + ", " + j.toString() + ");");

            orderItem.appendChild(text);
            orderItem.appendChild(removeButton);

            section.appendChild(orderItem);
        }
        document.getElementById("orderList").appendChild(section);
    }
    console.log(orders[0].items.toString());
}

function init() {
    refreshMenuItems();
    orders.push({name: "Person 1", items: []});
    refreshOrderList();
}

window.addEventListener('load',init);