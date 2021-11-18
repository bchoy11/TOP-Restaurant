import './style.css';
import header from './header.js';
import homePage from './home/home.js';
import footer from './footer';
import clear from './clear';
import menu from './menu/menu';

const content = document.getElementById('content');
const navList = ['Home','Menu','Contact','Locations'];
const nav = document.createElement('nav');
const ul = document.createElement('ul');

nav.id='nav-bar';

navList.map(tab=>{
    const li = document.createElement('li');
    li.className='nav-link';
    li.innerHTML=tab;
    li.addEventListener('click',()=>{changeTab(tab)});
    ul.appendChild(li);
})

nav.appendChild(ul);

function changeTab(tab){
    if(tab === 'Home'){
        clear(content);
        content.appendChild(header());
        content.appendChild(homePage()); 
    }
    if(tab === 'Menu'){
        clear(content);
        content.appendChild(menu());
    }
}

changeTab('Home');
document.body.insertBefore(nav,document.getElementById('content'));
document.body.appendChild(footer(),document.getElementById('content'));





