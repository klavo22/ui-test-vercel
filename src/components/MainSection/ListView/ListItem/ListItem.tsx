import styled from "styled-components";

import { Ruling, UpdateVotesFunction } from "src/types";
import { baseImgUrl } from "src/components/constants";
import Voting from "../../Voting";
import GaugeBar from "../../GaugeBar";
import ThumbsUp from "src/assets/img/thumbsUp.svg?react";
import ThumbsDown from "src/assets/img/thumbsDown.svg?react";

interface ListItemProps {
  ruling: Ruling;
  updateVotes: UpdateVotesFunction;
}

const ListItem: React.FC<ListItemProps> = ({ ruling, updateVotes }) => {
  const { positive, negative } = ruling.votes;

  const averagePositive = positive - negative >= 0;

  return (
    <ItemWrapper $imageurl={ruling.picture}>
      <ResultIconWrapper $positive={averagePositive}>
        {averagePositive ? (
          <ThumbsUp width="24px" height="24px" />
        ) : (
          <ThumbsDown width="24px" height="24px" />
        )}
      </ResultIconWrapper>
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

interface ResultIconWrapperProps {
  $positive?: boolean;
}

const ResultIconWrapper = styled.div<ResultIconWrapperProps>`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;

  background-color: ${({ $positive }) =>
    $positive ? "rgba(60, 187, 180, 0.6)" : "rgba(249, 173, 29, 0.6)"};
`;

export default ListItem;
