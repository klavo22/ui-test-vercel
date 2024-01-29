import { useState } from "react";
import Hero from "./components/Hero";
import MainLayout from "./components/MainLayout";
import TopBanner from "./components/TopBanner";
import "./styles/app.css";

function App() {
  const [showBanner, setShowBanner] = useState(true);

  const closeBanner = () => {
    setShowBanner(false);
  };

  return (
    <>
      <Hero />
      <MainLayout>
        {showBanner && <TopBanner closeBanner={closeBanner} />}
      </MainLayout>
    </>
  );
}

export default App;
