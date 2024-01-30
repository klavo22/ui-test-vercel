import { baseImgUrl } from "src/components/constants";
import { Ruling, UpdateVotesFunction } from "src/types";
import styled from "styled-components";
import GaugeBar from "../GaugeBar";
import Voting from "../Voting";
import ResultIcon from "../ResultIcon";

interface GridItemProps {
  ruling: Ruling;
  updateVotes: UpdateVotesFunction;
}

const GridItem: React.FC<GridItemProps> = ({ ruling, updateVotes }) => {
  return (
    <GridItemContainer $imageUrl={ruling.picture}>
      <GradientLayer />
      <CardInfoWrapper>
        <ResultIcon votes={ruling.votes} />
        <CardInfoTitle>{ruling.name}</CardInfoTitle>
        <CardDescription>{ruling.description}</CardDescription>
      </CardInfoWrapper>
      <VotingWrapper>
        <Voting ruling={ruling} updateVotes={updateVotes} card />
      </VotingWrapper>
      <GaugeBar votes={ruling.votes} card />
    </GridItemContainer>
  );
};

interface GridItemContainerProps {
  $imageUrl: string;
}

const GridItemContainer = styled.div<GridItemContainerProps>`
  position: relative;
  box-sizing: border-box;
  aspect-ratio: 1;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 36px;

  background-image: url(${({ $imageUrl }) =>
    baseImgUrl + "card_img/" + $imageUrl});
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
  padding: 0 36px;

  color: white;
  z-index: 100;
`;

const CardInfoTitle = styled.h3`
  display: -webkit-box;
  max-width: 200px;
  margin-bottom: 7px;

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

  font-size: 15px;
  font-weight: 300;
`;

const VotingWrapper = styled.div`
  padding: 12px 34px;

  z-index: 100;
`;

export default GridItem;
