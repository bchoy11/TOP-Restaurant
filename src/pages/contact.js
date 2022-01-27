import mailIcon from '../img/mail-icon.png';

export default function contact(){
    const contact = document.createElement('div');
    const title = document.createElement('h1');
    const form = document.createElement('form');
    const input = document.createElement('div');
    const name = document.createElement('input');
    const email = document.createElement('input');
    const mail = new Image();

    contact.id = 'contact';

    title.innerHTML = 'Contact';
    title.className = 'page-title'
    title.id = 'contact-title';

    mail.src = mailIcon;
    mail.id = 'mail';
    mail.className = 'icon';

    name.type = 'text';
    name.placeholder = 'Bob A.'

    email.type = 'email';
    email.placeholder = 'C-Yu@koalatea.com'

    input.id = 'contact-input';

    input.appendChild(name);
    input.appendChild(email);

    contact.appendChild(title);
    contact.appendChild(mail);
    contact.appendChild(form);
    contact.appendChild(input);

    return contact;
}