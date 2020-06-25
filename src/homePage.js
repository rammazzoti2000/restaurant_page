import * as assets from './variables';

const homePage = () => {
  const mainContainer = document.getElementById('container');
  const homeContent = document.createElement('div');
  homeContent.className = 'content';

  const banner = document.createElement('div');
  banner.className = 'bannerText';
  banner.id = 'slideShowText';
  homeContent.append(banner);

  const activeCard = document.createElement('div');
  activeCard.className = 'active';
  const titleOne = document.createElement('h2');
  titleOne.innerHTML = 'Eat Healthy<br> Stay Healthy';
  const paragraph1 = document.createElement('p');
  paragraph1.innerText = assets.parOne;
  banner.append(activeCard);
  activeCard.append(titleOne);
  activeCard.append(paragraph1);
  activeCard.append(assets.readMe1);

  const card1 = document.createElement('div');
  const titleTwo = document.createElement('h2');
  titleTwo.innerHTML = 'Eat Your<br>Veggies';
  const paragraph2 = document.createElement('p');
  paragraph2.innerText = assets.parTwo;
  banner.append(card1);
  card1.append(titleTwo);
  card1.append(paragraph2);
  card1.append(assets.readMe2);

  const card2 = document.createElement('div');
  const titleThree = document.createElement('h2');
  titleThree.innerHTML = 'Good Food<br>Good Mood';
  const paragraph3 = document.createElement('p');
  paragraph3.innerText = assets.partThree;
  banner.append(card2);
  card2.append(titleThree);
  card2.append(paragraph3);
  card2.append(assets.readMe3);

  const bannerImage = document.createElement('div');
  bannerImage.className = 'bannerImg';
  bannerImage.id = 'slideShow';

  bannerImage.append(assets.imageOne);
  bannerImage.append(assets.imageTwo);
  bannerImage.append(assets.imageThree);
  homeContent.append(bannerImage);

  const icons = document.createElement('div');
  icons.className = 'icons';
  const iconsUl = document.createElement('ul');
  iconsUl.className = 'sci';

  const faceLi = document.createElement('li');
  const twitterLi = document.createElement('li');
  const instaLi = document.createElement('li');

  const faceLink = document.createElement('a');
  faceLink.href = '#';

  const twitterLink = document.createElement('a');
  twitterLink.href = '#';

  const instaLink = document.createElement('a');
  instaLink.href = '#';

  faceLink.append(assets.facebook);
  twitterLink.append(assets.twitter);
  instaLink.append(assets.instagram);

  faceLi.append(faceLink);
  twitterLi.append(twitterLink);
  instaLi.append(instaLink);

  iconsUl.append(faceLi);
  iconsUl.append(twitterLi);
  iconsUl.append(instaLi);

  icons.append(iconsUl);

  const controls = document.createElement('ul');
  controls.className = 'controls';

  const leftLi = document.createElement('li');
  const rightLi = document.createElement('li');

  const leftLink = document.createElement('a');
  leftLink.href = '#';

  const rightLink = document.createElement('a');
  rightLink.href = '#';

  leftLink.append(assets.left);
  rightLink.append(assets.right);

  leftLi.append(leftLink);
  rightLi.append(rightLink);

  controls.append(leftLi);
  controls.append(rightLi);

  icons.append(controls);

  mainContainer.append(homeContent);
  mainContainer.append(icons);
};

export { homePage as default };
