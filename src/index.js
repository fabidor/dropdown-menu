import './style.css';

const dropDownMenu = (node) => {
    const boxStyle = getComputedStyle(node);
    node.classList.add("invisible");
    const button = document.createElement('button');
    const style = getComputedStyle(button);
    node.style.transform = `translateX(-${boxStyle.width})`;
    button.className="dropButton";
    button.textContent="BUTTON";
    
    button.onclick=(() => {
        if(node.classList.contains("invisible")){
            node.classList.remove("invisible");
            node.classList.add('visible');
            node.style.top= '30px';
            node.style.left = `-${boxStyle.width}`;
            node.style.transform=`translateX(${boxStyle.width})` 
        } else{
            node.style.transform = `translateX(-${boxStyle.width})`
            setTimeout(() => {node.classList.remove('visible');
            node.classList.add("invisible");}, 100);
            
            
        }
    })
    console.log("bozo");
    return button;

}

document.querySelector('#header').appendChild(dropDownMenu(document.querySelector('#dropdown')));