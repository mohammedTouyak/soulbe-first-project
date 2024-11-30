// Carousel functionality
document.addEventListener("DOMContentLoaded", () => {
    const carouselSlide = document.querySelector(".carousel-slide");
    const carouselImages = carouselSlide.querySelectorAll("img");
    const nextButton = document.querySelector(".carousel-nav.next");
    const prevButton = document.querySelector(".carousel-nav.prev");
    const dots = document.querySelectorAll(".carousel-dots span");

    let currentIndex = 0; // Track the current image index

    // Function to update the carousel
    function updateCarousel() {
        // Calculate the offset based on the current index
        const offset = -currentIndex * 100; // Assuming each image takes 100% width
        carouselSlide.style.transform = `translateX(${offset}%)`;
        
        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === currentIndex);
        });
    }

    // Event listener for next button
    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % carouselImages.length; // Wrap around to the first image
        updateCarousel();
    });

    // Event listener for previous button
    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length; // Wrap around to the last image
        updateCarousel();
    });

    // Event listener for dots
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            currentIndex = index;
            updateCarousel();
        });
    });

    // Initial update
    updateCarousel();
});
