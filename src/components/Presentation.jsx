import CV from '../assets/documents/JoseG2.pdf';
import JoseG from '../../public/JoseG.png'
import Button from './Button.jsx';

const Presentation = () => {
  return (
    <div className="presentation">
      <p className="presentation__welcome">Welcome</p>
      <h2 className="presentation__title">I´m a Web Developer
      </h2>
      <div className="image-container">
      <img src={JoseG} alt="Profile Image" />
      </div>  
      <p className="presentation__description">I am a proficient frontend web developer with a passion for technology and programming. My focus is on continuous improvement and growth. I aim to utilize my skills in web development within organizations that prioritize this field.</p>
      <div className="home__btns">
        <Button>Projects</Button>
        <Button className="home__content--btn">
          <a href={CV} target="_blank" download></a>
          Donwload CV
        </Button>
      </div>
    </div>
  );
};

export default Presentation;