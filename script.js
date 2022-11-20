const educationList = document.querySelector(".education-list");
const employmentList = document.querySelector(".employment-list");
const studying = document.querySelector(".main-education");

const jsonUrl = "data.json";

async function getData(url) {
    let response = await fetch(url);
    if (response.ok) {
        let data = await response.json();
        return data;
    }
}

async function getEducation(url) {
    let data = await getData(url);
    for (i in data.education) {
        educationList.innerHTML += `<li>${data.education[i]}</li>`;
    }
}

async function getStudying(url) {
    let data = await getData(url);
    for (i in data.studying) {
        studying.innerHTML += `<p>${data.studying[i]}</p>`;
    }
}
async function getEmployment(url) {
    let data = await getData(url);
    for (i in data.employment) {
        employmentList.innerHTML += `<li><span>${data.employment[i].employer}</span> ${data.employment[i].position}</li>`;
    }
}

getEducation(jsonUrl);
getStudying(jsonUrl);
getEmployment(jsonUrl);

// Getting project info
const rockPaperScissorModal = document.querySelector("#modal-slide4");
const rockPaperScissorLanguageList = rockPaperScissorModal.querySelector("ul");

const projectUrl =
    "https://api.github.com/repos/chasacademy-robin-bergstrand/rock-paper-scissor";

async function getProjectData(projectUrl) {
    let data = await getData(projectUrl);
    let languages = await getData(data.languages_url);
    console.log(languages);
    let languageTotal = 0;
    for (i in languages) {
        languageTotal += languages[i];
    }
    for (i in languages) {
        let percentage =
            Math.round((languages[i] / languageTotal) * 100 * 10) / 10;

        let language = i;
        rockPaperScissorLanguageList.innerHTML += `<li><span>${language}</span>: ${percentage}%</li>`;
    }
}

getProjectData(projectUrl);
