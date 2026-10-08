// =====================================================
//  foodcourt.js  (code for foodcourt.html)
// =====================================================

// Read the food court id from the URL, e.g. foodcourt.html?id=fc1
var params = new URLSearchParams(window.location.search);
var courtId = params.get("id");

// Find the food court with this id
var court = null;
for (var i = 0; i < foodCourts.length; i++) {
  if (foodCourts[i].id == courtId) {
    court = foodCourts[i];
  }
}

// Show the name, location and timings at the top
function showHeader() {
  document.title = court.name + " - LPU Food Courts";

  document.getElementById("courtHeader").innerHTML =
    '<a href="index.html" class="back-link">← All food courts</a>' +
    '<h1>' + court.icon + ' ' + court.name + '</h1>' +
    '<p>📍 ' + court.location + '</p>' +
    '<p>🕒 ' + court.timings + ' &nbsp; ⭐ ' + court.rating.toFixed(1) + ' &nbsp; 🏪 ' + court.stores.length + ' stores</p>';
}

// Show a button for each store that jumps to its menu
function showStoreLinks() {
  var box = document.getElementById("storeLinks");
  for (var i = 0; i < court.stores.length; i++) {
    box.innerHTML += '<a href="#store' + i + '">' + court.stores[i].name + '</a>';
  }
}

// Show every store with its menu and prices
// (using the dish search, veg only and sort options)
function showMenu() {
  var searchText = document.getElementById("dishSearch").value.toLowerCase();
  var vegOnly = document.getElementById("vegOnly").checked;
  var sortBy = document.getElementById("sortBy").value;
  var html = "";

  for (var s = 0; s < court.stores.length; s++) {
    var store = court.stores[s];

    // Step 1: make a list of the dishes that match the filters
    var dishes = [];
    for (var i = 0; i < store.items.length; i++) {
      var item = store.items[i];
      if (vegOnly && !item.veg) continue;
      if (item.name.toLowerCase().indexOf(searchText) == -1) continue;
      dishes.push(item);
    }

    // skip this store if none of its dishes match
    if (dishes.length == 0) continue;

    // Step 2: sort the dishes by price if the user asked
    if (sortBy == "low") {
      dishes.sort(function (a, b) { return a.price - b.price; });
    } else if (sortBy == "high") {
      dishes.sort(function (a, b) { return b.price - a.price; });
    }

    // Step 3: build the HTML for this store
    var badge = "";
    if (store.sponsored) {
      badge = '<span class="badge featured">★ Featured</span>';
    }

    html +=
      '<div class="store-card" id="store' + s + '">' +
        '<div class="store-head">' +
          '<div>' +
            badge +
            '<h2>' + store.name + '</h2>' +
            '<p class="muted">' + store.cuisine + '</p>' +
          '</div>' +
          '<span class="rating">⭐ ' + store.rating.toFixed(1) + '</span>' +
        '</div>';

    for (var d = 0; d < dishes.length; d++) {
      var dish = dishes[d];

      // green dot for veg, red dot for non-veg
      var dot = '<span class="nonveg-dot"></span>';
      if (dish.veg) {
        dot = '<span class="veg-dot"></span>';
      }

      var bestTag = "";
      if (dish.best) {
        bestTag = ' <span class="badge best">Bestseller</span>';
      }

      html +=
        '<div class="dish">' +
          '<p>' + dot + dish.name + bestTag + '</p>' +
          '<p class="price">₹' + dish.price + '</p>' +
        '</div>';
    }

    html += '</div>';
  }

  if (html == "") {
    html = '<p class="empty">No dish found. Try a different search.</p>';
  }

  document.getElementById("menuList").innerHTML = html;
}

// Start
if (court == null) {
  // wrong or missing id in the URL
  document.getElementById("courtHeader").innerHTML =
    '<h1>Food court not found 😕</h1><a href="index.html" class="back-link">← Go back to all food courts</a>';
} else {
  showHeader();
  showStoreLinks();
  showMenu();
}
