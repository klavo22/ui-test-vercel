import styled from "styled-components";
import heroImg from "src/assets/img/hero.png";
import Header from "../Header/Header";
import ClosingBar from "./ClosingBar";
import HeroCard from "./HeroCard";

const Hero = () => {
  return (
    <HeroContainer>
      <BackgroundImage src={heroImg} />
      <Header />
      <HeroCard />
      <ClosingBar />
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

const BackgroundImage = styled.img`
  width: 100%;
  max-width: 1440px;
  max-height: 700px;
  min-height: 418px;

  object-fit: cover;
  z-index: -10;
`;

export default Hero;
