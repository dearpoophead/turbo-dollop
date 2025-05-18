const repeatSection = document.getElementById('repeatSection');

const IMAGE_SRC = 'infinitescroll.jpg';
const NUM_CLONES = 10; // You can increase this for smoother loops
let image2Height = 0;

// Dynamically insert images
function createImage2Loop() {
  for (let i = 0; i < NUM_CLONES; i++) {
    const img = document.createElement('img');
    img.src = IMAGE_SRC;
    img.alt = `Loop Image ${i + 1}`;
    repeatSection.appendChild(img);

    // Save height once (after first image loads)
    if (i === 0) {
      img.onload = () => {
        image2Height = img.offsetHeight;
      };
    }
  }
}

// Setup scroll loop behavior
function setupInfiniteScroll() {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const scrollHeight = document.body.scrollHeight;
    const startOfLoop = repeatSection.offsetTop;

    // If user nears the bottom of page, jump back to start of repeat section
    if (scrollY + windowHeight >= scrollHeight - 5) {
      window.scrollTo({ top: startOfLoop + 1 });
    }

    // Prevent scrolling too far back into image1
    if (scrollY < startOfLoop - 5) {
      window.scrollTo({ top: startOfLoop + image2Height });
    }
  });
}

// Run everything
window.addEventListener('load', () => {
  createImage2Loop();
  setupInfiniteScroll();
});
