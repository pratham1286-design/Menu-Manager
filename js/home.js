// =====================================================
//  home.js  (code for index.html)
// =====================================================

// Show the food court cards (filtered by the search box)
function showFoodCourts() {
  var searchText = document.getElementById("searchBox").value.toLowerCase();
  var container = document.getElementById("courtList");
  container.innerHTML = "";

  // Featured (sponsored) food courts are shown first
  var list = [];
  for (var i = 0; i < foodCourts.length; i++) {
    if (foodCourts[i].sponsored) list.push(foodCourts[i]);
  }
  for (var i = 0; i < foodCourts.length; i++) {
    if (!foodCourts[i].sponsored) list.push(foodCourts[i]);
  }

  for (var i = 0; i < list.length; i++) {
    var court = list[i];

    // skip this food court if it does not match the search
    var text = (court.name + " " + court.location).toLowerCase();
    if (text.indexOf(searchText) == -1) {
      continue;
    }

    var badge = "";
    if (court.sponsored) {
      badge = '<span class="badge featured">★ Featured</span>';
    }

    container.innerHTML +=
      '<a class="court-card" href="foodcourt.html?id=' + court.id + '">' +
        '<div class="court-icon">' + court.icon + '</div>' +
        '<div class="court-info">' +
          badge +
          '<h3>' + court.name + '</h3>' +
          '<p>📍 ' + court.location + '</p>' +
          '<p class="muted">🕒 ' + court.timings + '</p>' +
          '<p class="muted">⭐ ' + court.rating.toFixed(1) + ' · ' + court.stores.length + ' stores</p>' +
        '</div>' +
      '</a>';
  }

  if (container.innerHTML == "") {
    container.innerHTML = '<p class="empty">No food court found.</p>';
  }
}

showFoodCourts();
