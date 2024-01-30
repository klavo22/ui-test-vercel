import { useState } from "react";
import styled from "styled-components";

import ListView from "./ListView";
import CustomSelect from "./CustomSelect";
import { ViewMode } from "src/types";
import { useRulings } from "src/hooks/useRulings";
import GridView from "./GridView";
import Carousel from "./Carousel";

const MainSection = () => {
  const [selected, setSelected] = useState<ViewMode>(ViewMode.Grid);
  const { rulings, updateVotes } = useRulings();

  return (
    <>
      <SectionHeader>
        <Title>Previous Rulings</Title>
        <CustomSelect selected={selected} setSelected={setSelected} />
      </SectionHeader>
      <SectionWrapper>
        {selected === ViewMode.Grid ? (
          <GridView rulings={rulings} updateVotes={updateVotes} />
        ) : (
          <ListView rulings={rulings} updateVotes={updateVotes} />
        )}
      </SectionWrapper>
      <Carousel rulings={rulings} updateVotes={updateVotes} />
    </>
  );
};

const SectionHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 25px;
`;

const Title = styled.h2`
  font-size: 30px;
  font-weight: 300;

  @media (min-width: 920px) {
    font-size: 45px;
  }
`;

const SectionWrapper = styled.div`
  @media (max-width: 550px) {
    display: none;
  }
`;

export default MainSection;
