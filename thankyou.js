window.addEventListener('DOMContentLoaded', () => {
  // Retrieve the form data from localStorage
  const formData = JSON.parse(localStorage.getItem('formData'));

  if (formData) {
    // Log the retrieved data to check it
    console.log(formData);

    // Populate the HTML with the data
    document.getElementById('fname').textContent = formData.fname || 'N/A';
    document.getElementById('lname').textContent = formData.lname || 'N/A';
    document.getElementById('emails').textContent = formData.emails || 'N/A';
    document.getElementById('company').textContent = formData.company || 'N/A';
    document.getElementById('country').textContent = formData.country || 'N/A';
  } else {
    console.error("No form data found in localStorage.");
  }
});
