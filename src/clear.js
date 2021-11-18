export default function clear(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}