const slider = document.querySelector('.slider');
const toggleNext = document.getElementById('toggleNext');
const togglePrevious = document.getElementById('togglePrevious')
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
        slider.style.transform = `perspective(1000px) rotateX(-5deg) rotateY(${rotationAngle}deg)`;
        animationFrameId = requestAnimationFrame(animate);
    }

    animate(); // Start the animation
}

function animateToPreviousImage() {
    const targetAngle = rotationAngle - angleBetweenImages;
    
    function animate() {
        if (rotationAngle <= targetAngle) {
            isAnimating = false; // Stop the animation
            return;
        }

        rotationAngle -= 0.5; // Increment the rotation angle backwards (adjust speed here)
        slider.style.transform = `perspective(1000px) rotateX(-5deg) rotateY(${rotationAngle}deg)`;
        animationFrameId = requestAnimationFrame(animate);
    }

    animate(); // Start animation backwards

}

toggleNext.addEventListener('click', () => {
    if (!isAnimating) {
        isAnimating = true; // Start the animation forwards
        animateToNextImage();
    } else {
        cancelAnimationFrame(animationFrameId); // Stop the animation
        isAnimating = false;

        // Force a re-render to fix pixelation
        setTimeout(() => {
            slider.style.transform = `perspective(1000px) rotateX(-5deg) rotateY(${rotationAngle}deg)`;
        }, 10); // Small delay to force re-render
    }
});

togglePrevious.addEventListener("click", () => {
    if (!isAnimating) {
        isAnimating = true; // Start the animation backwards
        animateToPreviousImage();
    } else {
        cancelAnimationFrame(animationFrameId); // Stop the animation
        isAnimating = false;

        setTimeout(() => {
            slider.style.transform = `perspective(1000px) rotateX(-5deg) rotateY(${rotationAngle}deg)`;
        }, 10); // Small delay to force re-render
    }
})