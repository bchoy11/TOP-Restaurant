import './style.css';
import homePage from './pages/home/home.js';
import footer from './footer';
import clear from './clear';
import menu from './pages/menu/menu';
import locations from './pages/locations';
import contact from './pages/contact';
import koala from './img/koala.jpg';

const content = document.getElementById('content');
const navList = ['Home','Menu','Contact','Locations'];
const logo = new Image();
const nav = document.createElement('nav');
const ul = document.createElement('ul');

logo.src = koala;
logo.id = 'logo';
logo.className = 'logo';
logo.addEventListener('click',()=>{changeTab('Home')});

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
        content.appendChild(homePage()); 
    }
    if(tab === 'Menu'){
        clear(content);
        content.appendChild(menu());
    }
    if(tab === 'Locations'){
        clear(content);
        content.appendChild(locations());
    }
    if(tab === 'Contact'){
        clear(content);
        content.appendChild(contact());
    }
}

changeTab('Home');
document.body.appendChild(logo);
document.body.insertBefore(nav,document.getElementById('content'));
document.body.appendChild(footer(),document.getElementById('content'));





