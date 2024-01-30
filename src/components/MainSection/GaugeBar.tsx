import styled from "styled-components";

import { Votes } from "src/types";
import ThumbsUp from "src/assets/img/thumbsUp.svg?react";
import ThumbsDown from "src/assets/img/thumbsDown.svg?react";

interface GaugeBarProps {
  votes: Votes;
  card?: boolean;
}

const GaugeBar: React.FC<GaugeBarProps> = ({ votes, card }) => {
  const { positive, negative } = votes;
  const totalVotes = positive + negative;
  const percentagePositive = (positive / totalVotes) * 100;
  const percentageNegative = (negative / totalVotes) * 100;

  const iconSize = card
    ? { width: "15px", height: "15px" }
    : { width: "22px", height: "22px" };

  return (
    <GaugeBarContainer $card={card}>
      <Bar $positive $percentage={percentagePositive}>
        <InfoWrapper>
          <ThumbsUp {...iconSize} />
          <BarValue $card>{percentagePositive.toFixed(1)}%</BarValue>
        </InfoWrapper>
      </Bar>
      <Bar $percentage={percentageNegative}>
        <InfoWrapper $right>
          <BarValue $card>{percentageNegative.toFixed(1)}%</BarValue>
          <ThumbsDown {...iconSize} />
        </InfoWrapper>
      </Bar>
    </GaugeBarContainer>
  );
};

interface GaugeBarElementProps {
  $card?: boolean;
}

const GaugeBarContainer = styled.div<GaugeBarElementProps>`
  position: absolute;
  bottom: 0;

  display: flex;
  width: 100%;
  height: 36px;

  @media (min-width: 1080px) {
    height: ${({ $card }) => ($card ? "36px" : "54px")};
  }
`;

interface BarProps {
  $positive?: boolean;
  $percentage: number;
}

const Bar = styled.div<BarProps>`
  box-sizing: border-box;

  display: flex;
  justify-content: ${({ $positive }) =>
    $positive ? "flex-start" : "flex-end"};
  align-items: center;
  gap: 10px;
  width: ${({ $percentage }) => $percentage}%;
  height: 100%;
  padding: 10px;

  background-color: ${({ $positive }) =>
    $positive ? "rgba(60, 187, 180, 0.6)" : "rgba(249, 173, 29, 0.6)"};
  text-align: ${({ $positive }) => ($positive ? "left" : "right")};
`;

interface InfoWrapperProps {
  $right?: boolean;
}

const InfoWrapper = styled.div<InfoWrapperProps>`
  position: absolute;

  position: absolute;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const BarValue = styled.span<GaugeBarElementProps>`
  color: white;
  font-size: 18px;

  @media (min-width: 1080px) {
    font-size: ${({ $card }) => ($card ? "18px" : "27px")};
  }
`;

export default GaugeBar;
