function validateAcknowledgment() {
    // Select all checkboxes
    const checkboxes = document.querySelectorAll('.ack-checkbox');
    // Ensure all are checked
    const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);
    if (!allChecked) {
        alert('Please agree to all the acknowledgment terms before registering.');
        return false; // Prevent form submission
    }
    return true; // Allow form submission
}
