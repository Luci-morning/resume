
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    
    // Retrieve form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const feedback = document.getElementById('feedback').value;

    // Example: You can send the data to the server via fetch or log it
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Feedback:', feedback);

    // Show confirmation message
    document.getElementById('confirmationMessage').style.display = 'block';

    // Optionally, reset the form fields
    document.getElementById('feedbackForm').reset();
});

// Function to go back to the previous page
function goBack() {
    window.history.back();
}
