import styled from "styled-components";

import ListItem from "./ListItem";
import { Ruling, UpdateVotesFunction } from "src/types";

interface ListViewProps {
  rulings: Ruling[];
  updateVotes: UpdateVotesFunction;
}

const ListView: React.FC<ListViewProps> = ({ rulings, updateVotes }) => {
  return (
    <ListWrapper>
      {rulings.map((ruling, index) => (
        <ListItem key={index} ruling={ruling} updateVotes={updateVotes} />
      ))}
    </ListWrapper>
  );
};

const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 100%;
  margin-bottom: 50px;
`;

export default ListView;
