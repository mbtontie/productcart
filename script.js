// Array of product data from your provided list
const products = [
    {
        image: "./assets/images/image-waffle-desktop.jpg",
        name: "Waffle with Berries",
        category: "Waffle",
        price: 6.50
    },
    {
        image: "./assets/images/image-creme-brulee-desktop.jpg",
        name: "Vanilla Bean Crème Brûlée",
        category: "Crème Brûlée",
        price: 7.00
    },
    {
        image: "./assets/images/image-macaron-desktop.jpg",
        name: "Macaron Mix of Five",
        category: "Macaron",
        price: 8.00
    },
    {
        image: "./assets/images/image-tiramisu-desktop.jpg",
        name: "Classic Tiramisu",
        category: "Tiramisu",
        price: 5.50
    },
    {
        image: "./assets/images/image-baklava-desktop.jpg",
        name: "Pistachio Baklava",
        category: "Baklava",
        price: 4.00
    },
    {
        image: "./assets/images/image-meringue-desktop.jpg",
        name: "Lemon Meringue Pie",
        category: "Pie",
        price: 5.00
    },
    {
        image: "./assets/images/image-cake-desktop.jpg",
        name: "Red Velvet Cake",
        category: "Cake",
        price: 4.50
    },
    {
        image: "./assets/images/image-brownie-desktop.jpg",
        name: "Salted Caramel Brownie",
        category: "Brownie",
        price: 4.50
    },
    {
        image: "./assets/images/image-panna-cotta-desktop.jpg",
        name: "Vanilla Panna Cotta",
        category: "Panna Cotta",
        price: 6.50
    }
];

// Reference to the product grid and cart
const productGrid = document.getElementById("productGrid");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");

// Initialize cart data
let cart = [];

// Function to update cart UI
function updateCart() {
    cartItems.innerHTML = ""; // Clear current cart items
    let total = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>No items in the cart.</p>";
    } else {
        cart.forEach(item => {
            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");
            cartItem.innerHTML = `
                <h4>${item.name}</h4>
                <p>$${item.price.toFixed(2)}</p>
                <button class="remove-from-cart" data-name="${item.name}">Remove</button>
            `;
            cartItems.appendChild(cartItem);
            total += item.price;
        });
    }

    cartTotal.textContent = total.toFixed(2);
}

// Function to add product to the cart
function addToCart(product) {
    cart.push(product);
    updateCart();
}

// Function to remove product from the cart
cartItems.addEventListener("click", function (e) {
    if (e.target.classList.contains("remove-from-cart")) {
        const productName = e.target.getAttribute("data-name");
        cart = cart.filter(item => item.name !== productName);
        updateCart();
    }
});

// Loop through products and create product cards
products.forEach(product => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <div class="product-info">
            <h6>${product.category}</h6>
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
        </div>
        <button class="add-to-cart">Add to Cart</button>
    `;

    // Add event listener to the "Add to Cart" button
    productCard.querySelector(".add-to-cart").addEventListener("click", () => addToCart(product));

    productGrid.appendChild(productCard);
});
