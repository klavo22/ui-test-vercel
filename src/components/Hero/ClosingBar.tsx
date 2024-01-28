import styled from "styled-components";

const ClosingBar = () => {
  return (
    <ClosingBarContainer>
      <StyledBar>
        <BarText>MISSING IN</BarText>
      </StyledBar>
      <StyledBar right>
        <Triangle />
        <BarText dark bold>
          22
        </BarText>
        <BarText dark>Days</BarText>
      </StyledBar>
    </ClosingBarContainer>
  );
};

const ClosingBarContainer = styled.div`
  position: absolute;
  bottom: 0;

  display: flex;

  max-width: 1440px;
  width: 100%;
  height: 42px;
`;

interface BarProps {
  right?: boolean;
}

const StyledBar = styled.div<BarProps>`
  position: relative;
  display: flex;
  justify-content: ${({ right }) => (right ? "flex-start" : "flex-end")};
  align-items: center;
  width: ${({ right }) => (right ? "70%" : "30%")};
  height: 100%;
  padding-right: 10px;

  background: ${({ right }) => (right ? "white" : "black")};
  opacity: 0.4;
`;

interface BarTextProps {
  dark?: boolean;
  bold?: boolean;
}

const BarText = styled.span<BarTextProps>`
  font-size: 14px;
  font-weight: ${({ bold }) => (bold ? "600" : "400")};
  color: ${({ dark }) => (dark ? "black" : "white")};
`;

const Triangle = styled.div`
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
