import story from "./story";
import homeContainers from "./home_content";

export default function homePage(){
    const home = document.createElement('div');
    home.className = 'home-containers';
    home.appendChild(story());
    // home.appendChild(homeContainers());

    return home;
}