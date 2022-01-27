import bobaicon from '../../img/bobaicon.jpg';

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
    let drinks = ['Black Milk Tea','Green Milk Tea', 'Earl Grey Milk Tea','Peach Green Tea','Honey Lemonade with Aloe', 'Royal Artichoke'];
    let toppings = ['Tapioca', 'Lychee Jelly', 'Grass Jelly'];

    //FIX: loop through all menu item options instead of coding each one individually
    //use object instead of multiple arrays?
    //FIX: display menu titles without coding each one

    const menuItems = document.createElement('div');
    const drinksTitle = document.createElement('div');
    const toppingsTitle = document.createElement('div');
    const drinksMenu = document.createElement('ul');
    const toppingsMenu = document.createElement('ul');
    menuItems.className = 'menu-items';
    drinksMenu.className = 'drinks-menu';
    toppingsMenu.className = 'toppings-menu';
    
    drinksTitle.textContent = 'Drinks';
    drinksTitle.className = 'menu-title';
    toppingsTitle.textContent = 'Toppings';
    toppingsTitle.className = 'menu-title';

    drinks.map(drink=>{
        const li = document.createElement('li');
        li.className = 'drinks';
        li.innerHTML = drink;
        drinksMenu.appendChild(li);
    });

    toppings.map(topping=>{
        const li = document.createElement('li');
        li.className = 'toppings';
        li.innerHTML = topping;
        toppingsMenu.appendChild(li);
    })

    drinksTitle.appendChild(drinksMenu);
    toppingsTitle.appendChild(toppingsMenu);

    menuItems.appendChild(drinksTitle);
    menuItems.appendChild(toppingsTitle);
    
    return menuItems;
}

