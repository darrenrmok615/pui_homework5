let carts = document.querySelectorAll('.add_to_cart');

let products = [
	{
		name: 'Original',
		tag: 'Original',
		price: 5.99 ,
		inCart: 0
	},
	{
		name: 'Blackberry',
		tag: 'Blackberry',
		price: 6.99 ,
		inCart: 0
	},
	{
		name: 'Walnut',
		tag: 'Walnut',
		price: 6.99 ,
		inCart: 0
	},
	{
		name: 'Gluten-Free',
		tag: 'Gluten-Free',
		price: 5.99 ,
		inCart: 0
	},
	{
		name: 'Pumpkin Spice',
		tag: 'Pumpkin Spice',
		price: 7.99 ,
		inCart: 0
	},
	{
		name: 'Caramel Pecan',
		tag: 'Caramel Pecan',
		price: 7.99 ,
		inCart: 0
	},
]

for (let i=0; i < carts.length; i++) {
	carts[i].addEventListener('click',() => {
		cartCount();
	})
}

function loadCartCount() {
	let productNumber = localStorage.getItem('cartCount');

	if(productNumber) {
		document.querySelector('.cart_icon span').textContent = productNumber;
	}
}

function cartCount() {
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
}

loadCartCount();