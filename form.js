
// JavaScript to handle form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Retrieve form data (name, email, message)
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // check if the following are filled
    if (!name || !email || !phone || !message) {
        alert('Please fill in all fields.');
        return;
    }

    // return message once inputs are complete (indicates message is completed)
    alert(`Thank you for your message, ${name}!\n\nYour email: ${email}\nYour phone: ${phone}\nYour message: ${message}`);
    
    // clear the form once the inputs are done
    document.getElementById('contactForm').reset();
});
