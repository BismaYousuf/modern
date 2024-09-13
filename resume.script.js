"use strict";
const nameInput = document.getElementById('firstName');
const jobTitle = document.getElementById('job');
const phone = document.getElementById('phoneNo');
const email = document.getElementById('email');
const linkedin = document.getElementById('linkedin');
const degree = document.getElementById('degree');
const university = document.getElementById('institution');
const gradYear = document.getElementById('graduation');
const skill = document.getElementById('skills');
const company = document.getElementById('company');
const startYear = document.getElementById('startDate');
const endYear = document.getElementById('endDate');
const workExp = document.getElementById('description');
const profilePic = document.getElementById('profilePic');
const form = document.getElementById("form");
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (e) => {
    e.preventDefault();
    // Save form data to local storage
    localStorage.setItem('from_name', nameInput.value);
    localStorage.setItem('from_jobtitle', jobTitle.value);
    localStorage.setItem('from_phone', phone.value);
    localStorage.setItem('from_email', email.value);
    localStorage.setItem('from_link', linkedin.value);
    localStorage.setItem('from_degree', degree.value);
    localStorage.setItem('from_institution', university.value);
    localStorage.setItem('from_graduation', gradYear.value);
    localStorage.setItem('from_skills', skill.value);
    localStorage.setItem('from_company', company.value);
    localStorage.setItem('from_startDate', startYear.value);
    localStorage.setItem('from_endDate', endYear.value);
    localStorage.setItem('from_description', workExp.value);
    localStorage.setItem('from_image', profilePic.value);
    //convert image to Base64
    if (profilePic.files && profilePic.files[0]) {
        const reader = new FileReader();
        reader.onload = function () {
            const base64Imge = reader.result;
            localStorage.setItem('from_image', base64Imge);
            window.location.href = "modern.html";
        };
        reader.readAsDataURL(profilePic.files[0]);
    }
    else {
        window.location.href = "modern.html";
    }
    ;
});
