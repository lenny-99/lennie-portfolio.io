        
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" 
crossorigin="anonymous">
<a href="https:www.canva.com/design/DAE3Mmc0Uds/kWf8zB19ciGizd6IZCVLfg/edit"DOWNLOAD>DOWNLOAD CV</a>



// Get the form element
const form = document.querySelector("#contactForm");

// Get the submit success message element
const submitSuccessMessage = document.querySelector("#submitSuccessMessage");

// Get the submit error message element
const submitErrorMessage = document.querySelector("#submitErrorMessage");

// Add an event listener to the form submission

form.addEventListener("submit", (event) = {
  event.preventDefault():
  // Check if all form inputs are valid
  if (form.checkValidity() === true) {
    // Get the form data
    const name = document.querySelector("#name").value;
    const phonenumber = document.querySelector("#phonenumber").value;
    const emailAddress = document.querySelector("#emailAddress").value;
    const message = document.querySelector("#message").value;

    // Send the form data to the server (e.g. using Fetch API or jQuery's $.ajax())
    // Example using Fetch API:
    fetch("/submit-form", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        phonenumber: phonenumber,
        emailAddress: emailAddress,
        message: message
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((response) = {
        if (response.ok) {
          // Show the submit success message
          submitSuccessMessage.classList.remove("d-none");
          // Hide the submit error message
          submitErrorMessage.classList.add("d-none");
          // Clear the form inputs
          form.reset();
        } else {
          // Show the submit error message
          submitErrorMessage.classList.remove("d-none");
          // Hide the submit success message
          submitSuccessMessage.classList.add("d-none");
        }
      })
      .catch((error) = {
        // Show the submit error message
        submitErrorMessage.classList.remove("d-none");
        // Hide the submit success message
        submitSuccessMessage.classList.add("d-none");
        console.error("Error sending message:", error);
      });
  } else {
    // If the form is not valid, show the error messages
    form.classList.add("was-validated");
  }
});

</script>