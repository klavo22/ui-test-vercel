import styled from "styled-components";
import heroImg from "src/assets/hero.png";
import Header from "./Header";
import ClosingBar from "./ClosingBar";

const Hero = () => {
  return (
    <HeroContainer>
      <BackgroundImage src={heroImg} />
      <Header />
      <ClosingBar />
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
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
