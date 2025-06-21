// Dark Mode Toggle
document.addEventListener("DOMContentLoaded", () => {
    const darkBtn = document.getElementById("darkModeToggle");

    darkBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            darkBtn.textContent = "Disable Dark Mode";
        } else {
            darkBtn.textContent = "Enable Dark Mode";
        }
    });


    // Cart functionality
    const addButtons = document.querySelectorAll('.product .btn');
    const cart = document.querySelector("#cart ul");

    let total = 0;

    addButtons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const product = e.target.closest('.product');
            const productName = product.querySelector("h3").innerHTML.trim();
            const productPrice = parseInt(product.querySelector("p").innerHTML.replace(/[^0-9]/g, ''));

            // add item to cart
            const item = document.createElement("li");

            item.textContent = `${productName} - Rs. ${productPrice}`;
            item.innerHTML += ` <span>+</span>`;

            item.querySelector("span").addEventListener("click", () => {
                // remove item
                total -= productPrice;
                item.remove();

                updateTotal();
            });

            cart.appendChild(item);
            total += productPrice;

            updateTotal();
        });
    });

    function updateTotal(){
        document.querySelector("#cart p strong").textContent = `Total: Rs. ${total}.00`;
    }
});
