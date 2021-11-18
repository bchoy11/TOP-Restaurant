export default function homeContainers(){
    const container = document.createElement('div');
    const links = ['Locations', 'Menu', 'Franchise'];

    container.className='links-container';

    links.map(link=>{
        const miniContainer = document.createElement('div');
        const heading = document.createElement('h2');
        heading.textContent=link;

        heading.className = 'font-border';
        miniContainer.className = 'mini-container';
        miniContainer.id = link.toLowerCase();
        miniContainer.appendChild(heading);
        container.appendChild(miniContainer);
    });

    return container;
}