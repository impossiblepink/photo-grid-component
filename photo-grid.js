<!-- *** This script creates the scroll effect on mobile. Images loose greyscale in exact center of the screen and return to greyscale as the user scrols *** -->
<!-- wrap it in <script> tags and add it to the end of the component template -->
document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth > 768) return;

    const cards = document.querySelectorAll(".image-card-hover");

    function updateActiveCard() {
        const viewportCenter = window.innerHeight / 2;
        let closestCard = null;
        let closestDistance = Infinity;

        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const cardCenter = rect.top + rect.height / 2;
            const distance = Math.abs(cardCenter - viewportCenter);

            if (distance < closestDistance) {
                closestDistance = distance;
                closestCard = card;
            }
        });

        cards.forEach(card => {
            if (card === closestCard) {
                card.classList.add("active");
            } else {
                card.classList.remove("active");
            }
        });
    }

    window.addEventListener("scroll", updateActiveCard);
    window.addEventListener("resize", updateActiveCard);
    updateActiveCard();
});

