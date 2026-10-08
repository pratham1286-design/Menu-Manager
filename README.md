# LPU Food Courts – Menu Manager

A catalog website for the food courts inside the LPU campus, made with HTML, CSS and JavaScript. You choose a food court and see every store in it, along with its menu and prices.

## How to run
Double-click `index.html` to open it in any browser.

## Pages
- `index.html`: lists all the food courts on campus, with a search box
- `foodcourt.html?id=fc1`: shows the stores in the selected food court, with their menus and prices

## Features
- **Home page:** a search box that matches the food court's name or block, and "★ Featured" food courts listed first
- **Food court page:** a dish search, a veg-only filter, sorting by price, and "Featured" and "Bestseller" badges

## Files
```
css/style.css     -> all the styling
js/data.js        -> all food courts, stores and menus
js/home.js        -> code for index.html
js/foodcourt.js   -> code for foodcourt.html
```

## Adding a new food court
Open `js/data.js` and copy one of the food court blocks. Give the copy a new `id` (for example `"fc7"`) and change its details. It will show up on the website automatically.
