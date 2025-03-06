const slider = document.querySelector('.slider');
const toggleButton = document.getElementById('toggleAnimation');
let isAnimating = false;
let animationFrameId;
let rotationAngle = 0;
const numberOfImages = 8; // Number of images inside slider
const angleBetweenImages = 360 / numberOfImages; // Angle between each image, in degrees

function animateToNextImage() {
    const targetAngle = rotationAngle + angleBetweenImages;

    function animate() {
        if (rotationAngle >= targetAngle) {
            isAnimating = false; // Stop the animation
            return;
        }

        rotationAngle += 0.5; // Increment the rotation angle (adjust speed here)
        if (rotationAngle >= 360) rotationAngle = 0; // Reset after full rotation

        slider.style.transform = `perspective(1000px) rotateX(-10deg) rotateY(${rotationAngle}deg)`;
        animationFrameId = requestAnimationFrame(animate);
    }

    animate(); // Start the animation
}

toggleButton.addEventListener('click', () => {
    if (!isAnimating) {
        isAnimating = true; // Start the animation
        animateToNextImage();
    } else {
        cancelAnimationFrame(animationFrameId); // Stop the animation
        isAnimating = false;

        // Force a re-render to fix pixelation
        setTimeout(() => {
            slider.style.transform = `perspective(1000px) rotateX(-10deg) rotateY(${rotationAngle}deg)`;
        }, 10); // Small delay to force re-render
    }
});