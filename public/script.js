document.addEventListener('DOMContentLoaded', function() {

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
 


  const form = document.querySelector('.sm\\:w-2\\/3'); // Select the form container
  const inputs = form.querySelectorAll('input[type="text"]');
  const checkbox = form.querySelector('input[type="checkbox"]');
  const submitButton = form.querySelector('a[href="index.html"]');
  
  // Create the loader element
  const loader = document.createElement('div');
  loader.classList.add(
    'loader',
    'hidden',
    'absolute',
    'top-0',
    'left-0',
    'w-full',
    'h-full',
    'flex',
    'justify-center',
    'items-center',
    'bg-gray-800',
    'bg-opacity-50'
  );
  loader.innerHTML = `<div class="animate-spin rounded-full h-16 w-16 border-t-4 border-base-color"></div>`;
  document.body.appendChild(loader);

  function validateInput(input) {
    const value = input.value.trim();
    const errorElement = input.nextElementSibling;
    
    if (!value) {
      showError(input, 'This field is required.');
      return false;
    }

    if (input.type === 'email' && !isValidEmail(value)) {
      showError(input, 'Please enter a valid email address.');
      return false;
    }

    clearError(input);
    return true;
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function showError(input, message) {
    input.classList.add('border-red-500');
    let errorElement = input.parentElement.querySelector('.error-message');
    if (!errorElement) {
      errorElement = document.createElement('span');
      errorElement.classList.add('error-message', 'text-red-500', 'text-sm');
      input.parentElement.appendChild(errorElement);
    }
    errorElement.textContent = message;
  }

  function clearError(input) {
    input.classList.remove('border-red-500');
    const errorElement = input.parentElement.querySelector('.error-message');
    if (errorElement) {
      errorElement.remove();
    }
  }

  function validateForm() {
    let isValid = true;
    inputs.forEach((input) => {
      if (!validateInput(input)) {
        isValid = false;
      }
    });

    if (!checkbox.checked) {
      alert('You must agree to the Terms of Use and Privacy Policy.');
      isValid = false;
    }

    return isValid;
  }

  function showLoader() {
    loader.classList.remove('hidden');
  }

  function hideLoader() {
    loader.classList.add('hidden');
  }

  submitButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default navigation
    if (validateForm()) {
      showLoader();
      setTimeout(() => {
        hideLoader();
        alert('successfully submitted you will get a response from us!');
        setTimeout(() => {
          window.location.href = submitButton.href; // Navigate to the target URL after showing success
        }, 500); // Allow time for the loader to disappear
      }, 2000); // Simulate a 2-second submission process
    }

    
  });


 
  

 
});
