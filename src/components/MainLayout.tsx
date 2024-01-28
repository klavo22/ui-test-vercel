import styled from "styled-components";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <Layout>{children}</Layout>
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;
`;

export const Layout = styled.div`
  max-width: 1100px;
  width: 96%;

  @media (min-width: 768px) {
    width: 95%;
  }

  @media (min-width: 920px) {
    width: 90%;
  }

  @media (min-width: 1080px) {
    width: 80%;
  }

  @media (min-width: 1440px) {
    width: 70%;
  }
`;

export default MainLayout;
