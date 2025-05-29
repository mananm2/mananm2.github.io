// Modern theme handling script

// Function to get the user's theme preference
function getThemePreference() {
  return localStorage.getItem('theme') || 'light';
}

// Function to set theme
function setTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
  localStorage.setItem('theme', theme);
}

// Function to toggle theme
function toggleTheme(currentTheme) {
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', function() {
  // Set initial theme based on user preference
  const savedTheme = getThemePreference();
  setTheme(savedTheme);
  
  // Add animation class to body after a short delay
  setTimeout(() => {
    document.body.classList.add('fade-in');
  }, 100);
});
