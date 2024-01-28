import styled from "styled-components";
import { menuOptions } from "src/components/constants";
import MainLayout from "src/components/MainLayout";
import Lens from "src/assets/lens.svg?react";
import HamburgerMenu from "src/assets/hamburger.svg?react";

const Header = () => {
  return (
    <HeaderContainer>
      <MainLayout>
        <HeaderContent>
          <HeaderTitle>Rule of Thumb</HeaderTitle>
          <NavBar>
            {menuOptions.map((option, index) => (
              <NavBarItem href="#" key={index}>
                {option.title}
              </NavBarItem>
            ))}
            <SearchButton>
              <Lens />
            </SearchButton>
          </NavBar>
          <HamburgerMenuButton>
            <HamburgerMenu />
          </HamburgerMenuButton>
        </HeaderContent>
      </MainLayout>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  position: absolute;
  top: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 180px;

  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.698864) 0%,
    rgba(0, 0, 0, 0.0001) 100%
  );
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 43px;
  padding-top: 30px;
`;

const HeaderTitle = styled.h2`
  font-size: 36px;
  font-weight: 400;
  color: white;

  z-index: 100;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 25px;
  margin-top: 10px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavBarItem = styled.a`
  color: white;
  font-size: 18px;
  font-weight: 300;
  height: 21px;
  align-self: center;
  text-decoration: none;
`;

const SearchButton = styled.button`
  width: 36px;
  height: 36px;
  background: transparent;
  border: 0;

  cursor: pointer;
`;

const HamburgerMenuButton = styled.button`
  @media (min-width: 768px) {
    display: none;
  }

  margin-right: 10px;
  background-color: transparent;
  border: 0;
  cursor: pointer;
`;

export default Header;
