// Function to go back to the previous page
function goBack() {
    window.history.back();
}

// Optional: Add any interactivity if needed
document.querySelectorAll('.knowledge-item').forEach(item => {
    item.addEventListener('click', () => {
        alert(`You clicked on ${item.querySelector('h3').innerText}`);
    });
});