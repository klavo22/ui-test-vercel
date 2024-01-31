import { Ruling, UpdateVotesFunction } from "src/types";
import styled from "styled-components";
import RulingCard from "./RulingCard";

interface GridViewProps {
  rulings: Ruling[];
  updateVotes: UpdateVotesFunction;
}

const GridView: React.FC<GridViewProps> = ({ rulings, updateVotes }) => {
  return (
    <GridViewContainer>
      {rulings.map((ruling, index) => (
        <RulingCard ruling={ruling} key={index} updateVotes={updateVotes} />
      ))}
    </GridViewContainer>
  );
};

const GridViewContainer = styled.div`
  grid-template-columns: 1fr 1fr;
  gap: 15px;

  display: grid;
  width: 100%;

  @media (min-width: 920px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export default GridView;
