import styled from "styled-components";

import { Ruling, UpdateVotesFunction } from "src/types";
import { baseImgUrl } from "src/components/constants";
import Voting from "../VoteSection";
import GaugeBar from "../GaugeBar";
import ResultThumb from "../ResultThumb";

interface ListItemProps {
  ruling: Ruling;
  updateVotes: UpdateVotesFunction;
}

const ListItem: React.FC<ListItemProps> = ({ ruling, updateVotes }) => {
  return (
    <ItemWrapper $imageurl={ruling.picture}>
      <ResultThumb votes={ruling.votes} big />
      <ItemData>
        <Name>{ruling.name}</Name>
        <Description>{ruling.description}</Description>
      </ItemData>
      <Voting ruling={ruling} updateVotes={updateVotes} />
      <GaugeBar votes={ruling.votes} />
    </ItemWrapper>
  );
};

interface ItemWrapperProps {
  $imageurl: string;
}

const ItemWrapper = styled.li<ItemWrapperProps>`
  box-sizing: border-box;
  position: relative;

  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 142px;
  padding: 10px 10px 0 0;

  background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0) 0%,
        rgb(136, 136, 136) 20%,
        rgb(102, 102, 102) 50%,
        rgba(51, 51, 51, 0.6) 70%
      )
      35px center / 100% no-repeat,
    url(${({ $imageurl }) => baseImgUrl + $imageurl}) 0px center / contain
      no-repeat;

  @media (min-width: 1080px) {
    height: 170px;
  }
`;

const ItemData = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 25%;
  height: 80%;
  width: 600px;

  color: white;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Name = styled.span`
  height: 40%;
  font-size: 28px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Description = styled.p`
  font-size: 16px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default ListItem;
