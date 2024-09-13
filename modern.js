"use strict";
var _a, _b, _c, _d;
// Function to display stored data on the resume page
function displayData() {
    // Fetch personal info from local storage
    const name = localStorage.getItem('from_name') || '';
    const jobTitle = localStorage.getItem('from_jobtitle') || '';
    const phone = localStorage.getItem('from_phone') || '';
    const email = localStorage.getItem('from_email') || '';
    const linkedin = localStorage.getItem('from_link') || '';
    const imageUrl = localStorage.getItem('from_image') || 'default-image.jpg'; // Use default image if none saved
    // Update personal info on the page
    document.getElementById('from-name').textContent = name;
    document.getElementById('from_jobtitle').textContent = jobTitle;
    document.getElementById('from_phone').textContent = phone;
    document.getElementById('from_email').textContent = email;
    document.getElementById('from_link').textContent = linkedin;
    document.querySelector('.imgContainer img').src = imageUrl;
    // Fetch and display education details
    const degree = localStorage.getItem('from_degree') || '';
    const institution = localStorage.getItem('from_institution') || '';
    const graduationYear = localStorage.getItem('from_graduation') || '';
    document.getElementById('educationBtn').innerHTML = `
        <div class="headings"><h2>EDUCATION:</h2></div>
        <p>${degree}</p>
        <p>${institution}</p>
        <p>${graduationYear}</p>
    `;
    // Fetch and display skills
    const skills = localStorage.getItem('from_skills') || '';
    document.getElementById('skillsBtm').innerHTML = `
        <div class="headings"><h2>Skills:</h2></div>
        <p>${skills.split(',').join('</p><p>')}</p>
    `;
    // Fetch and display work experience
    const company = localStorage.getItem('from_company') || '';
    const startDate = localStorage.getItem('from_startDate') || '';
    const endDate = localStorage.getItem('from_endDate') || '';
    const description = localStorage.getItem('from_description') || '';
    document.getElementById('expBtn').innerHTML = `
        <div class="headings"><h2>Work Experience:</h2></div>
        <p>${company} | ${startDate} - ${endDate}</p>
        <p>${description}</p>
    `;
}
// Function to edit the form
function editForm() {
    window.location.href = "resumeform.html"; // Redirect back to the form for editing
}
// Function to print the resume
function printResume() {
    window.print();
}
// Function to generate a shareable link
function generateShareableLink() {
    const link = window.location.href; // Current URL
    navigator.clipboard.writeText(link).then(() => {
        alert("Link copied to clipboard!");
    });
}
// Set up event listeners for buttons
(_a = document.getElementById("editBtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", editForm);
(_b = document.getElementById("printBtn")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", printResume);
(_c = document.getElementById("shareBtn")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", generateShareableLink);
// Call the display function when the page loads
window.onload = displayData;
// Function to show the edit modal
function showEditModal() {
    const modal = document.getElementById('editModal');
    modal.style.display = 'block';
    // Pre-fill the form with current data
    document.getElementById('editName').value = localStorage.getItem('from_name') || '';
    document.getElementById('editJobTitle').value = localStorage.getItem('from_jobtitle') || '';
    document.getElementById('editPhone').value = localStorage.getItem('from_phone') || '';
    document.getElementById('editEmail').value = localStorage.getItem('from_email') || '';
    document.getElementById('editLinkedIn').value = localStorage.getItem('from_link') || '';
}
// Function to close the edit modal
function closeEditModal() {
    const modal = document.getElementById('editModal');
    modal.style.display = 'none';
}
// Function to save changes from the modal
function saveChanges(e) {
    e.preventDefault();
    // Save updated data to local storage
    localStorage.setItem('from_name', document.getElementById('editName').value);
    localStorage.setItem('from_jobtitle', document.getElementById('editJobTitle').value);
    localStorage.setItem('from_phone', document.getElementById('editPhone').value);
    localStorage.setItem('from_email', document.getElementById('editEmail').value);
    localStorage.setItem('from_link', document.getElementById('editLinkedIn').value);
    // Update the resume page
    displayData();
    // Close the modal
    closeEditModal();
}
// Modal functionality
const modal = document.getElementById('editModal');
const span = document.getElementsByClassName('close')[0];
span.onclick = closeEditModal;
window.onclick = function (event) {
    if (event.target === modal) {
        closeEditModal();
    }
};
(_d = document.getElementById('editForm')) === null || _d === void 0 ? void 0 : _d.addEventListener('submit', saveChanges);
