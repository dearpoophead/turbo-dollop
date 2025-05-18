const repeatSection = document.getElementById('repeatSection');
const image2s = repeatSection.querySelectorAll('img');

// Estimate height of a single image2 block
let image2Height = 0;

// Calculate on load
window.addEventListener('load', () => {
  if (image2s.length > 0) {
    image2Height = image2s[0].offsetHeight;
  }
});

// Scroll loop logic
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const scrollHeight = document.body.scrollHeight;

  // Trigger scroll reset if user nears bottom of repeated section
  if (scrollY + windowHeight >= scrollHeight - 5) {
    // Scroll to the start of the repeat section (just after image1)
    const offsetTop = repeatSection.offsetTop + 1;
    window.scrollTo({ top: offsetTop });
  }

  // Optional: if user scrolls too far up, prevent looping back into image1
  if (scrollY < repeatSection.offsetTop - 5) {
    const reset = repeatSection.offsetTop + image2Height;
    window.scrollTo({ top: reset });
  }
});
