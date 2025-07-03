// Track slider positions by row ID
const sliderPositions = {};

// Called when a slide button is clicked
function scrollSlider(rowId, direction) {
  const wrapper = document.getElementById(rowId);
  const track = wrapper.querySelector('.slider-track');
  const totalItems = track.children.length;
  const itemWidth = wrapper.offsetWidth;

  // Initialize position if not already tracked
  if (sliderPositions[rowId] === undefined) {
    sliderPositions[rowId] = 0;
  }

  // Update position based on direction
  sliderPositions[rowId] += direction;

  // Clamp to valid range
  if (sliderPositions[rowId] < 0) {
    sliderPositions[rowId] = 0;
  }
  if (sliderPositions[rowId] >= totalItems) {
    sliderPositions[rowId] = totalItems - 1;
  }

  // Apply transform
  track.style.transform = `translateX(-${sliderPositions[rowId] * itemWidth}px)`;
}










// Custom Cursor Animation
// This script creates a custom cursor that follows the mouse movement with a smooth animation effect.
// It consists of a main cursor dot and a follower that lags behind for a smooth effect.
const cursor = document.querySelector(".cursor-dot");

let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;
const speed = 0.3; // Controls smoothness

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  cursorX += (mouseX - cursorX) * speed;
  cursorY += (mouseY - cursorY) * speed;
  cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
  requestAnimationFrame(animate);
}

animate();











// Accordion Functionality
// This script adds click event listeners to accordion headers to toggle the active state.
const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach(header => {
  header.addEventListener("click", () => {
    const parent = header.parentElement;
    parent.classList.toggle("active");
  });
});






// FAQ Accordion Functionality
const faqHeaders = document.querySelectorAll(".faq-header");

faqHeaders.forEach(header => {
  header.addEventListener("click", () => {
    const parent = header.parentElement;
    parent.classList.toggle("active");
  });
});






// loadFooter.js
fetch('footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer-container').innerHTML = data;
  });









// Animated Cards Intersection Observer
// This script uses Intersection Observer to animate cards when they come into view.
const cards = document.querySelectorAll(".animated-card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = "running";
    }
  });
}, {
  threshold: 0.15
});

cards.forEach(card => {
  card.style.animationPlayState = "paused";
  observer.observe(card);
});











// Blog Slider Functionality
// This script handles the sliding functionality for the blog section.
// It allows users to navigate through blog cards by clicking on the slide buttons.
let currentBlogIndex = 0;

function slideBlog(direction) {
  const slider = document.getElementById("blogSlider");
  const totalCards = slider.children.length;
  const cardWidth = slider.clientWidth;

  currentBlogIndex += direction;

  if (currentBlogIndex < 0) {
    currentBlogIndex = totalCards - 1; // loop to end
  } else if (currentBlogIndex >= totalCards) {
    currentBlogIndex = 0; // loop to start
  }

  slider.style.transform = `translateX(-${currentBlogIndex * cardWidth}px)`;
}

// Auto-slide every 5 seconds
setInterval(() => {
  slideBlog(1);
}, 100000);









// Tab Functionality
// This script handles the tab functionality for switching between different content sections.
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Deactivate all buttons
    tabButtons.forEach(b => b.classList.remove('active'));
    // Hide all contents
    tabContents.forEach(c => c.classList.remove('active'));

    // Activate current
    btn.classList.add('active');
    document.getElementById(btn.getAttribute('data-tab')).classList.add('active');
  });
});









