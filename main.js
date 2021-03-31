let carts = document.querySelectorAll('.add_to_cart');
let detail = document.querySelectorAll('.roll');

/* declaring products */
let products = [
	{
		name: 'Original',
		tag: 'Original',
		glaze: 'none',
		rolls: 0,
		description: "Our signature original cinnamon bun! Delivered to your door within the hour, guarenteed fresh and warm! We promise you won't be able to stop eating them!",
		price: '$5.99',
		inCart: 0,
		img: document.getElementById("original")
	},
	{
		name: 'Blackberry',
		tag: 'Blackberry',
		glaze: 'none',
		rolls: 0,
		description: "Our blackberry cinnamon bun! Delivered to your door within the hour, guarenteed fresh and warm! We promise you won't be able to stop eating them!",
		price: '$6.99',
		inCart: 0,
		img: document.getElementById("blackberry")
	},
	{
		name: 'Walnut',
		tag: 'Walnut',
		glaze: 'none',
		rolls: 0,
		description: "Our walnut cinnamon bun! Delivered to your door within the hour, guarenteed fresh and warm! We promise you won't be able to stop eating them!",
		price: '$6.99',
		inCart: 0,
		img: document.getElementById("walnut")
	},
	{
		name: 'Original Gluten-Free',
		tag: 'Orginal Gluten-Free',
		glaze: 'none',
		rolls: 0,
		description: "Our original gluten-free cinnamon bun! Delivered to your door within the hour, guarenteed fresh and warm! We promise you won't be able to stop eating them!",
		price: '$5.99',
		inCart: 0,
		img: document.getElementById("gluten")
	},
	{
		name: 'Pumpkin Spice',
		tag: 'Pumpkin Spice',
		glaze: 'none',
		rolls: 0,
		description: "Our pumpkin spice cinnamon bun! Delivered to your door within the hour, guarenteed fresh and warm! We promise you won't be able to stop eating them!",
		price: '$7.99',
		inCart: 0,
		img: document.getElementById("pumpkin")
	},
	{
		name: 'Caramel Pecan',
		tag: 'Caramel Pecan',
		glaze: 'none',
		rolls: 0,
		description: "Our caramel pecan cinnamon bun! Delivered to your door within the hour, guarenteed fresh and warm! We promise you won't be able to stop eating them!",
		price: '$7.99',
		inCart: 0,
		img: document.getElementById("caramel")
	},
]

for (let i=0; i < carts.length; i++) {
	carts[i].addEventListener('click',() => {
		cartCount(products[i]);
	})
}

for (let i=0; i < detail.length; i++) {
	detail[i].addEventListener('click', () => {
		setDetail(products[i]);
	})
}

/* ensures that the cart # indicator loads properly */
function loadCartCount() {
	let productNumber = localStorage.getItem('cartCount');

	if(productNumber) {
		document.querySelector('.cart_icon span').textContent = productNumber;
	}
}

/* updates cart # indicator */
function cartCount(product) {
	let productNumber = localStorage.getItem('cartCount');
	productNumber = parseInt(productNumber);

	if(productNumber) {
		localStorage.setItem('cartCount', productNumber + 1);
		document.querySelector('.cart_icon span').textContent = productNumber + 1;
	}
	else {
		localStorage.setItem('cartCount', 1);
		document.querySelector('.cart_icon span').textContent = 1;
	}

	/* setItems(product); */
}

/* updates product details page with correct details */
function setDetail(product) {
	let detailName = localStorage.setItem("itemName", product.name);
	let detailPrice = localStorage.setItem("itemPrice", product.price);
	let detailDescription = localStorage.setItem("itemDescription", product.description);
	let detailImage = localStorage.setItem("itemImage", product.img);
	/* console.log("Product is", product.name);
	let detailItem = localStorage.getItem('product_selected');
	detailItem = JSON.parse(detailItem);

	detailItem = {
		[product.tag]: product
	}
	
	localStorage.setItem('product_selected',JSON.stringify(detailItem)); */
}

function loadDetail() {
	let detailName = localStorage.getItem("itemName");
	let detailPrice = localStorage.getItem("itemPrice");
	let detailDescription = localStorage.getItem("itemDescription");
	let detailImage = localStorage.getItem("itemImage");

	document.querySelector('.left span').textContent = "Flavor: " + detailName;
	document.querySelector('.right span').textContent = detailDescription;
	document.querySelector('.price span').textContent = detailPrice;

	let product_image = document.querySelector('.roll_image');
	if (detailName == "Orginal") {
		product_image.innerHTML = '<img class="roll" src="images/roll.png" alt="picture of original cinnamon roll product" id="blackberry">';
	}
	else if (detailName == "Blackberry") {
		product_image.innerHTML = '<img class="roll" src="images/roll2.png" alt="picture of blackberry cinnamon roll product" id="blackberry">';
	}
	else if (detailName == "Walnut") {
		product_image.innerHTML = '<img class="roll" src="images/roll3.png" alt="picture of walnut cinnamon roll product" id="blackberry">';
	}
	else if (detailName == "Original Gluten-Free") {
		product_image.innerHTML = '<img class="roll" src="images/roll4.png" alt="picture of original (gluten-free) cinnamon roll product" id="blackberry">';
	}
	else if (detailName == "Pumpkin Spice") {
		product_image.innerHTML = '<img class="roll" src="images/roll5.png" alt="picture of pumpkin spice cinnamon roll product" id="blackberry">';
	}
	else if (detailName == "Caramel Pecan") {
		product_image.innerHTML = '<img class="roll" src="images/roll6.png" alt="picture of carmel pecan cinnamon roll product" id="blackberry">';

	}
}

/* function setItems(product) {
	product.inCart = 1;
	
	let cartItems = {
		[product.tag]: product
	}
	
	localStorage.setItem("productsInCart", JSON.stringify(cartItems));
} */

loadCartCount();
loadDetail();