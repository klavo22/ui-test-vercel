import styled from "styled-components";

import MainLayout from "src/components/MainLayout";
import NavBar from "./NavBar";

import HamburgerMenu from "src/assets/img/hamburger.svg?react";

const Header = () => {
  return (
    <HeaderWrapper>
      <MainLayout>
        <HeaderContent>
          <HeaderTitle>Rule of Thumb</HeaderTitle>
          <NavBar />
          <HamburgerMenuButton>
            <HamburgerMenu />
          </HamburgerMenuButton>
        </HeaderContent>
      </MainLayout>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;

  max-width: 1440px;
  width: 100%;
  height: 180px;

  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.698864) 0%,
    rgba(0, 0, 0, 0.0001) 100%
  );

  z-index: 1000;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 43px;
  padding-top: 15px;

  @media (min-width: 1000px) {
    padding-top: 30px;
  }
`;

const HeaderTitle = styled.h2`
  color: white;
  font-size: 36px;
  font-weight: 400;

  z-index: 100;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const HamburgerMenuButton = styled.button`
  margin-right: 10px;
  border: 0;

  background-color: transparent;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

export default Header;
