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
