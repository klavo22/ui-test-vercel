import { Votes } from "src/types";
import styled from "styled-components";

import ThumbsUp from "src/assets/img/thumbsUp.svg?react";
import ThumbsDown from "src/assets/img/thumbsDown.svg?react";

interface ResultIconProps {
  votes: Votes;
  big?: boolean;
}

const ResultIcon: React.FC<ResultIconProps> = ({ votes, big }) => {
  const { positive, negative } = votes;

  const averagePositive = positive - negative >= 0;
  const iconSize = big ? { width: 24, height: 24 } : { width: 16, height: 16 };

  return (
    <ResultIconWrapper $positive={averagePositive} $big={big}>
      {averagePositive ? (
        <ThumbsUp {...iconSize} />
      ) : (
        <ThumbsDown {...iconSize} />
      )}
    </ResultIconWrapper>
  );
};

interface ResultIconWrapperProps {
  $positive?: boolean;
  $big?: boolean;
}

const ResultIconWrapper = styled.div<ResultIconWrapperProps>`
  position: ${({ $big }) => ($big ? "absolute" : "")};
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ $big }) => ($big ? "45px" : "30px")};
  height: ${({ $big }) => ($big ? "45px" : "30px")};

  background-color: ${({ $positive }) =>
    $positive ? "rgba(60, 187, 180, 0.6)" : "rgba(249, 173, 29, 0.6)"};
`;

export default ResultIcon;
