var restaurantData = '[ \
    {"name":"The Codfather", "text":"Italian family owned seafood restaurant", "image":"RestaurantImages/the-codfather.jpg"}, \
    {"name":"McDoner Lads", "text":"Kebab store owned by a local New Zealand lad", "image":"RestaurantImages/mcdonner-lads.jpg"}, \
    {"name":"The Creperia", "text":"Joint pizza and crepe place", "image":"RestaurantImages/creperia.jpg"}, \
    {"name":"Riceland", "text":"Combination nordic and sushi restaurant", "image":"RestaurantImages/riceland.jpg"}, \
    {"name":"Devil May Hungry", "text":"A restaurant themed around items that are devilishly good!", "image":"RestaurantImages/DevilMayHungry.jpg"}, \
    {"name":"The Good Hunter", "text":"A restaurant that serves game", "image":"RestaurantImages/the-good-hunter.jpg"}, \
    {"name":"Catfé", "text":"Cat themed café!", "image":"RestaurantImages/catfe.jpg"} \
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

    document.getElementById("restaurantSpace").innerHTML = "";
    for (i=0; i<restaurants.length; i++) {
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

window.addEventListener('load',refreshRestaurantList);
