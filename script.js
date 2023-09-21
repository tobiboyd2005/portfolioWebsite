/*lottie file homepage*/
// Get a reference to the Lottie container
const lottieContainer = document.getElementById('lottie-container');

// Specify the path to your Lottie animation file
const animationPath = './blackGuy.json';

// Initialize the Lottie animation
const animation = lottie.loadAnimation({
  container: lottieContainer,
  renderer: 'svg', // You can choose 'svg', 'canvas', or 'html' as the renderer
  loop: true,       // Set to true if you want the animation to loop
  autoplay: true,   // Set to true if you want the animation to play automatically
  path: animationPath,
});
/*lottiefile home page*/