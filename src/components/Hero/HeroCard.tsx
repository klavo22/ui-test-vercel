import styled from "styled-components";

import MainLayout from "../MainLayout";

import Wikipedia from "src/assets/img/wikipedia.svg?react";
import ThumbsUp from "src/assets/img/thumbsUp.svg?react";
import ThumbsDown from "src/assets/img/thumbsDown.svg?react";

const HeroCard: React.FC = () => {
  return (
    <HeroCardWrapper>
      <MainLayout>
        <HeroCardContent>
          <CardText>What's your opinion on</CardText>
          <CardTitle>Pope Francis?</CardTitle>
          <CardText $big>
            He’s talking tough on clergy sexual abuse, or is he just another
            pervert protector? (thumbs down) or a true pedophile punishing
            pontiff? (thumbs up)
          </CardText>
          <MoreInfo href="https://en.wikipedia.org/wiki/Pope_Francis">
            <Wikipedia />
            <CardText>More information</CardText>
          </MoreInfo>
          <CardText $bold>What's your veredict?</CardText>
          <ButtonsContainer>
            <VoteButton $positive>
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
  padding: 20px;

  color: white;
  backdrop-filter: blur(20px) brightness(0.8);
  z-index: 100;

  @media (max-width: 768px) {
    padding: 12px;
  }
`;

interface CardTextProps {
  $big?: boolean;
  $bold?: boolean;
}

const CardText = styled.p<CardTextProps>`
  font-size: ${({ $big }) => ($big ? "14px" : "12px")};
  font-weight: ${({ $bold }) => ($bold ? "600" : "300")};

  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  text-overflow: ellipsis;

  @media (min-width: 768px) {
    font-size: ${({ $big }) => ($big ? "18px" : "14px")};
  }

  @media (min-width: 1080px) {
    font-size: ${({ $big }) => ($big ? "24px" : "18px")};
  }
`;

const CardTitle = styled.h2`
  margin-bottom: 6px;

  font-size: 25px;

  @media (min-width: 382px) {
    margin-bottom: 8px;
    font-size: 30px;
  }

  @media (min-width: 768px) {
    margin-bottom: 12px;
    font-size: 40px;
  }

  @media (min-width: 1080px) {
    margin-bottom: 20px;
    font-size: 54px;
  }
`;

const MoreInfo = styled.a`
  display: flex;
  gap: 10px;
  margin: 20px 0 15px 0;

  text-decoration: none;

  &:visited {
    color: white;
  }
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
  $positive?: boolean;
}

const VoteButton = styled.button<VoteButtonProps>`
  width: 50%;
  border: 0;

  background-color: ${({ $positive, theme }) =>
    $positive ? theme.colors.verdigris : theme.colors.brightYellow};
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
`;

export default HeroCard;
