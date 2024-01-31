import { baseCardImgUrl } from "src/components/constants";
import { Ruling, UpdateVotesFunction } from "src/types";
import styled from "styled-components";
import GaugeBar from "./GaugeBar";
import Voting from "./VoteSection";
import ResultThumb from "./ResultThumb";

interface RulingCardProps {
  ruling: Ruling;
  updateVotes: UpdateVotesFunction;
}

const RulingCard: React.FC<RulingCardProps> = ({ ruling, updateVotes }) => {
  return (
    <RulingCardContainer $imageUrl={ruling.picture}>
      <GradientLayer />
      <CardInfoWrapper>
        <TitleWrapper>
          <ResultThumb votes={ruling.votes} />
          <CardInfoTitle>{ruling.name}</CardInfoTitle>
        </TitleWrapper>
        <CardDescription>{ruling.description}</CardDescription>
      </CardInfoWrapper>
      <VotingWrapper>
        <Voting ruling={ruling} updateVotes={updateVotes} card />
      </VotingWrapper>
      <GaugeBar votes={ruling.votes} card />
    </RulingCardContainer>
  );
};

interface RulingCardContainerProps {
  $imageUrl: string;
}

const RulingCardContainer = styled.div<RulingCardContainerProps>`
  position: relative;
  box-sizing: border-box;
  aspect-ratio: 1;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 36px;

  background-image: url(${({ $imageUrl }) => baseCardImgUrl + $imageUrl});
  background-size: cover;
`;

const GradientLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.0001) 0%,
    rgba(0, 0, 0, 0.6) 100%
  );
`;

const CardInfoWrapper = styled.div`
  position: relative;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;

  color: white;
  z-index: 100;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
`;

const CardInfoTitle = styled.h3`
  display: -webkit-box;
  max-width: 200px;

  font-size: 25px;
  font-weight: 400;

  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (min-width: 1250px) {
    font-size: 30px;
  }
`;

const CardDescription = styled.p`
  display: -webkit-box;
  max-width: 200px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 7px 0 0 40px;

  font-size: 15px;
  font-weight: 300;
`;

const VotingWrapper = styled.div`
  padding: 12px 34px;

  z-index: 100;
`;

export default RulingCard;
