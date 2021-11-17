import './style.css';
import header from './header.js';
import homePage from './home/home.js';
import footer from './footer';

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
    if(tab==='Home'){
       content.insertBefore(homePage(),document.getElementById('footer')); 
    }
}

content.appendChild(nav);
content.appendChild(header());
content.appendChild(footer());





