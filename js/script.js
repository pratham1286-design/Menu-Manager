// =====================================================
//  script.js  (used by every page)
//  All the food courts, stores and dishes are written in
//  the HTML files. This file only hides the things that
//  do not match what you typed in a search box.
// =====================================================

// Home page: show only the food courts that match the search box
function searchCourts() {
  var searchText = document.getElementById("searchBox").value.toLowerCase();
  var cards = document.querySelectorAll(".court-card");
  var found = 0;

  for (var i = 0; i < cards.length; i++) {
    var cardText = cards[i].textContent.toLowerCase();
    if (cardText.includes(searchText)) {
      cards[i].hidden = false;
      found++;
    } else {
      cards[i].hidden = true;
    }
  }

  // show "No food court found" when nothing matches
  document.getElementById("noResult").hidden = found > 0;
}

// Food court page: show only the dishes that match the search box
// and the "Veg only" tick box
function filterMenu() {
  var searchText = document.getElementById("dishSearch").value.toLowerCase();
  var vegOnly = document.getElementById("vegOnly").checked;
  var stores = document.querySelectorAll(".store-card");
  var totalFound = 0;

  for (var s = 0; s < stores.length; s++) {
    var dishes = stores[s].querySelectorAll(".dish");
    var foundInStore = 0;

    for (var d = 0; d < dishes.length; d++) {
      var dish = dishes[d];
      var nameMatches = dish.textContent.toLowerCase().includes(searchText);
      var vegMatches = !vegOnly || dish.classList.contains("veg");

      if (nameMatches && vegMatches) {
        dish.hidden = false;
        foundInStore++;
      } else {
        dish.hidden = true;
      }
    }

    // hide a whole store if none of its dishes match
    stores[s].hidden = foundInStore == 0;
    totalFound += foundInStore;
  }

  document.getElementById("noResult").hidden = totalFound > 0;
}
