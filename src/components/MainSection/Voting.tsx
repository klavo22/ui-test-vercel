import { useState } from "react";
import styled from "styled-components";

import ThumbsUp from "src/assets/img/thumbsUp.svg?react";
import ThumbsDown from "src/assets/img/thumbsDown.svg?react";
import { getTimeAgo } from "src/components/utils/dateUtils";
import { Ruling, UpdateVotesFunction, VoteType } from "src/types";

interface VotingProps {
  ruling: Ruling;
  updateVotes: UpdateVotesFunction;
}

type VoteStatus = VoteType | "confirmed";

const Voting: React.FC<VotingProps> = ({ ruling, updateVotes }) => {
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
    <VotingWrapper>
      <LastUpdateInfo>{getHairlineMessage()}</LastUpdateInfo>
      <ActionsWrapper>
        {voteStatus !== "confirmed" && (
          <>
            <VoteButton
              $positive
              onClick={() => setVoteStatus(VoteType.Positive)}
            >
              <ThumbsUp height="16px" width="16px" />
            </VoteButton>
            <VoteButton onClick={() => setVoteStatus(VoteType.Negative)}>
              <ThumbsDown height="16px" width="16px" />
            </VoteButton>
          </>
        )}
        <VoteNowButton disabled={!voteStatus} onClick={voteNowClickhandler}>
          {voteStatus === "confirmed" ? "Vote Again" : "Vote Now"}
        </VoteNowButton>
      </ActionsWrapper>
    </VotingWrapper>
  );
};

const VotingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: 80%;
  margin-left: 30px;
`;

const LastUpdateInfo = styled.span`
  height: 35%;

  font-size: 15px;
  color: white;
  white-space: nowrap;
`;

const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

interface VoteButtonProps {
  $positive?: boolean;
}

const VoteButton = styled.button<VoteButtonProps>`
  width: 30px;
  height: 30px;
  border: none;

  background-color: ${({ $positive, theme }) =>
    $positive ? theme.colors.verdigris : theme.colors.brightYellow};

  cursor: pointer;
`;

interface VoteNowButtonProps {
  disabled: boolean;
}

const VoteNowButton = styled.button<VoteNowButtonProps>`
  width: 107px;
  height: 38px;
  border: 1px solid white;

  color: white;
  background-color: black;
  opacity: ${({ disabled }) => (disabled ? "0.6" : "1")};

  cursor: pointer;
`;

export default Voting;
