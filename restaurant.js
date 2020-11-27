var restaurantData = '[ \
    {"name":"The Codfather", "text":"Italian family owned seafood restaurant", "category":"seafood", "image":"RestaurantImages/the-codfather.jpg"}, \
    {"name":"McDoner Lads", "text":"Kebab store owned by a local New Zealand lad", "category":"pita", "image":"RestaurantImages/mcdonner-lads.jpg"}, \
    {"name":"The Creperia", "text":"Joint pizza and crepe place", "category":"pizza", "image":"RestaurantImages/creperia.jpg"}, \
    {"name":"Riceland", "text":"Combination nordic and sushi restaurant", "category":"sushi", "image":"RestaurantImages/riceland.jpg"}, \
    {"name":"Devil May Hungry", "text":"A restaurant themed around items that are devilishly good!", "category":"dessert", "image":"RestaurantImages/DevilMayHungry.jpg"}, \
    {"name":"The Good Hunter", "text":"A restaurant that serves game", "category":"steakhouse", "image":"RestaurantImages/the-good-hunter.jpg"}, \
    {"name":"Catfé", "text":"Cat themed café!", "category":"cafe", "image":"RestaurantImages/catfe.jpg"} \
]';

var restaurants = JSON.parse(restaurantData);

var currRestaurant = {};

function viewMenu(index) {
    currRestaurant = restaurants[index];
    showMenuPage()
    $("#restaurantPage").hide()
}

function refreshRestaurantList() {
    var search = document.getElementById("restaurantSearch").value.toUpperCase();
    var categories = document.getElementsByClassName("pill-active");
    var category = "";
    if (categories[0]) {
        category = categories[0].id
    }

    document.getElementById("restaurantSpace").innerHTML = "";
    for (i=0; i<restaurants.length; i++) {
        if (category == "allRest" || restaurants[i].category == category) {
            var restauranttext = restaurants[i].name + restaurants[i].text;
            if (restauranttext.toUpperCase().indexOf(search) > -1) {
                var restaurant = document.createElement("div");
                restaurant.setAttribute("class", "restaurant");

                var name = document.createElement("h3");
                name.setAttribute("class", "restaurantName");
                name.appendChild(document.createTextNode(restaurants[i].name))

                var text = document.createElement("p");
                text.setAttribute("class", "restaurantText");
                text.appendChild(document.createTextNode(restaurants[i].text))

                var img = document.createElement("img");
                img.setAttribute("class", "restaurantImg");
                img.setAttribute("src", restaurants[i].image)

                var viewButton = document.createElement("button");
                viewButton.setAttribute("type", "button");
                viewButton.setAttribute("class", "addButton");
                viewButton.appendChild(document.createTextNode("View Menu"));
                viewButton.setAttribute("onClick", "viewMenu(" + i.toString() + ");");

                restaurant.appendChild(img);
                restaurant.appendChild(name);
                restaurant.appendChild(text);
                restaurant.appendChild(viewButton);

                document.getElementById("restaurantSpace").appendChild(restaurant);
            }
        }
    }
}

function init() {
    refreshRestaurantList();
    setActiveR($("#allRest"));
}

window.addEventListener('load',init);

// For selecting categories
$("#allRest").click(function() {
    setActiveR(this)
});
$("#steakhouse").click(function() {
    setActiveR(this)
});
$("#cafe").click(function() {
    setActiveR(this)
});
$("#pizza").click(function() {
    setActiveR(this)
});
$("#seafood").click(function() {
    setActiveR(this)
});
$("#sushi").click(function() {
    setActiveR(this)
});
$("#pita").click(function() {
    setActiveR(this)
});
$("#dessert").click(function() {
    setActiveR(this)
});

function setActiveR(selected) {
    removeActiveR()
    $(selected).addClass("pill-active");
    refreshRestaurantList();
}

function removeActiveR() {
    $("#allRest").removeClass("pill-active");
    $("#steakhouse").removeClass("pill-active");
    $("#cafe").removeClass("pill-active");
    $("#pizza").removeClass("pill-active");
    $("#seafood").removeClass("pill-active");
    $("#sushi").removeClass("pill-active");
    $("#pita").removeClass("pill-active");
    $("#dessert").removeClass("pill-active");
}