// Get references to the "next" and "prev" buttons, and the carousel element
let next = document.getElementById('next'); // Button to go to the next item
let prev = document.getElementById('prev'); // Button to go to the previous item
let carousel = document.querySelector('.carousel'); // carousel container element
let items = document.querySelectorAll('.carousel .item'); // All items in the carousel
let countItem = items.length; // Total number of items in the carousel
let active = 1; // Index of the currently active item, starting at the second item
let other_1 = null; // Index for the first other item
let other_2 = null; // Index for the second other item

// Event listener for the "next" button click
next.onclick = () => {
    // Remove the 'prev' class and add the 'next' class for animation effect
    carousel.classList.remove('prev');
    carousel.classList.add('next');
    
    // Update the active index to the next item, wrapping around if necessary
    active = active + 1 >= countItem ? 0 : active + 1;
    
    // Calculate indices for the items that will be adjacent to the active item
    other_1 = active - 1 < 0 ? countItem - 1 : active - 1; // Previous item
    other_2 = active + 1 >= countItem ? 0 : active + 1; // Next item
    
    // Change the slider to reflect the new active item
    changeSlider();
}

// Event listener for the "prev" button click
prev.onclick = () => {
    // Remove the 'next' class and add the 'prev' class for animation effect
    carousel.classList.remove('next');
    carousel.classList.add('prev');
    
    // Update the active index to the previous item, wrapping around if necessary
    active = active - 1 < 0 ? countItem - 1 : active - 1;
    
    // Calculate indices for the items that will be adjacent to the active item
    other_1 = active + 1 >= countItem ? 0 : active + 1; // Next item
    other_2 = other_1 + 1 >= countItem ? 0 : other_1 + 1; // Second next item
    
    // Change the slider to reflect the new active item
    changeSlider();
}

// Function to change the displayed items in the carousel
const changeSlider = () => {
    // Get the currently active item and remove its 'active' class
    let itemOldActive = document.querySelector('.carousel .item.active');
    if(itemOldActive) itemOldActive.classList.remove('active');

    // Get the first other item and remove its 'other_1' class
    let itemOldOther_1 = document.querySelector('.carousel .item.other_1');
    if(itemOldOther_1) itemOldOther_1.classList.remove('other_1');

    // Get the second other item and remove its 'other_2' class
    let itemOldOther_2 = document.querySelector('.carousel .item.other_2');
    if(itemOldOther_2) itemOldOther_2.classList.remove('other_2');

    // Reset animation for images in all items
    items.forEach(e => {
        e.querySelector('.image img').style.animation = 'none'; // Remove animation
        void e.offsetWidth; // Trigger reflow
        e.querySelector('.image img').style.animation = ''; // Restore animation
    });

    // Add classes to the current active item and the other two items
    items[active].classList.add('active'); // Set the current item as active
    items[other_1].classList.add('other_1'); // Set the previous item
    items[other_2].classList.add('other_2'); // Set the next item

    // Clear the existing autoplay interval
    clearInterval(autoPlay);
    
    // Set a new autoplay interval that simulates the next button click every 5 seconds
    autoPlay = setInterval(() => {
        next.click(); // Automatically click the next button
    }, 5000);
}

// Initialize autoplay to automatically change the carousel every 5 seconds
let autoPlay = setInterval(() => {
    next.click(); // Automatically click the next button
}, 5000);