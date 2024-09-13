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
    (document.getElementById('from-name') as HTMLElement).textContent = name;
    (document.getElementById('from_jobtitle') as HTMLElement).textContent = jobTitle;
    (document.getElementById('from_phone') as HTMLElement).textContent = phone;
    (document.getElementById('from_email') as HTMLElement).textContent = email;
    (document.getElementById('from_link') as HTMLElement).textContent = linkedin;
    (document.querySelector('.imgContainer img') as HTMLImageElement).src = imageUrl;

    // Fetch and display education details
    const degree = localStorage.getItem('from_degree') || '';
    const institution = localStorage.getItem('from_institution') || '';
    const graduationYear = localStorage.getItem('from_graduation') || '';
    document.getElementById('educationBtn')!.innerHTML = `
        <div class="headings"><h2>EDUCATION:</h2></div>
        <p>${degree}</p>
        <p>${institution}</p>
        <p>${graduationYear}</p>
    `;

    // Fetch and display skills
    const skills = localStorage.getItem('from_skills') || '';
    document.getElementById('skillsBtm')!.innerHTML = `
        <div class="headings"><h2>Skills:</h2></div>
        <p>${skills.split(',').join('</p><p>')}</p>
    `;

    // Fetch and display work experience
    const company = localStorage.getItem('from_company') || '';
    const startDate = localStorage.getItem('from_startDate') || '';
    const endDate = localStorage.getItem('from_endDate') || '';
    const description = localStorage.getItem('from_description') || '';
    document.getElementById('expBtn')!.innerHTML = `
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
document.getElementById("editBtn")?.addEventListener("click", editForm);
document.getElementById("printBtn")?.addEventListener("click", printResume);
document.getElementById("shareBtn")?.addEventListener("click", generateShareableLink);

// Call the display function when the page loads
window.onload = displayData;


// Function to show the edit modal
function showEditModal() {
    const modal = document.getElementById('editModal') as HTMLElement;
    modal.style.display = 'block';

    // Pre-fill the form with current data
    (document.getElementById('editName') as HTMLInputElement).value = localStorage.getItem('from_name') || '';
    (document.getElementById('editJobTitle') as HTMLInputElement).value = localStorage.getItem('from_jobtitle') || '';
    (document.getElementById('editPhone') as HTMLInputElement).value = localStorage.getItem('from_phone') || '';
    (document.getElementById('editEmail') as HTMLInputElement).value = localStorage.getItem('from_email') || '';
    (document.getElementById('editLinkedIn') as HTMLInputElement).value = localStorage.getItem('from_link') || '';
}

// Function to close the edit modal
function closeEditModal() {
    const modal = document.getElementById('editModal') as HTMLElement;
    modal.style.display = 'none';
}

// Function to save changes from the modal
function saveChanges(e: Event) {
    e.preventDefault();

    // Save updated data to local storage
    localStorage.setItem('from_name', (document.getElementById('editName') as HTMLInputElement).value);
    localStorage.setItem('from_jobtitle', (document.getElementById('editJobTitle') as HTMLInputElement).value);
    localStorage.setItem('from_phone', (document.getElementById('editPhone') as HTMLInputElement).value);
    localStorage.setItem('from_email', (document.getElementById('editEmail') as HTMLInputElement).value);
    localStorage.setItem('from_link', (document.getElementById('editLinkedIn') as HTMLInputElement).value);

    // Update the resume page
    displayData();

    // Close the modal
    closeEditModal();
}

// Modal functionality
const modal = document.getElementById('editModal') as HTMLElement;
const span = document.getElementsByClassName('close')[0] as HTMLElement;

span.onclick = closeEditModal;
window.onclick = function(event) {
    if (event.target === modal) {
        closeEditModal();
    }
}

document.getElementById('editForm')?.addEventListener('submit', saveChanges);
