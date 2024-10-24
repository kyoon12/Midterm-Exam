let stock = {
  1: { name: 'Laptop', price: 1500, quantity: 5,"iamge" :"https://img.freepik.com/premium-psd/laptop-mock-up_1310-197.jpg" },
  2: { name: 'Headphones', price: 100, quantity: 10, "image" : "https://img.freepik.com/free-photo/levitating-music-headphones-display_23-2149817601.jpg" },
  3: { name: 'Keyboard', price: 50, quantity: 20, "image" : "https://img.freepik.com/free-photo/levitating-music-headphones-display_23-2149817601.jpg" }
};

let cart = [];

function addToCart(productId) {
  let product = stock[productId];

  if (product.quantity > 0) {
    product.quantity--;
    cart.push(product);

    // Update stock display
    document.getElementById(`stock${productId}`).textContent = `In Stock: ${product.quantity}`;

    // Show notification
    displayNotification(`${product.name} added to cart!`, "alert-success");

    // Check if stock is out
    if (product.quantity === 0) {
      document.getElementById(`stock${productId}`).textContent = "Out of Stock";
    }
  } else {
    // If stock is 0, show error notification
    displayNotification(`${product.name} is out of stock!`, "alert-danger");
  }
}

function displayNotification(message, alertType) {
  const notification = document.getElementById("notification");
  notification.textContent = message;
  notification.className = `alert ${alertType}`;
  notification.classList.remove("d-none");

  // Remove the notification after 3 seconds
  setTimeout(() => {
    notification.classList.add("d-none");
  }, 3000);
}
