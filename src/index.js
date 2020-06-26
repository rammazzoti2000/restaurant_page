import homePage from './initialPage';
import menu from './menu';
import aboutUs from './about';

const tabFunctions = {
  homePage,
  menu,
  aboutUs,
};

// set up tab area
const tabs = document.createElement('div');
const tabsClass = document.createAttribute('class');
tabsClass.value = 'tabs';
tabs.setAttributeNode(tabsClass);
tabs.innerHTML = '<a href="#" class="logo">Good<span>Food</span></a>';

const tabsContainer = document.createElement('div');
tabsContainer.className = 'buttonWrapper';

function openTab(evt) {
  const currentTabBtn = document.querySelector('.active');
  currentTabBtn.className = currentTabBtn.className.replace(' active', '');
  const parent = document.querySelector('#content');
  const child = document.querySelector('.tabContent');
  parent.removeChild(child);

  evt.currentTarget.className += ' active';
  const fn = evt.currentTarget.attributes.getNamedItem('data-tab-function').value;
  tabFunctions[fn]();
}

const homePageBtn = document.createElement('button');
const homePageBtnText = document.createTextNode('Home');
homePageBtn.appendChild(homePageBtnText);
let tabLinksClass = document.createAttribute('class');
tabLinksClass.value = 'tabLinks';
homePageBtn.setAttributeNode(tabLinksClass);
homePageBtn.setAttribute('data-tab-function', 'homePage');
homePageBtn.addEventListener('click', openTab);
tabsContainer.append(homePageBtn);

// menu tab button
const menuBtn = document.createElement('button');
const menuBtnText = document.createTextNode('Menu');
menuBtn.appendChild(menuBtnText);
tabLinksClass = document.createAttribute('class');
tabLinksClass.value = 'tabLinks';
menuBtn.setAttributeNode(tabLinksClass);
menuBtn.setAttribute('data-tab-function', 'menu');
menuBtn.addEventListener('click', openTab);
tabsContainer.append(menuBtn);

// about us tab button
const aboutBtn = document.createElement('button');
const aboutBtnText = document.createTextNode('About Us');
aboutBtn.appendChild(aboutBtnText);
tabLinksClass = document.createAttribute('class');
tabLinksClass.value = 'tabLinks';
aboutBtn.setAttributeNode(tabLinksClass);
aboutBtn.setAttribute('data-tab-function', 'aboutUs');
aboutBtn.addEventListener('click', openTab);
tabsContainer.append(aboutBtn);

tabs.appendChild(tabsContainer);

document.querySelector('#content').appendChild(tabs);

// call homePage and set its button to active upon initial page load
homePageBtn.className += ' active';
homePage();
