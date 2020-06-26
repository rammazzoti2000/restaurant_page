import homePage from './homePage';
import menuPage from './menuPage';

const navBar = () => {
  const mainContainer = document.getElementById('container');

  const header = document.createElement('header');
  header.className = 'active';
  header.id = 'navbar';
  mainContainer.appendChild(header);

  const logo = document.createElement('a');
  logo.href = '#';
  logo.className = 'logo';
  logo.innerHTML = 'Good';
  const logoSpan = document.createElement('span');
  logoSpan.innerHTML = 'Foods';
  logo.appendChild(logoSpan);
  header.appendChild(logo);

  const ulNav = document.createElement('ul');
  const homeLi = document.createElement('li');
  const menuLi = document.createElement('li');
  const aboutLi = document.createElement('li');
  const contactLi = document.createElement('li');

  const homeLink = document.createElement('a');
  homeLink.className = 'active navLink';
  homeLink.id = 'home';
  homeLink.innerText = 'Home';
  homeLink.href = '#';

  const menuLink = document.createElement('a');
  menuLink.className = 'navLink';
  menuLink.innerText = 'Menu';
  menuLink.id = 'menu';
  menuLink.href = '#';

  const aboutLink = document.createElement('a');
  aboutLink.className = 'navLink';
  aboutLink.innerText = 'About';
  aboutLink.id = 'about';
  aboutLink.href = '#';

  const contactLink = document.createElement('a');
  contactLink.className = 'navLink';
  contactLink.innerText = 'Contact';
  contactLink.id = 'contact';
  contactLink.href = '#';

  homeLi.appendChild(homeLink);
  menuLi.appendChild(menuLink);
  aboutLi.appendChild(aboutLink);
  contactLi.appendChild(contactLink);

  ulNav.appendChild(homeLi);
  ulNav.appendChild(menuLi);
  ulNav.appendChild(aboutLi);
  ulNav.appendChild(contactLi);

  header.appendChild(ulNav);

  homeLink.onclick = homePage;
  menuLink.onclick = menuPage;
};

export { navBar as default };
