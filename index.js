const slider = document.querySelector(".slider");
const toggleLeft = document.getElementById("toggleLeft");
const toggleRight = document.getElementById("toggleRight")
let isAnimating = false;
let animationFrameId;
let rotationAngle = 0;
const numberOfImages = 8; // Number of images inside slider
const angleBetweenImages = 360 / numberOfImages; // Angle between each image, in degrees
let touchStartX = 0;
let touchEndX = 0;


updateVisibleText();

// Instax image animation
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

// Instax image animation
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

// Caption text under each image in instax album
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

// Left and right buttons
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

// touch control
function handleSwipe() {
    // Minimum swipe distance to trigger 
    const swipeThreshold = 50;
    const swipeDistance = touchEndX - touchStartX;
    console.log(swipeDistance);

    // If swipe is over 50 swipe to the left, if it's under -50 swipe to the right
    if (swipeDistance < -swipeThreshold) {
        if (!isAnimating) {
            isAnimating = true; 
            animateToRight();
        }
    } else if (swipeDistance > swipeThreshold) {
        if (!isAnimating) {
            isAnimating = true;
            animateToLeft();
        } 
    }
}
// Add touch control
if (slider) {
    slider.addEventListener('touchstart', (event) => {
        // Only the image currently facing the user has class .visible,
        // if user swipes any other image it won't assign values to touchStartX/touchEndX and won't trigger the function
        const visibleItem = event.target.closest('.item.visible');
        if (visibleItem) {
        // touch starting point
        touchStartX = event.touches[0].clientX
        }
    });
    
    slider.addEventListener('touchend', (event) => {
        const visibleItem = event.target.closest('.item.visible');
        if (visibleItem) {
        console.log('Touch ended on visible item:', visibleItem);
        // touch ending point
        touchEndX = event.changedTouches[0].clientX;
        handleSwipe();
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

// Get year for span inside footer
const year = new Date().getFullYear();
const yearSpan = document.getElementById('year');
if (yearSpan) {
    yearSpan.textContent = year
}

// Set footer to fixed position if the page doesn't have scrolling
window.addEventListener('load', () => {
    const footer = document.querySelector('footer');
    const bodyHeight = document.body.clientHeight;
    const viewportHeight = window.innerHeight;
    if (bodyHeight <= viewportHeight) {
      footer.classList.add('footer-fixed');
    }
  });