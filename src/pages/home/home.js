import story from "./story";
import header from "./header";
// import homeContainers from "./home_content";

export default function homePage(){
    const home = document.createElement('div');
    home.className = 'home-container';
    home.appendChild(header());
    home.appendChild(story());
    // home.appendChild(homeContainers());

    return home;
}