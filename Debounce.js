// Debounce limits the rate at which a function is executed.

const searchInput = document.querySelector('input');
searchInput.addEventListener('input', debounce(function(event) {
  console.log('Searching for:', event.target.value);
}, 300));
