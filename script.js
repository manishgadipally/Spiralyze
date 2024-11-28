function CarouselFeature() {
  document.addEventListener("DOMContentLoaded", function () {
    const carouselItems = document.querySelectorAll(".carousel-one, .carousel-two, .carousel-three");
    const leftArrow = document.querySelector(".arrow-left-icon");
    const rightArrow = document.querySelector(".arrow-right-icon");
    const dots = document.querySelectorAll(".dot");
    const carouselMobileview=document.querySelectorAll(".carousel-one-mobileview,.carousel-two-mobileview,.carousel-three-mobileview")
    const dotsMobileview=document.querySelectorAll(".dot-mobileview");

    let currentIndex = 0;

    function showSlide(index) {
      carouselItems.forEach((item, i) => {
        item.style.display = i === index ? "flex" : "none";
      });



      carouselMobileview.forEach((item, i) => {
        item.style.display = i === index ? "flex" : "none";
      });

      dots.forEach((dot, i) => {
        dot.classList.toggle("active-dot", i === index);
      });
      


      dotsMobileview.forEach((dotmobileview, i) => {
        dotmobileview.classList.toggle("active-dot", i === index);
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

    document.querySelector(".carousel-container-mobileview").addEventListener("mouseenter", () => {
      clearInterval(autoPlay);
    });

    document.querySelector(".carousel-container").addEventListener("mouseleave", () => {
      autoPlay = setInterval(nextSlide, 5000000000000);
    });
    document.querySelector(".carousel-container-mobileview").addEventListener("mouseleave", () => {
      autoPlay = setInterval(nextSlide, 5000);
    });



    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        currentIndex = i;
        showSlide(currentIndex);
      });
    });



    dotsMobileview.forEach((dotmobileview, i) => {
      dotmobileview.addEventListener("click", () => {
        currentIndex = i;
        showSlide(currentIndex);
      });
    });

    showSlide(currentIndex);
  });
}

CarouselFeature();



// Mapping of input IDs to their respective tooltip IDs
/*const tooltipMap = {
  fname: 'fname-error',
  lname: 'lname_error',
  emails: 'email_error',
  company: 'company_error',
  country: 'country_error',
};

// Function to toggle visibility of tooltips based on input field value
function toggleTooltip(field) {
  const tooltip = document.getElementById(tooltipMap[field.id]);
  if (field.tagName.toLowerCase() === 'select') {
    tooltip.style.visibility = field.value === '' ? 'visible' : 'hidden';
  } else {
    tooltip.style.visibility = field.value.trim() === '' ? 'visible' : 'hidden';
  }
}

// Function to validate the form before submitting
function validateForm(event) {
  const fields = document.querySelectorAll('input, select'); // Select all input and select fields
  let isValid = true; // Flag to check form validity
  const formData = {}; // Object to store valid form data

  // Loop through each field to check if it's empty
  fields.forEach(field => {
    toggleTooltip(field); // Show or hide tooltip based on field value
    if (field.tagName.toLowerCase() === 'select') {
      if (field.value === '') {
        isValid = false; // Mark as invalid if select is empty
      }
    } else if (field.value.trim() === '') {
      isValid = false; // Mark as invalid if text field is empty
    }

    // If field is not empty, add its value to the formData object
    if (field.value.trim() !== '') {
      formData[field.id] = field.value.trim();
    }
  });

  if (isValid) {
    // Store form data in localStorage and redirect to thank you page
    localStorage.setItem('formData', JSON.stringify(formData));
    window.location.href = 'thankyou.html'; // Redirect
  } else {
    event.preventDefault(); // Prevent form submission if fields are empty
  }
}

// Function to hide tooltips when user starts typing
function hideTooltipOnInput(event) {
  toggleTooltip(event.target); // Call the toggleTooltip to hide the tooltip when typing
}

// Attach event listeners to inputs and selects
document.getElementById('submitButton').addEventListener('click', validateForm);

const fields = document.querySelectorAll('input, select');
fields.forEach(field => {
  field.addEventListener('input', hideTooltipOnInput); // Hide tooltip when user types
  field.addEventListener('change', hideTooltipOnInput); // For select fields, hide on change
});


*/
// Mapping of input IDs to their respective tooltip IDs









function adjustSections() {
  const width = window.outerWidth;

  
  if (width > 1024) {

    document.querySelector('.watch-the-video-container').style.display = 'block';
    document.querySelector('.watch-the-video-container-mobileview').style.display = 'none';
    document.querySelector('.watch-the-video-container-tabletview').style.display = 'none';

  }
  
  else if (width >= 768 && width <= 1024) {
    document.querySelector('.watch-the-video-container').style.display = 'none';
    document.querySelector('.watch-the-video-container-mobileview').style.display = 'none';
    document.querySelector('.watch-the-video-container-tabletview').style.display = 'block';

  }
  else if(width>= 360 && width<=767){
    document.querySelector('.watch-the-video-container').style.display = 'none';
    document.querySelector('.watch-the-video-container-mobileview').style.display = 'block';
    document.querySelector('.watch-the-video-container-tabletview').style.display = 'none';

  }
  else{
    document.querySelector('.watch-the-video-container').style.display = 'none';
  }
  

}

// Run the function on load and on window resize
window.addEventListener('load', adjustSections);
window.addEventListener('resize', adjustSections);


/* for carousel*/ 
function adjustSectionsmobileview() {
  const width1 = window.outerWidth;


  if (width1 >= 360 && width1 <= 767) {
    document.querySelector('.carousel-container').style.display = 'none';
    document.querySelector('.hero-section').style.display = 'none';
    document.querySelector('.hero-section-mobileview').style.display = 'block';
    document.querySelector('.carousel-container-mobileview').style.display = 'block';

  }
  else if(width1>767){
    document.querySelector('.hero-section').style.display = 'block';
    document.querySelector('.hero-section-mobileview').style.display = 'none';
    document.querySelector('.carousel-container-mobileview').style.display = 'none';
    document.querySelector('.carousel-container').style.display = 'block';

  }
  
  

}

// Run the function on load and on window resize
window.addEventListener('load', adjustSectionsmobileview);
window.addEventListener('resize', adjustSectionsmobileview);


// Map each field to its respective tooltip
const tooltipMap = {
  fname: '.inputfname-tooltip',
  lname: '.inputlname-tooltip',
  emails: '.inputemail-tooltip',
  company: '.inputcompany-tooltip',
  country: '.inputcountry-tooltip'
};

// Function to handle tooltip visibility for a single field
function updateTooltipVisibilityForField(inputField) {
  const tooltip = document.querySelector(tooltipMap[inputField.id]);

  if (inputField.tagName.toLowerCase() === 'input') {
    // If text input is empty, show tooltip
    if (inputField.value.trim() === '') {
      tooltip.style.visibility = 'visible';
    } else {
      tooltip.style.visibility = 'hidden';
    }
  }

  if (inputField.tagName.toLowerCase() === 'select') {
    // If dropdown is not selected, show tooltip
    if (inputField.value === '' || inputField.selectedIndex === 0) {
      tooltip.style.visibility = 'visible';
    } else {
      tooltip.style.visibility = 'hidden';
    }
  }
}

// Function to validate each individual field and return if it's valid
function validateField(inputField) {
  const tooltip = document.querySelector(tooltipMap[inputField.id]);

  // For input fields (text input)
  if (inputField.tagName.toLowerCase() === 'input') {
    if (inputField.value.trim() === '') {
      // Show tooltip if input field is empty
      tooltip.style.visibility = 'hidden';
      return true;  // Field is invalid
    } else {
      // Hide tooltip if input field is filled
      tooltip.style.visibility = 'visible';
    }
  }

  // For select fields (dropdown)
  if (inputField.tagName.toLowerCase() === 'select') {
    if (inputField.value === '' || inputField.selectedIndex === 0) {
      // Show tooltip if dropdown is empty or the placeholder is selected
      tooltip.style.visibility = 'hidden';
      return true;  // Field is invalid
    } else {
      // Hide tooltip if a valid option is selected
      tooltip.style.visibility = 'visible';
    }
  }

  return false;  // Return true if the field is valid
}


// Function to handle form submission and validate all fields
function validateForm(event) {
  const fields = document.querySelectorAll('input, select');
  let isValid = true;
  const formData = {};

  fields.forEach(field => {
    // Validate each field individually
    if (!validateField(field)) {
      isValid = true;
    }

    // Collect form data
 
  });

  if (isValid) {
    // If form is valid, store data in localStorage and redirect
    localStorage.setItem('formData', JSON.stringify(formData));
    window.location.href = 'thankyou.html'; // Redirect to thank you page
  } else {
    event.preventDefault(); // Prevent form submission if any field is invalid
  }
}

// Hide tooltip immediately when user starts typing or selects an option
function hideTooltipOnChange(event) {
  updateTooltipVisibilityForField(event.target);
}

// Attach event listeners for each field
const submitBtn = document.getElementById('submitButton');
submitBtn.addEventListener('click', (event) => {
  event.preventDefault();  // Prevent form submission
  validateForm(event);  // Run form validation
});

const fields = document.querySelectorAll('input, select');
fields.forEach(field => {
  // Hide tooltip immediately when user starts typing or selects an option
  field.addEventListener('input', hideTooltipOnChange);
  field.addEventListener('change', hideTooltipOnChange);
});

// Ensure tooltips are updated when the page loads (for pre-filled values)
window.addEventListener('DOMContentLoaded', () => {
  const fields = document.querySelectorAll('input, select');
  fields.forEach(field => updateTooltipVisibilityForField(field));  // Set initial visibility based on field values
});

