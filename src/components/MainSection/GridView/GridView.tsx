import { Ruling, UpdateVotesFunction } from "src/types";
import styled from "styled-components";
import GridItem from "./GridItem";

interface GridViewProps {
  rulings: Ruling[];
  updateVotes: UpdateVotesFunction;
}

const GridView: React.FC<GridViewProps> = ({ rulings, updateVotes }) => {
  console.log(updateVotes);
  return (
    <GridViewContainer>
      {rulings.map((ruling, index) => (
        <GridItem ruling={ruling} key={index} updateVotes={updateVotes} />
      ))}
    </GridViewContainer>
  );
};

const GridViewContainer = styled.div`
  grid-template-columns: 1fr 1fr;
  gap: 2%;

  display: grid;
  width: 100%;
  margin-bottom: 50px;

  @media (min-width: 920px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export default GridView;
