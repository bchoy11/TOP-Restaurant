import bobaicon from '../img/bobaicon.jpg'

export default function menu(){
    const menu = document.createElement('div');
    const title = document.createElement('h1');
    const bobaImg = new Image();

    menu.id = 'menu';

    title.id = 'menu-title';
    title.innerHTML = 'Menu';
    title.className = 'page-title';

    bobaImg.src = bobaicon;
    bobaImg.id = 'bobaicon';

    menu.appendChild(title);
    menu.appendChild(bobaImg);

    return menu;
}