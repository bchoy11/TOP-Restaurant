import story from "./story";
import homeContent from "./home_content";

export default function homePage(){
    const home = document.createElement('div');
    home.className = 'home-content';
    home.appendChild(story());
    home.appendChild(homeContent());

    return home;
}