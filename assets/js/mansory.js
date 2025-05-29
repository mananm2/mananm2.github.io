// Enhanced masonry layout functionality
document.addEventListener('DOMContentLoaded', function() {
  // Initialize masonry layout for grid elements if the library is available
  const masonryGrids = document.querySelectorAll('.masonry-grid');
  
  if (masonryGrids.length > 0 && typeof Masonry === 'function' && typeof imagesLoaded === 'function') {
    masonryGrids.forEach(function(grid) {
      // Initialize masonry with optimized options
      const msnry = new Masonry(grid, {
        itemSelector: '.masonry-item',
        percentPosition: true,
        columnWidth: '.grid-sizer',
        transitionDuration: '0.3s',
        stagger: 30,
        resize: true
      });
      
      // Reload masonry layout after all images are loaded for proper positioning
      imagesLoaded(grid).on('progress', function() {
        msnry.layout();
      });
      
      // Also update layout on window resize for responsive behavior
      window.addEventListener('resize', function() {
        setTimeout(function() {
          msnry.layout();
        }, 100);
      });
    });
  }
});
