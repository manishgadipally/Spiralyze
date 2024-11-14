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







function showTooltip(inputField) {
  const tooltipMap = {
    fname: '.inputfname-tooltip',
    lname: '.inputlname-tooltip',
    emails: '.inputemail-tooltip',
    company: '.inputcompany-tooltip',
    country: '.inputcountry-tooltip'
  };

  const tooltip = document.querySelector(tooltipMap[inputField.id]);

  if (inputField.tagName.toLowerCase() === 'select') {
    if (inputField.value === '' || inputField.selectedIndex === 0) {
      tooltip.style.visibility = 'visible';
    } else {
      tooltip.style.visibility = 'hidden';
    }
  } else {
    if (inputField.value.trim() === '') {
      tooltip.style.visibility = 'visible';
    } else {
      tooltip.style.visibility = 'hidden';
    }
  }
}

function validateForm(event) {
  const fields = document.querySelectorAll('input, select');
  let isValid = true;

  const formData = {};

  fields.forEach(field => {
    showTooltip(field);


    if (field.tagName.toLowerCase() === 'select' && (field.value === '' || field.selectedIndex === 0)) {
      isValid = false;
    } else if (field.value.trim() === '') {
      isValid = false;
    }


    formData[field.id] = field.value.trim();
  });


  if (isValid) {
    localStorage.setItem('formData', JSON.stringify(formData));
    window.location.href = 'thankyou.html';
  } else {
    event.preventDefault();
  }
}

function hideTooltipOnChange(event) {
  const tooltipMap = {
    fname: '.inputfname-tooltip',
    lname: '.inputlname-tooltip',
    emails: '.inputemail-tooltip',
    company: '.inputcompany-tooltip',
    country: '.inputcountry-tooltip'
  };

  const tooltip = document.querySelector(tooltipMap[event.target.id]);

  if (event.target.tagName.toLowerCase() === 'select') {
    if (event.target.value !== '' && event.target.selectedIndex !== 0) {
      tooltip.style.visibility = 'hidden';
    }
  } else {
    if (event.target.value.trim() !== '') {
      tooltip.style.visibility = 'hidden';
    }
  }
}

const submitBtn = document.getElementById('submitButton');
submitBtn.addEventListener('click', validateForm);

const fields = document.querySelectorAll('input, select');
fields.forEach(field => {
  field.addEventListener('input', hideTooltipOnChange);
  field.addEventListener('change', hideTooltipOnChange);
});
