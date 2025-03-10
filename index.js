const slider = document.querySelector(".slider");
const toggleLeft = document.getElementById("toggleLeft");
const toggleRight = document.getElementById("toggleRight")
let isAnimating = false;
let animationFrameId;
let rotationAngle = 0;
const numberOfImages = 8; // Number of images inside slider
const angleBetweenImages = 360 / numberOfImages; // Angle between each image, in degrees

updateVisibleText();

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
        updateVisibleText();
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
        updateVisibleText();
        animationFrameId = requestAnimationFrame(animate);
    }

    animate(); // Start animation

}

function updateVisibleText() { // make <p> items visible only when image is facing the user
    const items = document.querySelectorAll('.slider .item');
    items.forEach((item, index) => {
        // Calculate the angle of each item
        const itemAngle = (index * angleBetweenImages + rotationAngle) % 360 // modulo '%' ensures value stays between 0 and 360

        // Add visible class if the item is within 22.5 degrees away from 0 or 360 degrees, otherwise hide it.
        if (Math.abs(itemAngle) < angleBetweenImages / 2 || Math.abs(itemAngle - 360) < angleBetweenImages / 2) {
            item.classList.add('visible');
        } else {
            item.classList.remove('visible');
        }
    });
}

if (toggleLeft) {
    toggleLeft.addEventListener('click', () => {
    if (!isAnimating) {
        isAnimating = true; // Start the animation one image to the left
        animateToLeft();
    } 
});
}

if (toggleRight) {
    toggleRight.addEventListener("click", () => {
    if (!isAnimating) {
        isAnimating = true; // Start the animation one image to the right
        animateToRight();
    }
});
}



// Modal 

const modal = document.getElementById('myModal');
const modalImage = document.getElementById('img01');
const images = document.querySelectorAll('.myImg');
const captionText = document.getElementById('caption')
const span = document.getElementsByClassName("close")[0];

images.forEach((image) => {
    image.addEventListener('click', () => {
        modal.style.display = "block";
        modalImage.src = image.src;
        captionText.innerHTML = image.alt;
    })
})

if (span) {
    span.addEventListener('click', () => {
    modal.style.display="none";
})
}
