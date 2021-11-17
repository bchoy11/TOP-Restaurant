export default function footer(){
    const footer = document.createElement('div');
    const footerAbout = document.createElement('a');
    const footerCareers = document.createElement('a');

    footer.id = 'footer';
    footerAbout.innerHTML = 'About Koala Tea | ';
    footerAbout.href = '#';
    footerCareers.innerHTML = 'Careers';
    footerCareers.href = '#';

    footer.appendChild(footerAbout);
    footer.appendChild(footerCareers);

    return footer;
}