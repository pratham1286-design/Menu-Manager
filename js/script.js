// The only JavaScript on the site: the search boxes.
// Everything else (veg filter, sorting, "nothing found") is done in CSS.
//
// search(this, '.dish') hides every .dish that doesn't contain the typed text.
function search(box, items) {
  var text = box.value.trim().toLowerCase();

  document.querySelectorAll(items).forEach(function (item) {
    item.hidden = !item.textContent.toLowerCase().includes(text);
  });
}
