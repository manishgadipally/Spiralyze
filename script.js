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

        let autoPlay = setInterval(nextSlide, 5000);

        document.querySelector(".carousel-container").addEventListener("mouseenter", () => {
            clearInterval(autoPlay);
        });

        document.querySelector(".carousel-container").addEventListener("mouseleave", () => {
            autoPlay = setInterval(nextSlide, 5000);
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