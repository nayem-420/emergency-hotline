// create the heart buttons count
const heartBtns = document.getElementsByClassName("heart");

for (let heartBtn of heartBtns) {
    heartBtn.addEventListener("click", function (e) {
        e.preventDefault();

        const heartIcon = document.getElementById("heart-icon");
        let heartCount = parseInt(heartIcon.innerText);

        heartCount += 1;
        heartIcon.innerText = heartCount;
    });
}

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
const copyBtns = document.getElementsByClassName("copy-btn");

for (let copyBtn of copyBtns) {
    copyBtn.addEventListener("click", function (e) {
        e.preventDefault();

        let card = copyBtn.parentNode.parentNode; 

        let serviceNumber = card.querySelector(".service-number").innerText.trim();

        navigator.clipboard.writeText(serviceNumber);
        alert(`✅ Number ${serviceNumber} copied!`);

        let copySpan = document.getElementById("copy");
        let count = parseInt(copySpan.innerText);
        copySpan.innerText = count + 1;
    });
}