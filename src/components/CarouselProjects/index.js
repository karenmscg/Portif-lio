import { Image, ItemsContainer } from "./CarouselProject";
import imagem from "../../Images/rent.png";
import imagem2 from '../../Images/myAspire.png'
const CarouselProjects = () => {
  return (
    <ItemsContainer> 
        <a href="https://zen-blackwell-24dd74.netlify.app/">
          <h5>HOME PAGE REACT</h5>
          <Image src={imagem} alt="first" />
        </a>
        <a href="https://myaspirequotes.com/">
        <h5>LANDING PAGE  NEXT JS</h5>
          <Image src={imagem2} alt="first" />
        </a>
        <a href="https://zen-blackwell-24dd74.netlify.app/">
        <h5>HOME PAGE REACT</h5>
          <Image src={imagem} alt="first" />
        </a>
        <a href="https://zen-blackwell-24dd74.netlify.app/">
        <h5>HOME PAGE REACT</h5>
          <Image src={imagem} alt="first" />
        </a>
    </ItemsContainer>
  );
};

export default CarouselProjects;
