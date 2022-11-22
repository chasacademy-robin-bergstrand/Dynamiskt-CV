let educationList;
let employmentList;
let studying;
const jsonUrl = "data.json";

if (document.querySelector(".education-list")) {
    educationList = document.querySelector(".education-list");
    employmentList = document.querySelector(".employment-list");
    studying = document.querySelector(".main-education");

    getEducation(jsonUrl);
    getStudying(jsonUrl);
    getEmployment(jsonUrl);
}

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
    educationList.querySelector(".loading").classList.add("hidden");
}

async function getStudying(url) {
    let data = await getData(url);
    for (i in data.studying) {
        studying.innerHTML += `<p>${data.studying[i]}</p>`;
    }
    studying.querySelector(".loading").classList.add("hidden");
}
async function getEmployment(url) {
    let data = await getData(url);
    for (i in data.employment) {
        employmentList.innerHTML += `<li><span>${data.employment[i].employer}</span> ${data.employment[i].position}</li>`;
    }
    employmentList.querySelector(".loading").classList.add("hidden");
}

// Getting project info
const projectUrl =
    "https://api.github.com/repos/chasacademy-robin-bergstrand/rock-paper-scissor";
let rockPaperScissorModal;
let rockPaperScissorLanguageList;

if (document.querySelector("#modal-slide4")) {
    rockPaperScissorModal = document.querySelector("#modal-slide4");
    rockPaperScissorLanguageList = rockPaperScissorModal.querySelector("ul");

    getProjectData(projectUrl);
}

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
    rockPaperScissorLanguageList
        .querySelector(".loading")
        .classList.add("hidden");
}

// Making theme changer

const themeButton = document.querySelector(".theme-button");
const root = document.documentElement;

function themeDark() {
    console.log("DARK");
    themeButton.style.setProperty("background-color", "white");
    themeButton.setAttribute("onClick", "themeLight()");
    root.style.setProperty("--background", "black");
    root.style.setProperty("--text-color", "white");
    root.style.setProperty("--primary", "rgb(255, 0, 128)");
    localStorage.setItem("theme", "dark");
}
function themeLight() {
    console.log("LIGHT");
    themeButton.style.setProperty("background-color", "black");
    themeButton.setAttribute("onClick", "themeDark()");
    root.style.setProperty("--background", "lightgrey");
    root.style.setProperty("--text-color", "black");
    root.style.setProperty("--primary", "rgb(3, 0, 170)");
    localStorage.setItem("theme", "light");
}

if (localStorage.getItem("theme") == "light") {
    themeLight();
} else {
    themeDark();
}
