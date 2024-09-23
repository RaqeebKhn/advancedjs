// Throttle ensures a function is called at most once every specified time.

const button = document.querySelector('button');
button.addEventListener('click', throttle(() => {
  console.log('Button clicked');
}, 2000));
