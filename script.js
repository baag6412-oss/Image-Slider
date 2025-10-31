document.addEventListener("DOMContentLoaded", () => {
    const images = [
        "image/k.jpg",
        "image/l.jpg",
        "image/m.jpg",
        "image/p.jpg",
        "image/o.jpg",
        "image/n.jpg",
    ];

    let currentIndex = 0;
    const mainImage = document.getElementById("main-image");
    const nextButton = document.getElementById("next");
    const prevButton = document.getElementById("previous");

    function updateImage() {
        mainImage.src = images[currentIndex];
    }

    nextButton.addEventListener("click", () => {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0; // Loop to first image
        }
        updateImage();
    });

    prevButton.addEventListener("click", () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = images.length - 1; // Loop to last image
        }
        updateImage();
    });

    // ✅ Optional: Keyboard support (← → keys)
    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") nextButton.click();
        if (e.key === "ArrowLeft") prevButton.click();
    });

    // ✅ Optional: Auto-play mode (every 3 seconds)
    setInterval(() => {
        nextButton.click();
    }, 3000);
});
