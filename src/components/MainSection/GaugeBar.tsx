import styled from "styled-components";

import { Votes } from "src/types";
import ThumbsUp from "src/assets/img/thumbsUp.svg?react";
import ThumbsDown from "src/assets/img/thumbsDown.svg?react";

interface GaugeBarProps {
  votes: Votes;
}

const GaugeBar: React.FC<GaugeBarProps> = ({ votes }) => {
  const { positive, negative } = votes;
  const totalVotes = positive + negative;
  const percentagePositive = (positive / totalVotes) * 100;
  const percentageNegative = (negative / totalVotes) * 100;

  return (
    <GaugeBarContainer>
      <Bar $positive $percentage={percentagePositive}>
        <InfoWrapper>
          <ThumbsUp width="22px" height="22px" />
          <BarValue>{percentagePositive.toFixed(1)}%</BarValue>
        </InfoWrapper>
      </Bar>
      <Bar $percentage={percentageNegative}>
        <InfoWrapper $right>
          <BarValue>{percentageNegative.toFixed(1)}%</BarValue>
          <ThumbsDown width="22px" height="22px" />
        </InfoWrapper>
      </Bar>
    </GaugeBarContainer>
  );
};

const GaugeBarContainer = styled.div`
  position: absolute;
  bottom: 0;

  display: flex;
  width: 100%;
  height: 36px;

  @media (min-width: 1080px) {
    height: 54px;
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

const BarValue = styled.span`
  color: white;
  font-size: 18px;

  @media (min-width: 1080px) {
    font-size: 27px;
  }
`;

export default GaugeBar;
