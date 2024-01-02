// Add this code at the beginning of your existing JavaScript file or create a new one.

const body = document.body;
const btnTheme = document.querySelector('.fa-moon');
const btnHamburger = document.querySelector('.fa-bars');

const addThemeClass = (bodyClass, btnClass) => {
  body.classList.add(bodyClass);
  btnTheme.classList.add(btnClass);
}

const getBodyTheme = localStorage.getItem('portfolio-theme');
const getBtnTheme = localStorage.getItem('portfolio-btn-theme');

addThemeClass(getBodyTheme, getBtnTheme);

const isDark = () => body.classList.contains('dark');

const setTheme = (bodyClass, btnClass) => {
  body.classList.remove(localStorage.getItem('portfolio-theme'));
  btnTheme.classList.remove(localStorage.getItem('portfolio-btn-theme'));

  addThemeClass(bodyClass, btnClass);

  localStorage.setItem('portfolio-theme', bodyClass);
  localStorage.setItem('portfolio-btn-theme', btnClass);
}

const toggleTheme = () =>
  isDark() ? setTheme('light', 'fa-moon') : setTheme('dark', 'fa-sun');

btnTheme.addEventListener('click', toggleTheme);

const displayList = () => {
  const navUl = document.querySelector('.nav__list');

  if (btnHamburger.classList.contains('fa-bars')) {
    btnHamburger.classList.remove('fa-bars');
    btnHamburger.classList.add('fa-times');
    navUl.classList.add('display-nav-list');
  } else {
    btnHamburger.classList.remove('fa-times');
    btnHamburger.classList.add('fa-bars');
    navUl.classList.remove('display-nav-list');
  }
}

btnHamburger.addEventListener('click', displayList);

const scrollUp = () => {
  const btnScrollTop = document.querySelector('.scroll-top');

  if (
    body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    btnScrollTop.style.display = 'block';
  } else {
    btnScrollTop.style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', function () {
  // Typed.js Initialization
  var options = {
    strings: [
      'Software Engineer',
      'Software Developer',
      'Automation Engineer',
      'Frontend Engineer'
    ],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1000,
    startDelay: 500,
    loop: true,
    showCursor: false,
    contentType: 'text',
  };

  var typed = new Typed('.typed', options);

  // Increase font size directly
  document.querySelector('.typed').style.fontSize = '36px'; // Adjust the font size as needed
});

// JavaScript for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
document.getElementById('contactForm').addEventListener('submit', function (event) {
	event.preventDefault();
  
	const formData = new FormData(this);
  
	// You can add client-side validation here if needed
  
	// Send form data to the server (replace 'your-server-script' with the actual server script URL)
	fetch('your-server-script', {
	  method: 'POST',
	  body: formData,
	})
	.then(response => {
	  if (response.ok) {
		console.log('Form submitted successfully!');
	  } else {
		console.error('Form submission failed');
	  }
	})
	.catch(error => {
	  console.error('An error occurred during form submission', error);
	});
  });

  // script.js

// script.js

/*
document.getElementById("emailButton").addEventListener("click", function() {
  window.location.href = "mailto:sharane@binghamton.edu";
});

  */



