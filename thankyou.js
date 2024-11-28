window.addEventListener('DOMContentLoaded', () => {
  const formData = JSON.parse(localStorage.getItem('formData'));

  if (formData) {
    document.getElementById('fname').textContent = formData.fname || 'N/A';
    document.getElementById('lname').textContent = formData.lname || 'N/A';
    document.getElementById('emails').textContent = formData.emails || 'N/A';
    document.getElementById('company').textContent = formData.company || 'N/A';
    document.getElementById('country').textContent = formData.country || 'N/A';
  }
});