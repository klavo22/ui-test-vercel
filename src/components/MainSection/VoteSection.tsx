import { useState } from "react";
import styled from "styled-components";

import ThumbsUp from "src/assets/img/thumbsUp.svg?react";
import ThumbsDown from "src/assets/img/thumbsDown.svg?react";
import { getTimeAgo } from "src/components/utils/dateUtils";
import { Ruling, UpdateVotesFunction, VoteType } from "src/types";

interface VoteSectionProps {
  ruling: Ruling;
  updateVotes: UpdateVotesFunction;
  card?: boolean;
}

type VoteStatus = VoteType | "confirmed";

const VoteSection: React.FC<VoteSectionProps> = ({
  ruling,
  updateVotes,
  card,
}) => {
  const [voteStatus, setVoteStatus] = useState<VoteStatus | null>(null);

  const { name, lastUpdated, category } = ruling;
  const timeFromNow = getTimeAgo(new Date(lastUpdated));

  const voteNowClickhandler = () => {
    if (voteStatus === "confirmed") {
      setVoteStatus(null);
    } else {
      updateVotes(name, voteStatus!);
      setVoteStatus("confirmed");
    }
  };

  const getHairlineMessage = () => {
    if (voteStatus === "confirmed") {
      return "Thank you for your vote!";
    } else {
      return `${timeFromNow} ago in ${category}`;
    }
  };

  return (
    <VoteSectionWrapper>
      <HairlineMessage $card={card}>{getHairlineMessage()}</HairlineMessage>
      <ActionsWrapper>
        {voteStatus !== "confirmed" && (
          <>
            <ThumbButton
              $positive
              onClick={() => setVoteStatus(VoteType.Positive)}
            >
              <ThumbsUp height="16px" width="16px" />
            </ThumbButton>
            <ThumbButton onClick={() => setVoteStatus(VoteType.Negative)}>
              <ThumbsDown height="16px" width="16px" />
            </ThumbButton>
          </>
        )}
        <VoteButton disabled={!voteStatus} onClick={voteNowClickhandler}>
          {voteStatus === "confirmed" ? "Vote Again" : "Vote Now"}
        </VoteButton>
      </ActionsWrapper>
    </VoteSectionWrapper>
  );
};

const VoteSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

interface HairlineMessageProps {
  $card?: boolean;
}

const HairlineMessage = styled.span<HairlineMessageProps>`
  margin-bottom: 12px;

  font-size: ${({ $card }) => ($card ? "12px" : "15px")};
  color: white;
  white-space: nowrap;
`;

const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

interface ThumbButtonProps {
  $positive?: boolean;
}

const ThumbButton = styled.button<ThumbButtonProps>`
  width: 30px;
  height: 30px;
  border: none;

  background-color: ${({ $positive, theme }) =>
    $positive ? theme.colors.verdigris : theme.colors.brightYellow};

  cursor: pointer;
`;

interface VoteButtonProps {
  disabled: boolean;
}

const VoteButton = styled.button<VoteButtonProps>`
  width: 107px;
  height: 38px;
  border: ${({ disabled }) => (disabled ? "0" : "1px solid white")};

  color: ${({ disabled }) => (disabled ? "gray" : "white")};
  background-color: ${({ disabled }) =>
    disabled ? "rgba(48, 48, 48, 0.6)" : "rgba(0, 0, 0, 0.5)"};

  cursor: pointer;
`;

export default VoteSection;
