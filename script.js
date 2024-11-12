function CarouselFeature() {
    document.addEventListener("DOMContentLoaded", function () {
        const carouselItems = document.querySelectorAll(".carousel-one, .carousel-two, .carousel-three");
        const leftArrow = document.querySelector(".arrow-left-icon");
        const rightArrow = document.querySelector(".arrow-right-icon");
        const dots = document.querySelectorAll(".dot");

        let currentIndex = 0;

        function showSlide(index) {
            carouselItems.forEach((item, i) => {
                item.style.display = i === index ? "flex" : "none";
            });

            dots.forEach((dot, i) => {
                dot.classList.toggle("active-dot", i === index);
            });
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % carouselItems.length;
            showSlide(currentIndex);
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
            showSlide(currentIndex);
        }

        rightArrow.addEventListener("click", nextSlide);
        leftArrow.addEventListener("click", prevSlide);

        let autoPlay = setInterval(nextSlide, 500000000000);

        document.querySelector(".carousel-container").addEventListener("mouseenter", () => {
            clearInterval(autoPlay);
        });

        document.querySelector(".carousel-container").addEventListener("mouseleave", () => {
            autoPlay = setInterval(nextSlide, 5000000000000);
        });

        dots.forEach((dot, i) => {
            dot.addEventListener("click", () => {
                currentIndex = i;
                showSlide(currentIndex);
            });
        });

        showSlide(currentIndex);
    });
}

CarouselFeature();








document.getElementById("submitButton").addEventListener("click", function(event) {
    event.preventDefault();
  
    localStorage.setItem("fname", document.getElementById("fname").value);
    localStorage.setItem("lname", document.getElementById("lname").value);
    localStorage.setItem("emails", document.getElementById("emails").value);
    localStorage.setItem("company", document.getElementById("company").value);
    localStorage.setItem("country", document.getElementById("country").value);
    
    window.location.href = "thankyou.html";
});


function changeImage(img) {
    // Check the current image source and toggle between two images
    img.src = img.src === '' ? 'your-colored-image.jpg' : 'your-image.jpg';
  }
  



// Get the input field and the tooltip
const fnameinputField = document.getElementById('fname');
const fnametooltip = document.querySelector('.input-tooltip');

// Function to check if the input is empty and show/hide tooltip
function checkInput() {
  if (fnameinputField.value.trim() === '') {
    fnametooltip.style.visibility = 'visible';
    fnametooltip.style.opacity = '1';
  } else {
    fnametooltip.style.visibility = 'hidden';
    fnametooltip.style.opacity = '0';
  }
}

// Event listener for input field focus and input changes
fnameinputField.addEventListener('focus', checkInput);
fnameinputField.addEventListener('input', checkInput);

const lnameinputField = document.getElementById('lname');
const lnametooltip = document.querySelector('.input-tooltip');

// Function to check if the input is empty and show/hide tooltip
function checkInput() {
  if (lnameinputField.value.trim() === '') {
    lnametooltip.style.visibility = 'visible';
    lnametooltip.style.opacity = '1';
  } else {
    lnametooltip.style.visibility = 'hidden';
    lnametooltip.style.opacity = '0';
  }
}

// Event listener for input field focus and input changes
lnameinputField.addEventListener('focus', checkInput);
lnameinputField.addEventListener('input', checkInput);



const emailinputField = document.getElementById('emails');
const emailtooltip = document.querySelector('.input-tooltip');

// Function to check if the input is empty and show/hide tooltip
function checkInput() {
  if (emailinputField.value.trim() === '') {
    emailtooltip.style.visibility = 'visible';
   emailtooltip.style.opacity = '1';
  } else {
   emailtooltip.style.visibility = 'hidden';
    emailtooltip.style.opacity = '0';
  }
}

// Event listener for input field focus and input changes
emailinputField.addEventListener('focus', checkInput);
emailinputField.addEventListener('input', checkInput);


const companyinputField = document.getElementById('company');
const companytooltip = document.querySelector('.input-tooltip');

// Function to check if the input is empty and show/hide tooltip
function checkInput() {
  if (companyinputField.value.trim() === '') {
    companytooltip.style.visibility = 'visible';
   companytooltip.style.opacity = '1';
  } else {
   companytooltip.style.visibility = 'hidden';
    companytooltip.style.opacity = '0';
  }
}

// Event listener for input field focus and input changes
companyinputField.addEventListener('focus', checkInput);
companyinputField.addEventListener('input', checkInput);


