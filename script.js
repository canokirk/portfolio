
// Open/close the navigation menu for mobile devices
const navOpen = document.querySelector('.nav-open');

navLinks.addEventListener('click', function () {
  navOpen.classList.toggle('show');
});

// scroll section

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec =>{
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height)  {
      //active navbar links
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href+=' + + ']').classList.add('active');
      });
    }

  });
  //sticky header
  let header = document.querySelector('header');

  header.classList.toogle('sticky', window.scrollY > 100);
}
document.addEventListener("DOMContentLoaded", function() {
  // Retrieve filter items
  var filterItems = document.querySelectorAll(".filter-item");

  // Add click event listener to each filter item
  filterItems.forEach(function(item) {
    item.addEventListener("click", function() {
      var filter = item.getAttribute("data-filter");

      // Remove 'active' class from all filter items
      filterItems.forEach(function(filterItem) {
        filterItem.classList.remove("active");
      });

      // Add 'active' class to the clicked filter item
      item.classList.add("active");

      // Show or hide gallery items based on the filter
      var galleryItems = document.querySelectorAll(".gallery-item");
      galleryItems.forEach(function(galleryItem) {
        if (filter === "all" || galleryItem.classList.contains(filter)) {
          galleryItem.style.display = "block";
        } else {
          galleryItem.style.display = "none";
        }
      });
    });
  });
});

document.getElementById("contact-form").addEventListener("submit"), function(event) {
  event.preventDefault();
} // Prevent form submission
document.addEventListener("DOMContentLoaded", function() {
  // Retrieve form element
  var form = document.querySelector("form");

  // Add event listener for form submission
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve form values
    var fullName = form.querySelector('input[placeholder="Full Name"]').value;
    var emailAddress = form.querySelector('input[placeholder="Email Address"]').value;
    var mobileNumber = form.querySelector('input[placeholder="Mobile Number"]').value;
    var emailSubject = form.querySelector('input[placeholder="Email Subject"]').value;
    var message = form.querySelector('textarea[placeholder="Your Message"]').value;

    // Perform basic validation
    if (fullName === "" || emailAddress === "" || mobileNumber === "" || emailSubject === "" || message === "") {
      alert("Please fill in all fields");
      return;
    }

    // You can perform additional validation here if needed
    // ...

    // Send form data to the server using AJAX or any other method
    // Here, we'll simply log the form data to the console
    console.log("Full Name: " + fullName);
    console.log("Email Address: " + emailAddress);
    console.log("Mobile Number: " + mobileNumber);
    console.log("Email Subject: " + emailSubject);
    console.log("Message: " + message);

    // Optionally, display a success message or redirect to a thank you page
    alert("Form submitted successfully");
    form.reset(); // Reset the form
  });
});
