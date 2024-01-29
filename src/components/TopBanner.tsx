import styled from "styled-components";

import CloseIcon from "src/assets/img/closeIcon.svg?react";

interface TopBannerProps {
  closeBanner: () => void;
}

const TopBanner: React.FC<TopBannerProps> = ({ closeBanner }) => {
  return (
    <BannerWrapper>
      <BannerHead>
        <BannerText $nowrap>Speak out. Be heard</BannerText>
        <BannerText $bold $nowrap>
          Be counted
        </BannerText>
      </BannerHead>
      <BannerText>
        Rule of Thumb is a crowd sourced court of public opinion where anyone
        and everyone can speak out and speak freely. It’s easy: You share your
        opinion, we analyze and put the data in a public report.
      </BannerText>
      <CloseButton onClick={closeBanner}>
        <CloseIcon />
      </CloseButton>
    </BannerWrapper>
  );
};

const BannerWrapper = styled.div`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;
  padding: 10px;

  background-color: ${({ theme }) => theme.colors.brightGray};

  @media (min-width: 768px) {
    padding: 18px;
  }
`;

const BannerHead = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.brightGray};
`;

interface BannerTextProps {
  $bold?: boolean;
  $nowrap?: boolean;
}

const BannerText = styled.span<BannerTextProps>`
  font-size: ${({ $bold }) => ($bold ? "20px" : "14px")};
  font-weight: ${({ $bold }) => ($bold ? "700" : "300")};

  ${({ $nowrap }) => ($nowrap ? "white-space: nowrap;" : "")}

  @media (min-width: 768px) {
    font-size: ${({ $bold }) => ($bold ? "24px" : "18px")};
  }

  @media (min-width: 1080px) {
    font-size: ${({ $bold }) => ($bold ? "28px" : "22px")};
  }
`;

const CloseButton = styled.button`
  width: 20px;
  height: 20px;

  border: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

export default TopBanner;
