const slider = document.querySelector(".slider");
const toggleLeft = document.getElementById("toggleLeft");
const toggleRight = document.getElementById("toggleRight")
let isAnimating = false;
let animationFrameId;
let rotationAngle = 0;
const numberOfImages = 8; // Number of images inside slider
const angleBetweenImages = 360 / numberOfImages; // Angle between each image, in degrees

function animateToLeft() {
    const targetAngle = rotationAngle + angleBetweenImages;

    function animate() {
        if (rotationAngle >= targetAngle) {
            isAnimating = false; 
            cancelAnimationFrame(animationFrameId); // Stop animation
            setTimeout(() => { // Small delay to force re-render of images
                slider.style.transform = `perspective(1000px)  rotateY(${rotationAngle}deg)`;
            }, 100); 
            return;
        }

        rotationAngle += 0.5; // Increment the rotation angle forwards (adjust speed here)
        slider.style.transform = `perspective(1000px)  rotateY(${rotationAngle}deg)`;
        animationFrameId = requestAnimationFrame(animate);
    }

    animate(); // Start animation
}

function animateToRight() {
    const targetAngle = rotationAngle - angleBetweenImages;
    
    function animate() {
        if (rotationAngle <= targetAngle) {
            isAnimating = false;
            cancelAnimationFrame(animationFrameId); // Stop animation
            setTimeout(() => { // Small delay to force re-render of images
                slider.style.transform = `perspective(1000px)  rotateY(${rotationAngle}deg)`;
            }, 100); 
            return;
        }

        rotationAngle -= 0.5; // Increment the rotation angle backwards (adjust speed here)
        slider.style.transform = `perspective(1000px)  rotateY(${rotationAngle}deg)`;
        animationFrameId = requestAnimationFrame(animate);
    }

    animate(); // Start animation

}

toggleLeft.addEventListener('click', () => {
    if (!isAnimating) {
        isAnimating = true; // Start the animation one image to the left
        animateToLeft();
    } 
});

toggleRight.addEventListener("click", () => {
    if (!isAnimating) {
        isAnimating = true; // Start the animation one image to the right
        animateToRight();
    }
})