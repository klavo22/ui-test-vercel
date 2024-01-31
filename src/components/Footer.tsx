import styled from "styled-components";
import { footerLinks } from "./constants";

import Facebook from "src/assets/img/facebook.svg?react";
import Twitter from "src/assets/img/twitter.svg?react";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        {footerLinks.map((footerLink, index) => (
          <FooterLink key={index}>{footerLink.title}</FooterLink>
        ))}
      </FooterLinks>
      <SocialLinks>
        <FooterSpan>Follow us</FooterSpan>
        <IconsWrapper>
          <Facebook />
          <Twitter />
        </IconsWrapper>
      </SocialLinks>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 73px;
  margin-bottom: 50px;

  border-top: 1px dashed black;

  @media (max-width: 660px) {
    height: 108px;
    padding-top: 17px;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 36px;

  @media (max-width: 660px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`;

const FooterLink = styled.a`
  font-size: 18px;
  font-weight: 300;

  @media (max-width: 660px) {
    font-size: 15px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 18px;

  @media (max-width: 660px) {
    flex-direction: column;
    justify-content: flex-end;
  }
`;

const FooterSpan = styled.span`
  font-size: 15px;
  font-weight: 300;
`;

const IconsWrapper = styled.div`
  display: flex;
  gap: 13px;
`;

export default Footer;
