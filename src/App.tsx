import { useState } from "react";
import Hero from "./components/Hero";
import MainLayout from "./components/MainLayout";
import TopBanner from "./components/TopBanner";
import MainSection from "./components/MainSection";

import "./styles/app.css";
import BottomBanner from "./components/BottomBanner";
import Footer from "./components/Footer";

function App() {
  const [showBanner, setShowBanner] = useState<boolean>(true);

  const closeBanner = () => {
    setShowBanner(false);
  };

  return (
    <>
      <Hero />
      <MainLayout>
        {showBanner && <TopBanner closeBanner={closeBanner} />}
        <MainSection />
        <BottomBanner />
        <Footer />
      </MainLayout>
    </>
  );
}

export default App;
