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
    bobaImg.className = 'icon';

    menu.appendChild(title);
    menu.appendChild(bobaImg);
    menu.appendChild(menuItems());

    return menu;
}

function menuItems(){
    const menu = {
        Drinks: ['Black Milk Tea','Green Milk Tea', 'Earl Grey Milk Tea','Peach Green Tea','Honey Lemonade with Aloe', 'Royal Artichoke'],
        Toppings: ['Tapioca', 'Lychee Jelly'],
    }
    const menuItems = document.createElement('div');
    const drinksMenu = document.createElement('ul');
    
    menuItems.className = 'menu-items';
    drinksMenu.className = 'drinks-menu';
    
    menu.Drinks.map(drink=>{
        const li = document.createElement('li');
        li.className = 'toppings';
        li.innerHTML = drink;
        drinksMenu.appendChild(li);
    });

    for(const menuCategory in menu){
        const category = document.createElement('div');
        const categoryTitle = document.createElement('h3');
        const categoryItems = document.createElement('ul');

        category.id = 'menu-'+menuCategory;
        category.className = 'menu-category';
        categoryTitle.innerHTML = menuCategory;

        console.log(menuCategory);

        category.appendChild(categoryTitle);
        console.log('cat1: '+category);
        category.appendChild(drinksMenu);       
        console.log('cat2: '+category);
        menuItems.appendChild(category);
    }

    // let testdrinkcategory = document.getElementById('menu-drinks');
    // console.log(testdrinkcategory);
    // document.getElementById('menu-drinks').appendChild(drinksMenu);

    return menuItems;
}

