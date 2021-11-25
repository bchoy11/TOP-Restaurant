export default function story(){
    const story = document.createElement('div');
    const title = document.createElement('h2');
    const description = document.createElement('p');

    story.className='story-container';
    title.innerHTML='Our Story';
    description.innerHTML='Koala Tea started with a vision and a dream. Today, it still is.'

    story.appendChild(title);
    story.appendChild(description);

    return story;
}