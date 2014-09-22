var data = require("./products.json")

// Write your solutions below
// console.log(data["items"]);

console.log("Exercise 1:\nHow many items of type shopping#product are there?");
var item_count = data["items"].length;
var prod_count = 0;
for (var i = 0; i < item_count; i++) {
	if (data["items"][i].kind === 'shopping#product') {
		prod_count++;
	}
}
console.log("My loop says there are " + prod_count + " of them.");
console.log("However, the loop wasn't necessary, because the header of the product JSON file has a key called currentItemCount, and the value of that key is " + data["currentItemCount"] + ".");
console.log("\n");

console.log("Exercise 2:\nFind all items with a backorder availability in inventories.");
var backorder_items = [];
for (var i = 0; i < item_count; i++) {
	inv_count = data.items[i].product.inventories.length;
	for (var j = 0; j < inv_count; j++) {
		if (data.items[i].product.inventories[j].availability === 'backorder') {
			backorder_items.push(data.items[i]);
		}
	}
}
console.log("There are " + backorder_items.length + " such items.");
console.log("\n");

console.log("Exercise 3:\nFind all items with more than one image link.");
multi_img_items = [];
for (var i = 0; i < item_count; i++) {
	if (data.items[i].product.images.length > 1) {
		multi_img_items.push(data.items[i]);
	}
}
console.log("There are " + multi_img_items.length + " such items.");
console.log("\n");

console.log("Exercise 4:\nFind all canon products in the items (careful with case sensitivity).");
canon_products = [];
for (var i = 0; i < item_count; i++) {
	if (data.items[i].product.brand.toLowerCase() === 'canon') {
		canon_products.push(data.items[i]);
	}
}
console.log("There are " + canon_products.length + " such items.");
console.log("\n");

console.log('Exercise 5:\nFind all items that have product author name of "eBay" and are brand "Canon".');
ebay_canon_products = [];
for (var i = 0; i < item_count; i++) {
	if (data.items[i].product.brand.toLowerCase() === 'canon' && data.items[i].product.author.name === 'eBay') {
		ebay_canon_products.push(data.items[i]);
	}
}
console.log("There are " + ebay_canon_products.length + " such items.");
console.log("\n");

console.log('Exercise 6:\nPrint all the products with their brand, price, and an image link.');
console.log("BRAND\t\tPRICE\tIMAGE LINK");
for (var i = 0; i < item_count; i++) {
	var inv_count = data.items[i].product.inventories.length;
	for (var j = 0; j < inv_count; j++) {
		var line = data.items[i].product.brand;
		line = line + "\t\t" + data.items[i].product.inventories[j].price;
		line = line + "\t" + data.items[i].product.images[0].link;
		console.log(line);
	}
}

