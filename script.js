const repeatSection = document.getElementById('repeatSection');

const IMAGE_SRC = 'infinitescroll.jpg';
const BATCH_SIZE = 1000;      // How many to load each time
const LOAD_THRESHOLD = 300; // Pixels from bottom before loading more

let loading = false;

// Create a batch of images
function loadMoreImages() {
  for (let i = 0; i < BATCH_SIZE; i++) {
    const img = document.createElement('img');
    img.src = IMAGE_SRC;
    img.alt = 'Loop Image';
    img.onload = () => {
      loading = false;
    };
    repeatSection.appendChild(img);
  }
}

// Listen for scroll and load more when near the bottom
function setupInfiniteLoader() {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const scrollHeight = document.body.scrollHeight;

    if (!loading && scrollY + windowHeight > scrollHeight - LOAD_THRESHOLD) {
      loading = true;
      loadMoreImages();
    }
  });
}

// Initial batch + setup
window.addEventListener('load', () => {
  loadMoreImages(); // Load first batch
  setupInfiniteLoader();
});
