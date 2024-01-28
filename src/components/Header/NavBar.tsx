import styled from "styled-components";

import Lens from "src/assets/img/lens.svg?react";
import { menuOptions } from "src/components/constants";

const NavBar = () => {
  return (
    <NavBarWrapper>
      {menuOptions.map((option, index) => (
        <NavBarItem href="#" key={index}>
          {option.title}
        </NavBarItem>
      ))}
      <SearchButton>
        <Lens />
      </SearchButton>
    </NavBarWrapper>
  );
};

const NavBarWrapper = styled.div`
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

export default NavBar;
