// Enhanced common JavaScript functions for the modernized website

// Wait for the DOM to be fully loaded before executing any scripts
document.addEventListener('DOMContentLoaded', function() {
  // Initialize image zoom functionality
  initializeImageZoom();
  
  // Initialize masonry layout if needed
  initializeMasonry();
  
  // Add smooth scrolling to all links
  addSmoothScrolling();
  
  // Add animation classes to elements as they come into view
  addScrollAnimations();
});

/**
 * Initialize medium-zoom for all images with appropriate classes
 */
function initializeImageZoom() {
  // Apply medium-zoom to images that should be zoomable
  const zoomableImages = document.querySelectorAll('.img-fluid:not(.no-zoom)');
  if (zoomableImages.length > 0 && typeof mediumZoom === 'function') {
    mediumZoom(zoomableImages, {
      margin: 24,
      background: 'rgba(0,0,0,0.9)',
      scrollOffset: 40
    });
  }
}

/**
 * Initialize masonry layout for grid elements if the library is available
 */
function initializeMasonry() {
  // Check if masonry should be initialized
  const masonryGrids = document.querySelectorAll('.masonry-grid');
  
  if (masonryGrids.length > 0 && typeof Masonry === 'function' && typeof imagesLoaded === 'function') {
    masonryGrids.forEach(function(grid) {
      // Initialize masonry with default options
      const msnry = new Masonry(grid, {
        itemSelector: '.masonry-item',
        percentPosition: true,
        columnWidth: '.grid-sizer'
      });
      
      // Reload masonry layout after all images are loaded
      imagesLoaded(grid).on('progress', function() {
        msnry.layout();
      });
    });
  }
}

/**
 * Add smooth scrolling behavior to all internal links
 */
function addSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      
      if (targetId !== '#') {
        e.preventDefault();
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
}

/**
 * Add animation classes to elements as they scroll into view
 */
function addScrollAnimations() {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  if (animatedElements.length > 0) {
    // Create intersection observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    
    // Observe all elements with animation class
    animatedElements.forEach(element => {
      observer.observe(element);
    });
  }
}

/**
 * Helper function to check if an element is in viewport
 */
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
