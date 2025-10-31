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
            currentIndex = 0;
        }
        updateImage();
    });

    prevButton.addEventListener("click", () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        }
        updateImage();
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") nextButton.click();
        if (e.key === "ArrowLeft") prevButton.click();
    });
    setInterval(() => {
        nextButton.click();
    }, 3000);
});
