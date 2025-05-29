// Enhanced zoom functionality for images
document.addEventListener('DOMContentLoaded', function() {
  // Apply medium-zoom to images with appropriate classes
  const zoomableImages = document.querySelectorAll('.img-fluid:not(.no-zoom)');
  
  if (zoomableImages.length > 0 && typeof mediumZoom === 'function') {
    mediumZoom(zoomableImages, {
      margin: 24,
      background: 'rgba(0,0,0,0.9)',
      scrollOffset: 40,
      // Add custom transition for smoother zoom experience
      container: {
        width: '100%',
        height: '100%'
      }
    });
  }
});
