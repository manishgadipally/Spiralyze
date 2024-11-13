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








document.getElementById("submitButton").addEventListener("click", function (event) {
  event.preventDefault();

  localStorage.setItem("fname", document.getElementById("fname").value);
  localStorage.setItem("lname", document.getElementById("lname").value);
  localStorage.setItem("emails", document.getElementById("emails").value);
  localStorage.setItem("company", document.getElementById("company").value);
  localStorage.setItem("country", document.getElementById("country").value);

  window.location.href = "thankyou.html";
});




function handleInputField(inputField, tooltip) {
  
  inputField.addEventListener('focus', () => {
   
    hideAllTooltips();

    
    if (inputField.value.trim() === '') {  
      tooltip.style.visibility = 'visible';
      tooltip.style.opacity = 1;
    }
  });

  
  inputField.addEventListener('input', () => {
    if (inputField.value.trim() !== '') {
      tooltip.style.visibility = 'hidden';
      tooltip.style.opacity = 0;
    }
  });
}


function hideAllTooltips() {
  
  const allTooltips = document.querySelectorAll('.inputfname-tooltip, .inputlname-tooltip, .inputemail-tooltip, .inputcompany-tooltip');


  allTooltips.forEach(tooltip => {
    tooltip.style.visibility = 'hidden';
    tooltip.style.opacity = 0;
  });
}

const fnameinputField = document.getElementById('fname');
const fnametooltip = document.querySelector('.inputfname-tooltip');

const lnameinputField = document.getElementById('lname');
const lnametooltip = document.querySelector('.inputlname-tooltip');

const emailinputField = document.getElementById('emails');
const emailtooltip = document.querySelector('.inputemail-tooltip');

const companyinputField = document.getElementById('company');
const companytooltip = document.querySelector('.inputcompany-tooltip');


handleInputField(fnameinputField, fnametooltip);
handleInputField(lnameinputField, lnametooltip);
handleInputField(emailinputField, emailtooltip);
handleInputField(companyinputField, companytooltip);


