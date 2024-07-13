document.addEventListener('DOMContentLoaded', function() {

//   function pageTransition() {
//       let tl = gsap.timeline();
//       tl.to(".transition", {
//           duration: 1,
//           scaleY: 1,
//           transformOrigin: "bottom",
//           ease: "power4.inOut",
//       });
//       tl.to(".transition", {
//           duration: 1,
//           scaleY: 0,
//           transformOrigin: "top",
//           ease: "power4.inOut", // Fixed typo here
//           delay: 0.2,
//       });
//   }

//   function contentAnimation() {
//       let tl = gsap.timeline();
//       tl.to(".h1", {
//           top: 0, // Adjusted top value to be more realistic
//           duration: 1,
//           ease: "power3.inOut",
//           delay: 0.75,
//       });
//   }

//   function delay(n = 0) { // Used default parameter directly
//       return new Promise(resolve => setTimeout(resolve, n));
//   }

//   barba.init({
//       sync: true,
//       transitions: [{
//           async leave(data) {
//               const done = this.async();
//               pageTransition();
//               await delay(1000); // Make sure the delay matches the animation duration
//               done();
//           },

//           async enter(data) {
//               contentAnimation();
//           },

//           async once(data) {
//               contentAnimation();
//           }
//       }]
//   });

const hamBurger = document.getElementById('hamburger');
const hamBurgerMenu = document.getElementById('hamburger-menu');
const closeMenu = document.getElementById('close-menu');

hamBurger.addEventListener('click', showMenu);
closeMenu.addEventListener('click', close);
hamBurgerMenu.addEventListener('click', close);

function showMenu() {
    hamBurgerMenu.classList.toggle('hidden');
    hamBurgerMenu.classList.toggle('flex');
}

function close() {
    hamBurgerMenu.classList.remove('flex');
    hamBurgerMenu.classList.add('hidden');
}

const slider = document.getElementById('slider');
    const buttons = Array.from(document.querySelectorAll('button[id^="btn"]'));
    let currentIndex = 0;
    const slides = slider.children;
    const totalSlides = slides.length;
    let interval;

    function showSlide(index) {
      currentIndex = index;
      if (currentIndex < 0) currentIndex = totalSlides - 1;
      if (currentIndex >= totalSlides) currentIndex = 0;
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
      updateButtons();
    }

    function showNextSlide() {
      showSlide(currentIndex + 1);
    }

    function updateButtons() {
      buttons.forEach((btn, index) => {
        btn.classList.toggle('bg-gray-700', index !== currentIndex);
        btn.classList.toggle('bg-gray-900', index === currentIndex);
      });
    }

    function handleButtonClick(index) {
      clearInterval(interval);
      showSlide(index);
      interval = setInterval(showNextSlide, 2000);
    }

    buttons.forEach((btn, index) => {
      btn.addEventListener('click', () => handleButtonClick(index));
    });

    interval = setInterval(showNextSlide, 2000);


 
    const content = document.getElementById('content');
    content.classList.remove('opacity-0');
    content.classList.add('opacity-100');
 


  

 
});
