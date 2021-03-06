var data = '[ \
    {"restaurant": "McDoner Lads", "name": "Doner kebab", "text": "A sandwich kebab, made from meat cooked on a vertical rotisserie.", "category": "mains", "price": 10.75, "popularity": 1, "special": true, "image": "MenuImages/mcdoners-doner-kebab.jpg"}, \
    {"restaurant": "McDoner Lads", "name": "Souvlaki", "text": "Meat and assorted veggies on a skewer", "category": "mains", "price": 7.43, "popularity": 3, "special": false, "image": "MenuImages/mcdoners-lamb-souv.jpg", "radio": ["Chicken", "Lamb"], "select": ["Mushrooms", "Green pepper", "Red pepper"]}, \
    {"restaurant": "McDoner Lads", "name": "Falafel", "text": "A deep-fried patty made from ground chickpeas", "category": "sides", "price": 7.67, "popularity": 4, "special": true, "image": "MenuImages/mcdoners-falafel.jpg"}, \
    {"restaurant": "McDoner Lads", "name": "Salad", "text": "Salad made with romaine lettuce with vinaigrette dressing and feta cheese", "category": "sides", "price": 6.6, "popularity": 7, "special": false, "image": "MenuImages/mcdoners-salad.jpg"}, \
    {"restaurant": "McDoner Lads", "name": "Meat on Rice", "text": "Sliced meat on a platter of rice and vegetables", "category": "mains", "price": 11.4, "popularity": 8, "special": false, "image": "MenuImages/mcdoners-chkn-rice.jpg", "radio": ["Chicken", "Lamb"], "select": ["Mushrooms", "Cashews", "Spinach"]}, \
    {"restaurant": "McDoner Lads", "name": "Water", "text": "Water", "category": "beverages", "price": 2.00, "popularity": 9, "special": false, "image": "MenuImages/water-glass.png"}, \
    {"restaurant": "McDoner Lads", "name": "Soda", "text": "Assorted sodas", "category": "beverages", "price": 2.50, "popularity": 6, "special": false, "image": "MenuImages/Soda-bottles.png", "radio": ["Coke", "Pepsi", "Sprite", "Root Beer", "Iced Tea"]}, \
    {"restaurant": "The Codfather", "name": "Calamari", "text": "Fried squid rings with a garnish of green onions. Accompanied by tartar and cocktail sauce.", "category": "appetizers", "price": 6.53, "popularity": 5, "special": false, "image": "MenuImages/codfather-calamari.jpg", "select": ["Cocktail Sauce", "Tartar Sauce", "Cajun"]}, \
    {"restaurant": "The Codfather", "name": "Oysters Rockefeller", "text": "Oysters on the half-shell that have been topped with a rich sauce of butter, parsley, then broiled.", "category": "appetizers", "price": 10.4, "popularity": 8, "special": false, "image": "MenuImages/codfather-rockefeller.jpg"}, \
    {"restaurant": "The Codfather", "name": "Scallops", "text": "Seared scallops in a garlic butter sauce", "category": "appetizers", "price": 6.23, "popularity": 11, "special": true, "image": "MenuImages/codfather-scallops.jpg"}, \
    {"restaurant": "The Codfather", "name": "Scrimp Scampi", "text": "Shrimp sautéed in a white wine sauce", "category": "mains", "price": 13.63, "popularity": 3, "special": false, "image": "MenuImages/codfather-scampi.jpg", "radio": ["White wine sauce", "Garlic Butter Sauce", "Dijon Sauce"]}, \
    {"restaurant": "The Codfather", "name": "Fish and Chips", "text": "Battered fish served with french fries", "category": "mains", "price": 15.89, "popularity": 1, "special": true, "image": "MenuImages/codfather-fishnchips.jpg", "radio": ["Cod", "Walleye", "Halibut"]}, \
    {"restaurant": "The Codfather", "name": "Lobster", "text": "Lobster served with butter and garlic sauce", "category": "mains", "price": 20.67, "popularity": 9, "special": false, "image": "MenuImages/codfather-lobster.jpg"}, \
    {"restaurant": "The Codfather", "name": "Fish Tacos", "text": "Fish in tacos!", "category": "mains", "price": 10.46, "popularity": 4, "special": false, "image": "MenuImages/codfather-tacos.jpg", "radio": ["Cod", "Walleye", "Halibut"], "select": ["Lettuce", "Tomato", "Sour cream"]}, \
    {"restaurant": "The Codfather", "name": "Biscuits", "text": "Our signature light and fluffy biscuits", "category": "sides", "price": 5.32, "popularity": 2, "special": false, "image": "MenuImages/codfather-biscuit.jpg"}, \
    {"restaurant": "The Codfather", "name": "Water", "text": "Water", "category": "beverages", "price": 1.50, "popularity": 9, "special": true, "image": "MenuImages/water-glass.png"}, \
    {"restaurant": "The Codfather", "name": "Soda", "text": "Assorted sodas", "category": "beverages", "price": 2.00, "popularity": 7, "special": false, "image": "MenuImages/Soda-bottles.png", "radio": ["Coke", "Pepsi", "Sprite", "Root Beer", "Iced Tea"]}, \
    {"restaurant": "Devil May Hungry", "name": "Devil May Fry", "text": "Cajun french fries", "category": "sides", "price": 7, "popularity": 1, "special": false, "image": "MenuImages/dvl-may-hngry-fries.jpg"}, \
    {"restaurant": "Devil May Hungry", "name": "Wedges", "text": "Potato wedges", "category": "sides", "price": 6.5, "popularity": 2, "special": false, "image": "MenuImages/dvl-may-hngry-wedges.jpg"}, \
    {"restaurant": "Devil May Hungry", "name": "Garlic Bread", "text": "Crusty herb loaf doused with garlic. Guaranteed to keep vampires away.", "category": "sides", "price": 6, "popularity": 4, "special": false, "image": "MenuImages/dvl-may-hngry-bread.jpg"}, \
    {"restaurant": "Devil May Hungry", "name": "Hell’s Pizza", "text": "Pizza with toppings of triple smoked champagne ham, double pineapple & double cheese. ", "category": "mains", "price": 19.5, "popularity": 3, "special": false, "image": "MenuImages/dvl-may-hngry-za.jpg"}, \
    {"restaurant": "Devil May Hungry", "name": "Green Demon Pasta", "text": "Creamy basil sauce with roasted garlic, mushrooms & parmesan. Served on fettuccini.", "category": "mains", "price": 12, "popularity": 5, "special": true, "image": "MenuImages/dvl-may-hngry-pasta.jpg"}, \
    {"restaurant": "Devil May Hungry", "name": "Cheesecake", "text": "Kahlua & white chocolate cheesecake. ", "category": "desserts", "price": 5, "popularity": 6, "special": false, "image": "MenuImages/dvl-may-hngry-cake.jpg"}, \
    {"restaurant": "Devil May Hungry", "name": "Unearthly", "text": "Snack size dessert pizza made with berries, banana, chocolate & custard.", "category": "desserts", "price": 6, "popularity": 7, "special": false, "image": "MenuImages/dvl-may-hngry-unearthly.jpg"}, \
    {"restaurant": "Catfé", "name": "Catffee", "text": "Our signature coffee! Comes in a variety of options", "category": "beverages", "price": 6.54, "popularity": 1, "special": false, "image": "MenuImages/catfe-coffee.jpg", "radio": ["Small", "Medium", "Large"], "select": ["Cream", "Sugar"]}, \
    {"restaurant": "Catfé", "name": "Meowcha", "text": "Our mocha, made with whole milk, chocolate, and espresso!", "category": "beverages", "price": 5.32, "popularity": 4, "special": false, "image": "MenuImages/catfe-meowcha.jpg", "radio": ["Hot", "Iced"], "select": ["Cream", "Sugar"]}, \
    {"restaurant": "Catfé", "name": "Lemeownade", "text": "Lemonade, freshly squeezed from real lemons! Comes in a variety of flavours", "category": "beverages", "price": 5.02, "popularity": 3, "special": true, "image": "MenuImages/catfe-lemeownade.jpg", "radio": ["Original", "Raspberry", "Blue Raspberry"]}, \
    {"restaurant": "Catfé", "name": "Cat pop", "text": "Cake pop shaped like a cat! Comes in a variety of flavours (default vanilla)", "category": "desserts", "price": 3, "popularity": 5, "special": false, "image": "MenuImages/catfe-cake-pop.jpg", "radio": ["Vanilla", "Chocalate", "Red Velvet"]}, \
    {"restaurant": "Catfé", "name": "Catamon Roll", "text": "Our cinnamon rolls, made fresh every morning!", "category": "desserts", "price": 3.50, "popularity": 7, "special": false, "image": "MenuImages/catfe-cinammon.jpg"}, \
    {"restaurant": "Catfé", "name": "Catolli", "text": "A tube-shaped shell of fried pastry dough, filled with ricotta filling! Comes in a variety of flavours", "category": "desserts", "price": 4.05, "popularity": 6, "special": false, "image": "MenuImages/catfe-canolli.jpg", "radio": ["Vanilla", "Chocalate", "Chocolate Chip"]}, \
    {"restaurant": "Catfé", "name": "Kitty Cookies", "text": "Sugar cookies cut out in the shape of cats. One of our staples!", "category": "desserts", "price": 2.20, "popularity": 2, "special": false, "image": "MenuImages/catfe-cookies.jpg"}, \
    {"restaurant": "The Good Hunter", "name": "Fisherman’s Toast", "text": "Onion-covered toast, garnished with parsley.", "category": "appetizers", "price": 4.5, "popularity": 3, "special": false, "image": "MenuImages/good-hunter-toast.jpg"}, \
    {"restaurant": "The Good Hunter", "name": "Steak fries", "text": "Our house made steak fries", "category": "sides", "price": 5.6, "popularity": 5, "special": false, "image": "MenuImages/good-hunter-fries.jpg"}, \
    {"restaurant": "The Good Hunter", "name": "Game Burger", "text": "A burger with lettuce, cheese, tomatoes, with various hamburger meat available (default deer)", "category": "mains", "price": 10.54, "popularity": 2, "special": false, "image": "MenuImages/good-hunter-burger.jpg", "radio": ["Deer", "Moose", "Elk"], "select": ["Ketchup", "Mayo", "Mustard", "Pickles", "Onion"]}, \
    {"restaurant": "The Good Hunter", "name": "Game Steak", "text": "A steak cooked to your liking, various types of meat available (default deer, medium-rare)", "category": "mains", "price": 20.85, "popularity": 1, "special": false, "image": "MenuImages/good-hunter-steak.jpg", "radio": ["Deer", "Moose", "Elk"]}, \
    {"restaurant": "The Good Hunter", "name": "Partridge Parmigiana", "text": "Breaded partridge breast covered in tomato sauce and mozzarella, parmesan, or provolone cheese", "category": "mains", "price": 15.64, "popularity": 4, "special": false, "image": "MenuImages/good-hunter-partridge.jpg"}, \
    {"restaurant": "The Creperia", "name": "Pizza", "text": "Our signature pizza! Has a variety of options", "category": "mains", "price": 20.56, "popularity": 3, "special": false, "image": "MenuImages/creperia-pizza.jpg", "select": ["Pepperoni", "Extra cheese", "Sausage", "Bacon", "Ham", "Pineapple", "Olives", "Green pepper", "Mushroom", "Anchovy"]}, \
    {"restaurant": "The Creperia", "name": "Pizza Crepe", "text": "A dish that blends our specialties together! Variety of options", "category": "mains", "price": 13.45, "popularity": 1, "special": false, "image": "MenuImages/creperia-pizzacrepe.jpg", "select": ["Pepperoni", "Extra cheese", "Sausage", "Bacon", "Ham", "Pineapple", "Olives", "Green pepper", "Mushroom", "Anchovy"]}, \
    {"restaurant": "The Creperia", "name": "Fruit Crepe", "text": "A crepe filled with fruit, and another topping of your choice (default Nutella)", "category": "desserts", "price": 7.50, "popularity": 4, "special": false, "image": "MenuImages/creperia-fruitcrepe.jpg", "radio": ["Nutella", "Caramel", "Chocolate"], "select": ["Vanilla", "Chocolate", "Mint", "Rocky Road", "Skor", "Oreo", "Kitkat", "Whipped cream"]}, \
    {"restaurant": "The Creperia", "name": "Desserts Crepe", "text": "A dessert crepe that’s filled with sweets! A variety of options", "category": "desserts", "price": 7.50, "popularity": 2, "special": false, "image": "MenuImages/creperia-dessertcrepe.jpg"}, \
    {"restaurant": "Riceland", "name": "Harðfiskur", "text": "Unsalted cod cod, dried by cold air and wind on wooden racks. Fun to snack on!", "category": "appetizers", "price": 3.56, "popularity": 3, "special": false, "image": "MenuImages/riceland-hardfiskr.jpg"}, \
    {"restaurant": "Riceland", "name": "California Roll", "text": "Inside-out roll containing imitation crab and avocado.", "category": "mains", "price": 9.95, "popularity": 1, "special": false, "image": "MenuImages/riceland-caliroll.jpg"}, \
    {"restaurant": "Riceland", "name": "Spicy Tuna Roll", "text": "Sashimi grade tuna, spicy sauce, and cucumber.", "category": "mains", "price": 11.95, "popularity": 2, "special": false, "image": "MenuImages/riceland-spicytuna.jpg"}, \
    {"restaurant": "Riceland", "name": "Shark Roll", "text": "A roll made with fermented shark.", "category": "mains", "price": 16.95, "popularity": 6, "special": false, "image": "MenuImages/riceland-sharkroll.jpg"}, \
    {"restaurant": "Riceland", "name": "Skyr", "text": "An Icelandic dairy product, very thick and eaten like yoghurt. This one is topped by cream, sugar, and blueberries.", "category": "desserts", "price": 6.30, "popularity": 4, "special": false, "image": "MenuImages/riceland-skyr.jpg"}, \
    {"restaurant": "Riceland", "name": "Vínarterta", "text": "A slice of a multi-layered cake made from alternating layers of almond flavoured biscuit and plum jam", "category": "desserts", "price": 6.75, "popularity": 5, "special": false, "image": "MenuImages/riceland-vinarterta.jpg"} \
    ]';
var items = JSON.parse(data);
var orders = [];
var currentOrderSection = 0;

function refreshMenuItems() {
    var categories = document.getElementsByClassName("pill-active");
    var category = "";
    if (categories[1]) {
        category = categories[1].id
    }
    var sort = document.getElementById("menuSort").value;
    var search = document.getElementById("menuSearch").value.toUpperCase();

    var sortedItems = JSON.parse(data);
    if (sort == "price") sortedItems.sort(function (a, b) { return a.price - b.price });
    if (sort == "popularity") sortedItems.sort(function (a, b) { return b.popularity - a.popularity });
    if (sort == "specials") sortedItems.sort(function (a, b) { return b.special - a.special });

    document.getElementById("dishSpace").innerHTML = "";
    for (i = 0; i < sortedItems.length; i++) {
        if (sortedItems[i].restaurant == currRestaurant.name && (category == "all" || sortedItems[i].category == category)) {
            var itemtext = sortedItems[i].name + sortedItems[i].text;
            if (itemtext.toUpperCase().indexOf(search) > -1) {
                var itemID = items.findIndex(function(item){return item.name==sortedItems[i].name});

                var item = document.createElement("div");
                item.setAttribute("class", "menuitem");
                item.setAttribute("id", "item_" + itemID.toString());

                if (sortedItems[i].special) item.classList.add("onSpecial");

                var name = document.createElement("h3");
                name.setAttribute("class", "itemName");
                name.appendChild(document.createTextNode(sortedItems[i].name));

                var text = document.createElement("p");
                text.setAttribute("class", "itemDescription");
                text.appendChild(document.createTextNode(sortedItems[i].text));

                var price = document.createElement("p");
                price.setAttribute("class", "itemPrice");
                if (sortedItems[i].special) {
                    price.appendChild(document.createTextNode(sortedItems[i].price + " - 15% off!"));
                } else {
                    price.appendChild(document.createTextNode(sortedItems[i].price));
                }
                

                var img = document.createElement("img");
                img.setAttribute("class", "itemImg");
                img.setAttribute("src", sortedItems[i].image);

                var orderButtonPos = document.createElement("div");
                orderButtonPos.setAttribute("class", "orderButtonPos");

                var menuDescripPos = document.createElement("div");
                menuDescripPos.setAttribute("class", "menuDescripPos");

                var addButton = document.createElement("button");
                addButton.setAttribute("type", "button");
                addButton.setAttribute("class", "addButton");
                addButton.appendChild(document.createTextNode("Add to order"));
                addButton.setAttribute("onClick", "addToOrder(" + itemID.toString() + ");");

                if (sortedItems[i].radio || sortedItems[i].select) {
                    var editDish = document.createElement("button");
                    editDish.setAttribute("type", "button");
                    editDish.setAttribute("class", "editDish");
                    editDish.appendChild(document.createTextNode("Edit"));
                    editDish.setAttribute("onClick", "openEditModal(" + itemID.toString() + ");");

                    // edit modal
                    var modal = document.createElement("div");
                    modal.setAttribute("class", "modal");
                    modal.setAttribute("id", "editModal_" + itemID);

                    var modalC = document.createElement("div");
                    modalC.setAttribute("class", "modal-content");

                    // Header
                    var modalH = document.createElement("div");
                    modalH.setAttribute("class", "modal-header");
                    var span = document.createElement("span");
                    span.setAttribute("class", "close");
                    span.setAttribute("onclick", "closeEditModal()");
                    span.innerHTML = "&times;";
                    var h2 = document.createElement("h2");
                    h2.appendChild(document.createTextNode("Edit"));
                    modalH.appendChild(span);
                    modalH.appendChild(h2);
                    modalC.appendChild(modalH);

                    //Content

                    var modalB = document.createElement("div");
                    modalB.setAttribute("class", "modal-body");

                    if (sortedItems[i].radio) {
                        var h3radio = document.createElement("h3");
                        h3radio.appendChild(document.createTextNode("Please select one:"));
                        modalB.appendChild(h3radio);
                        for (j = 0; j < sortedItems[i].radio.length; j++) {
                            var radio = document.createElement("input");
                            var label = document.createElement('label');
                            radio.setAttribute("type", "radio");
                            radio.setAttribute("class", "paymentChoice");
                            radio.setAttribute("id", "radio_" + j);
                            radio.setAttribute("name", "select");
                            label.setAttribute("for", "radio_" + j);
                            label.setAttribute("id", "label_" + j);
                            label.appendChild(document.createTextNode(sortedItems[i].radio[j]));
                            modalB.appendChild(radio);
                            modalB.appendChild(label);
                            modalB.appendChild(document.createElement("br"));
                        }
                    }

                    if (sortedItems[i].select) {
                        var h3select = document.createElement("h3");
                        h3select.appendChild(document.createTextNode("Please select one or more:"));
                        modalB.appendChild(h3select);
                        for (j = 0; j < sortedItems[i].select.length; j++) {
                            var check = document.createElement("input");
                            var label = document.createElement('label');
                            check.setAttribute("type", "checkbox");
                            check.setAttribute("class", "paymentChoice");
                            check.setAttribute("id", "checkbox_" + j);
                            check.setAttribute("name", "select");
                            label.setAttribute("for", "checkbox_" + j);
                            label.setAttribute("id", "labelC_" + j);
                            label.appendChild(document.createTextNode(sortedItems[i].select[j]));
                            modalB.appendChild(check);
                            modalB.appendChild(label);
                            modalB.appendChild(document.createElement("br"));
                        }
                    }

                    modalC.appendChild(modalB);

                    // Footer
                    var modalF = document.createElement("div");
                    modalF.setAttribute("class", "modal-footer");
                    var add = document.createElement("button");
                    add.setAttribute("type", "submit");
                    add.setAttribute("class", "addButton");
                    add.appendChild(document.createTextNode("Add to order"));
                    add.setAttribute("onClick", "addToOrderModal(" + itemID.toString() + ");");
                    modalF.appendChild(add)

                    modalC.appendChild(modalF);
                    modal.appendChild(modalC);
                }

                orderButtonPos.appendChild(addButton);
                if (sortedItems[i].radio || sortedItems[i].select) {
                    orderButtonPos.appendChild(editDish);
                }

                menuDescripPos.appendChild(name);
                menuDescripPos.appendChild(text);
                menuDescripPos.appendChild(price);

                item.appendChild(img);
                item.appendChild(menuDescripPos);
                item.appendChild(orderButtonPos);

                document.getElementById("dishSpace").appendChild(item);
                if (sortedItems[i].radio || sortedItems[i].select) {
                    document.getElementById("menuPage").appendChild(modal);
                }
            }
        }
    }
    // hide all modals
    for (i = 0; i < items.length; i++) {
        $("#editModal_" + i).hide()
    }
}

function openEditModal(index) {
    $("#editModal_" + index).show()
}

function closeEditModal() {
    $(".modal").hide()
}

function addToOrder(id) {
    orders[currentOrderSection].items.push(id);
    refreshOrderList();
}

function addToOrderModal(id) {
    orders[currentOrderSection].items.push(id);
    refreshOrderList();
    $(".modal").hide();
}

function removeFromOrder(section, num) {
    orders[section].items.splice(num, 1);
    refreshOrderList();
    // need to refresh checkout page in case it was done from there
    showCheckoutInfo()
}

function addOrderSection() {
    orders.push({ name: "New Person", items: [] });
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

    for (i = 0; i < orders.length; i++) {
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

        for (j = 0; j < orders[i].items.length; j++) {
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
        orders.push({ name: loggedInAccount.fname, items: [] });
    }

    document.getElementById("restaurantName").innerHTML = "";
    var name = document.createElement("h1");
    name.appendChild(document.createTextNode(currRestaurant.name));
    document.getElementById("restaurantName").appendChild(name);

    $("#menuPage").show()
    setActive($("#all"))
}

function hideMenuPage() {
    $("#menuPage").hide()
    removeActive()
}

$("#checkout").click(function () {
    $("#menuPage").hide()
    showCheckoutPage()
});

// For selecting categories
$("#all").click(function () {
    setActive(this)
});
$("#beverages").click(function () {
    setActive(this)
});
$("#appetizers").click(function () {
    setActive(this)
});
$("#sides").click(function () {
    setActive(this)
});
$("#mains").click(function () {
    setActive(this)
});
$("#desserts").click(function () {
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
    $("#beverages").removeClass("pill-active");
    $("#appetizers").removeClass("pill-active");
    $("#sides").removeClass("pill-active");
    $("#mains").removeClass("pill-active");
    $("#desserts").removeClass("pill-active");
}

window.addEventListener('load', init);