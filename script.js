
document.addEventListener("DOMContentLoaded", function() {
  var feedbackForm = document.getElementById("feedbackForm");

  if (feedbackForm) {
    feedbackForm.addEventListener("submit", function(event) {
      event.preventDefault();

      var name = document.getElementById("name").value.trim();
      var email = document.getElementById("email").value.trim();
      var message = document.getElementById("comments").value.trim(); // Feedback textarea

      var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

      if (name === "" || email === "" || message === "") {
        alert("All fields are required!");
      } else if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
      } else {
        alert("Feedback submitted successfully!");
        feedbackForm.reset();
        setTimeout(function() {
          location.reload();
        }, 500);
      }
    });
  }

  var contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
      event.preventDefault();

      var name = document.getElementById("name").value.trim();
      var email = document.getElementById("email").value.trim();
      var message = document.getElementById("message").value.trim(); // Contact textarea

      var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

      if (name === "" || email === "" || message === "") {
        alert("All fields are required!");
      } else if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
      } else {
        alert("Message sent successfully!");
        contactForm.reset();
        setTimeout(function() {
          location.reload();
        }, 500);
      }
    });
  }

  var filterForm = document.getElementById("filterForm");
  var propertyCards = document.querySelectorAll(".property-card");

  if (filterForm) {
    filterForm.addEventListener("submit", function(event) {
      event.preventDefault();

      var location = document.getElementById("location").value.toLowerCase();
      var type = document.getElementById("type").value.toLowerCase();
      var minPrice = parseInt(document.getElementById("min-price").value) || 0;
      var maxPrice = parseInt(document.getElementById("max-price").value) || Infinity;

      propertyCards.forEach(function(card) {
        var cardLocation = card.querySelector(".location").textContent.toLowerCase();
        var cardType = card.querySelector(".type").textContent.toLowerCase();
        var cardPrice = parseInt(card.querySelector(".price").textContent.replace(/\D/g, ""));

        if (
          (location === "" || cardLocation.indexOf(location) !== -1) &&
          (type === "" || cardType.indexOf(type) !== -1) &&
          (cardPrice >= minPrice && cardPrice <= maxPrice)
        ) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  }
});
