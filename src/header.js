export default function header(){
    const header = document.createElement('div');
    const title = document.createElement('h1');

    title.id='title';
    title.innerHTML="Koala Tea";
    header.className='header';

    header.appendChild(title);
    return header;
}

