import * as assets from './variables';

const menu = () => {
  const content = document.querySelector('#content');
  const thisTab = document.createElement('div');
  const tabID = document.createAttribute('id');
  tabID.value = 'menu';
  thisTab.setAttributeNode(tabID);
  const tabClass = document.createAttribute('class');
  tabClass.value = 'tabContent';
  thisTab.setAttributeNode(tabClass);

  // First
  const divOne = document.createElement('div');
  divOne.className = 'card';

  const bannerText = document.createElement('div');
  bannerText.className = 'bannerText';
  bannerText.append(assets.titleOne);

  const bannerImg = document.createElement('div');
  bannerImg.className = 'bannerImg';
  bannerImg.append(assets.imageOne);

  const paragraph1 = document.createElement('p');

  const paragraphText1 = document.createTextNode(assets.parOne);
  paragraph1.appendChild(paragraphText1);
  bannerText.append(paragraph1);
  bannerText.append(assets.readMe2);

  // Second
  const divTwo = document.createElement('div');
  divTwo.className = 'card';

  const bannerText2 = document.createElement('div');
  bannerText2.className = 'bannerText';
  bannerText2.append(assets.titleTwo);

  const bannerImg2 = document.createElement('div');
  bannerImg2.className = 'bannerImg';
  bannerImg2.append(assets.imageTwo);

  const paragraph2 = document.createElement('p');

  const paragraphText2 = document.createTextNode(assets.parTwo);
  paragraph2.appendChild(paragraphText2);
  bannerText2.append(paragraph2);
  bannerText2.append(assets.readMe3);

  // Third
  const divThree = document.createElement('div');
  divThree.className = 'card';

  const bannerText3 = document.createElement('div');
  bannerText3.className = 'bannerText';
  bannerText3.append(assets.titleThree);

  const bannerImg3 = document.createElement('div');
  bannerImg3.className = 'bannerImg';
  bannerImg3.append(assets.imageThree);

  const paragraph3 = document.createElement('p');

  const paragraphText3 = document.createTextNode(assets.parThree);
  paragraph3.appendChild(paragraphText3);
  bannerText3.append(paragraph3);
  bannerText3.append(assets.readMe4);

  // Four
  const divFour = document.createElement('div');
  divFour.className = 'card';

  const bannerText4 = document.createElement('div');
  bannerText4.className = 'bannerText';
  bannerText4.append(assets.titleFour);

  const bannerImg4 = document.createElement('div');
  bannerImg4.className = 'bannerImg';
  bannerImg4.append(assets.imageFour);

  const paragraph4 = document.createElement('p');

  const paragraphText4 = document.createTextNode(assets.parFour);
  paragraph4.appendChild(paragraphText4);
  bannerText4.append(paragraph4);
  bannerText4.append(assets.readMe5);

  divOne.append(bannerText);
  divOne.append(bannerImg);

  divTwo.append(bannerText2);
  divTwo.append(bannerImg2);

  divThree.append(bannerText3);
  divThree.append(bannerImg3);

  divFour.append(bannerText4);
  divFour.append(bannerImg4);

  thisTab.appendChild(divOne);
  thisTab.appendChild(divTwo);
  thisTab.appendChild(divThree);
  thisTab.appendChild(divFour);
  content.appendChild(thisTab);
};

export { menu as default };
