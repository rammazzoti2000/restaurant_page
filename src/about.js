import * as assets from './variables';

const aboutUs = () => {
  const content = document.querySelector('#content');
  const thisTab = document.createElement('div');
  const tabID = document.createAttribute('id');
  tabID.value = 'aboutUs';
  thisTab.setAttributeNode(tabID);
  const tabClass = document.createAttribute('class');
  tabClass.value = 'tabContent';
  thisTab.setAttributeNode(tabClass);

  const header = document.createElement('h1');
  const headerText = document.createTextNode('About Us');
  header.appendChild(headerText);
  thisTab.appendChild(header);

  const story = document.createElement('p');
  story.append(assets.parFive);
  thisTab.append(assets.imageFive);
  thisTab.appendChild(story);
  content.appendChild(thisTab);
};

export { aboutUs as default };
