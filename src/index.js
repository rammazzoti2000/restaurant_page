import navBar from './navBar';
import homePage from './homePage';
// import * as assets from './variables';

// function component() {
//   const element = document.getElementById('container');
//
//   element.innerText = 'Hello webpack';
//
//   element.appendChild(assets.cover('myImage'));
//   element.append(navBar());
//   return element;
// }
//
// document.body.appendChild(component());
window.onload = () => {
  navBar();
  homePage();
};
