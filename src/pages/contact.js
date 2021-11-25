import mailIcon from '../img/mail-icon.png';

export default function contact(){
    const contact = document.createElement('div');
    const title = document.createElement('h1');
    const mail = new Image();

    contact.id = 'contact';

    title.innerHTML = 'Contact';
    title.className = 'page-title'
    title.id = 'contact-title';

    mail.src = mailIcon;
    mail.id = 'mail';
    mail.className = 'icon';

    contact.appendChild(title);
    contact.appendChild(mail);

    return contact;
}