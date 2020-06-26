import * as assets from './variables';

const homePage = () => {
  const content = document.querySelector('#content');
  const thisTab = document.createElement('div');
  const tabID = document.createAttribute('id');
  tabID.value = 'homePage';
  thisTab.setAttributeNode(tabID);
  const tabClass = document.createAttribute('class');
  tabClass.value = 'tabContent';
  thisTab.setAttributeNode(tabClass);

  const bannerText = document.createElement('div');
  bannerText.className = 'bannerText';

  const bannerImg = document.createElement('div');
  bannerImg.className = 'bannerImg';

  const paragraph = document.createElement('p');

  const paragraphText = document.createTextNode(assets.parOne);
  paragraph.appendChild(paragraphText);

  bannerText.appendChild(assets.titleOne);
  bannerText.appendChild(paragraph);
  bannerText.appendChild(assets.readMe);
  thisTab.append(bannerText);
  bannerImg.appendChild(assets.imageOne);
  thisTab.append(bannerImg);

  content.appendChild(thisTab);
};

export default homePage;
