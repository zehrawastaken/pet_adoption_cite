function setupContactForm() {
  var form = document.querySelector(".contact-form");
  if (!form) {
    return;
  }

  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var messageInput = document.getElementById("message");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (
      !nameInput.value.trim() ||
      !emailInput.value.trim() ||
      !messageInput.value.trim()
    ) {
      alert("Please fill in your name, email and message.");
      return;
    }

    alert("Thank you for your message! We will get back to you soon.");
    form.reset();
  });
}

function setupDonateForm() {
  var donateCard = document.querySelector(".donate-form-card");
  if (!donateCard) {
    return;
  }

  var amountRadios = donateCard.querySelectorAll(
    'input[name="donation-amount"]'
  );
  var customWrapper = document.getElementById("custom-amount-wrapper");
  var customInput = document.getElementById("custom-amount");
  var donateButton = donateCard.querySelector(".btn-primary");

  var nameInput = document.getElementById("donor-name");
  var emailInput = document.getElementById("donor-email");
  var cardInput = document.getElementById("card-number");

  amountRadios.forEach(function (radio) {
    radio.addEventListener("change", function () {
      if (radio.value === "custom") {
        customWrapper.style.display = "block";
      } else {
        customWrapper.style.display = "none";
        customInput.value = "";
      }
    });
  });

  donateButton.addEventListener("click", function (event) {
    event.preventDefault();

    if (
      !nameInput.value.trim() ||
      !emailInput.value.trim() ||
      !cardInput.value.trim()
    ) {
      alert("Please fill in your name, email and card information.");
      return;
    }

    var selected = donateCard.querySelector(
      'input[name="donation-amount"]:checked'
    );

    if (!selected) {
      alert("Please select a donation amount.");
      return;
    }

    var finalAmount;

    if (selected.value === "custom") {
      if (!customInput.value.trim()) {
        alert("Please enter a custom amount.");
        return;
      }

      var value = Number(customInput.value.trim());

      if (isNaN(value) || value <= 0) {
        alert("Please enter a valid number greater than 0.");
        return;
      }

      finalAmount = value;
    } else {
      finalAmount = selected.value;
    }

    alert("Thank you for your donation of ₺" + finalAmount + "!");
  });
}

document.addEventListener("DOMContentLoaded", function () {
  setupContactForm();
  setupDonateForm();
  setupHeroCarousel();
});


function setupHeroCarousel() {
  var carousel = document.querySelector(".hero-carousel");
  if (!carousel) {
    return;
  }

  var images = carousel.querySelectorAll(".carousel-image");
  var prevBtn = carousel.querySelector(".carousel-arrow.prev");
  var nextBtn = carousel.querySelector(".carousel-arrow.next");

  if (images.length === 0) {
    return;
  }

  var currentIndex = 0;

  function showSlide(newIndex) {
    images[currentIndex].classList.remove("active");

    if (newIndex < 0) {
      currentIndex = images.length - 1;
    } else if (newIndex >= images.length) {
      currentIndex = 0;
    } else {
      currentIndex = newIndex;
    }

    images[currentIndex].classList.add("active");
  }

  prevBtn.addEventListener("click", function () {
    showSlide(currentIndex - 1);
  });

  nextBtn.addEventListener("click", function () {
    showSlide(currentIndex + 1);
  });

  setInterval(function () {
    showSlide(currentIndex + 1);
  }, 3000);
}

