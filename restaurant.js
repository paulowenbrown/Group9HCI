var data = '[ \
    {"name":"Restaurant #1", "text":"Text for restaurant #1", "image":"placeholder.png"}, \
    {"name":"Restaurant #2", "text":"Text for restaurant #2", "image":"placeholder.png"}, \
    {"name":"Restaurant #3", "text":"Text for restaurant #3", "image":"placeholder.png"} \
]';

var restaurants = JSON.parse(data);

var currRestaurant = {};

function viewMenu(index) {
    currRestaurant = restaurants[index];
    showMenuPage()
    $("#restaurantPage").hide()
}

function loadRestaurants() {
    for (i=0; i<restaurants.length; i++) {
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

window.addEventListener('load',loadRestaurants);
