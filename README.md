# LPU Food Courts

A small website with the menus of the food courts on the LPU campus. Pick a food court and you get every store in it, with its dishes and prices, laid out like a printed menu card.

Made with HTML and CSS. The only JavaScript is a 6-line function for the search boxes.

## How to run
Open `index.html` in any browser. That's it.

## Pages
- `index.html` lists all the food courts (featured ones on top) with a search box.
- One page per food court: `uni-mall.html`, `block-34.html`, `block-32.html`, `boys-hostel.html`, `girls-hostel.html`, `main-gate.html`.

On a food court page you can jump to a store, search for a dish, sort by price, and tick "Veg only".

## How it works
- All the content is plain HTML, written straight into the pages.
- **Veg only** is pure CSS. When the box is ticked, `body:has(#vegOnly:checked)` hides the `.nonveg` dishes.
- **Sort by price** is pure CSS too. Each dish has its price in `style="--price: 110"`, and `order: var(--price)` puts the cheapest first. "Costliest first" just flips the list.
- **Search** is the one bit of JavaScript (`js/script.js`). It hides the rows that don't contain the typed text. CSS then hides any store that ends up empty and shows the "nothing found" message.

## Files
```
index.html        home page, list of food courts
uni-mall.html ... one page per food court
css/style.css     all the styling, plus the veg filter and sorting
js/script.js      the search boxes
```

## Adding a dish
Copy one line inside a store's `<ul>` and change it:
```html
<li class="dish veg" style="--price: 80"><span>Masala Dosa <small>Bestseller</small></span> <b>₹80</b></li>
```
Write the price in **both** places (`--price` and the `₹` text). Use `veg` or `nonveg` for the class; the green or red mark is added by CSS. Leave out `<small>Bestseller</small>` if it isn't one.

## Adding a food court
1. Copy one of the food court pages (say `main-gate.html`) and rename it.
2. Change the name, place, timings, stores and dishes.
3. In `index.html`, copy one `<li>` in the list, point its link to the new page and change the details.
