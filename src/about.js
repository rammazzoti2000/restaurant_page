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

  const bannerText = document.createElement('div');
  bannerText.className = 'bannerText';

  const bannerImg = document.createElement('div');
  bannerImg.className = 'bannerImg';

  const paragraph = document.createElement('p');

  const paragraphText = document.createTextNode(assets.parFive);
  paragraph.appendChild(paragraphText);

  bannerText.appendChild(assets.titleSix);
  bannerText.appendChild(paragraph);
  thisTab.append(bannerText);
  bannerImg.appendChild(assets.imageFive);
  thisTab.append(bannerImg);

  content.appendChild(thisTab);
};

export { aboutUs as default };
