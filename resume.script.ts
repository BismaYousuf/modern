
const nameInput = document.getElementById('firstName') as HTMLInputElement;
const jobTitle = document.getElementById('job') as HTMLInputElement;
const phone = document.getElementById('phoneNo') as HTMLInputElement;
const email = document.getElementById('email') as HTMLInputElement;
const linkedin = document.getElementById('linkedin') as HTMLInputElement;
const degree = document.getElementById('degree') as HTMLInputElement;
const university = document.getElementById('institution') as HTMLInputElement;
const gradYear = document.getElementById('graduation') as HTMLInputElement;
const skill = document.getElementById('skills') as HTMLInputElement;
const company = document.getElementById('company') as HTMLInputElement;
const startYear = document.getElementById('startDate') as HTMLInputElement;
const endYear = document.getElementById('endDate') as HTMLInputElement;
const workExp = document.getElementById('description') as HTMLInputElement;
const profilePic = document.getElementById('profilePic') as HTMLInputElement;


const form = document.getElementById("form") as HTMLFormElement;

form?.addEventListener("submit", (e) => {
    e.preventDefault();


// Save form data to local storage
localStorage.setItem('from_name', nameInput.value);
localStorage.setItem('from_jobtitle', jobTitle.value);
localStorage.setItem('from_phone', phone.value);
localStorage.setItem('from_email', email.value);
localStorage.setItem('from_link', linkedin.value);
localStorage.setItem('from_degree', degree.value);
localStorage.setItem('from_institution',university.value);
localStorage.setItem('from_graduation', gradYear.value);
localStorage.setItem('from_skills', skill.value);
localStorage.setItem('from_company', company.value);
localStorage.setItem('from_startDate', startYear.value);
localStorage.setItem('from_endDate', endYear.value);
localStorage.setItem('from_description', workExp.value);
localStorage.setItem('from_image',profilePic.value);



//convert image to Base64
 if(profilePic.files && profilePic.files[0]){
    const reader = new FileReader();
    reader.onload = function(){
        const base64Imge = reader.result as string;
        localStorage.setItem('from_image', base64Imge);
        window.location.href = "modern.html";
    };
    reader.readAsDataURL(profilePic.files[0]);
}else{
    window.location.href = "modern.html"
};

})


