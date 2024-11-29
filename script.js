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


// Select input fields and error tooltips
const fnameInput = document.querySelector(".fname");
const fnameError = document.querySelector(".inputfname-tooltip");

const lnameInput = document.querySelector(".lname");
const lnameError = document.querySelector(".inputlname-tooltip");

const emailInput = document.querySelector(".mail");
const emailError = document.querySelector(".inputemail-tooltip");

const companyInput = document.querySelector(".company");
const companyError = document.querySelector(".inputcompany-tooltip");


const countryInput = document.querySelector(".country");
const countryError = document.querySelector(".inputcountry-tooltip");

const submitButton = document.getElementById("submitButton");

// Add event listeners for each input field to handle real-time validation
fnameInput.addEventListener("input", () => toggleTooltip(fnameInput, fnameError));
lnameInput.addEventListener("input", () => toggleTooltip(lnameInput, lnameError));
emailInput.addEventListener("input", () => toggleTooltip(emailInput, emailError));
companyInput.addEventListener("input", () => toggleTooltip(companyInput, companyError));




// Function to show/hide tooltips dynamically
function toggleTooltip(inputField, errorTooltip) {
  // For select, check if the selected value is empty or the placeholder option
  if (inputField.value.trim() === "" ) {
    errorTooltip.style.visibility = "visible"; // Show tooltip
  } else {
    errorTooltip.style.visibility = "hidden"; // Hide tooltip
  }
}

// Add event listener for form submission
submitButton.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent form submission

  let isValid = true;

  // Validate all fields on button click
  if (fnameInput.value.trim() === "") {
    fnameError.style.visibility = "visible";
    isValid = false;
  }

  if (lnameInput.value.trim() === "") {
    lnameError.style.visibility = "visible";
    isValid = false;
  }

  if (emailInput.value.trim() === "") {
    emailError.style.visibility = "visible";
    isValid = false;
  }

  if (companyInput.value.trim() === "") {
    companyError.style.visibility = "visible";
    isValid = false;
  }
 

  // If all fields are valid, proceed to submit or navigate
  if (isValid) {
    const formData = {
      fname: fnameInput.value.trim(),
      lname: lnameInput.value.trim(),
      emails: emailInput.value.trim(),
      company: companyInput.value.trim(),
      country:countryInput.value.trim(),
    };

    // Store form data in localStorage and navigate to another page
    window.localStorage.setItem("formData", JSON.stringify(formData));
    window.location.href = "thankyou.html"; // Replace with your target page
  }
});









document.getElementById('video-thumbnail').addEventListener('click', function() {
  var videoId = 'tgbNymZ7vqY'; // Example YouTube video ID (replace with your desired ID)
  var iframe = document.getElementById('video-frame');
  var container = document.getElementById('video-container');
  var videoThumbnail = document.getElementById('video-thumbnail');
  
  // Correct YouTube embed URL with autoplay
  iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0&showinfo=0&controls=1&fs=1`;

  // Hide the thumbnail image and play button inside the video section
  videoThumbnail.innerHTML = ''; // Clear the content (image and button)
  
  // Show the video container within the same space
  container.style.display = 'block';
});


