import mailIcon from '../img/mail-icon.png';

export default function contact(){
    const contact = document.createElement('div');
    const title = document.createElement('h1');
    const input = document.createElement('form');
    // const nameLabel = document.createElement('label');
    // const emailLabel = document.createElement('email');
    const name = document.createElement('input');
    const email = document.createElement('input');
    const submit = document.createElement('input');
    const mail = new Image();

    contact.id = 'contact';

    title.innerHTML = 'Contact';
    title.className = 'page-title'
    title.id = 'contact-title';

    mail.src = mailIcon;
    mail.id = 'mail';
    mail.className = 'icon';

    name.type = 'text';
    name.id = 'name';
    name.placeholder = 'Bob A.'

    email.type = 'email';
    email.id = 'email';
    email.placeholder = 'C-Yu@koalatea.com'

    submit.type = 'submit';
    submit.id = 'contact-submit';
    submit.value = 'Send';

    input.id = 'contact-input';
    input.onsubmit = submitFunction;

    input.appendChild(name);
    input.appendChild(email);
    input.appendChild(submit);

    contact.appendChild(title);
    contact.appendChild(mail);
    contact.appendChild(input);

    return contact;
}

function submitFunction(){
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    alert("Info submitted!");
}