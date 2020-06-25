import './styles/style.css';
import Image1 from './assets/images/img1.jpg';
import Image2 from './assets/images/img2.jpg';
import Image3 from './assets/images/img3.jpg';

export const cover = () => {
  const myImage = new Image();
  myImage.src = Image1;
  myImage.classList.add('active');
  return myImage;
};

export default cover;
