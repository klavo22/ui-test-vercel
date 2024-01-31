import styled from "styled-components";

import backgroundPeople from "src/assets/img/bg-people.png";

const BottomBanner: React.FC = () => {
  return (
    <BannerContainer>
      <BannerContent>
        <BannerText>Is there anyone else you would want us to add?</BannerText>
        <BannerButton>Submit a name</BannerButton>
      </BannerContent>
    </BannerContainer>
  );
};

const BannerContainer = styled.div`
  position: relative;

  width: 100%;
  min-height: 108px;
  margin: 24px 0;

  color: rgba(70, 70, 70, 1);
  font-size: 27px;
  background-image: url(${backgroundPeople});
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    height: 144px;
    font-size: 21px;
  }
`;

const BannerContent = styled.div`
  position: absolute;
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 100%;
  padding: 14px 28px;

  background-color: white;
  opacity: 0.8;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const BannerText = styled.span`
  text-align: center;
`;

const BannerButton = styled.button`
  width: 224px;
  height: 56px;
  border: 2px solid black;

  font-size: 27px;

  @media (max-width: 768px) {
    font-size: 21px;
  }
`;

export default BottomBanner;
