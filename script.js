// create the heart buttons count
document.querySelectorAll(".heart").forEach(button => {
    button.addEventListener("click", function(e) {
        e.preventDefault();

        const heartIcon = document.getElementById("heart-icon");
        let heartButton = parseInt(heartIcon.innerText);

        const showHeartButton = heartButton + 1;

        heartIcon.innerText = showHeartButton;
    });
});

// create the call buttons
const callBtns = document.getElementsByClassName("call-btn");

for (let callButton of callBtns) {
    callButton.addEventListener("click", function () {
        const card = callButton.parentElement.parentElement;

        const serviceName = card.getElementsByClassName("service-name")[0].innerText;
        const serviceNumber = card.getElementsByClassName("service-number")[0].innerText;

        alert(`📞 Calling ${serviceName} at ${serviceNumber}...`);

        let coinSpan = document.getElementById("coin-count");
        let coins = parseInt(coinSpan.innerText);
        if (coins < 20) {
            alert("❌ You don’t have enough coins! Minimum 20 coins required.❗❗❗");
            return;
        }

        coins -= 20;
        coinSpan.innerText = coins;

        const cartContainer = document.getElementById("cart-container");

        let time = new Date().toLocaleTimeString();

        const newCart = document.createElement("div");
        newCart.className = "bg-gray-200 rounded-xl flex justify-between mb-3 p-4";
        newCart.innerHTML = `
        <div class="flex justify-between w-full font-bold">
            <span>${serviceName} - ${serviceNumber}</span>
            <span>${time}</span>
        </div>
        `;

        cartContainer.appendChild(newCart);
    });
}

// clear button
document.querySelector(".clear").addEventListener("click", function () {
    const cartContainer = document.getElementById("cart-container");
    cartContainer.innerHTML = "";
});


// copy button
document.querySelectorAll(".copy-btn").forEach(button => {
  button.addEventListener("click", function () {
    let card = this.closest(".card-body");
    let serviceNumber = card.querySelector(".service-number").innerText.trim();

    navigator.clipboard.writeText(serviceNumber).then(() => {
      alert(`✅ Number ${serviceNumber} copied to clipboard!`);
    });

    let copySpan = document.getElementById("copy");
    let count = parseInt(copySpan.innerText);
    copySpan.innerText = count + 1;
  });
});