// Contact form submission
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Perform form validation
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var messageInput = document.getElementById("message");

    if (
      nameInput.value === "" ||
      emailInput.value === "" ||
      messageInput.value === ""
    ) {
      alert("Please fill in all fields.");
      return;
    }

    // Submit form if validation passes (you can replace this with your own logic)
    alert("Form submitted successfully!");
    this.reset(); // Reset form fields
  });
