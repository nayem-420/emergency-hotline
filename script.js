document.querySelectorAll(".heart").forEach(button => {
    button.addEventListener("click", function(e) {
        e.preventDefault();

        const heartIcon = document.getElementById("heart-icon");
        let heartButton = parseInt(heartIcon.innerText) || 0;

        const showHeartButton = heartButton + 1;

        heartIcon.innerText = showHeartButton;
    });
});