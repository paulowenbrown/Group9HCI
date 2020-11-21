var data = '[ \
    {"name":"Item #1", "text":"Item description #1", "image":"placeholder.png"}, \
    {"name":"Item #2", "text":"Item description #2", "image":"placeholder.png"}, \
    {"name":"Item #3", "text":"Item description #3", "image":"placeholder.png"}, \
    {"name":"Item #4", "text":"Item description #4", "image":"placeholder.png"}, \
    {"name":"Item #5", "text":"Item description #5", "image":"placeholder.png"}, \
    {"name":"Item #6", "text":"Item description #6", "image":"placeholder.png"} \
]';

var items = JSON.parse(data);
var orders = [];
var currentOrderSection = 0;

function displayMenuItems() {
    for (i=0; i<items.length; i++) {
        var item = document.createElement("div");
        item.setAttribute("class", "menuitem");
        item.setAttribute("id", "item_" + i.toString());

        var name = document.createElement("h3");
        name.setAttribute("class", "itemName");
        name.appendChild(document.createTextNode(items[i].name));

        var text = document.createElement("p");
        text.setAttribute("class", "itemDescription");
        text.appendChild(document.createTextNode(items[i].text));

        var img = document.createElement("img");
        img.setAttribute("class", "itemImg");
        img.setAttribute("src", items[i].image);

        var addButton = document.createElement("button");
        addButton.setAttribute("type", "button");
        addButton.setAttribute("class", "addButton");
        addButton.appendChild(document.createTextNode("Default"));
        addButton.setAttribute("onClick", "addToOrder(" + i.toString() + ");");

        var editDish = document.createElement("button");
        editDish.setAttribute("type", "button");
        editDish.setAttribute("class", "editDish");
        editDish.appendChild(document.createTextNode("Edit"));
        //editDish.setAttribute("onClick", "addToOrder(" + i.toString() + ");");

        item.appendChild(img);
        item.appendChild(name);
        item.appendChild(text);
        item.appendChild(addButton);
        item.appendChild(editDish);

        document.getElementById("dishSpace").appendChild(item);
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
    $('#singleOrGroup').text('SINGLE');
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
            $('#singleOrGroup').text('GROUP');
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

            var removeButton = document.createElement("button");
            removeButton.setAttribute("type", "button");
            removeButton.setAttribute("class", "removeItem");
            removeButton.innerHTML = '&times;';
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
    displayMenuItems();
    orders.push({name: "Person 1", items: []});
    refreshOrderList();
}

window.addEventListener('load',init);