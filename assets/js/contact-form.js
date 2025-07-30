// Contact Form and Partners Form Functionality

// Store the contact form HTML for resetting purposes
const contactFormHTML = `
    <form id="contact-form">
        <div class="form-group">
            <label for="name">Full Name</label>
            <input type="text" id="name" name="name" required placeholder="Your full name">
        </div>
        <div class="form-group">
            <label for="email">Email Address</label>
            <input type="email" id="email" name="email" required placeholder="Your email address">
        </div>
        <div class="form-group">
            <label for="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" placeholder="Your phone number">
        </div>
        <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" name="message" rows="4" required placeholder="How can we help you?"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Send Message</button>
    </form>
`;

document.addEventListener('DOMContentLoaded', function() {
    // Button click handling is now done with inline onclick in HTML and button-fix.js

    // Create contact form submission functionality
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const formValues = Object.fromEntries(formData.entries());
            
            // You would typically send this data to a server
            // For now, we'll just show a success message
            const formContainer = document.querySelector('.contact-form-container');
            formContainer.innerHTML = `
                <div class="success-message">
                    <h3>Thank you for contacting us!</h3>
                    <p>We have received your message and will get back to you shortly.</p>
                </div>
            `;
            
            // Reset form after 5 seconds for demo purposes
            setTimeout(() => {
                contactForm.reset();
                formContainer.innerHTML = contactFormHTML;
                // Re-initialize the form event listener
                document.getElementById('contact-form').addEventListener('submit', arguments.callee);
            }, 5000);
        });
    }
});
