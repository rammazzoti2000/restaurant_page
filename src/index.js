import './style.css';
import AngryBird from './vegetable-salad-on-white-plate.jpg'

function component() {
    const element = document.createElement('div');

    element.innerHTML = 'Hello webpack',
    element.classList.add('hello');

    const myImage = new Image();
    myImage.src = AngryBird;

    element.appendChild(myImage);

    return element;
  }

  document.body.appendChild(component());
