# LPU Food Courts – Menu Manager

A catalog website for the food courts inside the LPU campus, made with HTML, CSS and a little JavaScript. You choose a food court and see every store in it, along with its menu and prices.

## How to run
Double-click `index.html` to open it in any browser.

## Pages
- `index.html`: lists all the food courts on campus, with a search box
- One page for each food court, with all its stores, menus and prices:
  `uni-mall.html`, `block-34.html`, `block-32.html`, `boys-hostel.html`, `girls-hostel.html`, `main-gate.html`

## Features
- **Home page:** a search box that matches the food court's name or block; "★ Featured" food courts are listed first
- **Food court page:** buttons that jump to each store, a dish search, a veg-only filter, sorting by price, and "Featured" and "Bestseller" badges

## How it is built
- **HTML** holds all the content. Every food court, store and dish is written directly in the pages.
- **CSS** does the styling and the price sorting. Each dish has its price written in it (`style="--price: 110"`), and CSS uses it to put the dishes in order.
- **JavaScript** (`js/script.js`, about 50 lines) only does the search boxes and the veg-only filter. It hides the things that don't match.

## Files
```
index.html          -> home page with all food courts
uni-mall.html ...   -> one page per food court
css/style.css       -> all the styling (and the price sorting)
js/script.js        -> the search boxes and the veg filter
```

## Adding a new food court
1. Copy one of the food court pages (for example `main-gate.html`) and give the copy a new name.
2. Change the name, location, timings, stores and dishes in the copy.
3. In `index.html`, copy one `<a class="court-card">` block, point its `href` to your new page and change its details.

## Adding a dish
Copy one `<li class="dish ...">` line inside a store, then change the name and the price. Change the price in **both** places: in `style="--price: ..."` and in the `₹` text. Use the class `veg` or `nonveg`, and the dot that matches it.
