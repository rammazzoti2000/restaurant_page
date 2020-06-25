import './styles/style.css';
import Image1 from './assets/images/img1.jpg';
import Image2 from './assets/images/img2.jpg';
import Image3 from './assets/images/img3.jpg';
import Facebook from './assets/icons/facebook.png';
import Twitter from './assets/icons/twitter.png';
import Instagram from './assets/icons/instagram.png';
import Left from './assets/icons/left.png'
import Right from './assets/icons/right.png'

export const parOne = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget urna molestie, efficitur mi quis, lobortis sapien. Sed auctor porta massa, at luctus ante molestie non.';

export const parTwo = 'Vivamus malesuada est vitae finibus pulvinar. Integer nulla ipsum, accumsan et maximus vel, aliquet quis arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hemenaeos.';

export const partThree = 'Sed auctor porta massa, at luctus ante molestie non. Vivamus malesua est vitae finibus pulvinar. Integer nulla ipsum, accumsan et maximus vel, aliquet quis arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hemenaeos.';

export const readMe1 = document.createElement('a');
readMe1.innerText = 'Read More';
readMe1.href = '#';

export const readMe2 = document.createElement('a');
readMe2.innerText = 'Read More';
readMe2.href = '#';

export const readMe3 = document.createElement('a');
readMe3.innerText = 'Read More';
readMe3.href = '#';

export const imageOne = new Image();
imageOne.src = Image1;
imageOne.classList.add('active');

export const imageTwo = new Image();
imageTwo.src = Image2;

export const imageThree = new Image();
imageThree.src = Image3;

export const facebook = new Image();
facebook.src = Facebook;

export const twitter = new Image();
twitter.src = Twitter;

export const instagram = new Image();
instagram.src = Instagram;

export const left = new Image();
left.src = Left;

export const right = new Image();
right.src = Right;
