# 3D Personal Photo Album

A photo album gallery created using HTML, CSS and Javascript. This project showcases a visually interesting image gallery featuring photos from my personal collection, which I have physically printed and then scanned to turn them to digital. The main goal of the project is to be simple (minimal technologies used), visually unique, and to allow for effortless addition of new photos in the future.

---

## Table of Contents
- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Known Issues](#known-issues)
- [Future Improvements](#future-improvements)
- [Technologies Used](#technologies-used)
- [License](#license)

---

## Features

- **Instax Gallery**:
  - A 3D spinning image gallery that displays images in a circular 360° layout.
  - Users can cycle through images using left/right buttons or touch-swiping.
  - Includes a toggle button in the footer to enable/disable the full render of the animation (default: `backface-visibility: hidden` to hide the backside of animated images).

- **Digicam Gallery**:
  - A CSS-grid gallery featuring pop-up modals for a clean viewing experience.

- **Gear Page**:
  - Information about the cameras I use to shoot my photos.

- **About Page**:
  - Simple about page.

---

## Demo

You can view a live demo of the project [here](#).

---

## Installation

1. Clone the repository.
2. Navigate to project directory.
3. Open index.html file in your browser to view the website.

--- 

## Usage

- **Instax Gallery**:
  - Use the left/right buttons or swipe on touch devices to navigate through the images.
  - Toggle the slider inside the footer if you want to see the full 3D plain rendered.

- **Digicam Gallery**:
  - Click on any image to open a pop-up modal for a larger view.

- **Gear Page**:
  - Explore information about the camera gear I use to capture the images.

- **About page**:
  - Read a basic explanation of the website.

---

## Known Issues

- **Image Pixelation**:
  - Images may pixelate after the animation runs. Using a combination of CSS properties and a timeout inside `index.js` to force image to re-render after each rotate seems to have fully resolved the issue. I have not encountered this anymore in my testing, but it might still happen to you depending on your browser.

- **Firefox Compatibility**:
  - The instax gallery does not display images correctly on Firefox. Images appear blurry and pixelated regardless of settings. I will try to find a solution for this problem.

- **Responsive design**:
  - The 3D animation is somewhat difficult to make "responsive" as it requires changing perspective and Z values in order to change its size. This led me down the rabbit-hole of creating many `@media` breakpoints in order to test different values. The CSS can be furthered cleaned and optimized.

---

## Future Improvements
  - Add a proper dark mode for the whole website.
  - Replace Bootstrap navbar with a custom one.
  - Fix image display issues on Firefox.
  - Clean up CSS.
  - Add "Video" gallery that supports playback, as I do own vintage camcorders that I want to share.

---

## Technologies Used
  - **Frontend**:
    - HTML
    - CSS (animations and transitions)
    - Javascript
    - Bootstrap (for the navbar, butons and icons)
  - **Tools**:
    - Git (version control)
    - VS Code

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---