import styled from "styled-components";

const ClosingBar: React.FC = () => {
  return (
    <ClosingBarContainer>
      <StyledBar>
        <BarText>CLOSING IN</BarText>
      </StyledBar>
      <StyledBar $right>
        <RightArrow />
        <BarText $dark $bold>
          22
        </BarText>
        <BarText $dark>Days</BarText>
      </StyledBar>
    </ClosingBarContainer>
  );
};

const ClosingBarContainer = styled.div`
  position: absolute;
  bottom: 0;

  display: flex;

  width: 100%;
  max-width: 1440px;
  height: 36px;

  @media (min-width: 768px) {
    height: 42px;
  }

  @media (min-width: 1080px) {
    height: 56px;
  }
`;

interface BarProps {
  $right?: boolean;
}

const StyledBar = styled.div<BarProps>`
  position: relative;

  display: flex;
  justify-content: ${({ $right }) => ($right ? "flex-start" : "flex-end")};
  align-items: center;
  width: ${({ $right }) => ($right ? "70%" : "30%")};
  height: 100%;
  padding-right: 10px;

  background: ${({ $right }) => ($right ? "white" : "black")};
  opacity: 0.4;
`;

interface BarTextProps {
  $dark?: boolean;
  $bold?: boolean;
}

const BarText = styled.span<BarTextProps>`
  font-size: 12px;
  font-weight: ${({ $bold }) => ($bold ? "600" : "300")};
  color: ${({ $dark }) => ($dark ? "black" : "white")};

  @media (min-width: 768px) {
    font-size: 14px;
  }

  @media (min-width: 1080px) {
    font-size: 24px;
  }
`;

const RightArrow = styled.div`
  position: relative;
  width: 0;
  height: 0;
  border-top: 7px solid transparent;
  border-bottom: 7px solid transparent;
  margin-right: 10px;

  border-left: 10px solid black;

  z-index: 10;
`;

export default ClosingBar;
