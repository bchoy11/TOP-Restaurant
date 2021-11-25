import locationIcon from '../img/icon-location.svg';

export default function locations(){
    const locations = document.createElement('div');
    const title = document.createElement('h1');
    const icon = new Image();

    locations.id = 'locations';

    title.id = 'locations-title';
    title.className = 'page-title';
    title.innerHTML = 'Locations';

    icon.src = locationIcon;
    icon.id = 'location-icon';
    icon.className = 'icon';

    locations.appendChild(title);
    locations.appendChild(icon);

    return locations;
}