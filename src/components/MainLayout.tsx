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
  width: 100%;
  height: 100%;
`;

export const Layout = styled.div`
  width: 96%;
  max-width: 1100px;
  height: 100%;
  margin: auto;

  @media (min-width: 768px) {
    width: 93%;
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
