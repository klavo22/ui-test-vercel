import styled from "styled-components";

import MainLayout from "../MainLayout";

import Wikipedia from "src/assets/img/wikipedia.svg?react";
import ThumbsUp from "src/assets/img/thumbsUp.svg?react";
import ThumbsDown from "src/assets/img/thumbsDown.svg?react";

const HeroCard = () => {
  return (
    <HeroCardWrapper>
      <MainLayout>
        <HeroCardContent>
          <CardMessage>What's your opinion on</CardMessage>
          <CardTitle>Pope Francis?</CardTitle>
          <CardMessage big>
            He’s talking tough on clergy sexual abuse, or is he just another
            pervert protector? (thumbs down) or a true pedophile punishing
            pontiff? (thumbs up)
          </CardMessage>
          <MoreInfo>
            <Wikipedia />
            <CardMessage>More information</CardMessage>
          </MoreInfo>
          <CardMessage bold>What's your veredict?</CardMessage>
          <ButtonsContainer>
            <VoteButton positive>
              <ThumbsUp height="50%" />
            </VoteButton>
            <VoteButton>
              <ThumbsDown height="50%" />
            </VoteButton>
          </ButtonsContainer>
        </HeroCardContent>
      </MainLayout>
    </HeroCardWrapper>
  );
};

const HeroCardWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
`;

const HeroCardContent = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  width: 50%;
  max-width: 550px;
  height: 60%;
  max-height: 474px;
  color: white;
  padding: 20px;

  backdrop-filter: blur(20px) brightness(0.8);
  z-index: 100;
`;

interface CardMessageProps {
  big?: boolean;
  bold?: boolean;
}

const CardMessage = styled.p<CardMessageProps>`
  font-size: ${({ big }) => (big ? "14px" : "12px")};
  font-weight: ${({ bold }) => (bold ? "600" : "300")};

  @media (min-width: 768px) {
    font-size: ${({ big }) => (big ? "18px" : "14px")};
  }

  @media (min-width: 1000px) {
    font-size: ${({ big }) => (big ? "24px" : "18px")};
  }
`;

const CardTitle = styled.h2`
  font-size: 28px;
  weight: 400;
  margin-bottom: 6px;

  @media (min-width: 768px) {
    margin-bottom: 12px;
    font-size: 40px;
  }

  @media (min-width: 1000px) {
    margin-bottom: 20px;
    font-size: 54px;
  }
`;

const MoreInfo = styled.div`
  display: flex;
  gap: 10px;
  margin: 20px 0 15px 0;
`;

const ButtonsContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 40px;

  @media (min-width: 768px) {
    height: 50px;
  }

  @media (min-width: 1080px) {
    height: 70px;
  }
`;

interface VoteButtonProps {
  positive?: boolean;
}

const VoteButton = styled.button<VoteButtonProps>`
  width: 50%;
  border: 0;
  background-color: ${({ positive, theme }) =>
    positive ? theme.colors.verdigris : theme.colors.brightYellow};
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
`;

export default HeroCard;
