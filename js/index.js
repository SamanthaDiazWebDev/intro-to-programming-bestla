const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyRight = document.createElement('p');

copyRight.innerHTML = `Samantha Diaz, ${thisYear}`;
footer.appendChild(copyRight);

const skills = ['HTML', 'CSS', 'Javascript'];
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);
}

const messageForm = document.getElementsByName("leave_message");
const messageSection = document.getElementById('messages');
messageSection.hidden = true;

messageForm.item(0).addEventListener('submit', (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    console.log(name);
    console.log(email);
    console.log(message);

    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href="mailto:${email}">${name}</a> wrote: <span>${message}</span>`;
    
    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type = 'button';
    removeButton.addEventListener('click', () => {
        const entry = removeButton.parentNode;
        entry.remove();
    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    messageSection.hidden = false;
    messageForm.item(0).reset();
});

//const title = document.querySelector('h1');
//title.style.color = '#ADD8E6';

function toggleDarkMode() {
    var bodyElement = document.getElementById('main-background')
    var darkModeBtn = document.getElementById('dark-mode-btn')

    if (bodyElement.style.background == "black") {
        bodyElement.style.background = "white"
        darkModeBtn.innerHTML = "Change to Dark Mode"
        bodyElement.style.color = "black"

    } else {
        bodyElement.style.background = "black"
        bodyElement.style.color = "white"
        darkModeBtn.innerHTML = "Change to Light Mode"
    }


}

/* const githubRequest = new XMLHttpRequest();
githubRequest.open('GET', 'https://api.github.com/users/SamanthaDiazWebDev/repos');
githubRequest.send();
githubRequest.onreadystatechange = function () {
    if (githubRequest.readystate === 4) {
        var repositories = JSON.parse(githubRequest.responseText);
        console.log(repositories);
        var projectSection = document.getElementById("projects");
        var projectList = projectSection.querySelector("ul");
        for (let i=0; i < repositories.length; i++) {
            var project = document.createElement('li');
            var repositoryLink = document.createElement('a');
            repositoryLink.href = repositories[i].html_url;
            repositoryLink.innerHTML = repositories[i].name;
            projectList.appendChild(project);
            project.appendChild(repositoryLink);
        }

    }
}; */

fetch('https://api.github.com/users/SamanthaDiazWebDev/repos')
    .then (response => response.json())
    .catch(error => console.log('Looks like there was a problem', error))
    .then (data => {
        console.log(data)
        const projectSection=document.getElementById("projects");
        const projectList = projectSection.querySelector ("ul");
        for (let i=0; i<data.length; i++) {
            const project= document.createElement ('li');
            const repoLink=document.createElement('a');
            repoLink.href=data[i].html_url;
            repoLink.innerHTML = data[i].name;
            projectList.appendChild(project);
            project.appendChild(repoLink);

        }
    })