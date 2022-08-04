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

    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href="mailto: ${email}">${name}</a> wrote: <span>${message}</span>`;
    
    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type = 'button';
    removeButton.addEventListener('click', () => {
        const entry = removeButton.parentNode;
        entry.remove();
    });

    messageList.appendChild(newMessage);
    newMessage.appendChild(removeButton);
    messageSection.hidden = false;
    messageForm.item(0).reset();

   
});

//const title = document.querySelector('h1');
//title.style.color = '#ADD8E6';