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

  const divOne = document.createElement('div');
  divOne.className = 'card';
  divOne.append(assets.titleOne);
  divOne.append(assets.imageFour);
  divOne.append(assets.parOne);
  const divTwo = document.createElement('div');
  divTwo.className = 'card';
  divTwo.append(assets.titleTwo);
  divTwo.append(assets.imageThree);
  divTwo.append(assets.parTwo);
  const divThree = document.createElement('div');
  divThree.className = 'card';
  divThree.append(assets.titleThree);
  divThree.append(assets.imageTwo);
  divThree.append(assets.parThree);
  const divFour = document.createElement('div');
  divFour.className = 'card';
  divFour.append(assets.titleFour);
  divFour.append(assets.imageOne);
  divFour.append(assets.parFour);

  thisTab.appendChild(divOne);
  thisTab.appendChild(divTwo);
  thisTab.appendChild(divThree);
  thisTab.appendChild(divFour);

  content.appendChild(thisTab);
};

export { menu as default };
